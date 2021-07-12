---
id: PivotGridDataSource.Options.fields.filterValues
type: Array<any>
default: undefined
---
---
##### shortDescription
Specifies the values by which the field is filtered.

---
---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                // ...
                filterType: "exclude",
                filterValues: [[2015], [2016]]
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
                    filterType: "exclude",
                    filterValues: [[2015], [2016]]
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
            filterType: 'exclude',
            filterValues: [[2015], [2016]]
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
            filterType: 'exclude',
            filterValues: [[2015], [2016]]
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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/HeaderFilter/"
}

#####See Also#####
- **fields[]**.[filterType](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/filterType.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#filterType')
- **fields[]**.[allowFiltering](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/allowFiltering.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowFiltering')