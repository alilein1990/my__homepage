(function() {
    let emailInput = document.querySelector('#email');
    let form = document.querySelector('#contact-form');

    function showErrorMessage(input, message) {
        let container = input.parentElement;
        let errorMessage = container.querySelector('.error-message');
        if (errorMessage) {
            container.removeChild(errorMessage);
        }
        if (message) {
            let errorDiv = document.createElement('div');
            errorDiv.classList.add('error-message');
            errorDiv.innerText = message;
            container.appendChild(errorDiv);
        }
    }

    function validateEmail() {
        let value = emailInput.value;

        if (!value) {
            showErrorMessage(emailInput, 'Email is a required field');
            return false;
        }

        if (value.indexOf('@') === -1 || value.indexOf('.') === -1) {
            showErrorMessage(emailInput, 'Please use a valid email address');
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;
    }

    form.addEventListener('submit', function (e){
        e.preventDefault();
        if(validateEmail()){
            alert('Thank you for your submission');
        }
    })

    emailInput.addEventListener('input', validateEmail);
})();
