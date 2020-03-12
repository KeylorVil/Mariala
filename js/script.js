document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdowns, {});

    const sidenavs = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavs, {});

    const carousels = document.querySelectorAll('.carousel');
    const carouselInstances = M.Carousel.init(carousels, {
        fullWidth: true,
        indicators: false,
        duration: 300,
    });

    setInterval(() => {
        carouselInstances[0].next();
    }, 5000);
});