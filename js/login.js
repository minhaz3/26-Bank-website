// step-1: add click event handler with the submit button
document.getElementById('login-btn').addEventListener('click', function () {
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    // 3.a: set id on the html Element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if (email === 'frrony3@gmail.com' && password === '123456') {
        window.location.href = 'bank.html';
    }
    else {
        alert('please input the valid information');
    }
})