$(function () {
    $("#btn").click(function () {
        $.ajax({
            url: "tasnif.json",   // your fake API
            type: "GET",
            success: function (data) {
                $("#output").html("Name: " + data.name);
            },
            error: function () {
                $("#output").html("❌ AJAX failed!");
            }
        });
    });
});
