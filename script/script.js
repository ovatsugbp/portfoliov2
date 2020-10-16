const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const sendButton = document.querySelector('#sendButton');
const form = document.querySelector('#contactForm');
const inputRequired = document.querySelectorAll('.inputRequired');
const status = document.querySelector('#statusForm');


window.addEventListener("load", function () {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });

    function success() {
        form.reset();
        status.classList.add('success');
        status.innerHTML = "<p>Thanks (:</p>";
    }

    function error() {
        status.classList.add('error');
        status.innerHTML = "<p>Oops! We have an error :(</p>";
    }

});

function removeSpan(e) {
    if (e.animationName !== 'status') return;
    this.classList.remove('success', 'error');
    status.innerHTML = '';
}

status.addEventListener('animationend', removeSpan);

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

const menuItems = document.querySelectorAll(".navbar-nav a[href^='#']");
menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});

function scrollToIdOnClick(event) {
    event.preventDefault();
    const section = getScrollTop(event.target);

    smoothScroll(section);
}


function smoothScroll(section) {
    // window.scroll({
    //     top: section,
    //     behavior: "smooth",
    // });
    smoothScrollTo(0, section);
}

function getScrollTop(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;

}

// 
// Smooth scroll animation
// @param {int} endX: destination x coordinate
// @param {int} endY: destination y coordinate
// @param {int} duration: animation duration in ms
//
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
}

