---
id: ui.dialog.custom(options)
module: ui/dialog
export: custom
---
---
##### shortDescription
Creates a dialog with custom buttons.

##### return: Object
An object that represents the dialog.

##### param(options): Object
The dialog's options.

##### field(options.buttons): Array<dxButton_Options>
Buttons to be displayed in the dialog.

##### field(options.dragEnabled): Boolean
Specifies whether the dialog window can be dragged. Defaults to the **showTitle** value.        
Ensure the **showTitle** field is not explicitly set to **false** because a user can drag the dialog only by its title.

##### field(options.message).deprecated
Use 'messageHtml' instead.

##### field(options.message): String
The dialog's message. Deprecated in favor of the **messageHtml** field.

##### field(options.messageHtml): String
The dialog's message. Can contain HTML elements.

##### field(options.showTitle): Boolean
Specifies whether to show the title. Defaults to **true**.

##### field(options.title): String
The dialog's title.

---
The **custom(options)** method only creates a dialog. To display it, call the dialog instance's **show()** method. This method returns a Promise that is resolved with the dialog result. The result contains anything you return from the clicked button's [onClick](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick') function. In the following code, it is the clicked button's text. If the message contains HTML tags, encode it as shown in the following example:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var encodedMessage = DevExpress.utils.string.encodeHtml("<b>Dialog with custom buttons</b>");
        var myDialog = DevExpress.ui.dialog.custom({
            title: "Custom dialog",
            messageHtml: encodedMessage,
            buttons: [{
                text: "button 1",
                onClick: function(e) {
                    return { buttonText: e.component.option("text") }
                }
            }, 
            // ...
            ]
        });
        myDialog.show().done(function(dialogResult) {
            console.log(dialogResult.buttonText);
        });
    })

#####Angular

    <!-- tab: app.component.ts -->
    import { Component, AfterViewInit } from '@angular/core';
    import { custom } from 'devextreme/ui/dialog';
    import { encodeHtml } from 'devextreme/core/utils/string';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent implements AfterViewInit {
        ngAfterViewInit() { 
            let encodedMessage = encodeHtml("<b>Dialog with custom buttons</b>");
            let myDialog = custom({
                title: "Custom dialog",
                messageHtml: encodedMessage,
                buttons: [{
                    text: "button 1",
                    onClick: (e) => {
                        return { buttonText: e.component.option("text") }
                    }
                }, 
                // ...
                ]
            });
            myDialog.show().then((dialogResult) => {
                console.log(dialogResult.buttonText);
            });
        }
    }

#####Vue

    <!-- tab: App.vue -->
    <template>
    </template>
    <script>
    import { custom } from 'devextreme/ui/dialog';
    import { encodeHtml } from 'devextreme/core/utils/string';

    export default {
        mounted: function() {
            this.$nextTick(function() {
                let encodedMessage = encodeHtml("<b>Dialog with custom buttons</b>");
                let myDialog = custom({
                    title: "Custom dialog",
                    messageHtml: encodedMessage,
                    buttons: [{
                        text: "button 1",
                        onClick: (e) => {
                            return { buttonText: e.component.option("text") }
                        }
                    }, 
                    // ...
                    ]
                });
                myDialog.show().then((dialogResult) => {
                    console.log(dialogResult.buttonText);
                });
            })
        }
    }
    </script>

#####React

    <!-- tab: App.js -->
    import React from 'react';
    import { custom } from 'devextreme/ui/dialog';
    import { encodeHtml } from 'devextreme/core/utils/string';

    class App extends React.Component {
        componentDidMount() { 
            let encodedMessage = encodeHtml("<b>Dialog with custom buttons</b>");
            let myDialog = custom({
                title: "Custom dialog",
                messageHtml: encodedMessage,
                buttons: [{
                    text: "button 1",
                    onClick: (e) => {
                        return { buttonText: e.component.option("text") }
                    }
                }, 
                // ...
                ]
            });
            myDialog.show().then((dialogResult) => {
                console.log(dialogResult.buttonText);
            });
        }
    }
    export default App;

---

Call the **hide()** method to close the dialog before any button is clicked. In the following code, the dialog is closed after 5 seconds if a user does not click any button:

    setTimeout(function() { myDialog.hide(); }, 5000);