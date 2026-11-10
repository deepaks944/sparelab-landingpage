import { useEffect, useRef, useState } from "react";
import spareParts from "../data/spareParts.js";

function createSpareParts(THREE, scene) {
  const geometries = new Set();
  const materials = new Set();
  const models = [];
  const geometry = (value) => {
    geometries.add(value);
    return value;
  };
  const material = (value) => {
    materials.add(value);
    return value;
  };
  const mesh = (shape, finish, parent, x = 0, y = 0, z = 0) => {
    const object = new THREE.Mesh(shape, finish);
    object.position.set(x, y, z);
    object.castShadow = true;
    object.receiveShadow = true;
    parent.add(object);
    return object;
  };
  const makeGroup = () => {
    const group = new THREE.Group();
    scene.add(group);
    models.push(group);
    return group;
  };

  const metal = material(
    new THREE.MeshStandardMaterial({
      color: 0x9ca3af,
      metalness: 0.78,
      roughness: 0.28,
    }),
  );
  const darkMetal = material(
    new THREE.MeshStandardMaterial({
      color: 0x26332f,
      metalness: 0.56,
      roughness: 0.34,
    }),
  );
  const rubber = material(
    new THREE.MeshStandardMaterial({
      color: 0x17211e,
      metalness: 0.2,
      roughness: 0.52,
    }),
  );
  const paper = material(
    new THREE.MeshStandardMaterial({
      color: 0xc99d54,
      metalness: 0.08,
      roughness: 0.8,
    }),
  );
  const padMaterial = material(
    new THREE.MeshStandardMaterial({
      color: 0x414744,
      metalness: 0.12,
      roughness: 0.76,
    }),
  );
  const standMaterial = material(
    new THREE.MeshStandardMaterial({
      color: 0x9bb7aa,
      metalness: 0.58,
      roughness: 0.4,
    }),
  );

  const makeStand = (group) => {
    mesh(
      geometry(new THREE.CylinderGeometry(1.48, 1.58, 0.14, 64)),
      standMaterial,
      group,
      0,
      0.08,
      0,
    );
    mesh(
      geometry(new THREE.TorusGeometry(1.42, 0.018, 8, 64)),
      metal,
      group,
      0,
      0.16,
      0,
    ).rotation.x = Math.PI / 2;
  };

  const oilFilter = makeGroup();
  makeStand(oilFilter);
  mesh(
    geometry(new THREE.CylinderGeometry(0.65, 0.65, 1.62, 48)),
    rubber,
    oilFilter,
    0,
    1.01,
    0,
  );
  mesh(
    geometry(new THREE.CylinderGeometry(0.69, 0.69, 0.16, 48)),
    darkMetal,
    oilFilter,
    0,
    1.87,
    0,
  );
  mesh(
    geometry(new THREE.CylinderGeometry(0.68, 0.68, 0.1, 48)),
    metal,
    oilFilter,
    0,
    0.16,
    0,
  );
  mesh(
    geometry(new THREE.CylinderGeometry(0.24, 0.24, 0.12, 32)),
    metal,
    oilFilter,
    0,
    2.01,
    0,
  );
  mesh(
    geometry(new THREE.CylinderGeometry(0.105, 0.105, 0.126, 24)),
    rubber,
    oilFilter,
    0,
    2.01,
    0,
  );
  for (let index = 0; index < 5; index += 1) {
    mesh(
      geometry(new THREE.TorusGeometry(0.653, 0.012, 6, 48)),
      darkMetal,
      oilFilter,
      0,
      0.43 + index * 0.25,
      0,
    ).rotation.x = Math.PI / 2;
  }

  const airFilter = makeGroup();
  makeStand(airFilter);
  mesh(
    geometry(new THREE.BoxGeometry(2.06, 0.42, 1.42)),
    darkMetal,
    airFilter,
    0,
    0.76,
    0,
  );
  mesh(
    geometry(new THREE.BoxGeometry(1.82, 0.08, 1.17)),
    paper,
    airFilter,
    0,
    1.01,
    0,
  );
  for (let index = 0; index < 20; index += 1) {
    mesh(
      geometry(new THREE.BoxGeometry(0.045, 0.16, 1.12)),
      index % 2 === 0 ? paper : metal,
      airFilter,
      -0.86 + index * 0.09,
      1.1,
      0,
    );
  }
  for (const z of [-0.62, 0.62]) {
    mesh(
      geometry(new THREE.BoxGeometry(2.1, 0.1, 0.09)),
      rubber,
      airFilter,
      0,
      1.05,
      z,
    );
  }
  for (const x of [-0.98, 0.98]) {
    mesh(
      geometry(new THREE.BoxGeometry(0.09, 0.1, 1.18)),
      rubber,
      airFilter,
      x,
      1.05,
      0,
    );
  }

  const brakePads = makeGroup();
  makeStand(brakePads);
  const backingShape = new THREE.Shape();
  backingShape.moveTo(-0.72, -0.48);
  backingShape.lineTo(0.72, -0.48);
  backingShape.lineTo(0.68, 0.24);
  backingShape.lineTo(0.42, 0.48);
  backingShape.lineTo(-0.42, 0.48);
  backingShape.lineTo(-0.68, 0.24);
  backingShape.closePath();
  const backingGeometry = geometry(
    new THREE.ExtrudeGeometry(backingShape, {
      depth: 0.12,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 0.025,
      bevelThickness: 0.025,
    }),
  );

  const frictionShape = new THREE.Shape();
  frictionShape.moveTo(-0.58, -0.37);
  frictionShape.lineTo(0.58, -0.37);
  frictionShape.lineTo(0.55, 0.19);
  frictionShape.lineTo(0.35, 0.35);
  frictionShape.lineTo(-0.35, 0.35);
  frictionShape.lineTo(-0.55, 0.19);
  frictionShape.closePath();
  const frictionGeometry = geometry(
    new THREE.ExtrudeGeometry(frictionShape, {
      depth: 0.055,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 0.025,
      bevelThickness: 0.02,
    }),
  );

  [-0.76, 0.76].forEach((x, index) => {
    const pad = new THREE.Group();
    pad.position.set(x, 0.88, index === 0 ? 0.35 : -0.35);
    pad.rotation.y = index === 0 ? -0.13 : 0.13;
    brakePads.add(pad);
    mesh(backingGeometry, metal, pad, 0, 0, 0);
    mesh(frictionGeometry, padMaterial, pad, 0, 0, 0.145);
    mesh(
      geometry(new THREE.BoxGeometry(0.2, 0.11, 0.12)),
      metal,
      pad,
      0,
      0.54,
      0.06,
    );
  });

  const sparkPlug = makeGroup();
  makeStand(sparkPlug);
  mesh(
    geometry(new THREE.CylinderGeometry(0.24, 0.27, 0.8, 32)),
    material(
      new THREE.MeshStandardMaterial({
        color: 0xe9ece8,
        metalness: 0.12,
        roughness: 0.3,
      }),
    ),
    sparkPlug,
    0,
    1.32,
    0,
  );
  mesh(
    geometry(new THREE.CylinderGeometry(0.31, 0.31, 0.17, 6)),
    metal,
    sparkPlug,
    0,
    0.75,
    0,
  );
  mesh(
    geometry(new THREE.CylinderGeometry(0.23, 0.25, 0.44, 32)),
    metal,
    sparkPlug,
    0,
    0.42,
    0,
  );
  mesh(
    geometry(new THREE.CylinderGeometry(0.18, 0.18, 0.08, 32)),
    darkMetal,
    sparkPlug,
    0,
    0.16,
    0,
  );
  mesh(
    geometry(new THREE.CylinderGeometry(0.055, 0.055, 0.16, 16)),
    metal,
    sparkPlug,
    0,
    0.04,
    0,
  );
  for (let index = 0; index < 6; index += 1) {
    mesh(
      geometry(new THREE.TorusGeometry(0.237, 0.012, 6, 32)),
      darkMetal,
      sparkPlug,
      0,
      0.24 + index * 0.052,
      0,
    ).rotation.x = Math.PI / 2;
  }
  mesh(
    geometry(new THREE.BoxGeometry(0.22, 0.07, 0.045)),
    metal,
    sparkPlug,
    0,
    0.02,
    0.045,
  );

  const wheelBearing = makeGroup();
  makeStand(wheelBearing);
  const bearing = new THREE.Group();
  bearing.position.set(0, 1.1, 0);
  bearing.rotation.x = Math.PI / 2;
  wheelBearing.add(bearing);
  mesh(
    geometry(new THREE.TorusGeometry(0.83, 0.18, 20, 64)),
    darkMetal,
    bearing,
  );
  mesh(
    geometry(new THREE.TorusGeometry(0.56, 0.13, 16, 64)),
    metal,
    bearing,
  );
  mesh(
    geometry(new THREE.TorusGeometry(0.31, 0.09, 16, 64)),
    darkMetal,
    bearing,
  );
  mesh(
    geometry(new THREE.CylinderGeometry(0.21, 0.21, 0.22, 48)),
    metal,
    bearing,
  );
  for (let index = 0; index < 10; index += 1) {
    const angle = (index / 10) * Math.PI * 2;
    mesh(
      geometry(new THREE.SphereGeometry(0.105, 16, 12)),
      metal,
      bearing,
      Math.cos(angle) * 0.69,
      Math.sin(angle) * 0.69,
      0,
    );
  }
  for (let index = 0; index < 6; index += 1) {
    const angle = (index / 6) * Math.PI * 2;
    mesh(
      geometry(new THREE.CylinderGeometry(0.055, 0.055, 0.08, 16)),
      rubber,
      bearing,
      Math.cos(angle) * 0.43,
      Math.sin(angle) * 0.43,
      0.13,
    );
  }

  const alternator = makeGroup();
  makeStand(alternator);
  const alternatorBody = mesh(
    geometry(new THREE.CylinderGeometry(0.7, 0.7, 1.16, 48)),
    darkMetal,
    alternator,
    0,
    1.04,
    0,
  );
  alternatorBody.rotation.z = Math.PI / 2;
  for (const x of [-0.38, 0.38]) {
    const endPlate = mesh(
      geometry(new THREE.CylinderGeometry(0.73, 0.73, 0.1, 48)),
      metal,
      alternator,
      x,
      1.04,
      0,
    );
    endPlate.rotation.z = Math.PI / 2;
  }
  for (let index = 0; index < 16; index += 1) {
    const angle = (index / 16) * Math.PI * 2;
    const vent = mesh(
      geometry(new THREE.BoxGeometry(0.64, 0.065, 0.045)),
      metal,
      alternator,
      0,
      1.04 + Math.cos(angle) * 0.53,
      Math.sin(angle) * 0.53,
    );
    vent.rotation.x = angle;
  }
  const pulley = mesh(
    geometry(new THREE.CylinderGeometry(0.37, 0.37, 0.22, 48)),
    metal,
    alternator,
    0.72,
    1.04,
    0,
  );
  pulley.rotation.z = Math.PI / 2;
  const pulleyHub = mesh(
    geometry(new THREE.CylinderGeometry(0.17, 0.17, 0.25, 32)),
    darkMetal,
    alternator,
    0.86,
    1.04,
    0,
  );
  pulleyHub.rotation.z = Math.PI / 2;
  mesh(
    geometry(new THREE.BoxGeometry(0.34, 0.18, 0.22)),
    darkMetal,
    alternator,
    -0.56,
    1.66,
    0,
  );

  return {
    models,
    dispose() {
      geometries.forEach((value) => value.dispose());
      materials.forEach((value) => value.dispose());
    },
  };
}

