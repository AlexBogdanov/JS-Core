function validate() {
    let usernamePattern =  new RegExp('^[A-Za-z0-9]{3,20}$', 'g');
    let passwordPattern =  new RegExp('^\w{5,15}$', 'g');
    let emailPattern =  new RegExp('^.*@.*\..*$', 'g');
    let companyPattern = new RegExp('^[1-9][0-9][0-9][0-9]$', 'g');

    let usernameInput = $('#username');
    let passwordInput = $('#password');
    let confirmPasswordInput = $('#confirm-password');
    let emailInput = $('#email');
    let companyCheckBox = $('#company');
    let companyInput = $('#companyNumber');

    $(companyCheckBox).on('change', () => {
        if (companyCheckBox.length % 2 !== 0) {
            $('#companyInfo').css('display', 'inline');
        } else {
            $('#companyInfo').css('display', 'none');
        }
    });

    $('#submit').on('click', () => {
        
        if (!usernamePattern.test(usernameInput)) {
            $(usernameInput).css('border-color', 'red');
        } else {
            $(usernameInput).css('border-color', 'none');
        }

        if (!passwordPattern.test(passwordInput)) {
            $(passwordInput).css('border-color', 'red');
        } else {
            $(passwordInput).css('border-color', 'none');
        }

        if (!passwordPattern.test(confirmPasswordInput)) {
            $(confirmPasswordInput).css('border-color', 'red');
        } else {
            $(confirmPasswordInput).css('border-color', 'none');
        }

        if (!emailPattern.test(emailInput)) {
            $(emailInput).css('border-color', 'red');
        } else {
            $(emailInput).css('border-color', 'none');
        }

        if (passwordInput !== confirmPasswordInput) {
            $(passwordInput).css('border-color', 'red');
            $(confirmPasswordInput).css('border-color', 'red');
        } else {
            $(passwordInput).css('border-color', 'none');
            $(confirmPasswordInput).css('border-color', 'none');
        }

        if (companyCheckBox.length > 0) {
            if (!companyPattern.test(companyInput)) {
                $(companyInput).css('boreder-color', 'red');
            }
        }
    });
}