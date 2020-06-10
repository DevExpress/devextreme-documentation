The **Popover** has two toolbars: top and bottom. Items on these toolbars can be plain text or widgets. To configure the items, populate the [toolbarItems](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/toolbarItems '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/toolbarItems/') array with objects. Each object configures an individual toolbar item. For example, the following code adds two toolbar items to the **Popover**: one is plain text, another is the [Button](/concepts/05%20Widgets/Button '/Documentation/Guide/Widgets/Button/') widget. They both occupy the top toolbar, because their [toolbar](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/toolbarItems/toolbar.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/toolbarItems/#toolbar') option assumes its default value.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            width: 200,
            toolbarItems: [{
                text: "Title",
                location: "before"
            }, {
                widget: "dxButton",
                location: "after",
                options: { 
                    text: "Refresh", 
                    onClick: function() {
                        // ...
                    }
                }
            }]
        });
    });

    <!--HTML--><img id="image" src="https://url/to/an/image" />
    <div id="popoverContainer">
        <p>Popover content</p>
    </div>

##### Angular

    <!--HTML--><img id="image" src="https://url/to/an/image" />
    <dx-popover
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        [width]="200">
        <div *dxTemplate="let data of 'content'">
            <p>Popover content</p>
        </div>
        <dxi-toolbar-item
            text="Title"
            location="before">
        </dxi-toolbar-item>
        <dxi-toolbar-item
            widget="dxButton"
            location="after"
            [options]="{
                text: 'Refresh',
                onClick: refresh
            }">
        </dxi-toolbar-item>
    </dx-popover>

    <!--TypeScript-->
    import { DxPopoverModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        refresh () {
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxPopoverModule,
            DxButtonModule
        ],
        // ...
    })
    
##### Vue

    <template>
        <div>
            <img id="image" src="https://url/to/an/image" />
            <DxPopover
                :width="200"
                target="#image"
                show-event="dxhoverstart"
                hide-event="dxhoverend">
                <template>
                    <p>Popover content</p>
                </template>
                <DxToolbarItem
                    text="Title"
                    location="before"
                />
                <DxToolbarItem
                    :options="buttonOptions"
                    widget="dxButton"
                    location="after"
                />
            </DxPopover>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        DxPopover,
        DxToolbarItem
    } from 'devextreme-vue/popover';

    export default {
        components: {
            DxPopover,
            DxToolbarItem
        },
        data() {
            return {
                buttonOptions: {
                    text: 'Refresh',
                    onClick: function() {
                        // ...
                    }
                }
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Popover, ToolbarItem } from 'devextreme-react/popover';

    const buttonOptions = {
        text: 'Refresh',
        onClick: function() {
            // ...
        }
    };

    const renderContent = () => {
        return (
            <p>Popover content</p>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <div>
                    <img id="image" src="https://url/to/an/image" />
                    <Popover
                        width={200}
                        target="#image"
                        showEvent="dxhoverstart"
                        hideEvent="dxhoverend"
                        contentRender={renderContent}>
                        <ToolbarItem
                            text="Title"
                            location="before"
                        />
                        <ToolbarItem
                            options={buttonOptions}
                            widget="dxButton"
                            location="after"
                        />
                    </Popover>
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
        .ToolbarItems(ti => {
            ti.Add()
                .Text("Title")
                .Location(ToolbarItemLocation.Before);
            ti.Add()
                .Widget(w => w.Button()
                    .Text("Refresh")
                    .OnClick("refresh"))
                .Location(ToolbarItemLocation.After);
         }
    )
    <img id="image" src="https://url/to/an/image" />

    <script type="text/javascript">
        function refresh() {
            // ...
        }
    </script>

---

#####See Also#####
- [Popover - Customize the Content](/concepts/05%20Widgets/Popover/05%20Customize%20the%20Appearance/05%20Customize%20the%20Content '/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/')
- [Popover - Customize the Title](/concepts/05%20Widgets/Popover/05%20Customize%20the%20Appearance/10%20Customize%20the%20Title.md '/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Title/')
- [Popover - Color the Shading of the Background](/concepts/05%20Widgets/Popover/05%20Customize%20the%20Appearance/30%20Color%20the%20Shading%20of%20the%20Background.md '/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Color_the_Shading_of_the_Background/')
- [Popover Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popover/Overview)

[tags]popover, overlay, customize, toolbar items, top toolbar, bottom toolbar