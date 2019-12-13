Items in the **TagBox** can be grouped if they are grouped in the data source. The **TagBox** recognizes a group when it finds an object with the **key** and **items** fields. The **key** is the group header, the **items** are items that fall into the group. For example, the `fruitsVegetables` array from the following code produces two groups with three items each. Note that the **TagBox** needs to be informed that it deals with grouped data, therefore its [grouped](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/grouped.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#grouped') option is set to **true**.

---
#####jQuery

    <!--JavaScript-->var fruitsVegetables = [{
        key: "Fruits",
        items: [
            { name: "Apples", count: 10 },
            { name: "Oranges", count: 12 },
            { name: "Lemons", count: 15 }
        ]
    }, {
        key: "Vegetables",
        items: [
            { name: "Potatoes", count: 5 },
            { name: "Tomatoes", count: 9 },
            { name: "Turnips", count: 8 }
        ]
    }];

    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: fruitsVegetables,
            grouped: true,
            displayExpr: 'name',
            valueExpr: 'count'
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruitsVegetables = [{
            key: "Fruits",
            items: [
                { name: "Apples", count: 10 },
                { name: "Oranges", count: 12 },
                { name: "Lemons", count: 15 }
            ]
        }, {
            key: "Vegetables",
            items: [
                { name: "Potatoes", count: 5 },
                { name: "Tomatoes", count: 9 },
                { name: "Turnips", count: 8 }
            ]
        }];
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-tag-box
        [dataSource]="fruitsVegetables"
        [grouped]="true"
        displayExpr="name"
        valueExpr="count">
    </dx-tag-box>

---

[note]Only one-level grouping is supported.

If objects in your data source miss the **key** and **items** fields, use the [map](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/map.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map') function of the [DevExtreme DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') to create **key** + **items** field mappings. You can find more information on the **map** function in the [Data Layer - Item Mapping](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/3%20Data%20Transformation/1%20Item%20Mapping.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Item_Mapping') topic.

---
#####jQuery

    <!--JavaScript-->var fruitsVegetables = [{
        type: "Fruits",
        collection: [
            { name: "Apples", count: 10 },
            { name: "Oranges", count: 12 },
            { name: "Lemons", count: 15 }
        ]
    }, {
        type: "Vegetables",
        collection: [
            { name: "Potatoes", count: 5 },
            { name: "Tomatoes", count: 9 },
            { name: "Turnips", count: 8 }
        ]
    }];

    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: new DevExpress.data.DataSource({
                store: fruitsVegetables,
                map: function(item) {
                    return {
                        key: item.type,
                        items: item.collection
                    }
                }
            }),
            grouped: true,
            displayExpr: 'name',
            valueExpr: 'count'
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        fruitsVegetables = [{
            type: "Fruits",
            collection: [
                { name: "Apples", count: 10 },
                { name: "Oranges", count: 12 },
                { name: "Lemons", count: 15 }
            ]
        }, {
            type: "Vegetables",
            collection: [
                { name: "Potatoes", count: 5 },
                { name: "Tomatoes", count: 9 },
                { name: "Turnips", count: 8 }
            ]
        }];
        tagBoxDataSource: DataSource = new DataSource({
            store: this.fruitsVegetables,
            map: function(item) {
                return {
                    key: item.type,
                    items: item.collection
                }
            }
        });
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })


    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxDataSource"
        [grouped]="true"
        displayExpr="name"
        valueExpr="count">
    </dx-tag-box>

---

If your data is not grouped at all, you can group it using the [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') option of the **DataSource**. See the [Data Layer - Grouping](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/4%20Grouping.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping') topic for details.

---
#####jQuery

    <!--JavaScript-->var fruitsVegetables = [
        { type: "Fruits", name: "Apples", count: 10 },
        { type: "Fruits", name: "Oranges", count: 12 },
        { type: "Fruits", name: "Lemons", count: 15 },
        { type: "Vegetables", name: "Potatoes", count: 5 },
        { type: "Vegetables", name: "Tomatoes", count: 9 },
        { type: "Vegetables", name: "Turnips", count: 8 }
    ];

    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: new DevExpress.data.DataSource({
                store: fruitsVegetables,
                group: "type"
            }),
            grouped: true,
            displayExpr: 'name',
            valueExpr: 'count'
        });
    });


#####Angular

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        fruitsVegetables = [
            { type: "Fruits", name: "Apples", count: 10 },
            { type: "Fruits", name: "Oranges", count: 12 },
            { type: "Fruits", name: "Lemons", count: 15 },
            { type: "Vegetables", name: "Potatoes", count: 5 },
            { type: "Vegetables", name: "Tomatoes", count: 9 },
            { type: "Vegetables", name: "Turnips", count: 8 }
        ];
        tagBoxDataSource: DataSource = new DataSource({
            store: this.fruitsVegetables,
            group: "type"
        });
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })


    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxDataSource"
        [grouped]="true"
        displayExpr="name"
        valueExpr="count">
    </dx-tag-box>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tag_Box/GroupedItems/"
}

#####See Also#####
- [TagBox - Grouping | Customize Group Headers](/concepts/05%20Widgets/TagBox/07%20Grouping/05%20Customize%20Group%20Headers.md '/Documentation/Guide/Widgets/TagBox/Grouping/Customize_Group_Headers/')
- [TagBox API Reference](/api-reference/10%20UI%20Widgets/dxTagBox '/Documentation/ApiReference/UI_Widgets/dxTagBox/')

[tags]tagBox, grouped, key, items, group items, map items
