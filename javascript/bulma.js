 // Bulma Navbar-Toggle
        (function() {
            var burger = document.querySelector('.burger');
            var menu = document.querySelector('#' + burger.dataset.target);
            burger.addEventListener('click', function() {
                burger.classList.toggle('is-active');
                menu.classList.toggle('is-active');
            });
        })();

        // Drop Down

        $(".navbar-item.has-dropdown").click(function(e) {
            if ($(".navbar-burger").is(':visible')) {
                $(this).toggleClass("is-active");
            }
        });
        $(".navbar-item > .navbar-link").click(function(e) {
            if ($(".navbar-burger").is(':visible')) {
                e.preventDefault();
            }
        });
        $(window).resize(function(e) {
            if (!$(".navbar-burger").is(':visible') && $(".navbar-item.has-dropdown.is-active").length) {
                $(".navbar-item.has-dropdown.is-active").removeClass('is-active');
            }
        });
