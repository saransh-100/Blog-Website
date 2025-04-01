let contactBtn = document.querySelector('.btn-contact');
let input1 = document.querySelector('.form-box-input1');
let input2 = document.querySelector('.form-box-input2');
let textArea2 = document.querySelector('.text-area-2');
let textArea1 = document.querySelector('.text-area-1');
let input3 = document.querySelector('.form-box-input');

function validateForm(event) {
    event.preventDefault();
    
    let isValid = true;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    textArea1.innerText = '';
    textArea2.innerText = '';

    if (input1.value.trim() === '') {
        textArea1.innerText = 'Please enter your name';
        textArea1.style.color = 'red';
        input1.focus();
        isValid = false;
    }
    if (input2.value.trim() === '') {
        textArea2.innerText = 'Please enter your email';
        textArea2.style.color = 'red';
        if (isValid) input2.focus();
        isValid = false;
    } else if (!emailRegex.test(input2.value.trim())) {
        textArea2.innerText = 'Please enter a valid email address';
        textArea2.style.color = 'red';
        if (isValid) input2.focus();
        isValid = false;
    }

    if (isValid) {
        input1.value = '';
        input2.value = '';
        textArea1.innerText = '';
        textArea2.innerText = '';
        input3.value = '';
        setTimeout(() => {
            alert('Form submitted successfully');
            event.target.closest('form').submit();
        }, 100);
    }
}