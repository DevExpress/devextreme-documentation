[note] In this article, the [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') widget is used to demonstrate how to show and hide the **Toast**. This choice is made for purely demonstrational purposes, and you can do the same operations using another widget following the same guidelines.

To show or hide the **Toast** programmatically, call the [show()](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/show().md '/Documentation/ApiReference/UI_Widgets/dxToast/Methods/#show') or [hide()](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/hide().md '/Documentation/ApiReference/UI_Widgets/dxToast/Methods/#hide') method. The same thing can be done using the [toggle(showing)](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/toggle(showing).md '/Documentation/ApiReference/UI_Widgets/dxToast/Methods/#toggleshowing') method. Pass **true** or **false** to this method to show or hide the **Toast**, respectively.

    <!--JavaScript-->$(function() {
        $("#toastContainer").dxToast({
            message: "Connection problem",
            type: "error"
        });

        $("#buttonContainer").dxButton({
            text: "Show the Toast", 
            onClick: function () {
                $("#toastContainer").dxToast("show");
                // ---------- or ----------
                $("#toastContainer").dxToast("toggle", true);
            } 
        });
    });

With Angular, Vue, or React, use a different technique. Bind the [visible](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#visible') property of the **Toast** widget to a component property. After that, change this property, and the **Toast** will appear or disappear.

---
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
    import { DxToastModule, DxButtonModule } from "devextreme-angular";
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