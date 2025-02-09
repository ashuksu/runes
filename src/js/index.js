import $ from "jquery";
import "slick-carousel";

$(function () {
    $('[data-slider="container"]').each(function () {
        let $this = $(this);
        let navigation = $this.find('[data-slider="navigation"]');
        let slider = $this.find('[data-slider="slider"]');

        slider.slick({
            centerMode: true,
            slidesToShow: 4,
            arrows: true,
            prevArrow: navigation.find('.prev-arrow'),
            nextArrow: navigation.find('.next-arrow'),
            responsive: [
                {
                    breakpoint: 1450,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });

    $('[data-menu="opener"]').on('click', function () {
        let $this = $(this);
        let $menu = $('[data-menu="container"]').removeClass('open');

        $this.toggleClass('active');

        if ($this.is('.active')) {
            $menu.addClass('open');
        }
    });

    $(document).on('click touchstart', (e) => {
        if (!$(e.target).closest('[data-menu]').length) {
            $('[data-menu="opener"]').removeClass('active');
            $('[data-menu="container"]').removeClass('open');
        }

        e.stopPropagation();
    });

    $('[data-menu="link"]').on('click', function (event) {
        $('[data-menu="link"]').removeClass('active');
        let $this = $(this).addClass('active');

        let $id = $($this.attr('href'));
        let top = $('body').scrollTop() + $id.offset().top - $('.header').outerHeight();

        $('body,html').animate({scrollTop: top}, 1500);
        event.preventDefault();
    });

    // $('body').on('scroll', function () {
    //     let arr = [[],[]];
    //
    //     $('[data-menu="link"]').each(function () {
    //         let $this = $(this).removeClass('active');
    //         let $id = $($this.attr('href'));
    //         let top = $('body').scrollTop() + $id.offset().top - $('.header').outerHeight() -10;
    //         arr[0].push($this);
    //         arr[1].push(top);
    //     });
    //
    //     let index = arr[1].findIndex(element => $('body').scrollTop() <= element);
    //     index--;
    //     index = (index < 0) ? 0 : index;
    //
    //     arr[0][index].addClass('active');
    // });

    $('[data-copy]').on('click', function () {
        let $this = $(this);
        if ( copyToClipboard($this.attr('data-copy')) ) {
            $this.addClass('done');
        } else {
            $this.removeClass('done');
        }

        setTimeout(function () {
            $this.removeClass('done');
        }, 2000);
    });

    function copyToClipboard(text) {
        if (window.clipboardData && window.clipboardData.setData) {
            return window.clipboardData.setData("Text", text);
        } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
            let textarea = document.createElement("textarea");

            textarea.textContent = text;
            textarea.style.position = "fixed";
            document.body.appendChild(textarea);
            textarea.select();

            try {
                return document.execCommand("copy");
            } catch (ex) {
                return false;
            } finally {
                document.body.removeChild(textarea);
            }
        }
    }
});
