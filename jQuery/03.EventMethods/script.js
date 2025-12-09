// CLICK EVENT
$("#clickBtn").click(function () {
    $("#output").html("You clicked the button!");
});

// HOVER EVENT
$("#hoverBox").hover(
    function () { $("#output").html("Mouse entered the box!"); },
    function () { $("#output").html("Mouse left the box!"); }
);

// KEYUP EVENT
$("#textBox").keyup(function () {
    $("#output").html("You typed: " + $(this).val());
});
