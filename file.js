document.addEventListener('DOMContentLoaded', function () {

    var avatarElement = document.getElementById('avatar');

    avatarElement.addEventListener('click', function () {
        alert('Bạn đã nhấp vào ảnh đại diện');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var emailValue = document.getElementById('email').value;
        var phoneValue = document.getElementById('phone').value;

        alert('Email: ' + emailValue + '\nSDT: ' + phoneValue);
    });
});