function SparePartsViewer({ progress }) {
  const viewerRef = useRef(null);
  const progressRef = useRef(progress);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    const container = viewerRef.current;
    if (!container) return undefined;

    const lifecycle = { active: true };
    const resources = {
      renderer: null,
      controls: null,
      parts: null,
      resizeObserver: null,
    };
    const viewerState = {
      started: false,
      pointerX: null,
      rotation: 0,
      targetRotation: 0,
    };

    const startViewer = async () => {
      if (viewerState.started) return;
      viewerState.started = true;

      try {
        const THREE = await import("three");
        if (!lifecycle.active) return;

        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
        });
        resources.renderer = renderer;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.15;
        renderer.domElement.setAttribute(
          "aria-label",
          "Three-dimensional oil filter, air filter, brake pads, spark plug, wheel bearing, and alternator. Scroll the page to zoom in on each part; drag horizontally to rotate them.",
        );
        renderer.domElement.style.touchAction = "pan-y";
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          38,
          container.clientWidth / container.clientHeight,
          0.1,
          100,
        );
        camera.position.set(-1.3, 3.2, 7.6);

        scene.add(new THREE.HemisphereLight(0xf4fff9, 0x51635b, 2.5));
        const keyLight = new THREE.DirectionalLight(0xffffff, 3.4);
        keyLight.position.set(-3, 7, 6);
        scene.add(keyLight);
        const fillLight = new THREE.DirectionalLight(0x9de8c8, 1.8);
        fillLight.position.set(5, 3, -4);
        scene.add(fillLight);
        resources.parts = createSpareParts(THREE, scene);

        const onResize = () => {
          if (!lifecycle.active || !container.clientWidth) return;
          camera.aspect = container.clientWidth / container.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(container.clientWidth, container.clientHeight);
        };
        resources.resizeObserver = new ResizeObserver(onResize);
        resources.resizeObserver.observe(container);

        renderer.domElement.addEventListener("pointerdown", (event) => {
          viewerState.pointerX = event.clientX;
          renderer.domElement.setPointerCapture(event.pointerId);
        });
        renderer.domElement.addEventListener("pointermove", (event) => {
          if (viewerState.pointerX === null) return;
          viewerState.targetRotation +=
            (event.clientX - viewerState.pointerX) * 0.008;
          viewerState.pointerX = event.clientX;
        });
        const releasePointer = () => {
          viewerState.pointerX = null;
        };
        renderer.domElement.addEventListener("pointerup", releasePointer);
        renderer.domElement.addEventListener("pointercancel", releasePointer);
        renderer.domElement.tabIndex = 0;

        renderer.setAnimationLoop(() => {
          const stage = progressRef.current * (spareParts.length - 1);
          const activeModelIndex = Math.min(
            spareParts.length - 1,
            Math.round(stage),
          );
          const rawMix = stage - Math.floor(stage);
          const distance = THREE.MathUtils.lerp(
            6.1,
            4.65,
            Math.sin(rawMix * Math.PI),
          );
          resources.parts.models.forEach((model, index) => {
            model.visible = index === activeModelIndex;
          });
          const target = new THREE.Vector3(0, 1.03, 0);
          const cameraPosition = new THREE.Vector3(
            -distance * 0.19,
            1.03 + distance * 0.43,
            distance,
          );
          camera.position.lerp(cameraPosition, 0.075);
          camera.lookAt(target);

          viewerState.rotation +=
            (viewerState.targetRotation - viewerState.rotation) * 0.12;
          resources.parts.models.forEach((model) => {
            model.rotation.y = viewerState.rotation;
          });
          renderer.render(scene, camera);
        });
      } catch (error) {
        console.error("Unable to initialize the spare-parts 3D viewer.", error);
        if (lifecycle.active) {
          setLoadError(
            "The 3D parts viewer could not start in this browser.",
          );
        }
      }
    };

    const intersectionObserver =
      typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver(
            (entries) => {
              if (entries.some((entry) => entry.isIntersecting)) {
                intersectionObserver.disconnect();
                void startViewer();
              }
            },
            { rootMargin: "200px" },
          );
    if (intersectionObserver) {
      intersectionObserver.observe(container);
    } else {
      void startViewer();
    }

    return () => {
      lifecycle.active = false;
      intersectionObserver?.disconnect();
      resources.resizeObserver?.disconnect();
      resources.renderer?.setAnimationLoop(null);
      resources.renderer?.domElement.remove();
      resources.renderer?.dispose();
      resources.parts?.dispose();
    };
  }, []);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  return (
    <div
      ref={viewerRef}
      className="absolute inset-0"
      aria-label="Interactive Three.js automotive parts viewer"
    >
      {loadError && (
        <div
          className="absolute inset-4 z-20 flex items-center justify-center rounded-xl bg-white/70 p-5 text-center text-sm text-slate-600 dark:bg-slate-950/70 dark:text-slate-300"
          role="status"
        >
          {loadError}
        </div>
      )}
      <span className="pointer-events-none absolute bottom-4 right-5 z-10 text-[9px] font-medium tracking-wide text-slate-500 dark:text-slate-300 sm:text-[10px]">
        SCROLL TO ZOOM <span aria-hidden="true">·</span> DRAG TO ROTATE
      </span>
    </div>
  );
}

export default SparePartsViewer;
