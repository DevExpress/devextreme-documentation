To bind the **List** to an array, pass this array to the [dataSource](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/dataSource '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/dataSource/') option. The array may contain primitive values...

---
#####jQuery

    <!--JavaScript-->var fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];

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
        fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
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

... or objects.

---
#####jQuery

    <!--JavaScript-->var fruits = [
        { fruit: "Apples", count: 10 },
        { fruit: "Oranges", count: 12 },
        { fruit: "Lemons", count: 15 },
        { fruit: "Pears", count: 20 },
        { fruit: "Pineapples", count: 3 }
    ];

    $(function() {
        $("#listContainer").dxList({
            dataSource: fruits,
            itemTemplate: function(data, _, element) {
                element.append(
                    $("<b>").text(data.fruit), $("<br />"),
                    $("<p>").text(data.count).css("margin", 0)
                )
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-list>
        <dxi-item *ngFor="let item of fruits">
            <b>{{item.fruit}}</b><br/>
            <p style="margin:0">{{item.count}}</p>
        </dxi-item>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruits = [
            { fruit: "Apples", count: 10 },
            { fruit: "Oranges", count: 12 },
            { fruit: "Lemons", count: 15 },
            { fruit: "Pears", count: 20 },
            { fruit: "Pineapples", count: 3 }
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

If objects in an array need to be processed (sorted, filtered, grouped, etc.), you can create a [Query](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept'). For example, in the following code, a Query sorts objects in the `fruits` array by the `count` field in descending order.

---
#####jQuery

    <!--JavaScript-->var fruits = [
        { fruit: "Apples", count: 10 },
        // ...
    ];

    $(function() {
        $("#listContainer").dxList({
            dataSource: DevExpress.data.query(fruits)
                            .sortBy("count", true)
                            .toArray(),
            itemTemplate: function(data, _, element) {
                element.append(
                    $("<b>").text(data.fruit), $("<br />"),
                    $("<p>").text(data.count).css("margin", 0)
                )
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    import query from "devextreme/data/query";
    // ...
    export class AppComponent {
        fruits = [
            { fruit: "Apples", count: 10 },
            // ...
        ];
        getSortedFruits () {
            return query(this.fruits)
                    .sortBy("count", true)
                    .toArray();
        }
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
        [dataSource]="getSortedFruits()">
        <div *dxTemplate="let data of 'item'">
            <b>{{data.fruit}}</b><br/>
            <p style="margin:0">{{data.count}}</p>
        </div>
    </dx-list>   

---

#####See Also#####
- [Data Layer - Query Concept](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept')
- [List - Bind to the ArrayStore](/concepts/05%20Widgets/List/03%20Data%20Binding/05%20Simple%20Array/10%20ArrayStore.md '/Documentation/Guide/Widgets/List/Data_Binding/Simple_Array/ArrayStore/')
- [List - Access the DataSource](/concepts/05%20Widgets/List/03%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/List/Data_Binding/Access_the_DataSource/')
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI)
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')

[tags]list, data binding, provide data, array, process data, query