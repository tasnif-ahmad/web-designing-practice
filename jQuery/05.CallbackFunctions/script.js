$(function () {

    $("#hideBtn").click(function () {

        $("#box").hide(1000, function () {   // <-- callback runs after hide is finished
            $("#msg").text("The box is now hidden (callback executed).");
        });

    });

});
