To allow the user to delete items from the **List**, set the [allowItemDeleting](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/allowItemDeleting.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#allowItemDeleting') option to **true**. The mode in which the user deletes items depends on the value of the **itemDeleteMode** option. There are several modes that are enumerated in the code below. To spot the difference between them and choose the most suitable one, refer to the example that completes the [option's description](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/itemDeleteMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#itemDeleteMode') in the API reference.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            allowItemDeleting: true,
            itemDeleteMode: "toggle" // or "static" | "slideButton" | "slideItem" | "swipe" | "context"
        });
    });

#####Angular

    <!--HTML-->
    <dx-list ...
        [allowItemDeleting]="true"
        itemDeleteMode="toggle"> <!-- or "static" | "slideButton" | "slideItem" | "swipe" | "context" -->
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

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/"
}

[note]If **List** items are [supplied with the context menu](/concepts/05%20Widgets/List/40%20Item%20Context%20Menu.md '/Documentation/Guide/Widgets/List/Item_Context_Menu/'), the **itemDeleteMode** option is ignored in favor of the [menuMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/menuMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#menuMode') option.

[note]If you use a remote data source, the **List** itself does not delete items from it; it only makes a query to it. It is the data source that is responsible for this query to be correctly processed and for the item to be actually deleted.

#####See Also#####
- [List - Data Binding | Deletion in Custom Sources](/concepts/05%20Widgets/List/03%20Data%20Binding/20%20Custom%20Sources.md '/Documentation/Guide/Widgets/List/Data_Binding/Custom_Sources/')
- [List - Localization](/concepts/05%20Widgets/List/50%20Localization.md '/Documentation/Guide/Widgets/List/Localization/')

