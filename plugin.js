/*global alert, $*/

/*
    exercise name: JQuery Practice exercise
*/


/*
$("button").click(function () {
    "use strict";
    $('.test').fadeOut(2000);
    $(this).css("color", "red");
});
*/
$(document).ready(function () {
    "use strict";
    $('.left').hover(function () {
        $(this).width("60%");
        $(".right").width("40%");
        if ($(this).width() === "60%") {
            $(this).css({
                maxWidth : "60%",
                width : "60%"
            });
        }
    }, function () {
        $(this).width('50%');
        $('.right').width('50%');
    });
    $('.right').hover(function () {
        $(this).width("60%");
        $(".left").width("40%");
        if ($(this).width() === "60%") {
            $(this).css({
                maxWidth : "60%",
                width : "60%"
            });
        }
    }, function () {
        $(this).width('50%');
        $('.left').width('50%');
    });
});







