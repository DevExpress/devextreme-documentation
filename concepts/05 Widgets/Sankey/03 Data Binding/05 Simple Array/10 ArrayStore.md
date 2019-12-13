You can place a JavaScript array in an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/') to extend its functionality. The **ArrayStore** provides an interface for loading and editing data, and allows you to handle data-related events. You should declare the **ArrayStore** inside the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') configuration object because the **Sankey** widget requires disabled [pagination](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') to prevent data from partitioning.

---
##### jQuery

    <!--JavaScript-->var sankeyData = [
        { source: "Brazil", target: "Spain", weight: 4 },
        { source: "Brazil", target: "Portugal", weight: 5 },
        { source: "Brazil", target: "England", weight: 2 },
        { source: "Canada", target: "Portugal", weight: 2 },
        { source: "Canada", target: "England", weight: 1 },
        { source: "Mexico", target: "Portugal", weight: 9 },
        { source: "Mexico", target: "Spain", weight: 5 }
    ];

    $(function() {
        $("#sankeyContainer").dxSankey({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: "array",
                    data: sankeyData,
                    onLoaded: function() {
                        // Event handling commands go here
                    }
                },
                paginate: false
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import "devextreme/data/array_store";
    // ...
    export class AppComponent {
        sankeyData: Array<{ source: string, target: string, weight: number }> = [
            { source: "Brazil", target: "Spain", weight: 4 },
            { source: "Brazil", target: "Portugal", weight: 5 },
            { source: "Brazil", target: "England", weight: 2 },
            { source: "Canada", target: "Portugal", weight: 2 },
            { source: "Canada", target: "England", weight: 1 },
            { source: "Mexico", target: "Portugal", weight: 9 },
            { source: "Mexico", target: "Spain", weight: 5 }
        ];
        sankeyDataSource: DataSource = new DataSource({
            store: {
                type: "array",
                data: this.sankeyData,
                onLoaded: () => {
                    // Event handling commands go here
                }
            },
            paginate: false
        });
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

    <!--HTML--><dx-sankey
        [dataSource]="sankeyDataSource">
    </dx-sankey>

---

The **DataSource** can also be used for data processing. In the following example, it is used to [map](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Reading_Data_Data_Transformation_Item_Mapping) an array of arrays provided originally to a **Sankey**-supported array of objects:

---
##### jQuery

    <!--JavaScript-->var sankeyArray = [
        [ "Brazil", "Spain", 4 ],
        [ "Brazil", "Portugal", 5 ],
        [ "Brazil", "England", 2 ],
        [ "Canada", "Portugal", 2 ],
        [ "Canada", "England", 1 ],
        [ "Mexico", "Portugal", 9 ],
        [ "Mexico", "Spain", 5 ]
    ];
    
    $(function() {
        $("#sankeyContainer").dxSankey({
            dataSource: new DevExpress.data.DataSource({
                store: sankeyArray,
                map: function(item) {
                    return {
                        source: item[0],
                        target: item[1],
                        weight: item[2]
                    }
                },
                paginate: false
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        sankeyArray: Array<any> = [
            [ "Brazil", "Spain", 4 ],
            [ "Brazil", "Portugal", 5 ],
            [ "Brazil", "England", 2 ],
            [ "Canada", "Portugal", 2 ],
            [ "Canada", "England", 1 ],
            [ "Mexico", "Portugal", 9 ],
            [ "Mexico", "Spain", 5 ]
        ];
        sankeyDataSource: DataSource = new DataSource({
            store: this.sankeyArray,
            map: (item) => {
                return {
                    source: item[0],
                    target: item[1],
                    weight: item[2]
                }
            },
            paginate: false
        });
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

    <!--HTML--><dx-sankey
        [dataSource]="sankeyDataSource">
    </dx-sankey>

---

#####See Also#####
- [DataSource Examples - In-memory Data](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/0%20In-memory%20Data.md '/Documentation/Guide/Data_Layer/Data_Source_Examples/#In-memory_Data')
- [Update Data in the Sankey](/concepts/05%20Widgets/Sankey/03%20Data%20Binding/26%20Update%20Data '/Documentation/Guide/Widgets/Sankey/Data_Binding/Update_Data/')
