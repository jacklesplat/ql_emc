var webPage = require('webpage');
var page = webPage.create();
var system = require('system');

page.open('http://www.quickenloans.com/', function(status) {
  console.log('Status: ' + status);
  page.render('phantomtest.png');

str = JSON.stringify(performance.timing);
str = JSON.stringify(performance.timing, null, 4); // (Optional) beautiful indented output.
console.log(str);

	phantom.exit();
});
