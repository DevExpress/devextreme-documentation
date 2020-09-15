For a minor customization of **List** items, you can define [specific fields](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/items/') in item data objects. For example, the following code generates three items: each item has a badge, the second is disabled and the third is hidden.

---
#####jQuery

    <!--JavaScript-->var fruits = [
        { text: "Apples", badge: 10 },
        { text: "Oranges", badge: 12, disabled: true },
        { text: "Lemons", badge: 15, visible: false }
    ];

    $(function() {
        $("#listContainer").dxList({
            dataSource: fruits
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruits = [
            { text: "Apples", badge: 10 },
            { text: "Oranges", badge: 12, disabled: true },
            { text: "Lemons", badge: 15, visible: false }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-list
        [dataSource]="fruits">
    </dx-list>

---

If you need a more flexible solution, define an [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#itemTemplate) ([itemRender](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#itemRender) in React). Within the template, you can access item data and index:

---
##### jQuery

    <!--JavaScript-->
    var fruits = [
        { name: "Apples", count: 10 },
        { name: "Oranges", count: 12 },
        { name: "Lemons", count: 15 },
        { name: "Pears", count: 20 },
        { name: "Pineapples", count: 3 }
    ];

    $(function() {
        $("#listContainer").dxList({
            dataSource: fruits,
            itemTemplate: function(data, index, element) {
                element.append(
                    $("<b>").text(data.fruit), $("<br />"),
                    $("<p>").text(data.count).css("margin", 0)
                )
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-list
        [dataSource]="fruits"
        itemTemplate="listItem">
        <div *dxTemplate="let item of 'listItem'; let i = index">
            <b>{{item.name}}</b><br />
            <p style="margin:0px">{{item.count}}</p>
        </div>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruits = [
            { name: "Apples", count: 10 },
            { name: "Oranges", count: 12 },
            { name: "Lemons", count: 15 },
            { name: "Pears", count: 20 },
            { name: "Pineapples", count: 3 }
        ];
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
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ItemTemplate/"
}

You can also customize an individual **List** item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/items/#template') field. 

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    var fruits = [
        { name: "Apples", count: 10 },
        { name: "Oranges", count: 12, template: $("#individualTemplate") },
        // ...
    ];

#####See Also#####
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')

[tags]list, item appearance, customize, templates, template