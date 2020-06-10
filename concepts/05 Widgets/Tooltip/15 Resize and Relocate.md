To change the size of the **Tooltip**, specify the [height](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/height.md '/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#height') and [width](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/width.md '/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#width') options. Note that the **Tooltip**'s arrow takes its share of the overall size.

---
##### jQuery 

    <!--JavaScript-->$(function() {
        $("#tooltipContainer").dxTooltip({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            height: 70,
            width: 200,
            contentTemplate: function (contentElement) {
                contentElement.append(
                    $("<p />").text("Tooltip content")
                )
            }
        });
    });

    <!--HTML-->
    <img id="image" src="https://url/to/an/image" />
    <div id="tooltipContainer"></div>


##### Angular

    <!--HTML-->
    <img id="image" src="https://url/to/an/image" />
    <dx-tooltip
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        [height]="70"
        [width]="200">
        <div *dxTemplate="let data of 'content'">
            <p>Tooltip content</p>
        </div>
    </dx-tooltip>

    <!--TypeScript-->
    import { DxTooltipModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
                show-event="dxhoverstart"
                hide-event="dxhoverend"
                :height="70"
                :width="200">
                <template>
                    <p>Tooltip content</p>
                </template>
            </DxTooltip>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTooltip } from 'devextreme-vue/tooltip';

    export default {
        components: {
            DxTooltip
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Tooltip } from 'devextreme-react/tooltip';

    const renderContent = () => {
        return (
            <p>Tooltip content</p>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <div>
                    <img id="image" src="https://url/to/an/image" />
                    <Tooltip
                        target="#image"
                        showEvent="dxhoverstart"
                        hideEvent="dxhoverend"
                        contentRender={renderContent}
                        height={70}
                        width={200}
                    />
                </div>
            );
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Tooltip()
        .Target("#image")
        .ShowEvent("dxhoverstart")
        .HideEvent("dxhoverend")
        .ContentTemplate(@<text>
            <p>Tooltip content</p>
        </text>)
        .Height(70)
        .Width(200)
    )
    <img id="image" src="https://url/to/an/image" />

---

If you need to position the **Tooltip** against a certain side of the [target element](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/target.md '/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#target'), set the [position](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/position.md '/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#position') option.

---
##### jQuery 

    <!--JavaScript-->$(function() {
        $("#tooltipContainer").dxTooltip({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            position: "top", // or "bottom" | "left" | "right"
            contentTemplate: function (contentElement) {
                contentElement.append(
                    $("<p />").text("Tooltip content")
                )
            }
        });
    });

    <!--HTML-->
    <img id="image" src="https://url/to/an/image" />
    <div id="tooltipContainer"></div>

##### Angular

    <!--HTML-->
    <img id="image" src="https://url/to/an/image" />
    <dx-tooltip
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        position="top"> <!-- or "bottom" | "left" | "right" -->
        <div *dxTemplate="let data of 'content'">
            <p>Tooltip content</p>
        </div>
    </dx-tooltip>

    <!--TypeScript-->
    import { DxTooltipModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
                show-event="dxhoverstart"
                hide-event="dxhoverend"
                position="top"> <!-- or "bottom" | "left" | "right" -->
                <template>
                    <p>Tooltip content</p>
                </template>
            </DxTooltip>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTooltip } from 'devextreme-vue/tooltip';

    export default {
        components: {
            DxTooltip
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Tooltip } from 'devextreme-react/tooltip';

    const renderContent = () => {
        return (
            <p>Tooltip content</p>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <div>
                    <img id="image" src="https://url/to/an/image" />
                    <Tooltip
                        target="#image"
                        showEvent="dxhoverstart"
                        hideEvent="dxhoverend"
                        contentRender={renderContent}
                        position="top"/> {/* or "bottom" | "left" | "right" */}
                </div>
            );
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Tooltip()
        .Target("#image")
        .ShowEvent("dxhoverstart")
        .HideEvent("dxhoverend")
        .ContentTemplate(@<text>
            <p>Tooltip content</p>
        </text>)
        .Position(Position.Top) // or Position.Bottom | Position.Left | Position.Right
    )
    <img id="image" src="https://url/to/an/image" />

---

#####See Also#####
- [Tooltip - Customize the Content](/concepts/05%20Widgets/Tooltip/10%20Customize%20the%20Content '/Documentation/Guide/Widgets/Tooltip/Customize_the_Content/')
- [Tooltip Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tooltip/Overview)
- [Tooltip API Reference](/api-reference/10%20UI%20Widgets/dxTooltip '/Documentation/ApiReference/UI_Widgets/dxTooltip/')

[tags]tooltip, overlay, template, size, height, width, position