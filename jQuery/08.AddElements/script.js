$(function () {

    $("#appendBtn").click(() => {
        $("#box").append("<p>Appended</p>");
    });

    $("#prependBtn").click(() => {
        $("#box").prepend("<p>Prepended</p>");
    });

    $("#beforeBtn").click(() => {
        $("#box").before("<p>Before</p>");
    });

    $("#afterBtn").click(() => {
        $("#box").after("<p>After</p>");
    });

});
