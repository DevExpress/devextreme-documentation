To reorder columns, change their order in the **columns** array. Users can also reorder columns if you enable the [allowColumnReordering](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/allowColumnReordering.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#allowColumnReordering') property.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#treeList").dxTreeList({
            // ...
            columns: [ "FullName", "Position", {
                dataField: "BirthDate", 
                dataType: "date",
            }, {
                dataField: "HireDate", 
                dataType: "date",
            }, "City", "State", "Email", "MobilePhone", "Skype"],
            allowColumnReordering: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list ...
        [allowColumnReordering]="true">
        <dxi-column dataField="FullName"></dxi-column>
        <dxi-column dataField="Position"></dxi-column>
        <dxi-column
            dataField="BirthDate"
            dataType="date">
        </dxi-column>
        <dxi-column
            dataField="HireDate"
            dataType="date">
        </dxi-column>
        <dxi-column dataField="City"></dxi-column>
        <dxi-column dataField="State"></dxi-column>
        <dxi-column dataField="Email"></dxi-column>
        <dxi-column dataField="MobilePhone"></dxi-column>
        <dxi-column dataField="Skype"></dxi-column>
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxTreeList ...
                :allow-column-reordering="true">
                <DxColumn data-field="FullName"" />
                <DxColumn data-field="Position" />
                <DxColumn
                    data-field="BirthDate"
                    data-type="date">
                </DxColumn>
                <DxColumn
                    data-field="HireDate"
                    data-type="date">
                </DxColumn>
                <DxColumn data-field="City" />
                <DxColumn data-field="State" />
                <DxColumn data-field="Email" />
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
                    <Column dataField="FullName" />
                    <Column dataField="Position" />
                    <Column
                        dataField="BirthDate"
                        dataType="date">
                    </Column>
                    <Column
                        dataField="HireDate"
                        dataType="date">
                    </Column>
                    <Column dataField="City" />
                    <Column dataField="State" />
                    <Column dataField="Email" />
                    <Column dataField="MobilePhone" />
                    <Column dataField="Skype" />
                </TreeList>
            </div>
        );
    }

    export default App;

---

In the code above, we also specify the *"date"* [dataType](/api-reference/_hidden/GridBaseColumn/dataType.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#dataType') for the `BirthDate` and `HireDate` columns because `BirthDate` and `HireDate` are stored as strings, but you want the TreeList to treat them as date-time values.