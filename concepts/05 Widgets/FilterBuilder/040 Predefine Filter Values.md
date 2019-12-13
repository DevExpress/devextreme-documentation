You can limit the available filter values by predefining them in the lookup field.

![DevExtreme HTML5 JavaScript Filter Builder Lookup Field](/images/FilterBuilder/visual_elements/lookup_field.png)

Each lookup field has an individual [data source](/api-reference/_hidden/dxFilterBuilderField/lookup/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/fields/lookup/#dataSource'). It can be a simple array of filter values...

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#filterBuilder").dxFilterBuilder({
            // ...
            fields: [{
                dataField: 'status', // a field from a data source to be filtered
                lookup: {
                    dataSource: [ // contains values present in the dataField
                        'Not Started',
                        'Need Assistance',
                        'In Progress',
                        // ...
                    ]
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-filter-builder>
        <dxi-field
            dataField="status"> <!-- a field from a data source to be filtered -->
            <dxo-lookup
                [dataSource]="lookupData"> <!-- contains values present in the dataField -->
            </dxo-field>
        </dxi-column>
    </dx-filter-builder>

    <!--TypeScript-->
    import { DxFilterBuilderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        lookupData = [
            'Not Started',
            'Need Assistance',
            'In Progress',
            // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxFilterBuilderModule
        ],
        // ...
    })

---

... or a collection of objects that map actual filter values to display values. 

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#filterBuilder").dxFilterBuilder({
            // ...
            fields: [{
                dataField: "statusId", // a field from a data source to be filtered
                lookup: {
                    dataSource: [
                        { id: 1, name: 'Not Started' },
                        { id: 2, name: 'Need Assistance' },
                        { id: 3, name: 'In Progress' },
                        // ...
                    ],
                    valueExpr: 'id', // contains values present in the dataField
                    displayExpr: 'name' // provides display values
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-filter-builder>
        <dxi-field
            dataField="task">
        </dxi-field>
        <dxi-field
            dataField="statusId"> <!-- a field from a data source to be filtered -->
            <dxo-lookup 
                [dataSource]="statuses"
                valueExpr="id" <!-- contains values present in the dataField -->
                displayExpr="name"> <!-- provides display values -->
            </dxo-lookup> 
        </dxi-field>
    </dx-filter-builder>

    <!--TypeScript-->
    import { DxFilterBuilderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        statuses = [
            { id: 1, name: 'Not Started' },
            { id: 2, name: 'Need Assistance' },
            { id: 3, name: 'In Progress' },
            // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxFilterBuilderModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FilterBuilder/WithList/"
}

#####See Also#####
- [lookup](/api-reference/_hidden/dxFilterBuilderField/lookup '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/fields/lookup/')

[tags] filterBuilder, filter builder, lookup field
