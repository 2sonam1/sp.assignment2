document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 40, 3000);
    counter("count2", 0, 60, 2500);
    counter("count3", 0, 50, 3000);
});

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
    $(".dropdwn > li").hover(function(){
        $(this).children("a").toggleClass("active").siblings("ul").toggleClass("open")
    }) 
});
