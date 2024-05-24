

$(document).ready(function () {
    $(".drop-open button").click(function () {
        $(".nav-links").addClass("active");
        $(".drop-open button").addClass("close")
        $(".drop-close button").addClass("open")
    });
    $(".drop-close button").click(function () {
        $(".nav-links").removeClass("active")
        $(".drop-open button").removeClass("close")
        $(".drop-close button").removeClass("open")
    });
});
