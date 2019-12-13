Icons can be used in those widgets that have an **icon** option. For instance, the [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') widget has this option [on the first level of the configuration object](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/icon.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#icon'). Icons in the following code samples are taken from the [built-in icon library](/concepts/60%20Themes%20and%20Styles/30%20Icons/10%20Built-In%20Icon%20Library.md '/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library').

---
##### jQuery  

    <!--JavaScript-->
    $(function() {
        $("#saveButton").dxButton({
            icon: "save",
            text: "Save"
        });
    });

##### Angular  

    <!--HTML-->
    <dx-button
        icon="save"
        text="Save">
    </dx-button>

    <!--TypeScript-->
    import { DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <template>
        <dx-button
            icon="save"
            text="Save" />
    </template>
    <script>
    import DxButton from 'devextreme-vue/button';

    export default {
        components: {
            DxButton
        }
    }
    </script>

##### React

    import React from 'react';
    import { Button } from 'devextreme-react/button';

    class App extends React.Component {
        render() {
            return (
                <Button
                    icon="save"
                    text="Save"
                />
            );
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Button()
        .Icon("save")
        .Text("Save")
    )

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/Icons/"
}

Many [default templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/05%20Default%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Default_Templates') provide the **icon** option as well, the [ContextMenu](/concepts/05%20Widgets/ContextMenu/00%20Overview.md '/Documentation/Guide/Widgets/ContextMenu/Overview/') widget's [default item template](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/items/') being an example:

---
##### jQuery  

    <!--JavaScript-->
    $(function() {
        $("#contextMenuContainer").dxContextMenu({
            // ...
            dataSource: [
                { text: "Zoom In", icon: "plus" },
                { text: "Share", icon: "message" },
                { text: "Download", icon: "download" }
            ]
        });
    });

##### Angular  

    <!--HTML-->
    <dx-context-menu ... >
        <dxi-item text="Zoom In" icon="plus"></dxi-item>
        <dxi-item text="Share" icon="message"></dxi-item>
        <dxi-item text="Download" icon="download"></dxi-item>
    </dx-context-menu>

    <!--TypeScript-->
    import { DxContextMenuModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxContextMenuModule
        ],
        // ...
    })

##### Vue

    <template>
        <dx-context-menu ... >
            <dx-item text="Zoom In" icon="plus" />
            <dx-item text="Share" icon="message" />
            <dx-item text="Download" icon="download" />
        </dx-context-menu>
    </template>
    <script>
    import { DxContextMenu, DxItem } from 'devextreme-vue/context-menu';

    export default {
        components: {
            DxContextMenu,
            DxItem
        }
    }
    </script>

##### React

    import React from 'react';
    import { ContextMenu, Item } from 'devextreme-react/context-menu';

    class App extends React.Component {
        render() {
            return (
                <ContextMenu ... >
                    <Item text="Zoom In" icon="plus" />
                    <Item text="Share" icon="message" />
                    <Item text="Download" icon="download" />
                </ContextMenu>
            );
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().ContextMenu()
        .Items(i => {
            i.Add().Text("Zoom In").Icon("plus");
            i.Add().Text("Share").Icon("message");
            i.Add().Text("Download").Icon("download");
        })
    )

---

To find a list of widgets that support icons, search for "icon" in the left-hand menu.