To bind the **PieChart** to an array, pass this array to the [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#dataSource') option. The array should contain objects.

---
##### jQuery

    <!--JavaScript-->var fruits = [
        { fruit: 'Apples', count: 10 },
        { fruit: 'Oranges', count: 12 },
        { fruit: 'Lemons', count: 15 },
        { fruit: 'Pears', count: 20 },
        { fruit: 'Pineapples', count: 3 }
    ];

    $(function () {
        $("#pieChartContainer").dxPieChart({
            dataSource: fruits,
            series: {
                // See details in the "Bind Series to Data" topic
                argumentField: 'fruit',
                valueField: 'count'
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruits = [
            { fruit: 'Apples', count: 10 },
            { fruit: 'Oranges', count: 12 },
            { fruit: 'Lemons', count: 15 },
            { fruit: 'Pears', count: 20 },
            { fruit: 'Pineapples', count: 3 }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

    <!--HTML--><dx-pie-chart [dataSource]="fruits">
        <!-- See details in the "Bind Series to Data" topic -->
        <dxi-series argumentField="fruit" valueField="count"></dxi-series>
    </dx-pie-chart>

---

If objects in the array need to be processed (sorted, filtered, etc.), you can create a [Query](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept'). For example, in the following code, a Query sorts objects in the `fruits` array by the `count` field in descending order.

---
##### jQuery

    <!--JavaScript-->var fruits = [
        { fruit: 'Apples', count: 10 },
        { fruit: 'Oranges', count: 12 },
        { fruit: 'Lemons', count: 15 },
        { fruit: 'Pears', count: 20 },
        { fruit: 'Pineapples', count: 3 }
    ];

    $(function () {
        $("#pieChartContainer").dxPieChart({
            dataSource: DevExpress.data.query(fruits).sortBy("count", true).toArray(),
            series: {
                argumentField: 'fruit',
                valueField: 'count'
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    import query from "devextreme/data/query";
    // ...
    export class AppComponent {
        fruits = [
            { fruit: 'Apples', count: 10 },
            { fruit: 'Oranges', count: 12 },
            { fruit: 'Lemons', count: 15 },
            { fruit: 'Pears', count: 20 },
            { fruit: 'Pineapples', count: 3 }
        ];
        getSortedFruits () {
            return query(this.fruits).sortBy("count", true).toArray();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

    <!--HTML--><dx-pie-chart [dataSource]="getSortedFruits()">
        <dxi-series argumentField="fruit" valueField="count"></dxi-series>
    </dx-pie-chart>

---

#####See Also#####
- [Bind Series to Data](/concepts/05%20Widgets/PieChart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/Widgets/PieChart/Data_Binding/Bind_Series_to_Data/')
- [Update Data in the PieChart](/concepts/05%20Widgets/PieChart/03%20Data%20Binding/26%20Update%20Data '/Documentation/Guide/Widgets/PieChart/Data_Binding/Update_Data/')