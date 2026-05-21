(function () {
    const PAGES = {
        home: 'home_animated_cinematic_experience.html',
        solutions: 'experience_project_showcase_1.html',
        archives: 'experience_project_showcase_3.html',
        about: 'about_high_tech_contact.html',
        contact: 'initialize_connection_contact_social_links.html',
        success: 'transmission_success_animated_confirmation.html'
    };

    const ACTIVE_BY_FILE = {
        'home_animated_cinematic_experience.html': 'home',
        'experience_project_showcase_2.html': 'home',
        'experience_project_showcase_1.html': 'solutions',
        'experience_project_showcase_3.html': 'archives',
        'about_high_tech_contact.html': 'about',
        'initialize_connection_contact_social_links.html': 'contact',
        'transmission_success_animated_confirmation.html': 'contact'
    };

    const file = window.location.pathname.split('/').pop() || PAGES.home;
    const activeKey = ACTIVE_BY_FILE[file] || document.body.dataset.page || 'home';

    document.querySelectorAll('[data-nav]').forEach(function (link) {
        var key = link.getAttribute('data-nav');
        if (key === activeKey) {
            link.classList.add('site-nav-link--active');
            link.classList.remove('text-on-surface-variant');
        }
    });

    var menuBtn = document.getElementById('mobile-menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function () {
            var open = mobileMenu.classList.toggle('is-open');
            mobileMenu.classList.toggle('hidden', !open);
            menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        mobileMenu.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                mobileMenu.classList.remove('is-open');
                mobileMenu.classList.add('hidden');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    document.querySelectorAll('form[data-contact-form]').forEach(function (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            window.location.href = PAGES.success;
        });
    });
})();
