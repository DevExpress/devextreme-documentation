To execute certain commands before or after the **Toast** was shown/hidden, handle the [showing](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/showing.md '/Documentation/ApiReference/UI_Widgets/dxToast/Events/#showing'), [shown](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/shown.md '/Documentation/ApiReference/UI_Widgets/dxToast/Events/#shown'), [hiding](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/hiding.md '/Documentation/ApiReference/UI_Widgets/dxToast/Events/#hiding') or [hidden](/api-reference/10%20UI%20Widgets/dxOverlay/4%20Events/hidden.md '/Documentation/ApiReference/UI_Widgets/dxToast/Events/#hidden') event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the corresponding **on*EventName*** option. For example, in the following code, a handler of the **hidden** event is assigned to the [onHidden](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/onHidden.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#onHidden') option. This handler counts down from three replacing the message in the **Toast** at the same time.

---
##### jQuery

    <!--JavaScript-->$(function() {
        const counter = 3;

        $("#toastContainer").dxToast({
            message: counter,
            displayTime: 500,
            onHidden: function (e) {
                counter--;
                if (counter != 0) {
                    e.component.option("message", counter);
                } else {
                    e.component.option({
                        message: "Go!",
                        onHidden: undefined,
                        displayTime: 3000,
                        type: "success"
                    });
                }
                e.component.show();
            }
        });

        $("#buttonContainer").dxButton({
            text: "Start the Countdown", 
            onClick: function () {
                $("#toastContainer").dxToast("show");
            } 
        });
    });

##### Angular

    <!--HTML-->
    <dx-toast
        [(visible)]="isVisible"
        [displayTime]="displayTime"
        [message]="message"
        (onHidden)="onHidden($event)"
        [type]="type">
    </dx-toast>
    <dx-button
        text="Start the Countdown"
        (onClick)="isVisible = true">
    </dx-button>

    <!--TypeScript-->
    import { DxToastModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isVisible: boolean = false;
        counter: number = 3;
        displayTime: number = 500;
        type = "info";
        message: string = this.counter.toString();
        onHidden (e) {
            this.counter--;
            if (this.counter !== 0) {
                this.message = this.counter.toString();
            } else {
                this.message = "Go!";
                this.onHidden = undefined;
                this.displayTime = 3000;
                this.type = "success";
            }
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
                :visible.sync="isVisible"
                :message="message"
                :display-time="displayTime"
                @hidden="onHidden"
                :type="type"
            />
            <DxButton
                text="Start the Countdown"
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
                displayTime: 500,
                type: "info",
                counter: 3,
                message: this.counter && this.counter.toString() || "3"
            };
        },
        methods: {
            onClick() {
                this.isVisible = true;
            },
            onHidden(e) {
                this.counter--;
                if (this.counter !== 0) {
                    this.message = this.counter.toString();
                } else {
                    this.message = "Go!";
                    this.onHidden = () => {};
                    this.displayTime = 3000;
                    this.type = "success";
                }
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
                isVisible: false,
                counter: 3,
                displayTime: 500,
                type: 'info',
                message: this.counter && this.counter.toString() || "3"
            };

            this.onClick = this.onClick.bind(this);
            this.onHiding = this.onHiding.bind(this);
        }

        onClick() {
            this.setState({
                isVisible: true
            });
        }
        
        onHiding(e) {
            let counter = this.state.counter - 1;
            let message = this.state.message;
            let displayTime = this.state.displayTime;
            let type = this.state.type;

            if (counter !== 0) {
                message = counter.toString();
            } else {
                message = "Go!";
                displayTime = 3000;
                type = "success";
                this.onHiding = (() => {
                    this.setState({
                        isVisible: false
                    });
                }).bind(this);
            }

            this.setState({
                counter,
                message,
                displayTime,
                type,
                isVisible: true
            });
        }

        render() {
            return (
                <div>
                    <Toast
                        visible={this.state.isVisible}
                        message={this.state.message}
                        displayTime={this.state.displayTime}
                        onHiding={this.onHiding}
                        type={this.state.type}
                    />
                    <Button
                        text="Start the Countdown"
                        onClick={this.onClick}
                    />
                </div>
            );
        }
    }

    export default App;

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxToast/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    const hiddenEventHandler1 = function (e) {
        // First handler of the "hidden" event
    };

    const hiddenEventHandler2 = function (e) {
        // Second handler of the "hidden" event
    };

    $("#toastContainer").dxToast("instance")
        .on("hidden", hiddenEventHandler1)
        .on("hidden", hiddenEventHandler2);

#####See Also#####
#include common-link-handleevents
- [Toast - Customize the Content](/concepts/05%20Widgets/Toast/10%20Customize%20the%20Content.md '/Documentation/Guide/Widgets/Toast/Customize_the_Content/')
- [Toast - Resize and Relocate](/concepts/05%20Widgets/Toast/15%20Resize%20and%20Relocate.md '/Documentation//Guide/Widgets/Toast/Resize_and_Relocate/')
- [Toast Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Toast/Overview)
- [Toast API Reference](/api-reference/10%20UI%20Widgets/dxToast '/Documentation/ApiReference/UI_Widgets/dxToast/')