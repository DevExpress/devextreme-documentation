To specify when the Tooltip should be shown and hidden, set the [showEvent](/api-reference/10%20UI%20Components/dxPopover/1%20Configuration/showEvent '/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/showEvent/') and [hideEvent](/api-reference/10%20UI%20Components/dxPopover/1%20Configuration/hideEvent '/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/hideEvent/') properties. These properties can accept several events at once as well as an object.

---
##### jQuery 

    <!--JavaScript-->$(function() {
        $("#tooltipContainer").dxTooltip({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            contentTemplate: function (contentElement) {
                contentElement.append(
                    $("<p />").text("Tooltip content")
                )
            }
        });
    });

    <!--HTML--><img id="image" src="https://url/to/an/image" />
    <div id="tooltipContainer"></div>

##### Angular

    <!--HTML-->
    <img id="image" src="https://url/to/an/image" />
    <dx-tooltip
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend">
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
                hide-event="dxhoverend">
                <template>
                    <p>Tooltip content</p>
                </template>
            </DxTooltip>
        </div>
    </template>

    <script>
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
    )
    <img id="image" src="https://url/to/an/image" />

---

The Tooltip can also be hidden when a user clicks outside it. To control this behavior of the Tooltip, use the [hideOnOutsideClick](/api-reference/10%20UI%20Components/dxPopover/1%20Configuration/hideOnOutsideClick.md '/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#hideOnOutsideClick') property.

---
##### jQuery 

    <!--JavaScript-->$(function() {
        $("#tooltipContainer").dxTooltip({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            hideOnOutsideClick: false,
            contentTemplate: function (contentElement) {
                contentElement.append(
                    $("<p />").text("Tooltip content")
                )
            }
        });
    });

    <!--HTML--><img id="image" src="https://url/to/an/image" />
    <div id="tooltipContainer"></div>

##### Angular

    <!--HTML-->
    <img id="image" src="https://url/to/an/image" />
    <dx-tooltip
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        [hideOnOutsideClick]="false">
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
                :hide-on-outside-click="false">
                <template>
                    <p>Tooltip content</p>
                </template>
            </DxTooltip>
        </div>
    </template>

    <script>
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
                        hideOnOutsideClick={false}
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
        .HideOnOutsideClick(false)
    )
    <img id="image" src="https://url/to/an/image" />

---