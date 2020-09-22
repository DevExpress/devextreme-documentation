[note] In this article, the [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') widget is used to demonstrate how to show and hide the **Popover**. This choice is made for purely demonstrational purposes, and you can do the same operations using another widget following the same guidelines.

To show or hide the **Popover** programmatically, call the [show()](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/show().md '/Documentation/ApiReference/UI_Widgets/dxPopover/Methods/#show') or [hide()](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/hide().md '/Documentation/ApiReference/UI_Widgets/dxPopover/Methods/#hide') method. The same thing can be done using the [toggle(showing)](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/toggle(showing).md '/Documentation/ApiReference/UI_Widgets/dxPopover/Methods/#toggleshowing') method. Pass **true** or **false** to this method to show or hide the **Popover**, respectively. This approach is more typical of jQuery and ASP.NET MVC Controls.

---
##### jQuery 

    <!--JavaScript-->$(function() {
		$("#popoverContainer").dxPopover({
            target: "#image"
        });

        $("#showButton").dxButton({
            text: "Show the Popover", 
            onClick: function () {
                $("#popoverContainer").dxPopover("show");
                // ===== or =====
                $("#popoverContainer").dxPopover("toggle", true);
            } 
        });

        $("#hideButton").dxButton({
            text: "Hide the Popover", 
            onClick: function () {
                $("#popoverContainer").dxPopover("hide");
                // ===== or =====
                $("#popoverContainer").dxPopover("toggle", false);
            } 
        });
    });

    <!--HTML--><img id="image" src="https://url/to/an/image" />
    <div id="popoverContainer">
        <p>Popover content</p>
    </div>
    <div id="showButton"></div>
    <div id="hideButton"></div>

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Popover()
        .ID("popover")
        .Target("#image")
        .ContentTemplate(@<text>
            <p>Popover content</p>
        </text>)
    )
    <img id="image" src="https://url/to/an/image" />

    @(Html.DevExtreme().Button()
        .ID("showButton")
        .Text("Show the Popover")
        .OnClick("showPopover")
    )

    @(Html.DevExtreme().Button()
        .ID("hideButton")
        .Text("Hide the Popover")
        .OnClick("hidePopover")
    )

    <script type="text/javascript">
        function showPopover () {
            $("#popover").dxPopover("show");
            // ===== or =====
            $("#popover").dxPopover("toggle", true);
        }

        function hidePopover () {
            $("#popover").dxPopover("hide");
            // ===== or =====
            $("#popover").dxPopover("toggle", false);
        } 
    </script>

---

The **show()** method called without arguments shows the **Popover** for the [target specified beforehand](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/target.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#target'). If you need to change the target once, call the [show(target)](/api-reference/10%20UI%20Widgets/dxPopover/3%20Methods/show(target).md '/Documentation/ApiReference/UI_Widgets/dxPopover/Methods/#showtarget') method.

---
##### jQuery 

    <!--JavaScript-->$(function() {
        // ...
        $("#showButton").dxButton({
            text: "Show the Popover", 
            onClick: function () {
                $("#popoverContainer").dxPopover("show", "#newTarget");
            } 
        });
    });

##### ASP.NET MVC Controls

    <!--Razor C#-->
    // ...

    <script type="text/javascript">
        function showPopover () {
            $("#popover").dxPopover("show", "#newTarget");
        }
        // ...
    </script>

---

With Angular, Vue, or React, use a different technique. Bind the [visible](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#visible') property of the **Popover** widget to a component property. After that, change them, and the **Popover** will appear or disappear.

---
##### Angular

    <!--HTML-->
    <img id="image" src="https://url/to/an/image" />
    <dx-popover
        target="#image"
        [visible]="isPopoverVisible">
        <div *dxTemplate="let data of 'content'">
            <p>Popover content</p>
        </div>
    </dx-popover>
    <dx-button
        text="Show the Popover"
        (onClick)="isPopoverVisible = true">
    </dx-button>
    <dx-button
        text="Hide the Popover"
        (onClick)="isPopoverVisible = false">
    </dx-button>

    <!--TypeScript-->
    import { DxPopoverModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isPopoverVisible: boolean = false;
    }
    @NgModule({
        imports: [
            // ...
            DxPopoverModule
        ],
        // ...
    })

##### Vue
    <template>
        <div>
            <img id="image" src="https://url/to/an/image" />
            <DxPopover
                target="#image"
                :visible.sync="isPopoverVisible">
                <template>
                    <p>Popover content</p>
                </template>
            </DxPopover>
            <DxButton
                text="Show the Popover"
                @click="showPopover"
            />
            <DxButton
                text="Hide the Popover"
                @click="hidePopover"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxPopover } from 'devextreme-vue/popover';
    import { DxButton } from 'devextreme-vue/button';

    export default {
        components: {
            DxPopover,
            DxButton
        },
        data() {
            return {
                isPopoverVisible: false
            }
        },
        methods: {
            showPopover() {
                this.isPopoverVisible = true;
            },
            hidePopover() {
                this.isPopoverVisible = false;
            }
        }
    }

    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Popover } from 'devextreme-react/popover';
    import { Button } from 'devextreme-react/button';

    const renderContent = () => {
        return (
            <p>Popover content</p>
        );
    }

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                isPopoverVisible: false
            };

            this.showPopover = this.showPopover.bind(this);
            this.hidePopover = this.hidePopover.bind(this);
        }

        showPopover() {
            this.setState({
                isPopoverVisible: true
            });
        }

        hidePopover() {
            this.setState({
                isPopoverVisible: false
            });
        }

        render() {
            return (
                <div>
                    <img id="image" src="https://url/to/an/image" />
                    <Popover
                        target="#image"
                        visible={this.state.isPopoverVisible}
                        contentRender={renderContent}
                        onHiding={this.hidePopover}
                    />
                    <Button
                        text="Show the Popover"
                        onClick={this.showPopover}
                    />
                    <Button
                        text="Hide the Popover"
                        onClick={this.hidePopover}
                    />
                </div>
            );
        }
    }

    export default App;

---