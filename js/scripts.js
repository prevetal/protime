$(() => {
	// Ширина окна для ресайза
	WW = $(window).width()


	// Слайдер в самом верху
	if ($('.top_slider .swiper').length) {
		new Swiper('.top_slider .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 25,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// Основной слайдер на главной
	if ($('.main_slider .swiper').length) {
		const mainSlider = new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			autoHeight: true,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})

		// Отслеживание в экране
		const mainSliderBlock = document.querySelectorAll('.main_slider')

		function mainSliderTracking(entries) {
			for (const entry of entries) {

				if (entry.intersectionRatio >= 0.9) {
					mainSlider.params.autoHeight = true
					mainSlider.updateAutoHeight(10)
				} else {
					mainSlider.params.autoHeight = false
				}
			}
		}

		const mainSliderObserver = new IntersectionObserver(mainSliderTracking, {
			threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
		})

		mainSliderBlock.forEach(element => mainSliderObserver.observe(element))
	}


	// Акции
	if ($('.stocks .swiper').length) {
		new Swiper('.stocks .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})
	}


	// Промо товары
	if ($('.promo_collection .swiper').length) {
		new Swiper('.promo_collection .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})
	}


	// Промо бренд
	if ($('.promo_brands').length) {
		new Swiper('.promo_brands > .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})

		new Swiper('.promo_brands .images .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			nested: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})
	}


	// Карусель товаров
	const productsSliders = []

	$('.products_slider .swiper').each(function (i) {
		$(this).addClass('products_s' + i)

		let options = {
			loop: true,
			speed: 500,
			spaceBetween: 0,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				},
				1280: {
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)

						setHeight($(swiper.$el).find('.swiper-slide'))
						setHeight($(swiper.$el).find('.product .name'))
						setHeight($(swiper.$el).find('.product .desc'))
					})
				},
				resize: swiper => {
					$(swiper.$el).find('.swiper-slide, .product .name, .product .desc').height('auto')

					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)

						setHeight($(swiper.$el).find('.swiper-slide'))
						setHeight($(swiper.$el).find('.product .name'))
						setHeight($(swiper.$el).find('.product .desc'))
					})
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// В поиске чего-то особенного?
	if ($('.new_categories .swiper').length) {
		new Swiper('.new_categories .swiper', {
			loop: true,
			speed: 500,
			spaceBetween: 0,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				480: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				},
				1440: {
					slidesPerView: 5
				}
			}
		})
	}


	// Галерея
	if ($('.gallery .swiper').length) {
		new Swiper('.gallery .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})
	}


	// Карусель новостей
	const newsSliders = []

	$('.news .swiper').each(function (i) {
		$(this).addClass('news_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 4
				},
				1440: {
					spaceBetween: 50,
					slidesPerView: 4
				},
				1900: {
					spaceBetween: 100,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight()
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight()
						)
					})
				}
			}
		}

		newsSliders.push(new Swiper('.news_s' + i, options))
	})


	// Слайдер в карточках товаров
	if ($('.products .product .swiper').length) {
		new Swiper('.products .product .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			nested: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})
	}


	// Слайдер брендов
	if ($('.brands_slider .swiper').length) {
		const brandsSlider = new Swiper('.brands_slider .swiper', {
			loop: true,
			speed: 750,
			autoHeight: true,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})

		// Отслеживание в экране
		const brandsSliderBlock = document.querySelectorAll('.brands_slider')

		function brandsSliderTracking(entries) {
			for (const entry of entries) {

				if (entry.intersectionRatio >= 0.9) {
					brandsSlider.params.autoHeight = true
					brandsSlider.updateAutoHeight(10)
				} else {
					brandsSlider.params.autoHeight = false
				}
			}
		}

		const brandsSliderObserver = new IntersectionObserver(brandsSliderTracking, {
			threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
		})

		brandsSliderBlock.forEach(element => brandsSliderObserver.observe(element))
	}


	// Категории по типу
	const typesSliders = []

	$('.types .swiper').each(function (i) {
		$(this).addClass('types_s' + i)

		let options = {
			loop: false,
			speed: 500,
			spaceBetween: 0,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1280: {
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		typesSliders.push(new Swiper('.types_s' + i, options))
	})


	// Плавная прокрутка к якорю
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				document.getElementById(anchor).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				}, 1000)
			})
		})
	}


	// Инфо. блок
	if ($('.info_block .swiper').length) {
		new Swiper('.info_block .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})
	}


	// Инфо. слайдер
	if ($('.info_slider .swiper').length) {
		new Swiper('.info_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})
	}


	// Страница товара
	$('.product_data .head').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.item')

		$(this).toggleClass('active')
		parent.find('.data').slideToggle(300)
	})


	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			direction: 'vertical',
			breakpoints: {
				0: {
					spaceBetween: 16
				},
				1430: {
					spaceBetween: 27
				},
				1900: {
					spaceBetween: 40
				}
			},
		})

		const productSlider = new Swiper('.product_info .big .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			preloadImages: false,
			navigation: {
				nextEl: '.product-swiper-button-next',
				prevEl: '.product-swiper-button-prev'
			},
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			thumbs: {
				swiper: productThumbs
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})
	}

	// Zoom
	if (window.outerWidth > 1023) {
		$('a.zoom').each(function (e) {
			$(this).zoom({
				url: $(this).attr('href')
			})
		})
	}


	// История
	if ($('.history .swiper').length) {
		new Swiper('.history .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 'auto',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			on: {
				activeIndexChange: swiper => {
					setTimeout(() => {
						let year = $(swiper.$el).find('.swiper-slide.active .item').data('year')

						$('.history .data').removeClass('show')
						$('.history .data[data-year=' + year + ']').addClass('show')
					})
				}
			}
		})

		$('.history .item').click(function (e) {
			e.preventDefault()

			let year = $(this).data('year')

			$('.history .swiper-slide').removeClass('active')
			$(this).closest('.swiper-slide').addClass('active')

			$('.history .data').removeClass('show')
			$('.history .data[data-year=' + year + ']').addClass('show')
		})
	}


	// Сылки в шапке категории
	if ($('.page_head .links .swiper').length) {
		new Swiper('.page_head .links .swiper', {
			loop: false,
			speed: 500,
			spaceBetween: 0,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					slidesPerView: 'auto'
				},
				480: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 4
				},
				1024: {
					slidesPerView: 6
				},
				1280: {
					slidesPerView: 7
				}
			}
		})
	}


	// Слайдер в контактах
	if ($('.contacts_info .image .swiper').length) {
		new Swiper('.contacts_info .image .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})
	}


	// Товар в избранное
	$('.product .favorite_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Товар в корзину
	$('.product .cart_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Боковая колонка - Фильтр
	$('.filter_btn, aside .mob_close_btn').click(function (e) {
		e.preventDefault()

		$('.filter_btn').toggleClass('active')
		$('.content_flex').toggleClass('hide')

		if (window.outerWidth < 1024) {
			$('body').toggleClass('menu_open')
		}

		if (window.outerWidth > 1023) {
			$('.sticky').stick_in_parent({
				// recalc_every: true
			})
		}
	})


	$('.mob_filter_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	$('aside .filter .name').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.item')

		$(this).toggleClass('active')
		parent.find('.data').slideToggle(300)
	})


	$('.products_head .mob_view .one_btn').click(function (e) {
		e.preventDefault()

		$('.products_head .mob_view .btn').removeClass('active')
		$(this).addClass('active')

		$('.products .row').removeClass('two')
	})

	$('.products_head .two_btn').click(function (e) {
		e.preventDefault()

		$('.products_head .mob_view .btn').removeClass('active')
		$(this).addClass('active')

		$('.products .row').addClass('two')
	})


	$priceRange = $('.filter #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 500000,
		from: 50000,
		to: 290000,
		step: 100,
		onChange: function (data) {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())
		},
		onUpdate: data => {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())
		}
	}).data("ionRangeSlider")

	$('.filter .price_range .input').keyup(function () {
		$priceRange.update({
			from: parseInt($('.filter .price_range input.from').val().replace(/\s/g, '')),
			to: parseInt($('.filter .price_range input.to').val().replace(/\s/g, ''))
		})
	})


	// Фиксация блока
	$('.sticky_kit').stick_in_parent({
		recalc_every: true
	})


	// Оформление заказа
	$('.checkout_info .promocode label').click(function (e) {
		let _self = $(this)

		setTimeout(function () {
			_self.find('input').prop('checked')
				? $('.checkout_info .promocode .data').addClass('show')
				: $('.checkout_info .promocode .data').removeClass('show')
		})
	})

	$('.checkout_info .methods label').click(function (e) {
		let parent = $(this).closest('.section'),
			info = $(this).data('info')

		parent.find('.method_info').hide()
		parent.find('.' + info).fadeIn(300)
	})

	$('.checkout_info .entity > label').click(function (e) {
		let _self = $(this)

		setTimeout(function () {
			_self.find('input').prop('checked')
				? $('.checkout_info .entity .info').addClass('show')
				: $('.checkout_info .entity .info').removeClass('show')
		})
	})


	// Личный кабинет
	$('.lk_info .orders .order .head').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.order')

		parent.toggleClass('active').find('.cart_info').slideToggle(300)
	})


	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Изменение количества товара
	$('body').on('click', '.amount .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal > minimum) $input.val(inputVal - step + unit)
	})

	$('body').on('click', '.amount .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal < maximum) $input.val(inputVal + step + unit)
	})

	$('.amount .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// Моб. подвал
	if (window.outerWidth < 768) {
		$('footer .info .title').click(function (e) {
			e.preventDefault()

			if (!$(this).hasClass('active')) {
				$('footer .info .title').removeClass('active')
				$('footer .links .items').slideUp(300)

				$(this).toggleClass('active').next().slideToggle(300)
			} else {
				$('footer .info .title').removeClass('active')
				$('footer .links .items').slideUp(300)
			}
		})
	}


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>',
		spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		main: null
	}

	// Всплывающие окна
	$('body').on('click', '.modal_btn', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: $(this).data('modal'),
			type: 'inline'
		}])
	})

	$('body').on('click', '.modal .close_btn', function (e) {
		e.preventDefault()

		Fancybox.close()
	})

	// Увеличение картинки
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	// Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs button', function (e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			const $parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				$activeTabContent = $(activeTab),
				level = $(this).data('level')

			$parent.find('.tabs:first button').removeClass('active')
			$parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			$activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		const $activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			$activeTabContent = $(locationHash),
			$parent = $activeTab.closest('.tabs_container'),
			level = $activeTab.data('level')

		$parent.find('.tabs:first button').removeClass('active')
		$parent.find('.tab_content.' + level).removeClass('active')

		$activeTab.addClass('active')
		$activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Мини всплывающие окна
	$('.mini_modal_btn').click(function (e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	// Моб. меню
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('header .mob_close_btn, .overlay').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('header').removeClass('show')
		$('.overlay').fadeOut(300)
	})


	// Кнопка 'Вверх'
	$('.buttonUp button').click((e) => {
		e.preventDefault()

		$('body, html').stop(false, false).animate({ scrollTop: 0 }, 1000)
	})


	// Маска ввода
	$('input[type=tel]').inputmask('+7 (999) 999-99-99')

	// Кастомный select
	$('select').niceSelect()

	// Выбор файла
	$('body').on('change', '.form input[type=file]', function (e) {
		$(this).closest('.file').find('label .path').text($(this).val())
	})


	if (is_touch_device()) {
		// Подменю на тач скрине
		$('header .menu_item > a.sub_link').addClass('touch_link')

		$('header .menu_item > a.sub_link').click(function (e) {
			e.preventDefault()

			const $dropdown = $(this).next()

			if (!$dropdown.hasClass('show')) {
				$('header .menu .sub_menu').removeClass('show')
				$dropdown.addClass('show')

				$('header .mob_scroll').scrollTop(0)

				$('body').css('cursor', 'pointer')
			} else {
				$('header .menu .sub_menu').removeClass('show')
				$dropdown.removeClass('show')

				$('body').css('cursor', 'default')
			}
		})

		// Закрываем под. меню при клике за её пределами
		$(document).click((e) => {
			if ($(e.target).closest('.menu').length === 0) {
				$('header .menu .sub_menu').removeClass('show')

				$('body').css('cursor', 'default')
			}
		})


		// Закрытие моб. меню свайпом справо на лево
		let ts

		$('body').on('touchstart', (e) => { ts = e.originalEvent.touches[0].clientX })

		$('body').on('touchend', (e) => {
			let te = e.originalEvent.changedTouches[0].clientX

			if ($('body').hasClass('menu_open') && ts > te + 50) {
				// Свайп справо на лево
				$('.mob_header .mob_menu_btn').removeClass('active')
				$('body').removeClass('menu_open')
				$('header').removeClass('show')
				$('.overlay').fadeOut(300)
			} else if (ts < te - 50) {
				// Свайп слева на право
			}
		})
	}


	// Отправка форм
	$('.form').submit(function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#success_modal',
			type: 'inline'
		}])
	})


	// Бренды
	brandsSlider()
})



