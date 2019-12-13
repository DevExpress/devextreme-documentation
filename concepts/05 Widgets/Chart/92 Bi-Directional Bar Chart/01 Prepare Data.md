To prepare data for the bi-directional bar chart, convert one of the two sets of bars' values from positive to negative. You can change the sign in each value manually or use the DevExtreme [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/')'s [map](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/map.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map') function: 

---
##### jQuery

    <!--JavaScript-->
    var population = [
        { age: "0-4", male: 3.1, female: 2.9 },
        { age: "5-9", male: 3.1, female: 3.0 },
        // ...
    ];

    $(function() {
        $("#chartContainer").dxChart({
            dataSource: {
                store: {
                    type: "array",
                    data: population
                },
                map: function (dataItem) {
                    return {
                        age: dataItem.age,
                        male: dataItem.male,
                        female: -dataItem.female // Changing the values' sign
                    }
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import ArrayStore from "devextreme/data/array_store";
    // ...
    export class AppComponent {
        dataSource: DataSource;
        population = [
            { age: "0-4", male: 3.1, female: 2.9 },
            { age: "5-9", male: 3.1, female: 3.0 },
            // ...
        ];
        constructor() {
            this.dataSource = new DataSource({
                store: new ArrayStore({
                    data: this.population
                }),
                map: (dataItem) => {
                    return {
                        age: dataItem.age,
                        male: dataItem.male,
                        female: -dataItem.female // Changing the values' sign
                    }
                }
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

    <!--HTML--><dx-chart
        [dataSource]="dataSource">
    </dx-chart>

---
