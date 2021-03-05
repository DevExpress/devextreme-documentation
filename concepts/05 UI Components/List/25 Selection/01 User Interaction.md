In the List UI component, selection is disabled by default. To enable it, choose one of selection modes using the [selectionMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectionMode') property.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            selectionMode: "single" // or "multiple" | "all" | "none" (disables selection)
        });
    });

##### Angular

    <!--HTML-->
    <dx-list ...
        selectionMode="single"> <!-- or "multiple" | "all" | "none" (disables selection) -->
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList ...
            selection-mode="single" /> <!-- or "multiple" | "all" | "none" (disables selection) -->
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxList from 'devextreme-vue/list';

    export default {
        components: {
            DxList
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import List from 'devextreme-react/list';

    export default function App() {
        return (
            <List ...
                selectionMode="single" /> {/* or "multiple" | "all" | "none" (disables selection) */}
        );
    }

---

To select a List item, an end user simply clicks or taps it. Selected items become shaded. If you want to indicate selected items more manifestly, set the [showSelectionControls](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/showSelectionControls.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#showSelectionControls') property to **true**. This setting adds a check box to each item on the List. Also, make this setting if you use the *"all"* **selectionMode**. Otherwise, the *"Select All"* check box will be missing.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            showSelectionControls: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-list ...
        [showSelectionControls]="true"> 
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList ...
            :show-selection-controls="true"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxList from 'devextreme-vue/list';

    export default {
        components: {
            DxList
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import List from 'devextreme-react/list';

    export default function App() {
        return (
            <List ...
                showSelectionControls={true}
            />
        );
    }

---

When data in the List is [paginated](/concepts/05%20Widgets/List/08%20Paging.md '/Documentation/Guide/UI_Components/List/Paging/'), you can choose whether the *"Select All"* check box will select all items on all pages or items on the currently rendered pages only. To make this choice, specify the [selectAllMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/selectAllMode.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectAllMode') property.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            selectAllMode: "allPages" // or "page"
        });
    });

##### Angular

    <!--HTML-->
    <dx-list ...
        selectAllMode="allPages"> <!-- or "page" -->
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList ...
            select-all-mode="allPages" /> <!-- or "page" -->
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxList from 'devextreme-vue/list';

    export default {
        components: {
            DxList
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import List from 'devextreme-react/list';

    export default function App() {
        return (
            <List ...
                selectAllMode="allPages" /> {/* or "page" */}
        );
    }

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection/"
}

#####See Also#####
#include common-link-configurewidget
- [List - Localization](/concepts/05%20Widgets/List/50%20Localization.md '/Documentation/Guide/UI_Components/List/Localization/')