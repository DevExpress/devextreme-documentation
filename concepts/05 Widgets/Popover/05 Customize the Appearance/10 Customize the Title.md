The **Popover** is displayed without a title by default. To add it, set the [showTitle](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/showTitle.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#showTitle') option to **true** and specify the title text using the [title](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/title.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#title') option. The title can contain a button that closes the **Popover**. To enable it, assign **true** to the [showCloseButton](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/showCloseButton.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#showCloseButton') option. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            title: "Popover Title",
            showTitle: true,
            showCloseButton: true
        });
    });

    <!--HTML-->
    <img id="image" src="https://url/to/an/image" />
    <div id="popoverContainer">
        <!-- ... -->
    </div>


##### Angular

    <!--HTML-->
    <img id="image" src="https://url/to/an/image" />
    <dx-popover
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        title="Popover Title"
        [showTitle]="true"
        [showCloseButton]="true">
        <!-- ... -->
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
                show-event="dxhoverstart"
                hide-event="dxhoverend"
                :show-title="true"
                :show-close-button="true"
                target="#image"
                title="Popover Title">
                <!-- ... -->
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

    class App extends React.Component {
        render() {
            return (
                <div>
                    <img id="image" src="https://url/to/an/image" />
                    <Popover
                        showTitle={true}
                        showCloseButton={true}
                        target="#image"
                        title="Popover Title"
                        showEvent="dxhoverstart"
                        hideEvent="dxhoverend"
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
            <!-- ... -->
        </text>)
        .Title("Popover Title")
        .ShowTitle(true)
        .ShowCloseButton(true)
    )
    <img id="image" src="https://url/to/an/image" />

---

If you need to define the title completely, specify a template for it as shown in the following code:

---
##### jQuery

    <!--HTML--><img id="image" src="https://url/to/an/image" />
    <div id="popoverContainer">
        <p>Popover content</p>
        <div data-options="dxTemplate: { name: 'titleTemplate' }">
            <p>Title template</p>
        </div>
    </div>

    <!--JavaScript-->$(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: "dxhoverstart",
            hideEvent: "dxhoverend",
            showTitle: true,
            titleTemplate: "titleTemplate"
        });
    });

##### Angular

    <!--HTML-->
    <img id="image" src="https://url/to/an/image" />
    <dx-popover
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        [showTitle]="true"
        titleTemplate="titleTemplate">
        <div *dxTemplate="let data of 'content'">
            <p>Popover content</p>
        </div>
        <div *dxTemplate="let data of 'titleTemplate'">
            <p>Title template</p>
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
                show-event="dxhoverstart"
                hide-event="dxhoverend"
                :show-title="true"
                target="#image"
                titleTemplate="titleTemplate">
                <template #titleTemplate>
                    <p>Title template</p>
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

    const renderTitle = () => {
        return (
            <p>Title template</p>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <div>
                    <img id="image" src="https://url/to/an/image" />
                    <Popover
                        showTitle={true}
                        target="#image"
                        titleRender={renderTitle}
                        showEvent="dxhoverstart"
                        hideEvent="dxhoverend"
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
            <!-- ... -->
        </text>)
        .ShowTitle(true)
        .TitleTemplate(@<text>
            <p>Title template</p>
        </text>)
    )
    <img id="image" src="https://url/to/an/image" />

---

You can switch title templates on the fly just as you can do with content templates. Refer to the [Switching Templates On the Fly](/concepts/05%20Widgets/Popover/05%20Customize%20the%20Appearance/05%20Customize%20the%20Content/5%20Switching%20Templates%20On%20the%20Fly.md '/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/#Switching_Templates_On_the_Fly') topic for more information.

#####See Also#####
- [Popover - Customize the Content](/concepts/05%20Widgets/Popover/05%20Customize%20the%20Appearance/05%20Customize%20the%20Content '/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/')
- [Popover - Specify Toolbar Items](/concepts/05%20Widgets/Popover/05%20Customize%20the%20Appearance/20%20Specify%20Toolbar%20Items.md '/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Specify_Toolbar_Items/')
- [Popover - Color the Shading of the Background](/concepts/05%20Widgets/Popover/05%20Customize%20the%20Appearance/30%20Color%20the%20Shading%20of%20the%20Background.md '/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Color_the_Shading_of_the_Background/')
- [Popover Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popover/Overview)

[tags]popover, title, show title, title template, close button