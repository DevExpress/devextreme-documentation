---
EventForAction: ..\4 Events\itemClick.md
default: null
type: function(e) | String
---
---
##### notUsedInTheme

##### shortDescription
A function that is executed when a [funnel item](/concepts/05%20Widgets/Funnel/14%20Funnel%20Items/00%20Overview.md '/Documentation/Guide/Widgets/Funnel/Funnel_Items/Overview/') is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery.

##### field(e.item): dxFunnelItem
The [Item](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/6%20Item '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/') object.

---
This function is often used to implement item selection as shown in the following code:

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#funnelContainer").dxFunnel({
            // ...
            onItemClick: function (e) {
                e.item.select(!e.item.isSelected())
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-funnel ...
        (onItemClick)="selectItem($event)">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectItem (e) {
            e.item.select(!e.item.isSelected())
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

#####See Also#####
- [selectionMode](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/selectionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#selectionMode')
- [onSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onSelectionChanged')