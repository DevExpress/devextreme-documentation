If you want to extend the functionality of a JavaScript array, place it into an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'). It provides an interface for loading and editing data, and allows you to handle data-related events.

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
        $("#funnelContainer").dxFunnel({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: 'array',
                    data: fruits,
                    onLoaded: function () {
                        // Event handling commands go here
                    }
                },
                paginate: false
            }),
            argumentField: 'fruit',
            valueField: 'count'
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import 'devextreme/data/array_store'
    // ...
    export class AppComponent {
        fruits = [
            { fruit: 'Apples', count: 10 },
            { fruit: 'Oranges', count: 12 },
            { fruit: 'Lemons', count: 15 },
            { fruit: 'Pears', count: 20 },
            { fruit: 'Pineapples', count: 3 }
        ];
        funnelDataSource = new DataSource({
            store: {
                type: 'array',
                data: this.fruits,
                onLoaded: function () {
                    // Event handling commands go here
                }
            },
            paginate: false
        });
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

    <!--HTML--><dx-funnel
        [dataSource]="funnelDataSource"
        argumentField="fruit"
        valueField="count">
    </dx-funnel>

---

As you may notice, in the previous code, the **ArrayStore** is not declared explicilty. Instead, it is wrapped in the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance. That is because the **Funnel** requires [pagination](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') to be off in order to prevent data from partitioning. Other than that, the **DataSource** provides wide data-processing capabilities. For example, it can [map](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Reading_Data_Data_Transformation_Item_Mapping) objects from the array that underlies the **ArrayStore**, as shown in the following code.

---
##### jQuery

    <!--JavaScript-->var fruits = [
        { apples: 10 },
        { oranges: 12 },
        { lemons: 15 },
        { pears: 20 },
        { pineapples: 3 }
    ];
    
    $(function () {
        $("#funnelContainer").dxFunnel({
            dataSource: new DevExpress.data.DataSource({
                store: fruits,
                map: function (item) {
                    var fruitName = Object.keys(item)[0];
                    return {
                        fruit: fruitName.charAt(0).toUpperCase() + fruitName.slice(1),
                        count: item[fruitName]
                    }
                },
                paginate: false
            }),
            argumentField: 'fruit',
            valueField: 'count'
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        fruits = [
            { apples: 10 },
            { oranges: 12 },
            { lemons: 15 },
            { pears: 20 },
            { pineapples: 3 }
        ];
        funnelDataSource = new DataSource({
            store: this.fruits,
            map: function (item) {
                var fruitName = Object.keys(item)[0];
                return {
                    fruit: fruitName.charAt(0).toUpperCase() + fruitName.slice(1),
                    count: item[fruitName]
                }
            },
            paginate: false
        });
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

    <!--HTML--><dx-funnel
        [dataSource]="funnelDataSource"
        argumentField="fruit"
        valueField="count">
    </dx-funnel>

---

[note]Even if you have [passed a JavaScript array](/concepts/05%20Widgets/Funnel/03%20Data%20Binding/05%20Simple%20Array/05%20Array%20Only.md '/Documentation/Guide/Widgets/Funnel/Data_Binding/Simple_Array/Array_Only/') to the **dataSource** option, the **Funnel** automatically places it into an **ArrayStore** wrapped into the **DataSource** that you can get with the [getDataSource()](/api-reference/10%20UI%20Widgets/DataHelperMixin/3%20Methods/getDataSource().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Methods/#getDataSource') method.

#####See Also#####
- [DataSource Examples - In-memory Data](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/0%20In-memory%20Data.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#In-memory_Data')
- [Update Data in the Funnel](/concepts/05%20Widgets/Funnel/03%20Data%20Binding/26%20Update%20Data '/Documentation/Guide/Widgets/Funnel/Data_Binding/Update_Data/')
