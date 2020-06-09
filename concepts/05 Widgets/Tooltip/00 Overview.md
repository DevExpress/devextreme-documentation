The **Tooltip** widget displays a tooltip for a specified element on the page.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tooltip/Overview/"
}

The following code creates a simple **Tooltip** on your page and attaches it to another element (in this example, to an image).

---
##### jQuery

    <!--HTML--><img id="image" src="https://url/to/an/image" />
    <div id="tooltipContainer"></div>

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

##### Angular

    <!--HTML--><img id="image" src="https://url/to/an/image" />
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

#####See Also#####
#include common-link-configurewidget
- [Tooltip - Show and Hide](/concepts/05%20Widgets/Tooltip/05%20Show%20and%20Hide%20the%20Tooltip '/Documentation/Guide/Widgets/Tooltip/Show_and_Hide_the_Tooltip/')
- [Tooltip - Customize the Content](/concepts/05%20Widgets/Tooltip/10%20Customize%20the%20Content '/Documentation/Guide/Widgets/Tooltip/Customize_the_Content/')
- [Tooltip - Resize and Relocate](/concepts/05%20Widgets/Tooltip/15%20Resize%20and%20Relocate.md '/Documentation//Guide/Widgets/Tooltip/Resize_and_Relocate/')
- [Tooltip API Reference](/api-reference/10%20UI%20Widgets/dxTooltip '/Documentation/ApiReference/UI_Widgets/dxTooltip/')

[tags]dxtooltip, tooltip, overview, overlay