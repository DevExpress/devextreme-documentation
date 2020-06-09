The **Popover** is a widget that shows notifications within a box with an arrow pointing to a specified UI element.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popover/Overview/"
}

The following code creates a simple **Popover** on your page and attaches it to another element (in this example, to an image).

---
##### jQuery

    <!--HTML--><img id="image" src="https://url/to/an/image" />
    <div id="popoverContainer">
        <p>Popover content</p>
    </div>

    <!--JavaScript-->
    $(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend'
        });
    });

##### Angular

    <!--HTML--><img id="image" src="https://url/to/an/image" />
    <dx-popover
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend">
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
                hide-event="dxhoverend">
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
    )
    <img id="image" src="https://url/to/an/image" />

---

There are several ways to specify the content of the **Popover**. Learn more in the [Customize the Content](/concepts/05%20Widgets/Popover/05%20Customize%20the%20Appearance/05%20Customize%20the%20Content '/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/') article. The **Popover** can also be displayed with a title and toolbars. For detailed information, see the [Customize the Title](/concepts/05%20Widgets/Popover/05%20Customize%20the%20Appearance/10%20Customize%20the%20Title.md '/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Title/') and [Specify Toolbar Items](/concepts/05%20Widgets/Popover/05%20Customize%20the%20Appearance/20%20Specify%20Toolbar%20Items.md '/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Specify_Toolbar_Items/') topics. 

#####See Also#####
#include common-link-configurewidget
- [Popover - Customize the Appearance](/concepts/05%20Widgets/Popover/05%20Customize%20the%20Appearance/05%20Customize%20the%20Content '/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/')
- [Popover - Show and Hide the Popover](/concepts/05%20Widgets/Popover/10%20Show%20and%20Hide%20the%20Popover '/Documentation/Guide/Widgets/Popover/Show_and_Hide_the_Popover/')
- [Popover - Resize and Relocate](/concepts/05%20Widgets/Popover/15%20Resize%20and%20Relocate.md '/Documentation/Guide/Widgets/Popover/Resize_and_Relocate/')
- [Popover API Reference](/api-reference/10%20UI%20Widgets/dxPopover '/Documentation/ApiReference/UI_Widgets/dxPopover/')

[tags]dxpopover, popover, overview, overlay 