$("#btn").click(function () {
    $("#result").load("data.html", function () {
        alert("Content Has Been Successfully Loaded!");
    });
});
