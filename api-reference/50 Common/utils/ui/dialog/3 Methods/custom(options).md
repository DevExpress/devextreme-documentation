---
module: ui/dialog
export: custom
---
---
##### shortDescription
Creates a dialog with custom buttons.

##### param(options): Object
The dialog's options.

##### field(options.title): String
The dialog's title.

##### field(options.message): String
The dialog's message.

##### field(options.buttons): Array<dxButton_Options>
Options for buttons to be displayed in the dialog.

##### field(options.showTitle): Boolean
Specifies whether to show the title.

##### return: Object
An object representing the dialog.

---
The **custom** method only creates a dialog. To show it, call the created dialog instance's **show()** method. The method returns a Promise that is resolved with the dialog result. This result is the object returned in the clicked dialog button's [onClick](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick') function.

    <!--JavaScript-->
    function() {
        var myDialog = DevExpress.ui.dialog.custom({
            title: "Custom dialog",
            message: "Dialog with custom buttons",
            buttons: [{
                text: "button 1",
                onClick: function (e) {
                    return { buttonText: e.component.option("text"), /* ... */ }
                }
            }, 
            // ...
            ]
        });
        myDialog.show().done(function(dialogResult){
            console.log(dialogResult.buttonText); // Outputs the clicked button's text
        });
    }

Use the **hide()** method to close the dialog before any button is clicked. In the following code, the dialog is hidden after 5 seconds if a user does not click a button:

    <!--JavaScript-->function () {
        // ...
        setTimeout(function () { myDialog.hide(); }, 5000);
    }