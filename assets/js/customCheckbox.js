// LOGIN

$(document).on("click", '.loginModal-form-form-checkbox-custom', function() {
   $(this).siblings('.loginModal-form-form-checkbox').click();
});

$(document).on("mouseenter mouseleave", '.loginModal-form-form-checkbox-custom, .loginModal-form-form-checkbox-label', function() {
    $('.loginModal-form-form-checkbox-custom').toggleClass("customCheckboxHover");
});

// SIGNUP

$(document).on("click", '.signupModal-form-form-checkbox-custom', function() {
   $(this).siblings('.signupModal-form-form-checkbox').click();
});

$(document).on("mouseenter mouseleave", '.signupModal-form-form-checkbox-label, .signupModal-form-form-checkbox-custom', function() {
    $('.signupModal-form-form-checkbox-custom').toggleClass("customCheckboxHover");
});