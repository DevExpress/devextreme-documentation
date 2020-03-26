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
        <DxPivotGrid
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

The following predefined **format**.[types](/Documentation/ApiReference/Common/Object_Structures/format/#type) are automatically converted to XLSX format string when exporting to Excel:

- Numeric Formats (except for *"largeNumber"* that is exported as the <a href="https://support.office.com/en-us/article/available-number-formats-in-excel-0afe8f52-97db-41f1-b972-4b46e9f1e8d2" target="_blank">General</a> format)
- Currency Formats
- Date-Time Formats (The *"quarter"* and *"quarterAndYear"* types will be exported as *"shortDate"*. The *"minute"* and *"millisecond"* types will be exported as *"longTime"*)

Other [formats](/Documentation/ApiReference/Common/Object_Structures/format/) - *"function"* and [custom format string](/Documentation/Guide/Common/Value_Formatting/#Format_Widget_Values/Custom_Format_String) are not converted  to the Excel format. To export these formats, use the [customizeText](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#customizeText) callback to export a formatted string instead of a raw cell value.

#####See Also#####
- **fields[]**.[customizeText](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/customizeText.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#customizeText')