$(window).on('load', () => {
	// Фикс. шапка
	headerInit = true,
		headerHeight = $('header').outerHeight(),
		offsetTop = $(window).scrollTop()

	$('header').wrap('<div class="header_wrap"></div>')
	$('.header_wrap').height(headerHeight)

	headerInit && $(window).scrollTop() > headerHeight
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')
})



$(window).on('scroll', () => {
	// Кнопка 'Вверх'
	$(window).scrollTop() > $(window).innerHeight()
		? $('.buttonUp').fadeIn(300)
		: $('.buttonUp').fadeOut(200)

	// Фикс товар
	$(window).scrollTop() > $(window).innerHeight()
		? $('.fixed_product_info').fadeIn(300)
		: $('.fixed_product_info').fadeOut(200)

	// Фикс. шапка
	typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > headerHeight
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')

	if (typeof offsetTop !== 'undefined') {
		$(window).scrollTop() < offsetTop && $(window).scrollTop() > headerHeight
			? $('header').addClass('fixed_show')
			: $('header').removeClass('fixed_show')

		offsetTop = $(window).scrollTop()
	}
})



$(window).on('resize', () => {
	if (typeof WW !== 'undefined' && WW != $(window).width()) {
		// Моб. версия
		if (!firstResize) {
			$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
			if ($(window).width() < 375) $('meta[name=viewport]').attr('content', 'width=375, user-scalable=no')

			firstResize = true
		} else {
			firstResize = false
		}


		// Бренды
		brandsSlider()


		// Фикс. шапка
		headerInit = false
		$('.header_wrap').height('auto')

		setTimeout(() => {
			headerInit = true
			headerHeight = $('header').outerHeight()

			$('.header_wrap').height(headerHeight)

			headerInit && $(window).scrollTop() > headerHeight
				? $('header').addClass('fixed')
				: $('header').removeClass('fixed')
		}, 100)


		// Перезапись ширины окна
		WW = $(window).width()
	}
})



// Бренды
brandsSliders = []

function brandsSlider() {
	if (window.outerWidth < 1279) {
		if ($('.brands .row').length) {
			$('.brands .row > *').addClass('swiper-slide')
			$('.brands .row').addClass('swiper-wrapper').removeClass('row')

			$('.brands .swiper').each(function (i) {
				$(this).addClass('brands_s' + i)

				let options = {
					loop: false,
					speed: 500,
					spaceBetween: 24,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					slidesPerView: 'auto'
				}

				brandsSliders.push(new Swiper('.brands_s' + i, options))
			})
		}
	} else {
		brandsSliders.forEach(element => element.destroy(true, true))

		brandsSliders = []

		$('.brands .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.brands .row > *').removeClass('swiper-slide')
	}
}