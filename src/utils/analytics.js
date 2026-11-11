function trackEvent(eventName, details = {}) {
  const event = {
    event: eventName,
    ...details,
    timestamp: new Date().toISOString(),
  };

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(event);
  }

  window.dispatchEvent(new CustomEvent("sparelab:analytics", { detail: event }));
}

export default trackEvent;
