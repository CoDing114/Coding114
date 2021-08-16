$(function () {
    //导航
    $(".firstNav").on("click", function (e) {
        $(this).parent().find(".secondNav").stop().slideToggle();
        $(this).parent().siblings().find(".secondNav").stop().slideUp();
        e.stopPropagation();
    });
    $("body").on("click", function () {
        $(".secondNav").stop().slideUp();
    });

    //移动端导航
    if ($(window).width() <= 1024) {
        var wW = $(window).width();
        var mW = wW - 720;
        var padW = mW / 2;
        $(".navMain .logoWrap,.navMain .navItem").css({ "padding-left": padW, "padding-right": padW });
        $(".menuBtn").css({ right: padW });
    }
    if ($(window).width() <= 767) {
        $(".navMain .logoWrap,.navMain .navItem").css({ "padding-left": "3%", "padding-right": "3%" });
        $(".menuBtn").css({ right: "3%" });
    }
    $(".menuBtn").on("click", function () {
        $(this).toggleClass("menuOn");
        $(".navMain .navItem").slideToggle();
    });
    var wh = $(window).height();
    var nh = $(".navMain .logoWrap").innerHeight();
    var ot = $(".navMain").offset().top;
    var th = nh + ot;
    var navH = wh - th - 30;
    if ($(window).width() <= 1024) {
        $(".navMain .navItem").css({ "max-height": navH });
    }

    //百度广告关闭按钮
    $(".baiduAd .close").on("click", function (e) {
        stopDefault(e);
    });

    // //随机显示十张图片
    // //图1
    //var data1 = [{
    //    imgSrc: "https://www.dujiza.com/adimg/z1/20201009/02.jpg ",
    //    aUrl: "https://www.dujiza.com/html/imgadlink/2020-09-08/1767.html",
    //}, {
    //    imgSrc: "https://www.dujiza.com/adimg/z1/20201009/03.jpg ",
    //    aUrl: "https://www.dujiza.com/html/imgadlink/2020-09-08/1767.html",
    //}, {
    //    imgSrc: "https://www.dujiza.com/adimg/z1/20201009/07.jpg ",
    //    aUrl: "https://www.dujiza.com/html/imgadlink/2020-09-08/1767.html",
    //}, {
    //    imgSrc: "https://www.dujiza.com/adimg/z1/20201009/08.jpg ",
    //    aUrl: "https://www.dujiza.com/html/imgadlink/2020-09-08/1767.html",
    //}]

    var showNum1 = data1.length;
    var num1 = Math.floor(Math.random() * showNum1);
    var str1 = "";

    str1 += "<a href=" + data1[num1].aUrl + " class='img' >" + "<img src=" + data1[num1].imgSrc + "  border=0 />" + " </a>";
    $(".noticeRImg").html(str1);

    // //图2
    // var data2 = [{
    //     imgSrc: "https://www.dujiza.com/adimg/d2/a1.jpg",
    //     aUrl: "https://www.dujiza.com/html/imgadlink/2020-03-12/1710.html",
    // }, {
    //     imgSrc: "https://www.dujiza.com/adimg/d2/a1.jpg",
    //     aUrl: "https://www.dujiza.com/html/imgadlink/2020-03-12/1710.html",
    // }, {
    //     imgSrc: "https://www.dujiza.com/adimg/d2/a1.jpg",
    //     aUrl: "https://www.dujiza.com/html/imgadlink/2020-03-12/1710.html",
    // }, {
    //     imgSrc: "https://www.dujiza.com/adimg/d2/a1.jpg",
    //     aUrl: "https://www.dujiza.com/html/imgadlink/2020-03-12/1710.html",
    // }]

    var showNum2 = data2.length;
    var num2 = Math.floor(Math.random() * showNum2);
    var str2 = "";
    str2 += "<a href=" + data2[num2].aUrl + " class='img' >" + "<img src=" + data2[num2].imgSrc + "  border=0 />" + " </a>";
    $(".noticeImg").html(str2);

    //  //图3
    //  var data3 = [{
    //      imgSrc: "http://dujiza.com/adimg/d3/01.jpg",
    //      aUrl: "https://www.dujiza.com/html/imgadlink/2020-02-28/1705.html",
    //  }, {
    //      imgSrc: "http://dujiza.com/adimg/d3/01.jpg",
    //      aUrl: "https://www.dujiza.com/html/imgadlink/2020-02-28/1705.html",
    //  }, {
    //      imgSrc: "http://dujiza.com/adimg/d3/01.jpg",
    //      aUrl: "https://www.dujiza.com/html/imgadlink/2020-02-28/1705.html",
    //  }, {
    //      imgSrc: "http://dujiza.com/adimg/d3/01.jpg",
    //      aUrl: "https://www.dujiza.com/html/imgadlink/2020-02-28/1705.html",
    //  }]

    var showNum3 = data3.length;
    var num3 = Math.floor(Math.random() * showNum3);
    var str3 = "";
    str3 += "<a href=" + data3[num3].aUrl + " class='img' >" + "<img src=" + data3[num3].imgSrc + "  border=0 />" + " </a>";
    $(".adImg").html(str3);

    //  //图4
    //  $(".photoAdList ul li").each(function(i) {
    //      $(this).addClass("photoAdImg" + i);
    //  });
    //  var data4 = [{
    //      imgSrc: "https://www.dujiza.com/adimg/go/p1.jpg",
    //      aUrl: "https://www.dujiza.com/html/imgadlink/2020-02-28/1700.html",
    //  }, {
    //      imgSrc: "https://www.dujiza.com/adimg/go/p1.jpg",
    //      aUrl: "https://www.dujiza.com/html/imgadlink/2020-02-28/1700.html",
    //  }]
    //
    //  var data5 = [{
    //      imgSrc: "https://www.dujiza.com/adimg/go/p2.jpg",
    //      aUrl: "https://www.dujiza.com/html/imgadlink/2020-02-28/1701.html",
    //  }, {
    //      imgSrc: "https://www.dujiza.com/adimg/go/p2.jpg",
    //      aUrl: "https://www.dujiza.com/html/imgadlink/2020-02-28/1701.html",
    //  }]
    //
    //  var data6 = [{
    //      imgSrc: "https://www.dujiza.com/adimg/go/p3.jpg",
    //      aUrl: "https://www.dujiza.com/html/imgadlink/2020-02-28/1702.html",
    //  }, {
    //      imgSrc: "https://www.dujiza.com/adimg/go/p3.jpg",
    //      aUrl: "https://www.dujiza.com/html/imgadlink/2020-02-28/1702.html",
    //  }]
    //
    //  var data7 = [{
    //      imgSrc: "https://www.dujiza.com/adimg/go/p4.jpg",
    //      aUrl: "https://www.dujiza.com/html/imgadlink/2020-02-28/1703.html",
    //  }, {
    //      imgSrc: "https://www.dujiza.com/adimg/go/p4.jpg",
    //      aUrl: "https://www.dujiza.com/html/imgadlink/2020-02-28/1703.html",
    //  }]

    var showNum4 = data4.length;
    var num4 = Math.floor(Math.random() * showNum4);
    var str4 = "";
    str4 += "<a href=" + data4[num4].aUrl + " class='img' >" + "<img src=" + data4[num4].imgSrc + "  border=0 />" + " </a>";
    $(".photoAdImg0").html(str4);

    var showNum5 = data5.length;
    var num5 = Math.floor(Math.random() * showNum5);
    var str5 = "";
    str5 += "<a href=" + data5[num5].aUrl + " class='img' >" + "<img src=" + data5[num5].imgSrc + "  border=0 />" + " </a>";
    $(".photoAdImg1").html(str5);

    var showNum6 = data6.length;
    var num6 = Math.floor(Math.random() * showNum6);
    var str6 = "";
    str6 += "<a href=" + data6[num6].aUrl + " class='img' >" + "<img src=" + data6[num6].imgSrc + "  border=0 />" + " </a>";
    $(".photoAdImg2").html(str6);

    var showNum7 = data7.length;
    var num7 = Math.floor(Math.random() * showNum7);
    var str7 = "";
    str7 += "<a href=" + data7[num7].aUrl + " class='img' >" + "<img src=" + data7[num7].imgSrc + "  border=0 />" + " </a>";
    $(".photoAdImg3").html(str7);
});

//阻止默认事件
function stopDefault(e) {
    var e = arguments.callee.caller.arguments[0] || event;
    if (e && e.preventDefault) {
        e.preventDefault();
    } else {
        window.event.returnValue = false;
    }
    return false;
}

//阻止冒泡事件
function stopBubble(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        window.event.cancelBubble = true;
    }
}
