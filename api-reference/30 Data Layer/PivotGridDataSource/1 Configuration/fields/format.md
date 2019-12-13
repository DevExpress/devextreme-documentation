---
id: PivotGridDataSource.Options.fields.format
type: format
default: ''
---
---
##### shortDescription
Formats field values before they are displayed.

---
See the [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/') section for details on accepted values.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                // ...
                format: {
                    type: "largeNumber",
                    precision: 2
                },
                // ===== or a shorter version =====
                format: "largeNumber"
            }]
        });

        $("#pivotGridContainer").dxPivotGrid({
            dataSource: pivotGridDataSource
        });
    });
    

##### Angular

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    import { DxPivotGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // ...
                fields: [{
                    // ...
                    format: {
                        type: "largeNumber",
                        precision: 2
                    },
                    // ===== or a shorter version =====
                    format: "largeNumber"
                }]
            });
        }
    }

    @NgModule({
        imports: [
            // ...
            DxPivotGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-pivot-grid
        [dataSource]="pivotGridDataSource">
    </dx-pivot-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-pivot-grid
            :data-source="pivotGridDataSource"
        />
    </template>
    
    <script>
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import DxPivotGrid from 'devextreme-vue/pivot-grid';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            // ...
            format: {
                type: 'largeNumber',
                precision: 2
            },
            // ===== or a shorter version =====
            format: 'largeNumber'
        }]
    });

    export default {
        components: {
            DxPivotGrid
        },
        data() {
            return {
                pivotGridDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import DxPivotGrid from 'devextreme-react/pivot-grid';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            // ...
            format: {
                type: 'largeNumber',
                precision: 2
            },
            // ===== or a shorter version =====
            format: 'largeNumber'
        }]
    });

    class App extends React.Component {
        render() {
            return (
                <PivotGrid
                    dataSource={pivotGridDataSource}
                />
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().PivotGrid()
        .DataSource(ds => ds
            // ...
            .Fields(fields => {
                fields.Add()
                    // ...
                    .Format(f => f
                        .Type(Format.LargeNumber)
                        .Precision(2)
                    )
                    // ===== or a shorter version =====
                    .Format(Format.LargeNumber)
            })
        )
    )

---

#####See Also#####
- **fields[]**.[customizeText](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/customizeText.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#customizeText')