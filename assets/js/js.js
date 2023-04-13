// scroll to top 
const scrollTop = document.querySelector('.scroll-top');
window.addEventListener('scroll', function () {
    if (window.scrollY > 250) {
        scrollTop.style.display = 'block';
    } else {
        scrollTop.style.display = 'none';
    }
});
scrollTop.addEventListener('click', function () {
    window.scrollTo(0, 0);
});

const fadeSections = document.querySelectorAll('.fade-in');
function checkFadeSections() {
    for (let i = 0; i < fadeSections.length; i++) {
        const section = fadeSections[i];
        // khoảng cách từ đỉnh của phần tử đến đỉnh của trình duyệt.
        const sectionTop = section.getBoundingClientRect().top;
        // khoảng cách từ đáy của phần tử đến đỉnh của trình duyệt.
        const sectionBottom = section.getBoundingClientRect().bottom;

        // nếu phần tử nằm trong viewport, thêm class visible để kích hoạt animation
        if (sectionTop <= window.innerHeight && sectionBottom >= 0) {
            section.classList.add('visible');
        }
    }
}

window.addEventListener('scroll', checkFadeSections);
