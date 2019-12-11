To bind the **Funnel** to an array, pass this array to the [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#dataSource') option. The array should contain objects.

---
##### jQuery

    <!--JavaScript-->var fruits = [
        { fruit: "Apples", count: 10 },
        { fruit: "Oranges", count: 12 },
        { fruit: "Lemons", count: 15 },
        { fruit: "Pears", count: 20 },
        { fruit: "Pineapples", count: 3 }
    ];

    $(function () {
        $("#funnelContainer").dxFunnel({
            dataSource: fruits,
            argumentField: "fruit",
            valueField: "count"
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
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
            DxFunnelModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-funnel
        [dataSource]="fruits"
        argumentField="fruit"
        valueField="count">
    </dx-funnel>

---

If objects in the array need to be processed (sorted, filtered, etc.), you can create a [Query](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept'). For example, in the following code, a Query applies a filter to the `fruits` array that excludes objects with `count` less than 10.

---
##### jQuery

    <!--JavaScript-->var fruits = [
        { fruit: "Apples", count: 10 },
        { fruit: "Oranges", count: 12 },
        { fruit: "Lemons", count: 15 },
        { fruit: "Pears", count: 20 },
        { fruit: "Pineapples", count: 3 }
    ];

    $(function () {
        $("#funnelContainer").dxFunnel({
            dataSource: DevExpress.data.query(fruits).filter([ "count", ">=", 10 ]).toArray(),
            argumentField: "fruit",
            valueField: "count"
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    import query from "devextreme/data/query";
    // ...
    export class AppComponent {
        fruits = [
            { fruit: "Apples", count: 10 },
            { fruit: "Oranges", count: 12 },
            { fruit: "Lemons", count: 15 },
            { fruit: "Pears", count: 20 },
            { fruit: "Pineapples", count: 3 }
        ];
        getFilteredFruits () {
            return query(this.fruits).filter([ "count", ">=", 10 ]).toArray();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

    <!--HTML--><dx-funnel
        [dataSource]="getFilteredFruits()"
        argumentField="fruit"
        valueField="count">
    </dx-funnel>

---

#####See Also#####
- [Update Data in the Funnel](/concepts/05%20Widgets/Funnel/03%20Data%20Binding/26%20Update%20Data '/Documentation/Guide/Widgets/Funnel/Data_Binding/Update_Data/')