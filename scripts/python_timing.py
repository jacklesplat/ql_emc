

# Browser page load timing stats collection
#   - collects all Navigation Timing metrics
#   - collects simulated time-to-load in browsers without nav timing (Safari < 8)

setNavigationStart = ->
  unless window.performance.timing
    try sessionStorage.setItem 'navigationStart', Date.now()

sendTimingResults = ->
  # Defer report until next tick so we catch the tail end of the load event timing.
  setTimeout ->
    timing =  window.performance?.timing or {}

    # Merge in simulated cross-browser load event
    timing['crossBrowserLoadEvent'] = Date.now()

    if chromeFirstPaintTime = window.chrome?.loadTimes?()?.firstPaintTime
      # firstPaintTime is in seconds; convert to milliseconds to match
      # performance.timing.
      timing['chromeFirstPaintTime'] = Math.round chromeFirstPaintTime * 1000

    # Merge in simulated navigation start, if no navigation timing
    if not window.performance.timing
      navStart = try sessionStorage.getItem 'navigationStart'
      timing['simulatedNavigationStart'] = parseInt(navStart, 10) if navStart

    GitHub.reportStats timing
  , 0

$(window).on 'pagehide', setNavigationStart
$(window).on 'load', sendTimingResults


