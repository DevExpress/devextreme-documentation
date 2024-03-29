[note] In this article, the [Button](/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/') UI component is used to demonstrate how to show and hide the Popup. This choice is made for purely demonstrational purposes, and you can do the same operations using another UI component following the same guidelines.

---
##### jQuery

To show or hide the Popup programmatically, call the [show()](/api-reference/10%20UI%20Components/dxOverlay/3%20Methods/show().md '/Documentation/ApiReference/UI_Components/dxPopup/Methods/#show') or [hide()](/api-reference/10%20UI%20Components/dxOverlay/3%20Methods/hide().md '/Documentation/ApiReference/UI_Components/dxPopup/Methods/#hide') method. The same thing can be done using the [toggle(showing)](/api-reference/10%20UI%20Components/dxOverlay/3%20Methods/toggle(showing).md '/Documentation/ApiReference/UI_Components/dxPopup/Methods/#toggleshowing') method. Pass **true** or **false** to this method to show or hide the Popup, respectively.

    <!--JavaScript-->$(function() {
        $("#popupContainer").dxPopup({
            title: "Popup Title",
            contentTemplate: function () {
                return $("<p />").text("Popup content");
            }
        });
        $("#showButton").dxButton({
            text: "Show the Popup", 
            onClick: function () {
                $("#popupContainer").dxPopup("show");
                // === or ===
                $("#popupContainer").dxPopup("toggle", true);
            } 
        });
        $("#hideButton").dxButton({
            text: "Hide the Popup", 
            onClick: function () {
                $("#popupContainer").dxPopup("hide");
                // === or ===
                $("#popupContainer").dxPopup("toggle", false);
            } 
        });
    });

##### ASP.NET MVC Controls

To show or hide the Popup programmatically, call the [show()](/api-reference/10%20UI%20Components/dxOverlay/3%20Methods/show().md '/Documentation/ApiReference/UI_Components/dxPopup/Methods/#show') or [hide()](/api-reference/10%20UI%20Components/dxOverlay/3%20Methods/hide().md '/Documentation/ApiReference/UI_Components/dxPopup/Methods/#hide') method. The same thing can be done using the [toggle(showing)](/api-reference/10%20UI%20Components/dxOverlay/3%20Methods/toggle(showing).md '/Documentation/ApiReference/UI_Components/dxPopup/Methods/#toggleshowing') method. Pass **true** or **false** to this method to show or hide the Popup, respectively.

    <!--Razor C#-->
    @(Html.DevExtreme().Popup()
        .ID("popup")
        .Title("Popup Title")
        .ContentTemplate(@<text>
            <p>Popup content</p>
        </text>)
    )

    @(Html.DevExtreme().Button()
        .ID("showButton")
        .Text("Show the Popup")
        .OnClick(@<text>
            function () {
                $("#popup").dxPopup("show");
                // === or ===
                $("#popup").dxPopup("toggle", true);
            } 
        </text>)
    )

    @(Html.DevExtreme().Button()
        .ID("hideButton")
        .Text("Hide the Popup")
        .OnClick(@<text>
            function () {
                $("#popup").dxPopup("hide");
                // === or ===
                $("#popup").dxPopup("toggle", false);
            } 
        </text>)
    )

    <!--Razor VB-->@Code
        Html.DevExtreme().Popup() _
            .ID("popup") _
            .Title("Popup Title") _
            .ContentTemplate(Sub()
                @<text>
                    <p>Popup content</p>
                </text>
            End Sub).Render()
        Html.DevExtreme().Button() _
            .ID("showButton") _
            .Text("Show the Popup") _
            .OnClick("showButton_click").Render()
        Html.DevExtreme().Button() _
            .ID("hideButton") _
            .Text("Hide the Popup") _
            .OnClick("hideButton_click").Render()
    End Code

    <script>
        function showButton_click() {
            $("#popup").dxPopup("show");
            // === or ===
            $("#popup").dxPopup("toggle", true);
        }
        function hideButton_click() {
            $("#popup").dxPopup("hide");
            // === or ===
            $("#popup").dxPopup("toggle", false);
        }
    </script>

##### Angular

To show or hide the Popup programmatically, bind the [visible](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#visible') property of Popup to a component property. After that, change the latter property, and the Popup will appear or disappear.

    <!--HTML-->
    <dx-popup
        title="Popup Title"
        [(visible)]="isPopupVisible">
        <div *dxTemplate="let data of 'content'">
            <p>Popup content</p>
        </div>
    </dx-popup>
    <dx-button
        text="Show the Popup"
        (onClick)="isPopupVisible = true">
    </dx-button>
    <dx-button
        text="Hide the Popup"
        (onClick)="isPopupVisible = false">
    </dx-button>

    <!--TypeScript-->
    import { DxPopupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isPopupVisible: boolean = false;
    }
    @NgModule({
        imports: [
            // ...
            DxPopupModule
        ],
        // ...
    })

##### Vue

To show or hide the Popup programmatically, bind the [visible](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#visible') property of Popup to a component property. After that, change the latter property, and the Popup will appear or disappear.

    <template>
        <div>
            <DxPopup
                title="Popup Title"
                v-model:visible="isPopupVisible">
                <template>
                    <p>Popup content</p>
                </template>
            </DxPopup>
            <DxButton
                text="Show the Popup"
                @click="showPopup"
            />
            <DxButton
                text="Hide the Popup"
                @click="hidePopup"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxPopup } from 'devextreme-vue/popup';
    import { DxButton } from 'devextreme-vue/button';

    export default {
        components: {
            DxPopup,
            DxButton
        },
        data() {
            return {
                isPopupVisible: false
            }
        },
        methods: {
            showPopup() {
                this.isPopupVisible = true;
            },
            hidePopup() {
                this.isPopupVisible = false;
            }
        }
    }

    </script>

##### React

To show or hide the Popup programmatically, bind the [visible](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/#visible') property of Popup to a state property. After that, change the latter property, and the Popup will appear or disappear.

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Popup } from 'devextreme-react/popup';
    import { Button } from 'devextreme-react/button';

    const renderContent = () => {
        return (
            <p>Popup content</p>
        );
    };
    
    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                isPopupVisible: false
            };

            this.showPopup = this.showPopup.bind(this);
            this.hidePopup = this.hidePopup.bind(this);
        }

        showPopup() {
            this.setState({
                isPopupVisible: true
            });
        }

        hidePopup() {
            this.setState({
                isPopupVisible: false
            });
        }

        render() {
            return (
                <div>
                    <Popup
                        title="Popup Title"
                        visible={this.state.isPopupVisible}
                        contentRender={renderContent}
                        onHiding={this.hidePopup}
                    />
                    <Button
                        text="Show the Popup"
                        onClick={this.showPopup}
                    />
                    <Button
                        text="Hide the Popup"
                        onClick={this.hidePopup}
                    />
                </div>
            );
        }
    }

    export default App;

---