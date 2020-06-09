When the **Popover** is shown, the area beneath it can be shaded. To enable this behavior, assign **true** to the [shading](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/shading.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#shading') option. The shading color is specified by the [shadingColor](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/shadingColor.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#shadingColor') option.

---
##### jQuery 

    <!--JavaScript-->$(function() {
		$("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            shading: true,
            shadingColor: "rgba(0, 0, 0, 0.2)"
        });
    });

    <!--HTML--><img id="image" src="https://url/to/an/image" />
    <div id="popoverContainer">
        <p>Popover content</p>
    </div>

##### Angular

    <!--HTML-->
    <img id="image" src="https://url/to/an/image" />
    <dx-popover
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        [shading]="true"
        shadingColor="rgba(0, 0, 0, 0.2)">
        <div *dxTemplate="let data of 'content'">
            <p>Popover content</p>
        </div>
    </dx-popover>

    <!--TypeScript-->
    import { DxPopoverModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
                show-event="dxhoverstart"
                hide-event="dxhoverend"
                :shading="true"
                shadingColor="rgba(0, 0, 0, 0.2)">
                <template>
                    <p>Popover content</p>
                </template>
            </DxPopover>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxPopover } from 'devextreme-vue/popover';

    export default {
        components: {
            DxPopover
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Popover } from 'devextreme-react/popover';

    const renderContent = () => {
        return (
            <p>Popover content</p>
        );
    };

    class App extends React.Component {
        render() {
            return (
                <div>
                    <img id="image" src="https://url/to/an/image" />
                    <Popover
                        target="#image"
                        showEvent="dxhoverstart"
                        hideEvent="dxhoverend"
                        contentRender={renderContent}
                        shading={true}
                        shadingColor="rgba(0, 0, 0, 0.2)"
                    />
                </div>
            );
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Popover()
        .Target("#image")
        .ShowEvent("dxhoverstart")
        .HideEvent("dxhoverend")
        .ContentTemplate(@<text>
            <p>Popover content</p>
        </text>)
        .Shading(true)
        .ShadingColor("rgba(0, 0, 0, 0.2)")
    )
    <img id="image" src="https://url/to/an/image" />

---

#####See Also#####
- [Popover - Customize the Content](/concepts/05%20Widgets/Popover/05%20Customize%20the%20Appearance/05%20Customize%20the%20Content '/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/')
- [Popover - Customize the Title](/concepts/05%20Widgets/Popover/05%20Customize%20the%20Appearance/10%20Customize%20the%20Title.md '/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Title/')
- [Popover - Specify Toolbar Items](/concepts/05%20Widgets/Popover/05%20Customize%20the%20Appearance/20%20Specify%20Toolbar%20Items.md '/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Specify_Toolbar_Items/')
- [Popover Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popover/Overview)

[tags]popover, overlay, shading, background, shading color