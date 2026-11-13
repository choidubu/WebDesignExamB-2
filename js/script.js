$(function () {
    //메뉴
    $("nav>ul>li").mouseenter(function () {
        $(".sub, .menubg").stop().slideDown()
    })

    $("nav>ul>li").mouseleave(function () {
        $(".sub, .menubg").stop().slideUp()
    })

    //메뉴 키보드 이벤트
    $("nav>ul>li").focusin(function () {
        $(this).addClass("on")
        $(".sub, .menubg").slideDown()
    })

    $("nav li li:last-child").focusout(function () {
        $("nav>ul>li").removeClass("on")
    })

    $("nav li:last-child li:last-child").focusout(function () {
        $(".sub, .menubg").slideUp()
    })

    //슬라이드
    function slide() {
        $(".slide ul").animate({ top: "-300px" }, 1000, function () {
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({ top: 0 })
        })
    }

    setInterval(slide, 2000)

    //팝업
    $(".pp").click(function () {
        $(".popup").show()
        return false
    })

    $(".button").click(function () {
        $(".popup").hide()
    })

})