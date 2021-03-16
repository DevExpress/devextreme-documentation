To reorder columns, change their order in the **columns** array. Users can also reorder columns if you enable the [allowColumnReordering](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#allowColumnReordering) property.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#treeList").dxTreeList({
            // ...
            columns: [{
                dataField: "FullName",
                validationRules: [{
                    type: "required"
                }],
                fixed: true
            }, {
                dataField: "Position",
                validationRules: [{
                    type: "required"
                }]
            }, {
                dataField: "BirthDate", 
                dataType: "date",
                width: 100,
                validationRules: [{
                    type: "required"
                }]
            }, {
                dataField: "HireDate", 
                dataType: "date",
                width: 100,
                validationRules: [{
                    type: "required"
                }]
            }, "City", "State", {
                dataField: "Email",
                visible: false
            }, "MobilePhone", "Skype"],
            allowColumnReordering: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list ...
        [allowColumnReordering]="true">
        <dxi-column dataField="FullName" [fixed]="true">
            <dxi-validation-rule type="required"></dxi-validation-rule>
        </dxi-column>
        <dxi-column dataField="Position">
            <dxi-validation-rule type="required"></dxi-validation-rule>
        </dxi-column>
        <dxi-column
            dataField="BirthDate"
            dataType="date"
            [width]="100">
            <dxi-validation-rule type="required"></dxi-validation-rule>
        </dxi-column>
        <dxi-column
            dataField="HireDate"
            dataType="date"
            [width]="100">
            <dxi-validation-rule type="required"></dxi-validation-rule>
        </dxi-column>
        <dxi-column dataField="City"></dxi-column>
        <dxi-column
            dataField="State"
            sortOrder="asc">
            <dxi-validation-rule type="required"></dxi-validation-rule>
        </dxi-column>
        <dxi-column dataField="Email" [visible]="false"></dxi-column>
        <dxi-column dataField="MobilePhone"></dxi-column>
        <dxi-column dataField="Skype"></dxi-column>
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxTreeList ...
                :allow-column-reordering="true">
                <DxColumn data-field="FullName" :fixed="true">
                    <DxRequiredRule />
                </DxColumn>
                <DxColumn data-field="Position">
                    <DxRequiredRule />
                </DxColumn>
                <DxColumn
                    data-field="BirthDate"
                    data-type="date"
                    :width="100">
                    <DxRequiredRule />
                </DxColumn>
                <DxColumn
                    data-field="HireDate"
                    data-type="date"
                    :width="100">
                    <DxRequiredRule />
                </DxColumn>
                <DxColumn data-field="City" />
                <DxColumn
                    data-field="State"
                    sort-order="asc">
                    <DxRequiredRule />
                </DxColumn>
                <DxColumn data-field="Email" :visible="false" />
                <DxColumn data-field="MobilePhone" />
                <DxColumn data-field="Skype" />
            </DxTreeList>
        </div>
    </template>

    <script>
    // ...
    import {
        DxTreeList,
        DxColumn
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxColumn
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        TreeList,
        Column
    } from 'devextreme-react/tree-list';

    function App() {
        return (
            <div className="App">
                <TreeList ...
                    allowColumnReordering={true}>
                    <Column dataField="FullName">
                        <RequiredRule />
                    </Column>
                    <Column dataField="Position">
                        <RequiredRule />
                    </Column>
                    <Column
                        dataField="BirthDate"
                        dataType="date"
                        width={100}>
                        <RequiredRule />
                    </Column>
                    <Column
                        dataField="HireDate"
                        dataType="date"
                        width={100}>
                        <RequiredRule />
                    </Column>
                    <Column dataField="City" />
                    <Column
                        dataField="State"
                        sortOrder="asc">
                        <RequiredRule />
                    </Column>
                    <Column dataField="Email" visible={false} />
                    <Column dataField="MobilePhone" />
                    <Column dataField="Skype" />
                </TreeList>
            </div>
        );
    }

    export default App;

---

In the code above, we also specify the *"date"* [dataType](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#dataType) for the `BirthDate` and `HireDate` columns because `BirthDate` and `HireDate` are stored as strings, but you want the TreeList to treat them as date-time values.