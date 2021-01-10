To access the clicked item, handle the [itemClick](/api-reference/10%20UI%20Widgets/CollectionWidget/4%20Events/itemClick.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Events/#itemClick') event. If the event handling function is not going to be changed during the lifetime of the UI component, assign it to the [onItemClick](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onItemClick.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#onItemClick') option when you configure the UI component.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#menuContainer").dxMenu({
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
    <dx-menu ...
        (onItemClick)="itemClick($event)">
    </dx-menu>

    <!--TypeScript-->
    import { DxMenuModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        itemClick(e) {
            const { itemData, itemElement, itemIndex } = e;
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxMenuModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxMenu ...
            @item-click="itemClick"
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxMenu from 'devextreme-vue/menu';

    export default {
        components: {
            DxMenu
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

    import { Menu } from 'devextreme-react/menu';

    class App extends React.Component {
        render() {
            return (
                <Menu ...
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

If you are going to change event handlers at runtime, or if you need to attach several handlers to the **itemClick** event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxMenu/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var itemClickHandler1 = function(e) {
        // First handler of the "itemClick" event
    };

    var itemClickHandler2 = function(e) {
        // Second handler of the "itemClick" event
    };

    $("#menuContainer").dxMenu("instance")
        .on("itemClick", itemClickHandler1)
        .on("itemClick", itemClickHandler2);

#####See Also#####
#include common-link-handleevents
- [Menu - Customize Item Appearance](/concepts/05%20Widgets/Menu/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Menu/Customize_Item_Appearance')
- [Menu - Change the Orientation](/concepts/05%20Widgets/Menu/10%20Change%20the%20Orientation.md '/Documentation/Guide/Widgets/Menu/Change_the_Orientation')
- [Menu Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Menu/Overview)
- [Menu API Reference](/api-reference/10%20UI%20Widgets/dxMenu '/Documentation/ApiReference/UI_Widgets/dxMenu/')

[tags]menu, access the clicked item, onItemClick, itemClick