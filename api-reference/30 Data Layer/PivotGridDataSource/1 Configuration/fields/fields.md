---
id: PivotGridDataSource.Options.fields
type: Array<Object>
default: undefined
---
---
##### shortDescription
Configures pivot grid fields.

---
This property accepts an array of objects where each object configures a single field. Each pivot grid field must be associated with a data field using the [dataField](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/dataField.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField') property. Fields with the specified [area](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/area.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area') property are displayed in the pivot grid; other fields' headers are displayed in the [field chooser](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/10%20Field%20Chooser/01%20Field%20Chooser.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Field_Chooser').

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                dataField: "region",
                area: "row"
            }, {
                dataField: "date",
                dataType: "date",
                area: "column"
            }, {
                dataField: "sales",
                summaryType: "sum",
                area: "data"
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
                    dataField: "region",
                    area: "row"
                }, {
                    dataField: "date",
                    dataType: "date",
                    area: "column"
                }, {
                    dataField: "sales",
                    summaryType: "sum",
                    area: "data"
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
            dataField: 'region',
            area: 'row'
        }, {
            dataField: 'date',
            dataType: 'date',
            area: 'column'
        }, {
            dataField: 'sales',
            summaryType: 'sum',
            area: 'data'
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
            dataField: 'region',
            area: 'row'
        }, {
            dataField: 'date',
            dataType: 'date',
            area: 'column'
        }, {
            dataField: 'sales',
            summaryType: 'sum',
            area: 'data'
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

---

If the [retrieveFields](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/retrieveFields.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#retrieveFields') property is **true**, fields configured in the **fields** array are accompanied by auto-generated fields that do not belong to any area. However, a user can move them to any area using the field chooser.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/Overview/"
}

#####See Also#####
- [Fields and Areas](/concepts/05%20UI%20Components/PivotGrid/020%20Fields%20and%20Areas '/Documentation/Guide/UI_Components/PivotGrid/Fields_and_Areas/')
- [field(id)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/field(id).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldid') | [field(id, options)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/field(id_options).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldid_options')
- [fields()](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/fields().md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fields') | [fields(fields)](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/fields(fields).md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldsfields')