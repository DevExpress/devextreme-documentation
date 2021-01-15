The **List** is a UI component that represents a collection of items in a scrollable list.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/"
}

The following code adds a simple **List** to your page. The simplest configuration of the UI component requires only a [dataSource](/api-reference/10%20UI%20Components/dxList/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#dataSource') to be specified.

---
##### jQuery

    <!--HTML--><div id="listContainer"></div>

    <!--JavaScript-->const fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];

    $(function() {
        $("#listContainer").dxList({
            dataSource: fruits
        });
    });

##### Angular

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
- [List - Data Binding](/Documentation/Guide/UI_Components/List/Data_Binding/)
#include common-link-configurewidget
- [List API Reference](/api-reference/10%20UI%20Components/dxList '/Documentation/ApiReference/UI_Components/dxList/')

[tags]dxlist, list, overview