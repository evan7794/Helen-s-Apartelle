(function() {
    'use strict';
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                sendInquiry();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();

function sendInquiry() {
    const loading = document.getElementById('loading');
    const buttonText = document.getElementById('buttonText');
    
    const successAlert = document.getElementById('successAlert');
    const errorAlert = document.getElementById('errorAlert');

    loading.classList.remove('d-none');
    buttonText.textContent = "Sending...";

    setTimeout(() => {
        loading.classList.add('d-none');
        buttonText.textContent = "Submit Inquiry";

        if (Math.random() > 0.5) {
            successAlert.classList.remove('d-none');
            errorAlert.classList.add('d-none');
            successAlert.classList.add('fade', 'show');
            setTimeout(() => {
                successAlert.classList.remove('show');
            }, 3000);
        } else {
            errorAlert.classList.remove('d-none');
            successAlert.classList.add('d-none');
            errorAlert.classList.add('fade', 'show');
            setTimeout(() => {
                errorAlert.classList.remove('show');
            }, 3000);
        }

        document.getElementById('inquiryForm').reset();
        document.getElementById('inquiryForm').classList.remove('was-validated');
    }, 2000);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('backToTop');
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('backToTop').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
