$(function () {

    $("#textBtn").click(() => $("#box").text("New text set!"));

    $("#htmlBtn").click(() => $("#box").html("<b>Bold HTML added!</b>"));

    $("#valBtn").click(() => $("#nameInput").val("Tasnif"));

    $("#attrBtn").click(() => $("#demo").attr("title", "New tooltip"));
});
