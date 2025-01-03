document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('passwordModal');
    const passwordInput = document.getElementById('passwordInput');
    const submitBtn = document.getElementById('submitBtn');

    // 配置提示框样式
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    // 检查是否已验证过密码
    if (!sessionStorage.getItem('isVerified')) {
        modal.style.display = 'flex';
    }

    function checkPassword() {
        const password = passwordInput.value;
        if (password === '901107' || password === '931028') {
            // 密码正确
            toastr.success('Aha, welcome to the Secret Palace!');
            sessionStorage.setItem('isVerified', 'true');
            modal.style.display = 'none';
            // 移除灰度图层
            const heroOverlay = document.querySelector('.hero-overlay');
            if (heroOverlay) {
                heroOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                heroOverlay.style.transition = 'background-color 1s ease';
            }
        } else {
            // 密码错误
            toastr.error('Ops, We are not Friends');
            passwordInput.value = '';
        }
    }

    // 绑定按钮点击事件
    submitBtn.addEventListener('click', checkPassword);

    // 绑定回车键事件
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });

    // 页面加载时检查是否已验证，如果已验证则移除灰度图层
    if (sessionStorage.getItem('isVerified')) {
        const heroOverlay = document.querySelector('.hero-overlay');
        if (heroOverlay) {
            heroOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        }
    }
}); 