---
tags: filterBuilder, filter builder, lookup field
---
You can limit the available filter values by predefining them in the lookup field.

![DevExtreme HTML5 JavaScript Filter Builder Lookup Field](/images/FilterBuilder/visual_elements/lookup_field.png)

Each lookup field has an individual [data source](/api-reference/_hidden/dxFilterBuilderField/lookup/dataSource.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/lookup/#dataSource'). It can be a simple array of filter values...

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
            </dxo-lookup>
        </dxi-field>
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFilterBuilder>
            <DxField data-field="status"> <!-- a field from a data source to be filtered -->
                <DxLookup :data-source="lookupData" /> <!-- contains values present in the dataField -->
            </DxField>
        </DxFilterBuilder>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxFilterBuilder, {
        DxField,
        DxLookup
    } from 'devextreme-vue/filter-builder';

    const lookupData = [
        'Not Started',
        'Need Assistance',
        'In Progress',
        // ...
    ];

    export default {
        components: {
            DxFilterBuilder,
            DxField,
            DxLookup
        },
        data() {
            return {
                lookupData
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.light.css';

    import FilterBuilder, {
        Field,
        Lookup
    } from 'devextreme-react/filter-builder';

    const lookupData = [
        'Not Started',
        'Need Assistance',
        'In Progress',
        // ...
    ];

    export default function App() {
        return (
            <FilterBuilder>
                <Field dataField="status"> {/* a field from a data source to be filtered */}
                    <Lookup dataSource={lookupData}> {/* contains values present in the dataField */}
                </Field>
            </FilterBuilder>
        );
    }

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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFilterBuilder>
            <DxField data-field="statusId"> <!-- a field from a data source to be filtered -->
                <DxLookup
                    :data-source="statuses"
                    value-expr="id" <!-- contains values present in the dataField -->
                    display-expr="name" <!-- provides display values -->
                />
            </DxField>
        </DxFilterBuilder>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxFilterBuilder, {
        DxField,
        DxLookup
    } from 'devextreme-vue/filter-builder';

    const statuses = [
        { id: 1, name: 'Not Started' },
        { id: 2, name: 'Need Assistance' },
        { id: 3, name: 'In Progress' },
        // ...
    ];

    export default {
        components: {
            DxFilterBuilder,
            DxField,
            DxLookup
        },
        data() {
            return {
                statuses
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.light.css';

    import FilterBuilder, {
        Field,
        Lookup
    } from 'devextreme-react/filter-builder';

    const statuses = [
        { id: 1, name: 'Not Started' },
        { id: 2, name: 'Need Assistance' },
        { id: 3, name: 'In Progress' },
        // ...
    ];

    export default function App() {
        return (
            <FilterBuilder>
                <Field dataField="statusId"> {/* a field from a data source to be filtered */}
                    <Lookup
                        dataSource={statuses}
                        valueExpr="id" {/* contains values present in the dataField */}
                        displayExpr="name" {/* provides display values */}
                    />
                </Field>
            </FilterBuilder>
        );
    }

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FilterBuilder/WithList/"
}

#####See Also#####
- [lookup](/api-reference/_hidden/dxFilterBuilderField/lookup '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/lookup/')


