---
module: ui/dialog
export: confirm
---
---
##### shortDescription
Creates a confirm dialog that contains "Yes" and "No" buttons.

##### param(message): String
A string value representing the dialog message.

##### param(title): String
A string value representing the dialog title.

##### return: Promise
A JQuery Deferred object whose resolve field contains a Boolean value specifying whether the user has clicked the "Yes" or "No" button.

---
The "confirm" dialog enables you to confirm the operation you are going to complete. The dialog shows a message and suggests two choices: "Yes" and "No". Note that the confirm dialog returns a Deferred object that contains a Boolean value indicating whether a user confirmed or canceled the action. Use the following code to obtain dialog results.

    <!--JavaScript-->var showConfirm = function () {
        var result = DevExpress.ui.dialog.confirm("Are you sure?", "Confirm changes");
        result.done(function (dialogResult) {
            alert(dialogResult ? "Confirmed" : "Canceled");
        });
    };

Pay attention to the recommendations given for using modality in the [Modal Contexts](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/mobilehig/Modal.html#//apple_ref/doc/uid/TP40006556-CH64-SW1) article. In certain scenarios it may be better to display a [modal view](/api-reference/40%20SPA%20Framework/Markup%20Components/dxView/1%20Configuration/modal.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#modal') instead.