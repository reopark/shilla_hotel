$(function () {
    $('.be_loginbtn input[type="radio"]').on('change', function () {
        const index = $('.be_loginbtn input[type="radio"]').index(this);

        $('.be_form')
            .removeClass('on')
            .eq(index)
            .addClass('on');
    });
});

$(function() {
    $(document).on('click', '.login .login_bottom .login_form .login_tab ul li', function (e) {
        e.preventDefault();

        const index = $(this).index();

        $('.login .login_bottom .login_form .login_tab ul li').removeClass('on');
        $(this).addClass('on')

        $('.login .login_bottom .login_form .form_box').removeClass('on');
        $('.login .login_bottom .login_form .form_box').eq(index).addClass('on');

    })
})