window.onload = function(){

    //Regular Expression

    var spaceReg = /\s/;
    var symbolsReg = /([@"'.?*+^$#])/;
    var numbersReg = /[0-9]/;
    var dotCom = /.com/;
    var mailReg = /@/;
    var subdomain = /(?<=@)[a-z]/;
    var passReg = /[a-zA-Z]/;

    var errorName = document.getElementById('error-name');
    var errorEmail = document.getElementById('error-email');
    var errorPass = document.getElementById('error-pass');
    var errorPassVal = document.getElementById('error-pass-val');
    var errorAge = document.getElementById('error-age');
    var errorPhone = document.getElementById('error-phone');
    var errorAddress = document.getElementById('error-address');
    var errorCity = document.getElementById('error-city');
    var errorPostal = document.getElementById('error-postal');
    var errorDNI = document.getElementById('error-dni');


    var checkName = document.getElementById('f-name');
    var checkEmail = document.getElementById('email');
    var checkPass = document.getElementById('pass');
    var checkPassVal = document.getElementById('pass-val');
    var checkAge = document.getElementById('age');
    var checkPhone = document.getElementById('phone');
    var checkAddress = document.getElementById('address');
    var checkCity = document.getElementById('city');
    var checkPostal = document.getElementById('postal');
    var checkDNI = document.getElementById('dni');

    var sendBtn = document.getElementById('send-button');

    //Check Regular Expression Function

    function regularCheck(a, b){
        if (a.value.match(b)){
            return 1;
        } else {
            return 0;
        }
    };

    // Check Name

    function nameListener(){
        var spaceName = regularCheck(checkName, spaceReg);
        var numbersName = regularCheck(checkName, numbersReg);
        var symbolsName = regularCheck(checkName, symbolsReg);
        if (spaceName === 0 || numbersName === 1 || symbolsName === 1 || checkName.value.lenght < 6){
            errorName.style.visibility = 'visible';
        } else {
            return 0;
        }
    }

    function errorHiddenName(){
        errorName.style.visibility = 'hidden';
    }

    checkName.addEventListener('blur', nameListener);

    checkName.addEventListener('focus', errorHiddenName);

    // Check Email

    function emailListener (){
        var emailDotCom = regularCheck(checkEmail, dotCom);
        var emailReg = regularCheck(checkEmail, mailReg);
        if (emailDotCom !== 1 || emailReg !== 1) {
            errorEmail.style.visibility = 'visible';
        } else {
            return 0;
        }
    }

    function errorHiddenEmail(){
        errorEmail.style.visibility = 'hidden';
    }

    checkEmail.addEventListener('blur', emailListener);

    checkEmail.addEventListener('focus', errorHiddenEmail);

    // Check Password

    function passListener(){
        var characterPass = regularCheck(checkPass, passReg);
        var numbersPass = regularCheck(checkPass, numbersReg);
        var symbolsPass = regularCheck(checkPass, symbolsReg);
        if (characterPass === 0 || numbersPass === 0 || symbolsPass === 1 || checkPass.value.lenght < 8){
            errorPass.style.visibility = 'visible';
        } else {
            return 0;
        }
    }

    function errorHiddenPass(){
        errorPass.style.visibility = 'hidden';
    }

    checkPass.addEventListener('blur', passListener);

    checkPass.addEventListener('focus', errorHiddenPass);

    // Re-Check Password

    function passValListener(){
        if (checkPass.value !== checkPassVal.value) {
            errorPassVal.style.visibility = 'visible';
        } else {
            return 0;
        }
    }

    function errorHiddenPassVal(){
        errorPassVal.style.visibility = 'hidden';
    }

    checkPassVal.addEventListener('blur', passValListener);

    checkPassVal.addEventListener('focus', errorHiddenPassVal);

    // Check Age

    var roundAge = Math.round(checkAge.value);

    function ageListener(){
        var numberAge = regularCheck(checkAge, numbersReg);
        if (numberAge == 0 || roundAge === checkAge.value || checkAge.value < 18) {
            errorAge.style.visibility = 'visible'
        } else {
            return 0;
        }
    }

    function errorHiddenAge(){
       errorAge.style.visibility = 'hidden'; 
    }

    checkAge.addEventListener('blur', ageListener);

    checkAge.addEventListener('focus', errorHiddenAge);

    // Check Phone

    function phoneListener(){
        var symbolPhone = regularCheck(checkPhone, symbolsReg);
        var spacePhone = regularCheck(checkPhone, spaceReg);
        if (symbolPhone == 1 || spacePhone == 1 || checkPhone.value.length <7) {
            errorPhone.style.visibility = 'visible';
        } else {
            return 0;
        }
    }

    function errorHiddenPhone(){
        errorPhone.style.visibility = 'hidden';
    }

    checkPhone.addEventListener('blur', phoneListener);

    checkPhone.addEventListener('focus', errorHiddenPhone);

    // Check Address

    function addressListener(){
        var spaceAddress = regularCheck(checkAddress, spaceReg);
        var characterAddress = regularCheck(checkAddress, passReg);
        var numberAddress = regularCheck(checkAddress, numbersReg);
        var symbolAddress = regularCheck(checkAddress, symbolsReg);
        if (spaceAddress == 0 || characterAddress == 0 || numberAddress == 0 || symbolAddress == 1) {
            errorAddress.style.visibility = 'visible';
        } else {
            return 0;
        }
    }

    function errorHiddenAddress(){
        errorAddress.style.visibility = 'hidden';
    }

    checkAddress.addEventListener('blur', addressListener);

    checkAddress.addEventListener('focus', errorHiddenAddress);

    // Check City

    function cityListener(){
        var characterCity = regularCheck(checkCity, passReg);
        var numberCity = regularCheck(checkCity, numbersReg);
        var symbolCity = regularCheck(checkCity, symbolsReg);
        if (characterCity == 0 || numberCity == 1 || symbolCity == 1 || checkCity.value.length < 3) {
            errorCity.style.visibility = 'visible';
        } else {
            return 0;
        }
    }

    function errorHiddenCity(){
        errorCity.style.visibility = 'hidden';
    }

    checkCity.addEventListener('blur', cityListener);

    checkCity.addEventListener('focus', errorHiddenCity);

    // Check Postal Code

    function postalListener(){
        var numberPostal = regularCheck(checkPostal, numbersReg);
        var characterPostal = regularCheck(checkPostal, passReg);
        var symbolPostal = regularCheck(checkPostal, symbolsReg);
        if (numberPostal == 0 || characterPostal == 1 ||symbolPostal == 1 || checkPostal.value.length <3) {
            errorPostal.style.visibility = 'visible';
        } else {
            return 0;
        }
    }

    function errorHiddenPostal(){
        errorPostal.style.visibility = 'hidden';
    }

    checkPostal.addEventListener('blur', postalListener);

    checkPostal.addEventListener('focus', errorHiddenPostal);

    // Check DNI

    function dniListener(){
        var numberDni = regularCheck(checkDNI, numbersReg);
        var characterDni = regularCheck(checkDNI, passReg);
        var symbolDni = regularCheck(checkDNI, symbolsReg);
        if (numberDni = 0 || characterDni == 1 || symbolDni == 1 || checkDNI.value.length > 8 || checkDNI.value.length < 7) {
            errorDNI.style.visibility = 'visible';
        } else {
            return 0;
        }
    }

    function errorHiddenDni(){
        errorDNI.style.visibility = 'hidden';
    }

    checkDNI.addEventListener('blur', dniListener);

    checkDNI.addEventListener('focus', errorHiddenDni);

    // Send Validation

    function validateName(){
        if (nameListener() === 0) {
            return checkName.value;
        } else {
            return 'NAME ERROR';
        }
    }

    function validateEmail(){
        if (emailListener() === 0) {
            return checkEmail.value;
        } else {
            return 'EMAIL ERROR';
        }
    }

    function validatePass(){
        if (passListener() === 0) {
            return checkPass.value;
        } else {
            return 'PASS ERROR';
        }
    }

    function validateAge(){
        if (ageListener() === 0) {
            return checkAge.value;
        } else {
            return 'AGE ERROR';
        }
    }

    function validatePhone(){
        if (phoneListener() === 0) {
            return checkPhone.value;
        } else {
            return 'PHONE ERROR';
        }
    }

    function validateAddress(){
        if (addressListener() === 0) {
            return checkAddress.value;
        } else {
            return 'ADDRESS ERROR';
        }
    }

    function validateCity(){
        if (cityListener() === 0) {
            return checkCity.value;
        } else {
            return 'CITY ERROR';
        }
    }

    function validatePostal(){
        if (postalListener() === 0) {
            return checkPostal.value;
        } else {
            return 'POSTAL CODE ERROR';
        }
    }

    function validateDni(){
        if (dniListener() === 0) {
            return checkDNI.value;
        } else {
            return 'DNI ERROR';
        }
    }

    function validateAll(){
        alert('Full Name = ' + validateName() + ' ; ' + 'Email = ' + validateEmail() + ' ; ' + 'Pass = ' + validatePass() + ' ; ' + 'Age = ' + validateAge() + ' ; ' 
            + 'Phone = ' + validatePhone() + ' ; ' + 'Address = ' + validateAddress() + ' ; ' + 'City = ' + validateCity() + ' ; ' + 'Postal Code = ' + validatePostal() + ' ; '
            + 'DNI = ' + validateDni());
    }

    sendBtn.onclick = function (){
        validateAll();
    }

    // BONUS

    var helloWorld = document.getElementById('hello');

    function addText(e){
            helloWorld.innerText = 'Hello ' + e.target.value;
    }

    checkName.addEventListener('keydown', addText);






























}

