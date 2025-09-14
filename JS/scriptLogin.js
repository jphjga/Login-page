function switchCSS() {
        const link = document.getElementById('theme-style');
        const lightImg = document.getElementById('light-img');
        const darkImg = document.getElementById('dark-img');
        if (link.getAttribute('href') === 'CSS/styleLogin.css') {
            link.setAttribute('href', 'CSS/styleLogin-dark.css');
            lightImg.style.display = 'none';
            darkImg.style.display = 'block';
        } else {
            link.setAttribute('href', 'CSS/styleLogin.css');
            lightImg.style.display = 'block';
            darkImg.style.display = 'none';
        }
    }
     function showSignup() {
        document.getElementById('signin-section').style.display = 'none';
        document.getElementById('signup-section').style.display = 'block';
    }

    function showLogin() {
        document.getElementById('signup-section').style.display = 'none';
        document.getElementById('signin-section').style.display = 'block';
    }