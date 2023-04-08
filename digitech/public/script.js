
window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": "https:\/\/radianttechlearning.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.2"
    }
};

! function (e, a, t) {
    var n, r, o, i = a.createElement("canvas"),
        p = i.getContext && i.getContext("2d");

    function s(e, t) {
        p.clearRect(0, 0, i.width, i.height), p.fillText(e, 0, 0);
        e = i.toDataURL();
        return p.clearRect(0, 0, i.width, i.height), p.fillText(t, 0, 0), e === i.toDataURL()
    }

    function c(e) {
        var t = a.createElement("script");
        t.src = e, t.defer = t.type = "text/javascript", a.getElementsByTagName("head")[0].appendChild(t)
    }
    for (o = Array("flag", "emoji"), t.supports = {
        everything: !0,
        everythingExceptFlag: !0
    }, r = 0; r < o.length; r++) t.supports[o[r]] = function (e) {
        if (p && p.fillText) switch (p.textBaseline = "top", p.font = "600 32px Arial", e) {
            case "flag":
                return s("\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !1 : !s("\ud83c\uddfa\ud83c\uddf3", "\ud83c\uddfa\u200b\ud83c\uddf3") && !s("\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");
            case "emoji":
                return !s("\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff", "\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")
        }
        return !1
    }(o[r]), t.supports.everything = t.supports.everything && t.supports[o[r]], "flag" !== o[r] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[o[r]]);
    t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag, t.DOMReady = !1, t.readyCallback = function () {
        t.DOMReady = !0
    }, t.supports.everything || (n = function () {
        t.readyCallback()
    }, a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n), a.attachEvent("onreadystatechange", function () {
        "complete" === a.readyState && t.readyCallback()
    })), (e = t.source || {}).concatemoji ? c(e.concatemoji) : e.wpemoji && e.twemoji && (c(e.twemoji), c(e.wpemoji)))
}(window, document, window._wpemojiSettings);

var fuse_social = {
    "ajax_url": "https:\/\/radianttechlearning.com\/wp-admin\/admin-ajax.php"
};
var et_core_api_spam_recaptcha = {
    "site_key": "",
    "page_action": {
        "action": "radianttechlearning_com"
    }
};
const tabsContainer = document.querySelector(".tabs-container");

if (tabsContainer) {

    const wordpressPanel = document.querySelector(".panels-container .wordpress");
    const bloggerPanel = document.querySelector(".panels-container .blogger");
    const wixPanel = document.querySelector(".panels-container .wix");

    const wordpressBtn = document.querySelector(".tabs-container .wordpress-btn");
    const bloggerBtn = document.querySelector(".tabs-container .blogger-btn");
    const wixBtn = document.querySelector(".tabs-container .wix-btn");



    let activePanel = wordpressPanel;

    const calculateHeight = () => {
        let panelHeight = activePanel.clientHeight;
        tabsContainer.style.marginBottom = panelHeight + "px";
    };

    calculateHeight();

    const removeActiveFromAllPanels = () => {
        wordpressPanel.classList.remove("active");
        bloggerPanel.classList.remove("active");
        wixPanel.classList.remove("active");
    };

    const removeActiveFromAllBtns = () => {
        wordpressBtn.classList.remove("active");
        bloggerBtn.classList.remove("active");
        wixBtn.classList.remove("active");
    };

    wordpressBtn.addEventListener("click", () => {
        removeActiveFromAllPanels();
        wordpressPanel.classList.add("active");

        removeActiveFromAllBtns();
        wordpressBtn.classList.add("active");

        activePanel = wordpressPanel;
        calculateHeight();
    });

    bloggerBtn.addEventListener("click", () => {
        removeActiveFromAllPanels();
        bloggerPanel.classList.add("active");

        removeActiveFromAllBtns();
        bloggerBtn.classList.add("active");

        activePanel = bloggerPanel;
        calculateHeight();
    });

    wixBtn.addEventListener("click", () => {
        removeActiveFromAllPanels();
        wixPanel.classList.add("active");

        removeActiveFromAllBtns();
        wixBtn.classList.add("active");

        activePanel = wixPanel;
        calculateHeight();
    });
}
jQuery(function($) {
    $('.et_pb_toggle_title').click(function() {
        var $toggle = $(this).closest('.et_pb_toggle');
        if (!$toggle.hasClass('et_pb_accordion_toggling')) {
            var $accordion = $toggle.closest('.et_pb_accordion');
            if ($toggle.hasClass('et_pb_toggle_open')) {
                $accordion.addClass('et_pb_accordion_toggling');
                $toggle.find('.et_pb_toggle_content').slideToggle(700, function() {
                    $toggle.removeClass('et_pb_toggle_open').addClass('et_pb_toggle_close');

                });
            }
            setTimeout(function() {
                $accordion.removeClass('et_pb_accordion_toggling');
            }, 750);
        }
    });
});


