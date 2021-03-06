Universal actions are those actions that raise the same event despite being performed differently on desktop platforms and on touch-enabled devices. For example, both a click and a tap on an item raise the [itemClick](/api-reference/10%20UI%20Components/dxList/4%20Events/itemClick.md '/Documentation/ApiReference/UI_Components/dxList/Events/#itemClick') event. To handle it, assign a function to the [onItemClick](/api-reference/10%20UI%20Components/dxList/1%20Configuration/onItemClick.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#onItemClick') property, or subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxList/Methods/#oneventName_eventHandler') method.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            onItemClick: function(e) {
                // Event handling commands go here
            }
        });
    });

<!---->

    <!--JavaScript-->
    const itemClickEventHandler1 = function(e) {
        // First handler of the "itemClick" event
    }

    const itemClickEventHandler2 = function(e) {
        // Second handler of the "itemClick" event
    }

    $("#listContainer").dxList("instance")
        .on("itemClick", itemClickEventHandler1)
        .on("itemClick", itemClickEventHandler2)

##### Angular

    <!--HTML-->
    <dx-list ...
        (onItemClick)="onItemClick($event)">
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onItemClick (e) {
            // Event handling commands go here
        }
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
                @item-click="onItemClick"
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
            methods: {
                onItemClick (e) {
                    // Event handling commands go here
                }
            }
        }
        </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import List from 'devextreme-react/list';

    const onItemClick = (e) => {
        // Event handling commands go here
    };
    
    export default function App() {
        return (
            <List ... 
                onItemClick={onItemClick}
            />
        );
    }

---

The List supports other universal actions, which are provided as a part of basic List functionality. They are described in the following topics.

- [Scrolling - Configure User Interaction](/concepts/05%20UI%20Components/List/20%20Scrolling/01%20User%20Interaction.md '/Documentation/Guide/UI_Components/List/Scrolling/#User_Interaction')
- [Scrolling - Handle Related Events](/concepts/05%20UI%20Components/List/20%20Scrolling/10%20Events.md '/Documentation/Guide/UI_Components/List/Scrolling/#Events')
<!---->

- [Selection - Configure User Interaction](/concepts/05%20UI%20Components/List/25%20Selection/01%20User%20Interaction.md '/Documentation/Guide/UI_Components/List/Selection/#User_Interaction')
- [Selection - Handle Related Events](/concepts/05%20UI%20Components/List/25%20Selection/10%20Events.md '/Documentation/Guide/UI_Components/List/Selection/#Events')
<!---->

- [Item Reordering - Configure User Interaction](/concepts/05%20UI%20Components/List/30%20Item%20Reordering/01%20User%20Interaction.md '/Documentation/Guide/UI_Components/List/Item_Reordering/#User_Interaction')
- [Item Reordering - Handle Related Events](/concepts/05%20UI%20Components/List/30%20Item%20Reordering/10%20Events.md '/Documentation/Guide/UI_Components/List/Item_Reordering/#Events')
<!---->

- [Item Deletion - Configure User Interaction](/concepts/05%20UI%20Components/List/35%20Item%20Deletion/01%20User%20Interaction.md '/Documentation/Guide/UI_Components/List/Item_Deletion/#User_Interaction')
- [Item Deletion - Handle Related Events](/concepts/05%20UI%20Components/List/35%20Item%20Deletion/10%20Events.md '/Documentation/Guide/UI_Components/List/Item_Deletion/#Events')

#####See Also#####
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI)
- [List API Reference](/api-reference/10%20UI%20Components/dxList '/Documentation/ApiReference/UI_Components/dxList/')

[tags]list, item click, onItemClick