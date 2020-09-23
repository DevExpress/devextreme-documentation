The **Toast** widget provides four predefined appearances controlled by the [type](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#type') option. The **type** can be *"info"*, *"warning"*, *"error"* or *"success"*, depending on the mood of the message that the **Toast** displays. You can specify this message using the [message](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/message.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#message') option.

---
##### jQuery

    $(function() {
        $("#toastContainer").dxToast({
            type: "success", // or "info" | "warning" | "error"
            message: "Completed successfully!"
        });
    });

##### Angular

    <!--HTML-->
    <dx-toast
        message="Completed successfully!"
        type="success"> <!-- or "info" | "warning" | "error" -->
    </dx-toast>

    <!--TypeScript-->
    import { DxToastModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
         imports: [
             DxToastModule,
             // ...
         ],
         // ...
     })

##### Vue

    <template>
        <DxToast
            message="Completed successfully!"
            type="success"/> <!-- or "info" | "warning" -->
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxToast } from 'devextreme-vue/toast';

    export default {
        components: {
            DxToast
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Toast } from 'devextreme-react/toast';

    class App extends React.Component {
        render() {
            return (
                <Toast
                    message="Completed successfully!"
                    type="success"/> {/* or "info" | "warning" */}
            );
        }
    }

    export default App;

---

If you need to define the **Toast** content completely, specify a template for it. You can simply put this template inside the **Toast** container...

---
##### jQuery

    <!--HTML--><div id="toastContainer">
        <p style="background-color:green">Toast content</p>
    </div>

##### Angular

    <!--HTML-->
    <dx-toast>
        <div *dxTemplate="let data of 'content'">
            <p style="background-color:green">Toast content</p>
        </div>
    </dx-toast>

    <!--TypeScript-->
    import { DxToastModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
         imports: [
             DxToastModule,
             // ...
         ],
         // ...
     })

##### Vue

    <template>
        <DxToast>
            <template>
                <p style="background-color:green">Toast content</p>
            </template>
        </DxToast>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxToast } from 'devextreme-vue/toast';

    export default {
        components: {
            DxToast
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Toast } from 'devextreme-react/toast';

    const renderContent = () => {
        return (
            <p style={{backgroundColor: 'green'}}>Toast content</p>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <Toast
                    contentRender={renderContent}
                />
            );
        }
    }

    export default App;

---

... or you can combine the HTML markup for the template in the [contentTemplate](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#contentTemplate') function. Note that this function will be called only once - when the **Toast** appears for the first time. This approach is more typical of jQuery.

    <!--JavaScript-->$(function() {
        $("#toastContainer").dxToast({
            type: "custom",
            contentTemplate: function () {
                return $("<p />").text("Toast content")
                                 .css("background-color", "green");
            }
        });
    });

[note]To avoid rendering issues, always set the [type](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#type') option to *"custom"* when you use a custom template.

If you need to render different templates depending on a specific condition, define them inside the **Toast** container using the DevExtreme [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. To switch the templates on-the-fly, change the value of the [contentTemplate](/api-reference/10%20UI%20Widgets/dxToast/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#contentTemplate') option.

---
##### jQuery

    <!--HTML--><div id="toastContainer">
        <div data-options="dxTemplate: { name: 'green' }">
            <p style="background-color:green">Green template</p>
        </div>
        <div data-options="dxTemplate: { name: 'blue' }">
            <p style="background-color:blue">Blue template</p>
        </div>
    </div>
    <div id="buttonContainer"></div>

    <!--JavaScript-->$(function() {
        const toast = $("#toastContainer").dxToast({
            type: "custom",
            contentTemplate: 'green'
        }).dxToast("instance");

        $("#buttonContainer").dxButton({
            text: "Change the Toast Template", 
            onClick: function (e) {
                if (toast.option("contentTemplate") == "green") {
                    toast.option("contentTemplate", "blue");
                } else {
                    toast.option("contentTemplate", "green");
                }
                toast.show();
            } 
        });
    });

##### Angular

    <!--HTML-->
    <dx-toast
        type="custom"
        [(visible)]="isVisible"
        [contentTemplate]="contentTemplate">
        <div *dxTemplate="let data of 'green'">
            <p style="background-color:green">Green template</p>
        </div>
        <div *dxTemplate="let data of 'blue'">
            <p style="background-color:blue">Blue template</p>
        </div>
    </dx-toast>
    <dx-button
        text="Change the Toast Template"
        (onClick)="onClick($event)">
    </dx-button>

    <!--TypeScript-->
    import { DxToastModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isVisible: boolean = false;
        contentTemplate: string = "green";
        onClick () {
            this.contentTemplate = this.contentTemplate == "green" ? "blue" : "green";
            this.isVisible = true;
        }
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
                type="custom"
                v-model:visible="isVisible"
                :contentTemplate="contentTemplate">
                <template #green>
                    <p style="background-color:green">Green template</p>
                </template>
                <template #blue>
                    <p style="background-color:blue">Blue template</p>
                </template>
            </DxToast>
            <DxButton
                text="Change the Toast Template"
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
                isVisible: false,
                contentTemplate: "green"
            };
        },
        methods: {
            onClick() {
                this.contentTemplate = this.contentTemplate === "green" ? "blue" : "green";
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

    const greenTemplate = () => {
        return (
            <p style={{backgroundColor: 'green'}}>Green template</p>
        );
    }

    const blueTemplate = () => {
        return (
            <p style={{backgroundColor: 'blue'}}>Blue template</p>
        );
    }

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                isVisible: false,
                renderContent: greenTemplate
            };

            this.onClick = this.onClick.bind(this);
            this.onHiding = this.onHiding.bind(this);
        }

        onClick() {
            this.setState({
                isVisible: true,
                renderContent: this.state.renderContent === greenTemplate ? blueTemplate : greenTemplate
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
                        type="custom"
                        visible={this.state.isVisible}
                        contentRender={this.state.renderContent}
                        onHiding={this.onHiding}
                    />
                    <Button
                        text="Change the Toast Template"
                        onClick={this.onClick}
                    />
                </div>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Toast - Resize and Relocate](/concepts/05%20Widgets/Toast/15%20Resize%20and%20Relocate.md '/Documentation//Guide/Widgets/Toast/Resize_and_Relocate/')
- [Toast Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Toast/Overview)
- [Toast API Reference](/api-reference/10%20UI%20Widgets/dxToast '/Documentation/ApiReference/UI_Widgets/dxToast/')

[tags]toast, overlay, template, customize the content, content template