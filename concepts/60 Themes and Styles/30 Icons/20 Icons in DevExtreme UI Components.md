You can use icons in DevExtreme components that have an **icon** property. The following code snippet integrates icons from the [built-in icon library](/concepts/60%20Themes%20and%20Styles/30%20Icons/10%20Built-In%20Icon%20Library.md '/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library') into a [Button](/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/') component.

---
##### jQuery  

    <!-- tab: index.js -->
    $(function() {
        $("#saveButton").dxButton({
            icon: "save",
        });
    });

##### Angular  

    <!-- tab: app.component.html -->
    <dx-button
        icon="save"
    ></dx-button>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxButton
            icon="save"
        />
    </template>
    <script>
    // ...
    </script>

##### React

    <!-- App.js -->
    // ...
    function App() {
        return (
            <Button
                icon="save"
            />
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Button()
        .Icon("save")
        .Text("Save")
    )

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/Icons/"
}

Many [default templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/05%20Default%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Default_Templates') include the **icon** property. The following code snippet demonstrates the [default item template](/api-reference/10%20UI%20Components/dxContextMenu/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxContextMenu/Configuration/items/') of the [ContextMenu](/concepts/05%20UI%20Components/ContextMenu/00%20Overview.md '/Documentation/Guide/UI_Components/ContextMenu/Overview/') component:

---
##### jQuery  

    <!-- tab: index.js -->
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

    <!-- tab: app.component.html -->
    <dx-context-menu ... >
        <dxi-item text="Zoom In" icon="plus"></dxi-item>
        <dxi-item text="Share" icon="message"></dxi-item>
        <dxi-item text="Download" icon="download"></dxi-item>
    </dx-context-menu>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxContextMenu ... >
            <DxItem text="Zoom In" icon="plus" />
            <DxItem text="Share" icon="message" />
            <DxItem text="Download" icon="download" />
        </DxContextMenu>
    </template>
    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    function App() {
        return (
            <ContextMenu ... >
                <Item text="Zoom In" icon="plus" />
                <Item text="Share" icon="message" />
                <Item text="Download" icon="download" />
            </ContextMenu>
        );
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

To find a list of UI components that support icons, search for "icon" in the left-hand menu.