jQuery(window).on("load", function() {
    jQuery(".evo-filter-btn").addClass("show");
    jQuery(".evo-jumper-btn").addClass("show");

    jQuery(".eventon_sorting_section").css("display", "block");

    jQuery(".evo_j_container").css("display", "block");
    jQuery(".evo-jumper-btn.show").css("opacity: ", "1");
});
var Tawk_API = Tawk_API || {},
Tawk_LoadStart = new Date();
(function() {
var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
s1.async = true;
s1.src = 'https://embed.tawk.to/5dd9037643be710e1d1ebd23/default';
s1.charset = 'UTF-8';
s1.setAttribute('crossorigin', '*');
s0.parentNode.insertBefore(s1, s0);
})();
(function($) {
    function setup_collapsible_submenus() {
        $("<div class='sub-menu-toggle'></div>").insertBefore("#main-header #mobile_menu.et_mobile_menu .menu-item-has-children > a");
        $("#main-header #mobile_menu.et_mobile_menu .sub-menu-toggle").click(function() {
            $(this).toggleClass("popped");
        });
    }
    $(document).ready(function() {
        setup_collapsible_submenus();
    });
    $(window).load(function() {
        setup_collapsible_submenus();
    });
})(jQuery);
jQuery(".checkbox input[type='checkbox']").change(function() {

    var month = jQuery(this).val();

    var ajaxurl = "https://radianttechlearning.com/wp-admin/admin-ajax.php";

    jQuery.ajax({

        type: "POST",
        url: ajaxurl,
        data: {
            month: month,
            action: 'getmonthbycategory'
        },
        cache: false,
        dataType: 'json',
        success: function(res) {

            jQuery(".career_job_profile_list_li").html('');
            jQuery(".career_job_profile_list_li").html(res.data);

        }
    });

});
jQuery(".training-mode").change(function() {

    var mode = jQuery(this).val();

    var ajaxurl = "https://radianttechlearning.com/wp-admin/admin-ajax.php";

    jQuery.ajax({

        type: "POST",
        url: ajaxurl,
        data: {
            mode: mode,
            action: 'getmodebycategory'
        },
        cache: false,
        dataType: 'json',
        success: function(res) {

            jQuery(".career_job_profile_list_li").html('');
            jQuery(".career_job_profile_list_li").html(res.data);

        }
    });

});
jQuery(".training-time").change(function() {

    var time = jQuery(this).val();

    var ajaxurl = "https://radianttechlearning.com/wp-admin/admin-ajax.php";

    jQuery.ajax({

        type: "POST",
        url: ajaxurl,
        data: {
            time: time,
            action: 'gettimebycategory'
        },
        cache: false,
        dataType: 'json',
        success: function(res) {

            jQuery(".career_job_profile_list_li").html('');
            jQuery(".career_job_profile_list_li").html(res.data);

        }
    });

});
var Tawk_API = Tawk_API || {},
Tawk_LoadStart = new Date();
(function() {
var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
s1.async = true;
s1.src = 'https://embed.tawk.to/5dd9037643be710e1d1ebd23/default';
s1.charset = 'UTF-8';
s1.setAttribute('crossorigin', '*');
s0.parentNode.insertBefore(s1, s0);
})();
var et_animation_data = [{
    "class": "et_pb_text_0",
    "style": "slideBottom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_text_1",
    "style": "slideBottom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "10%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_search_0",
    "style": "slideBottom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_text_3",
    "style": "slideBottom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "10%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_0",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_1",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_2",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_3",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_4",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_5",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_6",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_7",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_8",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_9",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_10",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_11",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_text_19",
    "style": "slideBottom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "10%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_12",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_13",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_14",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_15",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_16",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_17",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_18",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_19",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_20",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_21",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_22",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_23",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_24",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_image_25",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_section_7",
    "style": "zoomBottom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "6%",
    "starting_opacity": "100%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_text_35",
    "style": "slideBottom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "10%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_text_36",
    "style": "fade",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "50%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_button_26",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "100ms",
    "intensity": "6%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_button_27",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "6%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}];
var et_pb_custom = {
    
    "images_uri": "https:\/\/radianttechlearning.com\/wp-content\/themes\/Divi\/images",
  
};
src='wp-content/themes/Divi/js/custom.unified.js?ver=4.5.3'

const script = document.createElement('script');
script.src = 'wp-content/themes/Divi/js/custom.unified.js?ver=4.5.3';
document.head.appendChild(script);

const websiteSettings = {
    images_uri: "https:\/\/radianttechlearning.com\/wp-content\/themes\/Divi\/images",
    
  };
  const headerImage = document.createElement("img");
headerImage.src = websiteSettings.images_uri + "/header-image.jpg";