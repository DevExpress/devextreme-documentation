---
module: ui/dialog
export: confirm
---
---
##### shortDescription
Creates a confirm dialog that contains "Yes" and "No" buttons.

##### param(message): String
The dialog's message.

##### param(title): String
The dialog's title.

##### return: Promise<Boolean>
A Promise that is resolved with a Boolean value specifying whether the user has clicked the "Yes" or "No" button when the dialog is closed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

---
The "confirm" dialog enables you to confirm the operation you are going to complete. The dialog shows a message and suggests two choices: "Yes" and "No". Note that the confirm dialog returns a Deferred object that contains a Boolean value indicating whether a user confirmed or canceled the action. Use the following code to obtain dialog results.

    <!--JavaScript-->var showConfirm = function () {
        var result = DevExpress.ui.dialog.confirm("Are you sure?", "Confirm changes");
        result.done(function (dialogResult) {
            alert(dialogResult ? "Confirmed" : "Canceled");
        });
    };

Pay attention to the recommendations given for using modality in the [Modal Contexts](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/mobilehig/Modal.html#//apple_ref/doc/uid/TP40006556-CH64-SW1) article. In certain scenarios it may be better to display a [modal view](/api-reference/40%20SPA%20Framework/Markup%20Components/dxView/1%20Configuration/modal.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#modal') instead.