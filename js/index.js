$(document).ready(function () {
	$(".main-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		intinite: false,
		asNavFor: ".main-slider-nav",
	});
	$(".main-slider-nav").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: ".main-slider",
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		vertical: true,
		arrows: false,
		intinite: false,
	});

	$(".clients .clients-slider").slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		dots: false,
		autoplay: false,
		speed: 1000,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 1201,
				settings: {
					arrows: false,
				},
			},
			{
				breakpoint: 751,
				settings: {
					slidesToShow: 4,
					arrows: false,
				},
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 3,
					arrows: false,
				},
			},
		],
	});

	$(".page-content .clients-slider").slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		dots: false,
		autoplay: false,
		speed: 1000,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 751,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 401,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});

	if ($("body").width() > 1201) {
		$(".news-slider").slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: false,
			autoplay: false,
			speed: 1000,
			prevArrow: '<button type="button" class="slick-prev"></button>',
			nextArrow: '<button type="button" class="slick-next"></button>',
		});
	}
	if ($("body").width() < 401) {
		$(".sertificates__list ").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			autoplay: false,
			speed: 1000,
			prevArrow: '<button type="button" class="slick-prev"></button>',
			nextArrow: '<button type="button" class="slick-next"></button>',
		});
	}

	$(".cover-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		intinite: false,
		asNavFor: ".cover-slider-nav",
	});
	$(".cover-slider-nav").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: ".cover-slider",
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		arrows: false,
		intinite: false,
	});

	$(".header__menuopen").on("click", function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(".h-menu").slideUp();
		} else {
			$(this).addClass("active");
			$(".h-menu").slideDown();
		}
	});

	if ($("body").width() < 1201) {
		$(".h-menu__link.link-dropdown").on("click", function () {
			$(".d-menu__item span").removeClass("active");
			$(".drop-list").slideUp();
			if ($(this).hasClass("active")) {
				$(this).removeClass("active").siblings(".menu-dropdown").slideUp();
			} else {
				$(".h-menu__link.link-dropdown").removeClass("active");
				$(".menu-dropdown").slideUp();
				$(this).addClass("active").siblings(".menu-dropdown").slideDown();
			}
		});

		$(".d-menu__item span").on("click", function () {
			if ($(this).hasClass("active")) {
				$(this).removeClass("active").siblings(".drop-list").slideUp();
			} else {
				$(".d-menu__item span").removeClass("active");
				$(".drop-list").slideUp();
				$(this).addClass("active").siblings(".drop-list").slideDown();
			}
		});
	} else {
		$(".h-menu__link.link-dropdown").on("click", function () {
			$(".d-menu__item span").removeClass("active");
			if ($(this).hasClass("active")) {
				$(this).removeClass("active").siblings(".menu-dropdown").slideUp();
			} else {
				$(".h-menu__link.link-dropdown").removeClass("active");
				$(".menu-dropdown").slideUp();
				$(this).addClass("active").siblings(".menu-dropdown").slideDown();
			}
		});
	}

	$(".popup").magnificPopup({
		type: "inline",
		preloader: false,
		removalDelay: 160,
		closeOnBgClick: true,
		enableEscapeKey: true,
		fixedContentPos: true,
		showCloseBtn: false,
	});
	$(document).on("click", ".popup-close", function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
	$(".popup-gallery").each(function () {
		$(this).magnificPopup({
			delegate: "a",
			type: "image",
			tLoading: "Loading image #%curr%...",
			mainClass: "mfp-img-mobile",
			fixedContentPos: true,
			showCloseBtn: false,
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1],
			},
		});
	});

	$(function () {
		$(".phone-input").mask("+375(99) 999-99-99");
	});

	$(".m-list__head").on("click", function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(".m-list__body").slideUp();
		} else {
			$(this).addClass("active");
			$(".m-list__body").slideDown();
		}
	});
	$(".m-list__item").on("click", function () {
		$(this)
			.parent()
			.siblings(".m-list__head")
			.find("span")
			.html($(this).html());
		$(".m-list__head").removeClass("active");
		$(".m-list__body").slideUp();
	});

	$(".el-accordion__head").on("click", function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this).next(".el-accordion__body").slideUp();
		} else {
			$(this).addClass("active");
			$(this).next(".el-accordion__body").slideDown();
		}
	});

	$("ul.tabs__caption").on("click", "li:not(.active)", function () {
		$(this)
			.addClass("active")
			.siblings()
			.removeClass("active")
			.closest("div.tabs")
			.find("div.tabs__content")
			.removeClass("active")
			.eq($(this).index())
			.addClass("active");
	});

	$(".el-question__head").on("click", function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this).next(".el-question__body").slideUp();
		} else {
			$(this).addClass("active");
			$(this).next(".el-question__body").slideDown();
		}
	});
});
$(document).mouseup(function (e) {
	if (
		!$(".h-menu__item").is(e.target) &&
		$(".h-menu__item").has(e.target).length === 0
	) {
		$(".menu-dropdown").slideUp();
		$(".h-menu__link.link-dropdown").removeClass("active");
	}

	if ($("body").width() < 1201) {
		if (
			!$(".h-menu").is(e.target) &&
			$(".h-menu").has(e.target).length === 0 &&
			!$(".header__menuopen").is(e.target) &&
			$(".header__menuopen").has(e.target).length === 0
		) {
			$(".header__menuopen").removeClass("active");
			$(".h-menu").slideUp();
		}
	}
});
