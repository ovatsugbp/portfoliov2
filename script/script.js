const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const sendButton = document.querySelector('#sendButton')
const form = document.querySelector('#contactForm');
const inputRequired = document.querySelectorAll('.inputRequired');
const status = document.querySelector('#statusForm')


window.addEventListener("load", function () {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });

    function success() {
        form.reset();
        status.classList.add('success')
        status.innerHTML = "<p>Thanks (:</p>"
    }

    function error() {
        status.classList.add('error')
        status.innerHTML = "<p>Oops! We have an error :(</p>"
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


