The **Toast** is a widget that provides pop-up notifications.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Toast/Overview/"
}

The **Toast** widget does not need to be created on the page before it can be shown. You can simply call the [notify(message, type, displayTime)](/api-reference/50%20Common/utils/ui/notify(message_type_displayTime).md '/Documentation/ApiReference/Common/utils/ui/#notifymessage_type_displayTime') method with values for the [message](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/message.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#message'), [type](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#type') and [displayTime](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/displayTime.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#displayTime') options passed as the arguments.

---
##### jQuery

    <!--JavaScript-->DevExpress.ui.notify("Connection problem", "error", 3000)

##### Angular

    <!--TypeScript-->
    import notify from "devextreme/ui/notify";
    // ...
    export class AppComponent {
        showToast() {
            notify("Connection problem", "error", 3000);
        }
    }
    @NgModule({
         imports: [
             // ...
         ],
         // ...
     })

##### Vue

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import notify from "devextreme/ui/notify";

    export default {
        components: {
            // ...
        },
        methods: {
            showToast() {
                notify("Connection problem", "error", 3000);
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import notify from "devextreme/ui/notify";

    class App extends React.Component {
        showToast() {
            notify("Connection problem", "error", 3000);
        }

        render() {
            return (
                {/* ... */} 
            );
        }
    }

    export default App;

---

If you need to specify other **Toast** options, call the same method, but this time [pass an object as the argument](/api-reference/50%20Common/utils/ui/notify(options_type_displayTime).md '/Documentation/ApiReference/Common/Utils/ui/#notifyoptions_type_displayTime'). In this object, you can set [any Toast option](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/').

---
##### jQuery

    <!--JavaScript-->DevExpress.ui.notify({
        message: "Connection problem",
        type: "error",
        displayTime: 3000,
        height: 100
    });

##### Angular

    <!--TypeScript-->
    import notify from "devextreme/ui/notify";
    // ...
    export class AppComponent {
        showToast() {
            notify({
                message: "Connection problem",
                type: "error",
                displayTime: 3000,
                height: 100
            });
        }
    }
    @NgModule({
         imports: [
             // ...
         ],
         // ...
     })

##### Vue

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import notify from "devextreme/ui/notify";

    export default {
        components: {
            // ...
        },
        methods: {
            showToast() {
                notify({
                    message: "Connection problem",
                    type: "error",
                    displayTime: 3000,
                    height: 100
                });
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import notify from "devextreme/ui/notify";

    class App extends React.Component {
        showToast() {
            notify({
                message: "Connection problem",
                type: "error",
                displayTime: 3000,
                height: 100
            });
        }

        render() {
            return (
                {/* ... */} 
            );
        }
    }

    export default App;

---

If you are going to reuse the **Toast**, then create it on the page using the following code. Note that in this code, the [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') widget invokes the **Toast**.

---
##### jQuery

    <!--HTML--><div id="toastContainer"></div>
    <div id="buttonContainer"></div>

    <!--JavaScript-->$(function() {
        $("#toastContainer").dxToast({
            message: "Connection problem",
            type: "error"
        });

        $("#buttonContainer").dxButton({
            text: "Show the Toast", 
            onClick: function () {
                $("#toastContainer").dxToast("show");
            } 
        });
    });

##### Angular

    <!--HTML-->
    <dx-toast
        [(visible)]="isVisible"
        type="error"
        message="Connection problem">
    </dx-toast>
    <dx-button
        text="Show the Toast"
        (onClick)="isVisible = true">
    </dx-button>

    <!--TypeScript-->
    import { DxButtonModule, DxToastModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isVisible: boolean = false;
    }
    @NgModule({
         imports: [
             DxButtonModule,
             DxToastModule,
             // ...
         ],
         // ...
     })

##### Vue

    <template>
        <div>
            <DxToast
                v-model:visible="isVisible"
                message="Connection problem"
                type="error"
            />
            <DxButton
                text="Show the Toast"
                @click="onClick"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxToast } from 'devextreme-vue/toast';
    import { DxButton } from 'devextreme-vue/button';

    export default {
        components: {
            DxToast,
            DxButton
        },
        data() {
            return {
                isVisible: false
            };
        },
        methods: {
            onClick() {
                this.isVisible = true;
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Toast } from 'devextreme-react/toast';
    import { Button } from 'devextreme-react/button';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                isVisible: false
            };

            this.onClick = this.onClick.bind(this);
            this.onHiding = this.onHiding.bind(this);
        }

        onClick() {
            this.setState({
                isVisible: true
            });
        }
        
        onHiding() {
            this.setState({
                isVisible: false
            });
        }

        render() {
            return (
                <div>
                    <Toast
                        visible={this.state.isVisible}
                        message="Connection problem"
                        type="error"
                        onHiding={this.onHiding}
                    />
                    <Button
                        text="Show the Toast"
                        onClick={this.onClick}
                    />
                </div>
            );
        }
    }

    export default App;

---

The appearance of the **Toast** is predefined by its [type](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#type'). Depending on the mood of the message that the **Toast** displays, the **type** can be *"info"*, *"warning"*, *"error"* or *"success"*. There is also the *"custom"* **type** that allows you to define a custom appearance for the **Toast**. Find more information about this in the [Customize the Content](/concepts/05%20Widgets/Toast/10%20Customize%20the%20Content.md '/Documentation/Guide/Widgets/Toast/Customize_the_Content/') article.

#####See Also#####
#include common-link-configurewidget
- [Toast - Show and Hide](/concepts/05%20Widgets/Toast/05%20Show%20and%20Hide%20the%20Toast '/Documentation/Guide/Widgets/Toast/Show_and_Hide_the_Toast/')
- [Toast - Customize the Content](/concepts/05%20Widgets/Toast/10%20Customize%20the%20Content.md '/Documentation/Guide/Widgets/Toast/Customize_the_Content/')
- [Toast - Resize and Relocate](/concepts/05%20Widgets/Toast/15%20Resize%20and%20Relocate.md '/Documentation//Guide/Widgets/Toast/Resize_and_Relocate/')
- [Toast API Reference](/api-reference/10%20UI%20Widgets/dxToast '/Documentation/ApiReference/UI_Widgets/dxToast/')

[tags]dxtoast, toast, overview, overlay