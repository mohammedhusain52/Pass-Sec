const AppModalContent = `<div class="container">
    <div class="row AppModal">
        
        <div class="col-md-12 col-lg-8 col-xl-8 AppModal-form">
            <div class="AppModal-form-brand">
                <img
                    class="AppModal-form-brand-name"
                    src="https://passsecurity.s3.amazonaws.com/pass-sec-black.png"
                />
            </div>
            <form class="AppModal-form-form">
                <input
                    type="text"
                    class="form-control AppModal-form-form-input"
                    placeholder="Name" name = "Name" required
                /><input
                    type="email"
                    class="form-control AppModal-form-form-input"
                    placeholder="Email Address" name = "email" required
                />
                <input
                    type="password"
                    class="form-control AppModal-form-form-input"
                    placeholder="Password" name = "password" required
                />
                <input
                    type="number"
                    class="form-control AppModal-form-form-input"
                    placeholder="Age" name = "Age" required
                />
                <input
                    type="number"
                    class="form-control AppModal-form-form-input"
                    placeholder="Contact Number" name = "contact" required
                />
                <input
                    type="text"
                    class="form-control AppModal-form-form-input"
                    placeholder="Location From" name = "LocationFrom" required
                />
                <input
                    type="text"
                    class="form-control AppModal-form-form-input"
                    placeholder="Location To" name = "LocationTO" required
                />
                
                <div class="form-group">
                <input type="file" class="form-control-file" id="exampleFormControlFile1">
              </div>
               
                <div
                    class="flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row AppModal-form-form-options"
                >
                    <button
                        class="btn btn-primary AppModal-button AppModal-options-App"
                        type="button"
                    >
                        SUBMIT</button>
                </div>
            </form>
        </div>
    </div>
</div>
`;

function loadAppModalContent(){
    $("div#application div.modal-dialog div.modal-content").empty();
    $("div#application div.modal-dialog div.modal-content").append(AppModalContent);
}

