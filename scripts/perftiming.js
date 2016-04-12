

function getPerfStats() {
  var timing = window.performance.timing;
  return {
    dns: timing.domainLookupEnd - timing.domainLookupStart,
    connect: timing.connectEnd - timing.connectStart,
    ttfb: timing.responseStart - timing.connectEnd,
    basePage: timing.responseEnd - timing.responseStart,
    frontEnd: timing.loadEventStart - timing.responseEnd
  };
}

