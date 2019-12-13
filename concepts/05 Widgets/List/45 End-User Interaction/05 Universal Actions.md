Universal actions are those actions that raise the same event despite being performed differently on desktop platforms and on touch-enabled devices. For example, both a click and a tap on an item raise the [itemClick](/api-reference/10%20UI%20Widgets/dxList/4%20Events/itemClick.md '/Documentation/ApiReference/UI_Widgets/dxList/Events/#itemClick') event. To handle it, assign a function to the [onItemClick](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onItemClick.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onItemClick') option, or subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#oneventName_eventHandler') method.

---
#####jQuery

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
    var itemClickEventHandler1 = function(e) {
        // First handler of the "itemClick" event
    }

    var itemClickEventHandler2 = function(e) {
        // Second handler of the "itemClick" event
    }

    $("#listContainer").dxList("instance")
        .on("itemClick", itemClickEventHandler1)
        .on("itemClick", itemClickEventHandler2)

#####Angular

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

---

The **List** supports other universal actions, which are provided as a part of basic **List** functionality. They are described in the following topics.

- [Scrolling - Configure User Interaction](/concepts/05%20Widgets/List/20%20Scrolling/01%20User%20Interaction.md '/Documentation/Guide/Widgets/List/Scrolling/#User_Interaction')
- [Scrolling - Handle Related Events](/concepts/05%20Widgets/List/20%20Scrolling/10%20Events.md '/Documentation/Guide/Widgets/List/Scrolling/#Events')
<!---->

- [Selection - Configure User Interaction](/concepts/05%20Widgets/List/25%20Selection/01%20User%20Interaction.md '/Documentation/Guide/Widgets/List/Selection/#User_Interaction')
- [Selection - Handle Related Events](/concepts/05%20Widgets/List/25%20Selection/10%20Events.md '/Documentation/Guide/Widgets/List/Selection/#Events')
<!---->

- [Item Reordering - Configure User Interaction](/concepts/05%20Widgets/List/30%20Item%20Reordering/01%20User%20Interaction.md '/Documentation/Guide/Widgets/List/Item_Reordering/#User_Interaction')
- [Item Reordering - Handle Related Events](/concepts/05%20Widgets/List/30%20Item%20Reordering/10%20Events.md '/Documentation/Guide/Widgets/List/Item_Reordering/#Events')
<!---->

- [Item Deletion - Configure User Interaction](/concepts/05%20Widgets/List/35%20Item%20Deletion/01%20User%20Interaction.md '/Documentation/Guide/Widgets/List/Item_Deletion/#User_Interaction')
- [Item Deletion - Handle Related Events](/concepts/05%20Widgets/List/35%20Item%20Deletion/10%20Events.md '/Documentation/Guide/Widgets/List/Item_Deletion/#Events')

#####See Also#####
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI)
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')

[tags]list, item click, onItemClick