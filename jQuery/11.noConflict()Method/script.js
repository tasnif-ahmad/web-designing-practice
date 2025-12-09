// Release the $ symbol from jQuery
var $ = jQuery.noConflict();

// Now we MUST use jq instead of $
jQuery("#changeBtn").click(function () {
    jQuery("#title").text("Changed using noConflict!");
});
