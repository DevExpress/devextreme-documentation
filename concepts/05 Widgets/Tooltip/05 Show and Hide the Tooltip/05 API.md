[note] In this article, the [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') widget is used to demonstrate how to show and hide the **Tooltip**. This choice is made for purely demonstrational purposes, and you can do the same operations using another widget following the same guidelines.

To show or hide the **Tooltip** programmatically, call the [show()](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/show().md '/Documentation/ApiReference/UI_Widgets/dxTooltip/Methods/#show') or [hide()](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/hide().md '/Documentation/ApiReference/UI_Widgets/dxTooltip/Methods/#hide') method. The same thing can be done using the [toggle(showing)](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/toggle(showing).md '/Documentation/ApiReference/UI_Widgets/dxTooltip/Methods/#toggleshowing') method. Pass **true** or **false** to this method to show or hide the **Tooltip**, respectively.

---
##### jQuery 

    <!--JavaScript-->$(function() {
		$("#tooltipContainer").dxTooltip({
            target: "#image",
            contentTemplate: function (contentElement) {
                contentElement.append(
                    $("<p />").text("Tooltip content")
                )
            }
        });

        $("#showButton").dxButton({
            text: "Show the Tooltip", 
            onClick: function () {
                $("#tooltipContainer").dxTooltip("show");
                // === or ===
                $("#tooltipContainer").dxTooltip("toggle", true);
            } 
        });

        $("#hideButton").dxButton({
            text: "Hide the Tooltip", 
            onClick: function () {
                $("#tooltipContainer").dxTooltip("hide");
                // === or ===
                $("#tooltipContainer").dxTooltip("toggle", false);
            } 
        });
    });

    <!--HTML--><img id="image" src="https://url/to/an/image" />
    <div id="tooltipContainer"></div>
    <div id="showButton"></div>
    <div id="hideButton"></div>

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Tooltip()
        .ID("tooltip")
        .Target("#image")
        .ContentTemplate(@<text>
            <p>Tooltip content</p>
        </text>)
    )
    <img id="image" src="https://url/to/an/image" />

    @(Html.DevExtreme().Button()
        .ID("showButton")
        .Text("Show the Tooltip")
        .OnClick("showTooltip")
    )

    @(Html.DevExtreme().Button()
        .ID("hideButton")
        .Text("Hide the Tooltip")
        .OnClick("hideTooltip")
    )

    <script type="text/javascript">
        function showTooltip () {
            $("#tooltip").dxTooltip("show");
            // ===== or =====
            $("#tooltip").dxTooltip("toggle", true);
        }

        function hideTooltip () {
            $("#tooltip").dxTooltip("hide");
            // ===== or =====
            $("#tooltip").dxTooltip("toggle", false);
        } 
    </script>

---

The **show()** method called without arguments shows the **Tooltip** for the [target specified beforehand](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/target.md '/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#target'). If you need to change the target once, call the [show(target)](/api-reference/10%20UI%20Widgets/dxPopover/3%20Methods/show(target).md '/Documentation/ApiReference/UI_Widgets/dxTooltip/Methods/#showtarget') method.

---
##### jQuery 

    <!--JavaScript-->$(function() {
        // ...
        $("#showButton").dxButton({
            text: "Show the Tooltip", 
            onClick: function () {
                $("#tooltipContainer").dxTooltip("show", "#newTarget");
            } 
        });
    });

##### ASP.NET MVC Controls

    <!--Razor C#-->
    // ...

    <script type="text/javascript">
        function showTooltip () {
            $("#tooltip").dxTooltip("show", "#newTarget");
        }
        // ...
    </script>

---

With Angular, Vue, or React, use a different technique. Bind the [visible](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#visible') property of the **Tooltip** widget to a component property. After that, change this component property, and the **Tooltip** will appear or disappear.

---
##### Angular

    <!--HTML-->
    <img id="image" src="https://url/to/an/image" />
    <dx-tooltip
        target="#image"
        [visible]="isTooltipVisible">
        <div *dxTemplate="let data of 'content'">
            <p>Tooltip content</p>
        </div>
    </dx-tooltip>
    <dx-button
        text="Show the Tooltip"
        (onClick)="isTooltipVisible = true">
    </dx-button>
    <dx-button
        text="Hide the Tooltip"
        (onClick)="isTooltipVisible = false">
    </dx-button>

    <!--TypeScript-->
    import { DxTooltipModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isTooltipVisible: boolean = false;
    }
    @NgModule({
        imports: [
            // ...
            DxTooltipModule
        ],
        // ...
    })

##### Vue

    <template>
        <div>
            <img id="image" src="https://url/to/an/image" />
            <DxTooltip
                target="#image"
                :visible.sync="isTooltipVisible">
                <template>
                    <p>Tooltip content</p>
                </template>
            </DxTooltip>
            <DxButton
                text="Show the Tooltip"
                @click="showTooltip"
            />
            <DxButton
                text="Hide the Tooltip"
                @click="hideTooltip"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTooltip } from 'devextreme-vue/tooltip';
    import { DxButton } from 'devextreme-vue/button';

    export default {
        components: {
            DxTooltip,
            DxButton
        },
        data() {
            return {
                isTooltipVisible: false
            }
        },
        methods: {
            showTooltip() {
                this.isTooltipVisible = true;
            },
            hideTooltip() {
                this.isTooltipVisible = false;
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Tooltip } from 'devextreme-react/tooltip';
    import { Button } from 'devextreme-react/button';

    const renderContent = () => {
        return (
            <p>Tooltip content</p>
        );
    }

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                isTooltipVisible: false
            };

            this.showTooltip = this.showTooltip.bind(this);
            this.hideTooltip = this.hideTooltip.bind(this);
        }

        showTooltip() {
            this.setState({
                isTooltipVisible: true
            });
        }

        hideTooltip() {
            this.setState({
                isTooltipVisible: false
            });
        }

        render() {
            return (
                <div>
                    <img id="image" src="https://url/to/an/image" />
                    <Tooltip
                        target="#image"
                        visible={this.state.isTooltipVisible}
                        contentRender={renderContent}
                        onHiding={this.hideTooltip}
                    />
                    <Button
                        text="Show the Tooltip"
                        onClick={this.showTooltip}
                    />
                    <Button
                        text="Hide the Tooltip"
                        onClick={this.hideTooltip}
                    />
                </div>
            );
        }
    }

    export default App;

---