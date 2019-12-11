$(function () {
    var $callbacks = $.Callbacks();
    $("#contactEmail").dxTextBox({
        mode: 'email',
        placeholder: 'Email'
    });
    $("#contactPhone").dxTextBox({
        placeholder: 'Phone number'
    });
    $("#validator").dxValidator({
        adapter: {
            getValue: function () {
                return $("#contactPhone").dxTextBox("option", "value") + $("#contactEmail").dxTextBox("option", "value");
            },
            applyValidationResults: function (result) {
                if (result.isValid) {
                    $("#contacts").css("border-width", "0px")
                } else {
                    $("#contacts").css("border-width", "1px")
                }
            },
            validationRequestsCallbacks: $callbacks
        },
        validationRules: [{
            type: "required",
            message: 'Specify your email or phone number!'
        }]
    });
    $("#summary").dxValidationSummary({});
    $("#button").dxButton({
        text: "Contact me",
        onClick: function (params) {
            var result = params.validationGroup.validate();
            if (result.isValid) {
                DevExpress.ui.notify({
                    message: "We will contact you when we have information for you.",
                    position: {
                        my: "right top",
                        at: "right top",
                        offset: "-10 10"
                    }
                }, "success", 3000);
            }
        }
    });
});