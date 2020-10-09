const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const sendButton = document.querySelector('#sendButton')
const form = document.querySelector('#contactForm');
const inputRequired = document.querySelectorAll('.inputRequired');
const status = document.querySelector('#statusForm')

window.addEventListener("load", function () {
    function success() {
        form.reset();
        status.classList.add('success')
        status.innerHTML = "<p>Thanks (:</p>"

    }

    function error() {
        status.classList.add('error')
        status.innerHTML = "<p>Oops! We have an error :(</p>"
        form.reset();
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

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


