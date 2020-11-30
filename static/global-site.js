window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-475331606');

// Event snippet for Outbound click conversion page
// In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button.
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  console.log('--> gtag');
  gtag('event', 'conversion', {
      'send_to': 'AW-475331606/VoxsCNKY8ukBEJb40-IB',
      'event_callback': callback
  });
  return false;
}