$(document).ready(function () {

    // GET your fake API
    $("#getBtn").click(function () {
        $.get("tasnif.json", function (data) {
            $("#getOutput").html(
                "Name: " + data.name + "<br>" +
                "Email: " + data.email + "<br>" +
                "Course: " + data.course
            );
        }).fail(function () {
            $("#getOutput").html("❌ Could not load your fake API!");
        });
    });

    // POST example (just shows success, cannot save locally)
    $("#postBtn").click(function () {
        $.post("https://jsonplaceholder.typicode.com/posts",
            { name: "Tasnif", course: "Web Dev" },
            function (response) {
                $("#postOutput").html("✔ POST Success! New ID: " + response.id);
            }
        );
    });

});
