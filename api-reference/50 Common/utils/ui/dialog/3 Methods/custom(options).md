---
module: ui/dialog
export: custom
---
---
##### shortDescription
Creates a custom dialog.

##### param(options): Object
The dialog's options.

##### field(options.title): String
The dialog's title.

##### field(options.message): String
The dialog's message.

##### field(options.buttons): Array<Object>
Options for buttons to be displayed in the dialog.

##### field(options.showTitle): Boolean
Specifies whether to show the title.

##### return: Object
An object representing the dialog.

---
To create a custom dialog (with a custom set of buttons), call the **DevExpress.ui.dialog.custom(dialogOptions)** method. Specify configuration options for the dialog using the fields of the object passed as a parameter.

Unlike the [alert](/api-reference/50%20Common/utils/ui/dialog/3%20Methods/alert(message_title).md '/Documentation/ApiReference/Common/Utils/ui/dialog/Methods/#alertmessage_title') and [confirm](/api-reference/50%20Common/utils/ui/dialog/3%20Methods/confirm(message_title).md '/Documentation/ApiReference/Common/Utils/ui/dialog/Methods/#confirmmessage_title') methods, the **custom** method does not display the dialog. Call the **show()** method of the created dialog instance to show the dialog.

    <!--JavaScript-->var showDialog = function () {
        var myDialog = new DevExpress.ui.dialog.custom(dialogOptions);
        myDialog.show();
    };

The **show()** method returns a Promise that is resolved with the dialog result. Use the following code to obtain the dialog result.

    <!--JavaScript-->var myDialog = DevExpress.ui.dialog.custom(dialogOptions);
    myDialog.show().done(function(dialogResult){
        alert(dialogResult);
    });

[note]The dialogResult parameter passes the object returned by the click event handler of the clicked dialog button.

Use the **hide()** method to close the dialog before any button is clicked. The following code displays a dialog, and hides it if no button is clicked within 5 seconds.

    <!--JavaScript-->var showDialog = function () {
        var myDialog = DevExpress.ui.dialog.custom({
            title: "Self hiding dialog",
            message: "This dialog will close after 5 seconds",
            buttons: [{ text: "Close now" }]
        });
        myDialog.show();
        setTimeout(function () { myDialog.hide(); }, 5000);
    }

Pay attention to the recommendations given for using modality in the [Modal Contexts](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/mobilehig/Modal.html#//apple_ref/doc/uid/TP40006556-CH64-SW1) article. In certain scenarios it may be better to display a [modal view](/api-reference/40%20SPA%20Framework/Markup%20Components/dxView/1%20Configuration/modal.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#modal') instead.