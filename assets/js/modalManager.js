// LOGIN MODAL

const loginModalContent = `<div class="container">
    <div class="row loginModal">
        <div
            class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 loginModal-promo"
            style="background-color: #11151b;"
            data-dismiss="modal"
        >
            <i
                class="fas fa-arrow-left loginModal-promo-icon"
                data-dismiss="modal"
            ></i
            ><img class="loginModal-promo-illustration" src="https://passsecurity.s3.amazonaws.com/lock+and+key.png" />
        </div>
        <div class="col-md-12 col-lg-8 col-xl-8 loginModal-form">
            <div class="loginModal-form-brand">
                <img
                    class="loginModal-form-brand-name"
                    src="https://passsecurity.s3.amazonaws.com/pass-sec-black.png"
                />
            </div>
            <form class="loginModal-form-form">
                <input
                    type="text"
                    class="form-control loginModal-form-form-input"
                    placeholder="Username"
                /><input
                    type="password"
                    class="form-control loginModal-form-form-input"
                    placeholder="Password"
                />
                <div class="form-check loginModal-form-form-remember">
                    <input
                        type="checkbox"
                        id="formCheck-login"
                        class="form-check-input loginModal-form-form-checkbox"
                    /><span class="loginModal-form-form-checkbox-custom"></span
                    ><label
                        class="loginModal-form-form-checkbox-label"
                        for="formCheck-login"
                        >Remember me</label
                    >
                </div>
                <div
                    class="flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row loginModal-form-form-options"
                >
                    <button
                        class="btn btn-primary loginModal-button loginModal-options-login"
                        type="button"
                    >
                        LOGIN</button>
                </div>
            </form>
            <a class="loginModal-form-forgotPassword" href="#"
                >Forgot Password</a
            >
        </div>
    </div>
</div>
`;

function loadLoginModalContent(){
    $("div#login div.modal-dialog div.modal-content").empty();
    $("div#login div.modal-dialog div.modal-content").append(loginModalContent);
}

// SIGNUP MODAL

const signupModalContent = `<div class="container">
    <div class="row signupModal">
        <div
            class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 signupModal-promo"
            style="background-color: #11151b;"
            data-dismiss="modal"
        >
            <i
                class="fas fa-arrow-left signupModal-promo-icon"
                data-dismiss="modal"
            ></i
            ><img class="signupModal-promo-illustration" src="https://passsecurity.s3.amazonaws.com/lock+and+key.png" />
        </div>
        <div
            class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 signupModal-form"
        >
            <div class="signupModal-form-brand">
                <img
                    class="loginModal-form-brand-name"
                    src="https://passsecurity.s3.amazonaws.com/pass-sec-black.png"
                />
            </div>
            <form class="signupModal-form-form">
                <input
                    type="email"
                    class="form-control signupModal-form-form-input"
                    placeholder="Email"
                /><input
                    type="password"
                    class="form-control signupModal-form-form-input"
                    placeholder="Password"
                />
                <div class="form-check signupModal-form-form-terms">
                    <input
                        type="checkbox"
                        id="formCheck-signup"
                        class="form-check-input signupModal-form-form-checkbox"
                    /><span class="signupModal-form-form-checkbox-custom"></span
                    ><label
                        class="signupModal-form-form-checkbox-label"
                        for="formCheck-signup"
                        >Agree terms &amp; conditions<br
                    /></label>
                </div>
                <div
                    class="flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row signupModal-form-form-options"
                >
                    <button
                        class="btn btn-primary signupModal-button signupModal-options-signup"
                        type="button"
                    >
                        SIGN UP</button
                    >
                </div>
            </form>
        </div>
    </div>
</div>`;

function loadSignupModalContent(){
    $("div#signup div.modal-dialog div.modal-content").empty();
    $("div#signup div.modal-dialog div.modal-content").append(signupModalContent);
}