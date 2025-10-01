---
id: dxMenu.Options.onItemRendered
type: function(e)
---
---
##### shortDescription
A function that is executed after a collection item is rendered.

##### param(e): ui/menu:ItemRenderedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.itemData): Object
The current item's data.

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number
The current item's index.

---

[note]

When Menu is in [adaptive mode](/api-reference/10%20UI%20Components/dxMenu/1%20Configuration/adaptivityEnabled.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/#adaptivityEnabled'), the component passes a [TreeView](/concepts/05%20UI%20Components/TreeView/02%20Overview/00%20Overview.md '/Documentation/Guide/UI_Components/TreeView/Overview/') item to **ItemRenderedEvent**.[itemElement](/api-reference/40%20Common%20Types/13%20events/ItemInfo/itemElement.md '/Documentation/ApiReference/UI_Components/dxMenu/Types/ItemRenderedEvent/#itemElement') instead of a Menu item. To implement separate **onItemRendered** logic for the component's adaptive and default modes, check if **itemElement** contains the `dx-treeview-item` class:

---

##### jQuery

    <!-- tab: index.js -->
    $('#menu').dxMenu({
        onItemRendered(e) {
            if(e.itemElement.hasClass('dx-treeview-item')) {
                // Adaptive mode
            } else {
                // Default mode
            }
        }
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-menu ...
        (onItemRendered)="onItemRendered($event)"
    ></dx-menu>

    <!-- tab: app.component.ts -->
    import { DxMenuComponent, type DxMenuTypes } from 'devextreme-angular/ui/menu';

    export class AppComponent {
        onItemRendered(e: DxMenuTypes.ItemRenderedEvent) {
            if(e.itemElement.classList.contains('dx-treeview-item')) {
                // Adaptive mode
            } else {
                // Default mode
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { DxMenu, type DxMenuTypes } from 'devextreme-vue/menu';

    function onItemRendered(e: DxMenuTypes.ItemRenderedEvent) {
        if(e.itemElement.classList.contains('dx-treeview-item')) {
            // Adaptive mode
        } else {
            // Default mode
        }
    }
    </script>

    <template>
        <DxMenu
            @item-rendered="onItemRendered"
        />
    </template>

##### React

    <!-- tab: App.tsx -->
    import { Menu, type MenuTypes } from 'devextreme-react/menu';

    function onItemRendered(e: MenuTypes.ItemRenderedEvent) {
        if(e.itemElement.classList.contains('dx-treeview-item')) {
            // Adaptive mode
        } else {
            // Default mode
        }
    }

    function App() {
        return (
            <Menu
                onItemRendered={onItemRendered}
            />
        )
    }

---

[/note]