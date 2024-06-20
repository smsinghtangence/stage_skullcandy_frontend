console.warn = () => {};
var DEBUG = false;
if(!DEBUG){
    if(!window.console) window.console = {};
    var methods = ["log", "debug", "warn", "info"];
    for(var i=0;i<methods.length;i++){
        console[methods[i]] = function(){};
    }
}
$(document).ready(function () {
    //Scroll Menu
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll > 80) {
            $("header").addClass("header-scroll");
            $("header").addClass("header-init");
        } else {
            $("header").removeClass("header-scroll");
        }
    });
    //Only Alphabet
    $('.text_type').keypress(function (e) {
        var regex = new RegExp("^[a-zA-Z]+$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        } else {
            e.preventDefault();
            return false;
        }
    });
    //Only Number
    $('.num_type').keypress(function (key) {
        if (key.charCode < 48 || key.charCode > 57) return false;
    });

    //Mobile Menu
    var window_width = window.innerWidth;

    $("li.menu-item-has-children > a").append('<span className="menu_expand"></span>');

    var left_menu = $(".navigation.main_menu").html();
    var right_menu = $(".header-right-menu ul#menu-right-menu").html();
    $(".skull_mobile_menu").html(left_menu);
    $(".skull_mobile_menu ul#menu-main-menu").append(right_menu);
    if (window_width < 1024) {
        $("li.menu-item-has-children > a").click(function () {
            if (!$(this).parent().hasClass("side_drawer_menu")) {
                $(".skull_mobile_menu .skull_menu ul#menu-main-menu > li").not($(this).parents(".menu-item-has-children")).removeClass("is_open");
                $(this).parent().toggleClass("is_open");
                return false;
            }
        });
        
        var mobileSearch = `<div className="search_box  show">
                                <div className="form_box">
                                    <form role="search" method="get" id="searchform" className="searchform" action="/">
                                        <svg viewBox="0 0 22.922 22.158" id="search" xmlns="http://www.w3.org/2000/svg">   <g id="Group_762" data-name="Group 762" transform="translate(-1079.439 -1360.5)">     <circle id="Ellipse_174" data-name="Ellipse 174" className="cls-1" cx="8.084" cy="8.084" r="8.084" transform="translate(1079.939 1361)"></circle>     <line id="Line_224" data-name="Line 224" className="cls-1" x2="7.571" y2="7.443" transform="translate(1094.44 1374.859)"></line>   </g> </svg>
                                        <input type="search" placeholder="Search" name="s" id="s" autocomplete="off" value="">
                                        <input type="hidden" placeholder="Search" name="page" id="page" value="head">
                                    </form>
                                    <span className="close_btn"></span>
                                </div>
                            </div>`;
        $('.no_hover.search_btn').html(mobileSearch);

    }

    $(".skull_nav_button").click(function () {
        $(".skull_mobile_menu").addClass("is_open");
        $(".menu_bg").css({
            "opacity": "1",
            "visibility": "visible",
        });
    });

    $(".menu_bg").click(function () {
        $(".skull_mobile_menu").removeClass("is_open");
        $(".menu_bg").css({
            "opacity": "0",
            "visibility": "hidden",
        });
    });

    //Search Menu
    $(".search_btn").click(function () {
        $(".search_box").toggleClass("show");
    });
    $("span.close_btn").click(function () {
        $(".header_action").removeClass("show");
    });

    //Cart Menu
    $(".cart_btn").click(function () {
        $(".cart_box").toggleClass("show");
    });

    //Past Mood Menu
    $(".drawer_menu > a").click(function () {
        $(".drawer_menu ul.sub-menu").addClass("show");
        return false;
    });
    $("li.drawer_menu ul.sub-menu").append('<li className="close_mood"></li>');
    $("body").delegate(".close_mood", "click", function () {
        $(".drawer_menu ul.sub-menu").removeClass("show");
    });

    //Product More Swatch
    $(".product_swatches").each(function () {
        var total_swatch = $(this).find("li").length;
        var extra_swatch = total_swatch - 5;
        if (total_swatch > 5) {
            $(this).find("li:nth-child(5)").nextAll().remove();
            $(this).find("ul").append('<li className="adddional_swatches"><p><span className="more_swatch">' + extra_swatch + '+</span> More</p></li>');
        }
    });

    $("li.adddional_swatches").click(function () {
        var prourl = $(this).parents(".single_product").find(".img_box a").attr("href");
        window.location.href = prourl;
    });

    //Rating
    $(".product_rating").each(function () {
        var rating = $(this).attr("data-rating");
        var first_part = rating.toString().split(".")[0];
        var second_part = rating.toString().split(".")[1];
        $(this).find("i:nth-child(-n+" + first_part + ")").addClass("fill");
        if (second_part > 3 && second_part != '') {
            $(this).find("i:nth-child(" + first_part + ")").next().addClass("fill_half");
        }
    });

    //Select Color
    $(".selected_colour").click(function () {
        $(this).toggleClass("clicked");
        $(".all_colors").toggleClass("show");
    });
    $(".choice_color").click(function () {
        $(this).find("input").prop("checked", true);
        var color_name = $(this).find("span").text();
        var color_img = $(this).find("img").attr("src");
        $(".selected_colour").find("span").text(color_name);
        $(".selected_colour").find("img").attr("src", color_img);
        $(this).addClass("select");
        $(this).siblings().removeClass("select");
        $(".selected_colour").toggleClass("clicked");
        $(".all_colors").removeClass("show");
        var color_id = $(this).attr("data-product-id");
        $(".product_image .product_image_color").each(function () {
            var banner_id = $(this).attr("data-id");
            var banner_tab_img = $(this).attr("data-tab-image");
            var banner_main_img = $(this).attr("data-main-image");
            if (color_id == banner_id) {
                $(".main_showcase_image source").attr("srcset", banner_tab_img);
                $(".main_showcase_image img").attr("src", banner_main_img);
                $(".product_color_base_features picture source").attr("srcset", banner_tab_img);
                $(".product_color_base_features picture img").attr("src", banner_main_img);
            }
        });
    });

    var default_product_name = $(".woovr-variation.woovr-variation-radio.woovr-variation-activate .woovr-variation-name").text();
    $(".selected_colour .color_row .woovr-variation-name").text(default_product_name);

    var default_product_stock = $(".woovr-variation.woovr-variation-radio.woovr-variation-activate").attr("data-purchasable");
    if (default_product_stock == 'no') {
        $(".product_desp_up").addClass("out_of_stock");
        $("button.theme_btn.bottom_cart_ad").prop("disabled", true);
    }

    $(".woovr-variation.woovr-variation-radio").click(function () {
        var productprice = $(".product_descprition h4.product_price ins").text();
        $(".sticky-add-to-cart span.product_price").text(productprice);
        var imgurl = $(this).find(".img_box img").attr("src");
        var colorname = $(this).find(".woovr-variation-name").text();
        $(".selected_colour .color_row .woovr-variation-image img").attr("src", imgurl);
        $(".selected_colour .color_row .woovr-variation-name").text(colorname);
        $(".all_colors").removeClass("show");
        var color_id = $(this).attr("data-id");
        $(".product_image .product_image_color").each(function () {
            var banner_id = $(this).attr("data-id");
            var banner_tab_img = $(this).attr("data-tab-image");
            var banner_main_img = $(this).attr("data-main-image");
            if (color_id == banner_id) {
                $(".main_showcase_image source").attr("srcset", banner_tab_img);
                $(".main_showcase_image img").attr("src", banner_main_img);
            }
        });

        $(".single_variation_slider").each(function () {
            var t2_colorid = $(this).attr("data");
            if (color_id == t2_colorid) {
                $(this).addClass("active_slider");
            } else {
                $(this).removeClass("active_slider");
            }
        });

        $(".selected_colour").removeClass("clicked");

        $(".product_image_2 .product_image_color").each(function () {
            var banner_id = $(this).attr("data-id");
            var banner_tab_img2 = $(this).attr("data-tab-image");
            var banner_main_img2 = $(this).attr("data-main-image");
            if (color_id == banner_id) {
                $(".product_smart_features picture source").attr("srcset", banner_tab_img2);
                $(".product_smart_features picture img").attr("src", banner_main_img2);
            }
        });
        $(this).addClass("woovr-variation-activate");
        $(this).siblings().removeClass("woovr-variation-activate");

        var base_price = $(this).attr("data-regular-price");
        var discount_price = $(this).attr("data-price");
        $(".sticky-add-to-cart span.product_price").html("<strike>" + base_price + "</strike>" + discount_price + "");
        var product_price_currency = '₹';

        var disocunt_get = ((base_price - discount_price) * 100) / base_price;
        var disocunt_get_roundoff = disocunt_get.toFixed(1);

        if (base_price != discount_price) {
            $(".product_descprition h4.product_price strike").show();
            $(".product_descprition h4.product_price strike").text('' + product_price_currency + '' + base_price + '');
            $(".product_descprition h4.product_price ins").text('' + product_price_currency + '' + discount_price + '');
            $(".product_descprition h4.product_price span.skull_product_discount").show();
            $(".product_descprition h4.product_price span.skull_product_discount").text('( ' + disocunt_get_roundoff + '% off )');
        } else {
            $(".product_descprition h4.product_price strike").hide();
            $(".product_descprition h4.product_price strike").text('' + product_price_currency + '' + base_price + '');
            $(".product_descprition h4.product_price ins").text('' + product_price_currency + '' + discount_price + '');
            $(".product_descprition h4.product_price span.skull_product_discount").hide();
            $(".product_descprition h4.product_price span.skull_product_discount").text('( ' + disocunt_get_roundoff + '% off )');
        }

        var instock = $(this).attr("data-purchasable");
        if (instock == 'no') {
            $(".product_desp_up").addClass("out_of_stock");
            $("button.theme_btn.bottom_cart_ad").prop("disabled", true);
        } else {
            $(".product_desp_up").removeClass("out_of_stock");
            $("button.theme_btn.bottom_cart_ad").prop("disabled", false);
        }
    });

    if (window.location.href.indexOf("optionId") > -1) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const color_option = urlParams.get('optionId');

        $(".woovr-variation.woovr-variation-radio[data-id='" + color_option + "']").trigger("click");
        $(".woovr-variation.woovr-variation-radio[data-id='" + color_option + "']").find("radio").prop("checked", true);
    }

    //Anchor Btn
    $(".anchor_btn").click(function () {
        var anchor_id = $(this).attr("data");
        $('html,body').animate({
                scrollTop: $("#" + anchor_id + "").offset().top
            },
            'slow');
    });

    //Video Btn
    $(".video_btn").click(function () {
        var video_id = $(this).attr("data-id");
        $(this).append('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + video_id + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });

    $(".video_target").click(function () {
        var video_id = $(this).attr("data-id");
        $(".video_btn[data-id='" + video_id + "']").trigger("click");
    });

    //Accordian
    $(".acc_btn").click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass("open");
    });

    //Bottom Cart
    var productname = $(".product_descprition h1").text();
    var productprice = $(".product_descprition h4.product_price ins").text();
    var productprice_base = $(".product_descprition h4.product_price strike").text();
    $(".sticky-add-to-cart span.product_name").text(productname);
    $(".sticky-add-to-cart span.product_price").html("<strike>" + productprice_base + "</strike> " + productprice + "");
    $(".bottom_cart_ad").click(function () {
        $("button.single_add_to_cart_button.button.alt").trigger("click");
    });

    //Pagination
    $(".next_pagination").click(function () {
        $(".skull_pagination ul li.active").next().addClass("active");
        $(".skull_pagination ul li.active").prev().removeClass("active");
        if (!$(".skull_pagination ul li:first-child").next().hasClass("active")) {
            $(".prev_pagination").removeClass("disabled");
        }
        if ($(".skull_pagination ul li:last-child").prev().hasClass("active")) {
            $(this).addClass("disabled");
        }
    });
    $(".prev_pagination").click(function () {
        $(".skull_pagination ul li.active").prev().addClass("active");
        $(".skull_pagination ul li.active").next().removeClass("active");
        if (!$(".skull_pagination ul li:last-child").prev().hasClass("active")) {
            $(".next_pagination").removeClass("disabled");
        }
        if ($(".skull_pagination ul li:first-child").next().hasClass("active")) {
            $(this).addClass("disabled");
        }
    });

    //Flip Compare
    $(".show_feature_btn").click(function () {
        $(this).parents(".flip-card").addClass("flip_do");
    });
    $(".hide_feature_btn").click(function () {
        $(this).parents(".flip-card").removeClass("flip_do");
    });

    //Custom Select
    $("body").delegate(".custom_select .custom_head", "click", function () {
        $(".custom_select .custom_content").not($(this).next()).hide();
        $(this).next().slideToggle();
    });

    $("body").delegate(".single_option", "click", function () {
        $(this).find("input").prop("checked", true);
        $(this).siblings().find("input").prop("checked", false);
        var pro_name = $(this).find(".context_box").text();
        $(this).parents(".custom_select").find(".select_text_").html(pro_name);
        $(this).parent().hide();
    });

    $("section").on('click', function (event) {
        if (!$(event.target).closest('.custom_select').length) {
            $(".custom_select .custom_content").hide();
        }
    });

    //Parallax
    var _getDistanceFromTop = function (selector) {
        var scrollTop = $(window).scrollTop(),
            elementOffset = selector.offset().top,
            distance = (elementOffset - scrollTop);
        return distance;
    }
    $(window).scroll(function () {
        var parallax_item = $('.skull_parallax');
        var parallax_start = (window.scrollY - 100) / 5;
        parallax_item.css("transform", "translateY(-" + parallax_start + "px)");

        if ($(".video_btn").hasClass("autoplay")) {
            var video_play = _getDistanceFromTop($('.video_btn.autoplay'));
            if (video_play == 0) {
                $(".video_btn").each(function () {

                });
                var video_id = $(".video_btn").attr("data-id");
                $(".video_btn").append('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + video_id + '?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            }
        }
    });

    //Tab
    $(".tab_btn").click(function () {
        var tab_name = $(this).attr("data");
        $(this).addClass("active");
        $(".tab_btn").not($(this)).removeClass("active");
        $(".tab_content").each(function () {
            var tab_content = $(this).attr("data");
            if (tab_name == tab_content) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    });

    //Popup
    $("body").on('click', '.skull_popup_btn', function () {
        var popup_name = $(this).attr("data");
        $(".skull_popup_container").each(function () {
            var getpop_name = $(this).attr("data");
            if (popup_name == getpop_name) {
                $(this).css({
                    "visibility": "visible",
                    "opacity": "1"
                })
            }
        });
        $(".skull_popup_container[data='" + popup_name + "'] .skull_popup").show();
        $(".skull_popup_bg").show();
    });
    $(".cancel_pop_btn").click(function () {
        $(".skull_popup_container .skull_popup").hide();
        $(".skull_popup_bg").hide();
        $(".skull_popup_container").css({
            "visibility": "hidden",
            "opacity": "0"
        });
    });

    //Popup 2
    $("body").on('click', '.skull_new_pop_btn', function () {
        var popup_name = $(this).attr("data");
        $(".skull_new_popup").each(function () {
            var getpop_name = $(this).attr("data");
            if (popup_name == getpop_name) {
                $(this).addClass("show");
            }
        });
    });

    $(".close_pop_btn").click(function () {
        $(".skull_new_popup").removeClass("show");
    });

    //Remove Cart
    $("body").on('click', '.cart_btn_remove', function () {
        var product_id = $(this).parents(".product_cart_action").find(".remove_cart_item_btn").clone();
        $(".remove_cart_item_btn").attr("remove-id", product_id);
        $(".remove_cart_item .cancel_pop_btn").before(product_id);
    });

    $(".remove_cart_item button.cancel_pop_btn").click(function () {
        $(this).prev().remove();
    });

    //Checkout Show Login
    $(".showlogin_fr").click(function () {
        //$(".checkout_before_login, .woocommerce-form-login-toggle, .checout_tec_login").hide();
        $(".checkout_form_first_step_section").hide();
        $("form.woocommerce-form.woocommerce-form-login.login").css("display", "block");
    });

    $(".guest_continue").click(function () {
        if ($("#checkout_email_address").valid()) {
            const shippingNotRequired = $('#shipping_not_required').val();
            var email = $("#checkout_email_address").val();
            $(".checkout_before_login, .woocommerce-form-login-toggle, .checout_tec_login").hide();
            $(".edit_login_chkout").show();
            if (shippingNotRequired === '1') {

                $("#checkout_login_email_id").text(email);
                $(".edit_login_chkout").show();
                $(".checkout_heading_field.login_heading").addClass("logindone");
                $(".checkout_page_billing_address_section").show();
            } else {
                $("#checkout_login_email_id").text(email);
                $(".edit_login_chkout").show();
                $(".checkout_heading_field.login_heading").addClass("logindone");
                $(".checkout_custom_shipping_adsress").addClass("showblock");
                $("#ship-to-different-address, .billing_address_save_btn").show();
            }
            updateCheckoutGuestEmailData(email);
            $("#billing_email").val(email)
            console.log(checkoutData);
        }

    });

    $(".edit_login_chkout").click(function () {
        $(".checkout_before_login, .woocommerce-form-login-toggle, .checout_tec_login").show();
        $("#checkout_login_email").text('');
        $(".edit_login_chkout").hide();
        $(".checkout_heading_field.login_heading").removeClass("logindone");
        $(".checkout_custom_shipping_adsress").removeClass("showblock");
        $(".checkout_page_billing_address_section").hide();
    });

    $(".cancel_chkout_loginbtn").click(function () {
        $(".checkout_form_first_step_section").show();
        $("form.woocommerce-form.woocommerce-form-login.login").css("display", "none");
    });
    
    var checkoutData = {
        currentStep: 1,
        subscribeToNewsletter: true,
        emailId: '',
        shippingFirstName: '',
        shippingLastName: '',
        shippingCompany: '',
        shippingCountry: 'India',
        shippingAddress1: '',
        shippingAddress2: '',
        shippingCity: '',
        shippingState: '',
        shippingPostalCode: '',
        shippingMobile: '',
        gstin: '',
        billingSameAsShipping: true,
        billingFirstName: '',
        billingLastName: '',
        billingCompany: '',
        billingCountry: 'India',
        billingAddress1: '',
        billingAddress2: '',
        billingCity: '',
        billingState: '',
        billingPostalCode: '',
        billingMobile: '',
        billingEmail: ''
    }
    var data = {
        action: 'is_user_logged_in'
    };
    var checkoutDataStorage = '';
    
    
    jQuery.post(ajax_postajax.ajaxurl, data, function (response) {
        if(localStorage.checkoutData){
            checkoutDataStorage = JSON.parse(localStorage.checkoutData);
            checkoutData = checkoutDataStorage;
        }

        if (response == 'no') {
            $('#checkout_login_email_id').text(checkoutDataStorage.emailId)
            $('#newsletter').prop("checked", checkoutDataStorage.subscribeToNewsletter);
            $('#custom_same_address').prop("checked", checkoutDataStorage.billingSameAsShipping);
            $("#checkout_email_address").val(checkoutDataStorage.emailId);
            $("#shipping_first_name").val(checkoutDataStorage.shippingFirstName);
            $("#shipping_last_name").val(checkoutDataStorage.shippingLastName);
            $("#shipping_company").val(checkoutDataStorage.shippingCompany);
            $("#shipping_wooccm9").val(checkoutDataStorage.shippingMobile);
            $("#shipping_country").val(checkoutDataStorage.shippingCountry);
            $("#shipping_state").val(checkoutDataStorage.shippingState);
            $("#shipping_city").val(checkoutDataStorage.shippingCity);
            $("#shipping_address_1").val(checkoutDataStorage.shippingAddress1);
            $("#shipping_address_2").val(checkoutDataStorage.shippingAddress2);
            $("#shipping_postcode").val(checkoutDataStorage.shippingPostalCode);
            $('#shipping_gstin').val(checkoutDataStorage.gstin);
            $('#shipping_country').val('IN');

            updateShippingDetailsSummary(checkoutDataStorage.shippingFirstName, checkoutDataStorage.shippingLastName, checkoutDataStorage.shippingCompany, checkoutDataStorage.shippingMobile,checkoutDataStorage.shippingCountry,checkoutDataStorage.shippingState,checkoutDataStorage.shippingCity,checkoutDataStorage.shippingAddress1,checkoutDataStorage.shippingPostalCode);

            // $(`input[name=shipping_method[0]][value=${checkoutDataStorage.shippingMethod}]`).prop("checked",true);
            $("#billing_first_name").val(checkoutDataStorage.billingFirstName);
            $("#billing_last_name").val(checkoutDataStorage.billingLastName);
            $("#billing_company").val(checkoutDataStorage.billingCompany);
            $("#billing_country").val(checkoutDataStorage.billingCountry);
            $("#billing_state").val(checkoutDataStorage.billingState);
            $("#billing_city").val(checkoutDataStorage.billingCity);
            $("#billing_address_1").val(checkoutDataStorage.billingAddress1);
            $("#billing_address_2").val(checkoutDataStorage.billingAddress2);
            $("#billing_postcode").val(checkoutDataStorage.billingPostalCode);
            $("#billing_phone").val(checkoutDataStorage.billingMobile);
            $("#billing_email").val(checkoutDataStorage.billingEmail);
            $('#billing_country').val('IN');

            updateBillingDetailsSummary(checkoutDataStorage.billingFirstName, checkoutDataStorage.billingLastName, checkoutDataStorage.billingCompany, checkoutDataStorage.billingMobile, checkoutDataStorage.billingCountry,checkoutDataStorage.billingState,checkoutDataStorage.billingCity,checkoutDataStorage.billingAddress1,checkoutDataStorage.billingPostalCode, checkoutDataStorage.billingEmail);

            //Check the step
            if(checkoutDataStorage.currentStep == 4){
                $(".checkout_heading_field.login_heading").addClass("logindone");
                $(".checkout_before_login, .woocommerce-form-login-toggle, .checout_tec_login").hide();
                $(".edit_login_chkout").show();
                $(".edit_billing_chkout").show();
                $("#shipping_address_inputs, .edit_shipping_chkout").show();
                $(".edit_billing_chkout").show();
                $("#billing_address_inputs").show();
                $(".checkout_page_billing_address_section").hide();
                $(".woocommerce-checkout #order_review").removeClass('d-none');
                $(".checkout_coupon").removeClass('coupon_field_disabled');
                $("#coupon_field_disabled_message").hide();
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".checkout_heading_field.field_head4").offset().top - 50
                }, 500);
            }
            

        }
    });

    // Store Checkout Data To Session Storage
    
    function updateCheckoutLocaleData(){
        localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
    }

    function updateCheckoutGuestEmailData(email) {
        checkoutData.emailId = email;
        updateCheckoutLocaleData();
    }

    function updateCheckoutFormStepData(step) {
        checkoutData.currentStep = step;
        updateCheckoutLocaleData();
    }

    function updateCheckoutNewsletterData(subscribeToNewsletter) {
        checkoutData.subscribeToNewsletter = subscribeToNewsletter;
        updateCheckoutLocaleData();
    }

    function updateCheckoutBillingSameAsShippingData(billingSameAsShipping) {
        checkoutData.billingSameAsShipping = billingSameAsShipping;
        updateCheckoutLocaleData();
    }

    function updateCheckoutShippingMethod(shippingMethod) {
        checkoutData.shippingMethod = shippingMethod;
        updateCheckoutLocaleData();
    }

    function updateCheckoutShippingData(shippingFirstName, shippingLastName, shippingCompany, shippingCountry, shippingAddress1, shippingAddress2, shippingCity, shippingState, shippingPostalCode, shippingMobile, gstin) {
        checkoutData.shippingFirstName = shippingFirstName;
        checkoutData.shippingLastName = shippingLastName;
        checkoutData.shippingCompany = shippingCompany;
        checkoutData.shippingCountry = shippingCountry;
        checkoutData.shippingAddress1 = shippingAddress1;
        checkoutData.shippingAddress2 = shippingAddress2;
        checkoutData.shippingCity = shippingCity;
        checkoutData.shippingState = shippingState;
        checkoutData.shippingPostalCode = shippingPostalCode;
        checkoutData.shippingMobile = shippingMobile;
        checkoutData.gstin = gstin;
        $('#shipping_country').val('IN');
        updateCheckoutLocaleData();
        
    }

    function updateCheckoutbillingData(billingFirstName, billingLastName, billingCompany, billingCountry, billingAddress1, billingAddress2, billingCity, billingState, billingPostalCode, billingMobile, billingEmail) {
        checkoutData.billingFirstName = billingFirstName;
        checkoutData.billingLastName = billingLastName;
        checkoutData.billingCompany = billingCompany;
        checkoutData.billingCountry = billingCountry;
        checkoutData.billingAddress1 = billingAddress1;
        checkoutData.billingAddress2 = billingAddress2;
        checkoutData.billingCity = billingCity;
        checkoutData.billingState = billingState;
        checkoutData.billingPostalCode = billingPostalCode;
        checkoutData.billingMobile = billingMobile;
        checkoutData.billingEmail = billingEmail;
        $('#billing_country').val('IN');
        updateCheckoutLocaleData();
    }

    function updateShippingDetailsSummary(first_name, last_name, company_name,mobile,country,state_name,city_name,address_name,postcode_name) {
        $("#shipping_address_inputs .checkout_firstname").text(first_name);
        $("#shipping_address_inputs .checkout_lastname").text(last_name);
        $("#shipping_address_inputs .checkout_company-name").text();
        $("#shipping_address_inputs .checkout_phone").text(mobile);
        $("#shipping_address_inputs .checkout_checkout_country").text(country);
        $("#shipping_address_inputs .checkout_checkout_state").text(state_name);
        $("#shipping_address_inputs .checkout_checkout_city").text(city_name);
        $("#shipping_address_inputs .checkout_checkout_address1").text(address_name);
        $("#shipping_address_inputs .checkout_checkout_postcode").text(postcode_name);
    }

    function updateBillingDetailsSummary(first_name, last_name, company_name, mobile,country,state_name,city_name,address_name,postcode_name,email){
        $("#billing_address_inputs .checkout_firstname").text(first_name);
        $("#billing_address_inputs .checkout_lastname").text(last_name);
        $("#billing_address_inputs .checkout_company-name").text(company_name);
        $("#billing_address_inputs .checkout_phone").text(mobile);
        $("#billing_address_inputs .checkout_checkout_country").text(country);
        $("#billing_address_inputs .checkout_checkout_state").text(state_name);
        $("#billing_address_inputs .checkout_checkout_city").text(city_name);
        $("#billing_address_inputs .checkout_checkout_address1").text(address_name);
        $("#billing_address_inputs .checkout_checkout_postcode").text(postcode_name);
        $("#billing_address_inputs .checkout_checkout_email").text(email);
    }

    $('#newsletter').change(function () {
        updateCheckoutNewsletterData($(this).is(":checked"));
        
    })
    $('#custom_same_address').change(function () {
        updateCheckoutBillingSameAsShippingData($(this).is(":checked"));
    })
    $('.shipping_method').change(function () {
        updateCheckoutShippingMethod($(this).val());
    })
    // Checkout Form Validation 
    $.validator.addMethod(
        /* The value you can use inside the email object in the validator. */
        "regex",

        /* The function that tests a given string against a given regEx. */
        function (value, element, regexp) {
            /* Check if the value is truthy (avoid null.constructor) & if it's not a RegEx. (Edited: regex --> regexp)*/

            if (regexp && regexp.constructor != RegExp) {
                /* Create a new regular expression using the regex argument. */
                regexp = new RegExp(regexp);
            }

            /* Check whether the argument is global and, if so set its last index to 0. */
            else if (regexp.global) regexp.lastIndex = 0;

            /* Return whether the element is optional or the result of the validation. */
            return this.optional(element) || regexp.test(value);
        }
    );
    jQuery.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z ]+$/i.test(value);
    });
    function clearConsole(){
        setTimeout(function(){
            console.clear();
        },2000)
    }
    
    clearConsole();

    $('.checkout.woocommerce-checkout').validate({
        rules: {
            emailId: {
                required: true,
                email: true,
                regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
            },
            shipping_first_name: {
                required: true,
                lettersonly: true
            },
            shipping_last_name: {
                required: true,
                lettersonly: true
            },
            shipping_company: {
                required: false
            },
            shipping_postcode: {
                required: true,
                regex: /^\b[1-9]\d{5}\b$/
            },
            shipping_country: {
                required: true
            },
            shipping_state: {
                required: true
            },
            shipping_city: {
                required: true,
                lettersonly: true
            },
            shipping_address_1: {
                required: true
            },
            shipping_address_2: {
                required: true
            },
            shipping_wooccm9: {
                required: true,
                regex: /^\b[6-9]\d{9}\b$/
            },
            shipping_gstin: {
                required: false
            },
            billing_first_name: {
                required: true,
                lettersonly: true
            },
            billing_last_name: {
                required: true,
                lettersonly: true
            },
            billing_company: {
                required: true
            },
            billing_country: {
                required: true
            },
            billing_state: {
                required: true
            },
            billing_city: {
                required: true,
                lettersonly: true
            },
            billing_address_1: {
                required: true
            },
            billing_address_2: {
                required: true
            },
            billing_postcode: {
                required: true,
                regex: /^\b[1-9]\d{5}\b$/
            },
            billing_phone: {
                required: true,
                regex: /^\b[6-9]\d{9}\b$/
            },
            billing_email: {
                required: true,
                email: true,
                regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
            }
        },
        messages: {
            emailId: {
                required: "This field is required",
                regex: "Enter valid email"
            },
            shipping_first_name: {
                required: "This field is required",
                lettersonly: "Enter Valid First Name"
            },
            shipping_last_name: {
                required: "This field is required",
                lettersonly: "Enter Valid Last Name"
            },
            shipping_wooccm9: {
                required: "This field is required"
            },
            shipping_postcode: {
                required: "This field is required",
                regex: "Enter Valid Postcode"
            },
            shipping_country: {
                required: "This field is required"
            },
            shipping_state: {
                required: "This field is required"
            },
            shipping_city: {
                required: "This field is required",
                lettersonly: "Enter Valid City"
            },
            shipping_address_1: {
                required: "This field is required"
            },
            shipping_address_2: {
                required: "This field is required"
            },
            shipping_wooccm9: {
                required: "This field is required",
                regex: "Enter Valid Mobile Number"
            },
            shipping_gstin: {
                required: "This field is required"
            },
            billing_first_name: {
                required: "This field is required",
                lettersonly: "Enter Valid First Name"
            },
            billing_last_name: {
                required: "This field is required",
                lettersonly: "Enter Valid Last Name"
            },
            billing_company: {
                required: "This field is required"
            },
            billing_country: {
                required: "This field is required"
            },
            billing_state: {
                required: "This field is required"
            },
            billing_city: {
                required: "This field is required",
                lettersonly: "Enter Valid City"
            },
            billing_address_1: {
                required: "This field is required"
            },
            billing_address_2: {
                required: "This field is required"
            },
            billing_postcode: {
                required: "This field is required",
                regex: "Enter Valid Post Code"
            },
            billing_phone: {
                required: "This field is required",
                regex: "Enter Valid Mobile Number"
            },
            billing_email: {
                required: "This field is required",
                regex: "Emter Valid Email",
            }
        },
        submitHandler: function (form) { // for demo
            
            return false;
        }
    });

    $(".save_shipping_address_btn").click(function () {
        var isShippingValid = 0;
        $('.woocommerce-shipping-fields__field-wrapper .wooccm-required-field').each(function () {
            if (!$(this).valid()) {
                isShippingValid++
            }
        })
        if (isShippingValid == 0) {

            // $('#shipping_first_name').valid();
            var email = $("#checkout_email_address").val();
            var first_name = $("#shipping_first_name").val();
            var last_name = $("#shipping_last_name").val();
            var company_name = $("#shipping_company").val();
            var ship_phone = $("#shipping_wooccm9").val();
            var country = $("#shipping_country option:selected").text();
            var country_value = $("#shipping_country").val();
            var state_name = $("#shipping_state option:selected").text();
            var state_name_value = $("#shipping_state").val();
            var city_name = $("#shipping_city").val();
            var address_name = $("#shipping_address_1").val();
            var address_name2 = $("#shipping_address_2").val();
            var postcode_name = $("#shipping_postcode").val();
            var shipping_gstin = $('#shipping_gstin').val();
            $('.wczpcheck').val(postcode_name);
            $('.wczpbtn').trigger('click');

            $(".checkout_custom_shipping_adsress").removeClass("showblock");
            $("#ship-to-different-address, .billing_address_save_btn").hide();

            updateShippingDetailsSummary(first_name, last_name, company_name, ship_phone,country,state_name,city_name,address_name,postcode_name);

            updateCheckoutShippingData(first_name, last_name, company_name, country_value, address_name, address_name2, city_name, state_name_value, postcode_name, ship_phone, shipping_gstin);

            if (!$("#custom_same_address").is(":checked")) {
                $(".checkout_page_billing_address_section").show();
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".customer_checkout_address").offset().top
                }, 500);
            } else {
                $("#billing_first_name").val(first_name);
                $("#billing_last_name").val(last_name);
                $("#billing_company").val(company_name);
                $("#billing_country").val(country_value);
                $("#billing_state").val(state_name_value);
                $("#billing_city").val(city_name);
                $("#billing_address_1").val(address_name);
                $("#billing_address_2").val(address_name2);
                $("#billing_postcode").val(postcode_name);
                $("#billing_phone").val(ship_phone);
                updateCheckoutbillingData(first_name, last_name, company_name, country_value, address_name, address_name2, city_name, state_name_value, postcode_name, ship_phone, email);
                updateBillingDetailsSummary(first_name, last_name, company_name, ship_phone,country,state_name,city_name,address_name,postcode_name, email);
                updateCheckoutFormStepData(4);
                $(".edit_billing_chkout").show();
                $("#billing_address_inputs").show();
                $(".woocommerce-checkout #order_review").removeClass('d-none');
                $(".checkout_coupon").removeClass('coupon_field_disabled');
                $("#coupon_field_disabled_message").hide();
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".checkout_heading_field.field_head4").offset().top - 50
                }, 500);

                
            }
            $("#shipping_address_inputs, .edit_shipping_chkout").show();
        }
    });

    $(".edit_shipping_chkout").click(function () {
        $(".checkout_custom_shipping_adsress").addClass("showblock");
        $("#ship-to-different-address, .billing_address_save_btn").show();
        $("#billing_address_inputs").show();
        $(".edit_billing_chkout").show();
        $(".checkout_page_billing_address_section").hide();
        $("#shipping_address_inputs, .edit_shipping_chkout").hide();
        $(".woocommerce-checkout #order_review").addClass('d-none');
        $(".checkout_coupon").addClass('coupon_field_disabled');
        $("#coupon_field_disabled_message").show();
        $(".checkout_page_billing_address_section").hide();
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".woocommerce-shipping-fields").offset().top
        }, 500);
    });

    $(".save_billing_address_btn").click(function () {
        var isBillingValid = 0;
        $('.woocommerce-billing-fields__field-wrapper .wooccm-required-field').each(function () {
            if (!$(this).valid()) {
                isBillingValid++
            }
        })
        if (isBillingValid == 0) {
            var billing_first_name = $("#billing_first_name").val();
            var billing_last_name = $("#billing_last_name").val();
            var billing_company_name = $("#billing_company").val();
            var billing_phone = $("#billing_phone").val();
            var billing_country = $("#billing_country").val();
            var billing_state = $("#billing_state").val();
            var billing_city = $("#billing_city").val();
            var billing_address1 = $("#billing_address_1").val();
            var billing_address_2 = $("#billing_address_2").val();
            var billing_postcode = $("#billing_postcode").val();
            var billing_email = $("#billing_email").val();
            
            //Update billing data in summary section
            updateBillingDetailsSummary(billing_first_name, billing_last_name, billing_company_name, billing_phone,billing_country,billing_state,billing_city,billing_address1,billing_postcode, billing_email);
            
            //Saving billing data to locale storage item
            updateCheckoutbillingData(billing_first_name, billing_last_name, billing_company_name, billing_country, billing_address1, billing_address_2, billing_city, billing_state, billing_postcode, billing_phone, billing_email);
            updateCheckoutFormStepData(4);
            $(".edit_billing_chkout").show();
            $("#billing_address_inputs").show();
            $(".checkout_page_billing_address_section").hide();
            $(".woocommerce-checkout #order_review").removeClass('d-none');
            $(".checkout_coupon").removeClass('coupon_field_disabled');
            $("#coupon_field_disabled_message").hide();
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".checkout_heading_field.field_head4").offset().top - 50
            }, 500);
        }
    });

    $(".edit_billing_chkout").click(function () {
        $(this).hide();
        $("#billing_address_inputs").hide();
        $(".checkout_page_billing_address_section").show();
        $(".woocommerce-checkout #order_review").addClass('d-none');
        $(".checkout_coupon").addClass('coupon_field_disabled');
        $("#coupon_field_disabled_message").show();
        $("#shipping_address_inputs").show();
        $(".edit_shipping_chkout").show();
        $(".checkout_custom_shipping_adsress").removeClass("showblock");

        $([document.documentElement, document.body]).animate({
            scrollTop: $(".customer_checkout_address").offset().top
        }, 500);
    });

    //Add Quantity in cart page
    $("tr.woocommerce-cart-form__cart-item.cart_item").each(function () {
        var max_quantity = $(this).find(".ten_custom_quantity_show .quantity .qty.text").attr("max");
        if (max_quantity <= 10) {
            $(this).find(".custom_quantity_list").addClass("adjusted");
        }
        $(this).find(".custom_quantity_list ul li[data='" + max_quantity + "']").nextAll().remove();
    });
    $("body").delegate(".custom_quantity_show", "click", function () {
        $('.custom_quantity_list').hide();
        $(this).next().show();
    });

    $("body").delegate(".custom_quantity_list ul li", "click", function () {
        if (!$(this).hasClass("add_xtra_qty_num")) {
            var cart_num_add = $(this).attr("data");
            $(this).parents("tr.woocommerce-cart-form__cart-item").find("input.qty").val(cart_num_add);
            $(".update_cart_qty").prop("disabled", false);
            $(".update_cart_qty").trigger("click");
            $(this).parents(".custom_add_quantity").find(".custom_quantity_show font").text("Qty: " + cart_num_add + "");
            $(".custom_quantity_list").hide();
        } else {
            $(this).parents(".custom_add_quantity").find(".ten_custom_quantity_show").addClass("show");
            $(this).parents(".custom_add_quantity").find(".custom_quantity_list, .custom_quantity_show").hide();
        }
    });
    $("body").delegate(".custom_update_cart_btn", "click", function () {
        $(".ten_custom_quantity_show").removeClass("show");
        $(".custom_quantity_show").show();
        $(".update_cart_qty").trigger("click");
    });
    $('.cart_has_item').click(function (e) {
        if ($(e.target).hasClass('cqs_ele')) {
            return;
        } else {
            $('.custom_quantity_list').hide();
        }
    })
    //Purchase Point
    $("#purchase_point_text").keyup(function () {
        var point_value = $(this).val();
        $("input#mwb_cart_points").val(point_value);
    });
    var total_purchase_point = parseFloat($("button#mwb_cart_points_apply").attr("data-point"));
    $("input#purchase_point_text").attr("placeholder", "You Have " + total_purchase_point + " Points");


    $("#apply_purchase_point").click(function () {
        var inserted_point = $("#purchase_point_text").val();
        if (inserted_point < total_purchase_point) {
            $("#apply_point_message").html('');
            $("button#mwb_cart_points_apply").trigger("click");
        } else {
            $("#apply_point_message").html('<font style="color:red">You do not have sufficient amount of points</font>');
        }

    });

    //Coupon Code
    $(".checkout_sidebar_summry").on('keyup','.coupon_code_enter',function () {
        var coupon_code = $(this).val();
        $("input#coupon_code").val(coupon_code);
    });
    

    $(".checkout_sidebar_summry").on('click', '.apply_skull_coupon', function () {
        $("button.button[name='apply_coupon']").trigger("click");
        $('form.checkout.woocommerce-checkout').addClass('loading');
    });

    //Shipping Charge
    //setInterval(function(){
    $(".shipping_method").each(function () {
        if ($(this).is(":checked")) {
            var shipping_charge = $(this).next().find("span.woocommerce-Price-amount.amount").html();
            $("#shiping_charge_amt").html(shipping_charge);
        }
    });
    var url = ajax_postajax.ajaxurl;
    jQuery.get(url, {
            'action': 'sayhello'
        },
        function (msg) {
            //alert(msg);
            $(".checkout_total_count tfoot tr.order-total td strong").html(msg);
            //console.log(msg);
        });
    //},1000);

    //Variation Color
    $(".single_variation_slider").each(function () {
        var colorcode = $(this).attr("data-color");
        var variation_id = $(this).attr("data");
        $(".woovr-variation.woovr-variation-radio").each(function () {
            var get_varaition_id = $(this).attr("data-id");
            if (variation_id == get_varaition_id) {
                $(this).find(".woovr-variation-selector .img_box:nth-child(2) div").html('<span className="variation_type_colour" style="background-color:' + colorcode + '"></span>')
            }
        });
    });

    //Support List Limit
    $(".support_item_manage").each(function () {
        var total_list = $(this).find("ul li").length;
        var list_url = $(this).find("h2 a").attr("href");
        if (total_list > 6) {
            $(this).find("ul").append('<li className="remain_item_num"><a href="' + list_url + '">See all ' + total_list + ' articles</a></li>');
        }
    });

    //Pincode
    $(".wczp_cookie_check_div input[type='text']").attr("placeholder", "Pincode")

});


