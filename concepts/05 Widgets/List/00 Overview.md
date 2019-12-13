The **List** is a widget that represents a collection of items in a scrollable list.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/"
}

The following code adds a simple **List** to your page. The simplest configuration of the widget requires only a [dataSource](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/dataSource '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/dataSource/') to be specified.

---
#####jQuery

    <!--HTML--><div id="listContainer"></div>

    <!--JavaScript-->var fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];

    $(function() {
        $("#listContainer").dxList({
            dataSource: fruits
        });
    });

#####Angular

    <!--HTML-->
    <dx-list
        [dataSource]="fruits">
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

---

The **List** supports a great variety of features. To learn more about a particular feature, refer to a dedicated topic in this documentation section.

#####See Also#####
- [List - Data Binding](/concepts/05%20Widgets/List/03%20Data%20Binding '/Documentation/Guide/Widgets/List/Data_Binding/')
#include common-link-configurewidget
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')

[tags]list, overview