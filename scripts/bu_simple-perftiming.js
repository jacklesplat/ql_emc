var page = require('webpage').create(),
	system = require('system'), t, dns, ttfb, domComp,start;
start = new Date().getTime();
dns = start;
ttfb = start;
domComp = start;
page.clearMemoryCache();
page.open('http://www.quickenloans.com/', function (status) 
	// { 
	// 	if (status !== 'success') {
	// 		console.log('Failed');
	// 	} else 
	{	if(status === "success")
		
{
		// console.log(start) ;
		// console.log(performance.timing.domComplete);
		// console.log('check:', performance.timing.domComplete - performance.timing.fetchStart);

		// start = Date.now(); 
		// console.log(Date.now());
		// dns = dns - performance.timing.domainLookupEnd;
		// ttfb = ttfb - performance.timing.connectEnd;
		// domComp = domComp - performance.timing.domComplete;
		// console.log('Fully Loaded:', start);
		// console.log('DNS Timing:', dns);
		// console.log('TTFB:', ttfb);
		// console.log('Visual Ready:', domComp);
		// page.render('QLHome.png');
		
		str = JSON.stringify(performance.timing);
str = JSON.stringify(performance.timing, null, 4); // (Optional) beautiful indented output.
console.log(str); // Logs output to dev tools console.

	}
	phantom.exit();
});




//   var now = new Date().getTime();
//   var page_load_time = now - performance.timing.navigationStart;
//   var page = require('webpage').create();

//   page.open('http://beta.quickenloans.com', function (status) {
//   console.log("User-perceived page loading time: " + page_load_time);
//   phantom.exit();
// }};


//   var page = require('webpage').create();

// page.open('http://beta.quickenloans.com', function (status) {
//      console.log('Test data:',performance.timing.domComplete - performance.timing.navigationStart); 
//      phantom.exit();
// });

// **********************************************************************
// Enter website in CLI

// "use strict";
// var page = require('webpage').create(),
//     system = require('system'),
//     t, address;

// if (system.args.length === 1) {
//     console.log('Usage: simple-perftiming.js <some URL>');
//     phantom.exit(1);
// } else {
//     t = Date.now();
//     address = system.args[1];
//     page.open(address, function (status) {
//         if (status !== 'success') {
//             console.log('FAIL to load the address');
//         } else {
//             t = Date.now() - t;
//             console.log('Page title is ' + page.evaluate(function () {
//                 return document.title;
//             }));
//             console.log('Loading time ' + t + ' msec');
//         }
//         phantom.exit();
//     });
// }
// ***********************************************************************

    // dns: timing.domainLookupEnd - timing.domainLookupStart,
    // connect: timing.connectEnd - timing.connectStart,
    // ttfb: timing.responseStart - timing.connectEnd,
    // basePage: timing.responseEnd - timing.responseStart,
    // frontEnd: timing.loadEventStart - timing.responseEnd

//  navigationStart
// unloadEventStart
// unloadEventEnd
// redirectStart
// redirectEnd
// fetchStart
// domainLookupStart
// domainLookupEnd
// connectStart
// connectEnd
// secureConnectionStart
// requestStart
// responseStart
// responseEnd
// domLoading
// domInteractive
// domContentLoadedEventStart
// domContentLoadedEventEnd
// domComplete
// loadEventStart
// loadEventEnd