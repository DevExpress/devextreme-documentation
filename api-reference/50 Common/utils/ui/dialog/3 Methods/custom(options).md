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

##### field(options.messageHtml): String
The dialog's message. Can contain HTML elements.

##### field(options.buttons): Array<dxButton_Options>
Buttons to be displayed in the dialog.

##### field(options.showTitle): Boolean
Specifies whether to show the title. Defaults to **true**.

##### field(options.message): String
The dialog's message. Deprecated in favor of the **messageHtml** field.

##### field(options.message).deprecated
Use 'messageHtml' instead.

##### field(options.dragEnabled): Boolean
Specifies whether the dialog window can be dragged. Defaults to the **showTitle** value.        
Ensure the **showTitle** field is not explicitly set to **false** because a user can drag the dialog only by its title.

##### return: Object
An object that represents the dialog.

---
This method only creates a dialog. To display it, call the dialog instance's **show()** method. This method returns a Promise that is resolved with the dialog result. The result contains anything you return from the clicked button's [onClick](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick') function. In the following code, it is the clicked button's text:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var myDialog = DevExpress.ui.dialog.custom({
            title: "Custom dialog",
            messageHtml: "Dialog with custom buttons",
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

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent implements AfterViewInit{
        ngAfterViewInit() { 
            let myDialog = custom({
                title: "Custom dialog",
                messageHtml: "Dialog with custom buttons",
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

    <!-- tab: DxComponent.vue -->
    <template>
    </template>
    <script>
    import { custom } from 'devextreme/ui/dialog';

    export default {
        mounted: function() {
            this.$nextTick(function() {
                let myDialog = custom({
                    title: "Custom dialog",
                    messageHtml: "Dialog with custom buttons",
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

    <!-- tab: DxComponent.js -->
    import React from 'react';
    import { custom } from 'devextreme/ui/dialog';

    class DxComponent extends React.Component {
        componentDidMount() { 
            let myDialog = custom({
                title: "Custom dialog",
                messageHtml: "Dialog with custom buttons",
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
    export default DxComponent;

---

Call the **hide()** method to close the dialog before any button is clicked. In the following code, the dialog is closed after 5 seconds if a user does not click any button:

    setTimeout(function() { myDialog.hide(); }, 5000);