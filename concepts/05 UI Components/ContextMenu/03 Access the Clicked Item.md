---
tags: context menu, contextMenu, access the clicked item, onItemClick, itemClick
---
To access the clicked item, handle the [itemClick](/api-reference/10%20UI%20Components/CollectionWidget/4%20Events/itemClick.md '/Documentation/ApiReference/UI_Components/dxContextMenu/Events/#itemClick') event. If the event handling function is not going to be changed during the lifetime of the UI component, assign it to the [onItemClick](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/onItemClick.md '/Documentation/ApiReference/UI_Components/dxContextMenu/Configuration/#onItemClick') property when you configure the UI component.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#contextMenuContainer").dxContextMenu({
            // ...
            onItemClick: function(e) {
                var itemData = e.itemData;
                var itemElement = e.itemElement;
                var itemIndex = e.itemIndex;
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-context-menu ...
        (onItemClick)="itemClick($event)">
    </dx-context-menu>

    <!--TypeScript-->
    import { DxContextMenuModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
        itemClick(e) {
            const { itemData, itemElement, itemIndex } = e;
            // ...
        }
    }
    @NgModule({
         imports: [
             // ...
             DxContextMenuModule
         ],
         // ...
     })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxContextMenu ...
            @item-click="itemClick"
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxContextMenu from 'devextreme-vue/context-menu';

    export default {
        components: {
            DxContextMenu
        },
        methods: {
            itemClick(e) {
                const { itemData, itemElement, itemIndex } = e;
                // ...
            }
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { ContextMenu } from 'devextreme-react/context-menu';

    class App extends React.Component {
        render() {
            return (
                <ContextMenu ...
                    onItemClick={this.itemClick}
                />
            );
        }

        itemClick = (e) => {
            const { itemData, itemElement, itemIndex } = e;
            // ...
        }
    }

    export default App;

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to the **itemClick** event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxContextMenu/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var itemClickHandler1 = function(e) {
        // First handler of the "itemClick" event
    };

    var itemClickHandler1 = function(e) {
        // Second handler of the "itemClick" event
    };

    $("#contextMenuContainer").dxContextMenu("instance")
        .on("itemClick", itemClickHandler1)
        .on("itemClick", itemClickHandler2);

#####See Also#####
#include common-link-handleevents
- [ContextMenu - Customize Item Appearance](/concepts/05%20UI%20Components/ContextMenu/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/UI_Components/ContextMenu/Customize_Item_Appearance')
- [ContextMenu - Open and Close](/concepts/05%20UI%20Components/ContextMenu/10%20Open%20and%20Close%20the%20Context%20Menu '/Documentation/Guide/UI_Components/ContextMenu/Open_and_Close_the_Context_Menu/')
- [ContextMenu Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/ContextMenu/Basics)
- [ContextMenu API Reference](/api-reference/10%20UI%20Components/dxContextMenu '/Documentation/ApiReference/UI_Components/dxContextMenu/')

