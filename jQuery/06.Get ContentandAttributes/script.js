$(function () {

    // Get text()
    $("#btn1").click(function () {
        let txt = $("#p1").text();
        $("#output").text("Text: " + txt);
    });

    // Get html()
    $("#btn2").click(function () {
        let html = $("#p1").html();
        $("#output").text("HTML: " + html);
    });

    // Get val()
    $("#btn3").click(function () {
        let value = $("#name").val();
        $("#output").text("Input Value: " + value);
    });

    // Get attr()
    $("#btn4").click(function () {
        let link = $("#link").attr("href");
        $("#output").text("Link HREF: " + link);
    });

});
