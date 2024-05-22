$(document).ready(function () {
    $(".drop-open button").click(function () {
        $(".nav-links").css({ "visibility": "visible", "opacity": "1", "height": "auto", "padding":"30px 0 30px 15px"});
        $(".drop-open button").css({ "visibility": "hidden", "opacity" :"0"})
        $(".drop-close button").css({ "visibility": "visible", "opacity": "1" })
    });
    $(".drop-close button").click(function () {
        $(".nav-links").css({ "visibility": "hidden", "opacity": "0", "height": "0", "padding": "0" });
        $(".drop-open button").css({ "visibility": "visible", "opacity": "1" })
        $(".drop-close button").css({ "visibility": "hidden", "opacity": "0" })
    });
});