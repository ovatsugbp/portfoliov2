const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const sendButton = document.querySelector('#sendButton')
const contactForm = document.querySelector('#contactForm');
const inputRequired = document.querySelectorAll('.inputRequired');



window.addEventListener('load', () => {
    contactForm.addEventListener('submit', evt => {
        evt.preventDefault();
    })
})


// function formReady() {
//     function handleTyping(evt) {
//         return !!evt.target.value && evt.target.value.trim() !== '';
//     }

//     name.addEventListener('keyup', handleTyping);
//     email.addEventListener('keyup', handleTyping);
//     message.addEventListener('keyup', handleTyping);
// }

// formReady();