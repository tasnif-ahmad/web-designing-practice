$(document).ready(function () {
    $("p").css("color", "red");          // element selector
    $(".msg").hide();                    // class selector
    $("#test").css("font-size", "20px"); // ID selector
    $("input[name='email']").val("Hi");  // attribute selector
});