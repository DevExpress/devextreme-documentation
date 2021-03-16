TreeList columns have equal widths by default. You can set each column's [width](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#width) or indicate that all columns should adjust their widths to their content ([columnAutoWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnAutoWidth)). Users can resize columns if you enable the [allowColumnResizing](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#allowColumnResizing) property.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#treeList").dxTreeList({
            // ...
            columns: [
            // ...
            {
                dataField: "BirthDate", 
                dataType: "date",
                width: 100,
            }, {
                dataField: "HireDate", 
                dataType: "date",
                width: 100,
            },
            // ...
            ],
            allowColumnResizing: true,
            columnAutoWidth: true,
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list ...
        [allowColumnResizing]="true"
        [columnAutoWidth]="true">
        <!-- ... -->
        <dxi-column
            dataField="BirthDate"
            dataType="date"
            [width]="100">
        </dxi-column>
        <dxi-column
            dataField="HireDate"
            dataType="date"
            [width]="100">
        </dxi-column>
        <!-- ... -->
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxTreeList ...
                :allow-column-reordering="true"
                :column-auto-width="true">
                <!-- ... -->
                <DxColumn
                    data-field="BirthDate"
                    data-type="date"
                    :width="100">
                </DxColumn>
                <DxColumn
                    data-field="HireDate"
                    data-type="date"
                    :width="100">
                </DxColumn>
                <!-- ... -->
            </DxTreeList>
        </div>
    </template>

    <script>
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
                    columnAutoWidth={true}
                    allowColumnReordering={true}>
                    {/* ... */}
                    <Column
                        dataField="BirthDate"
                        dataType="date"
                        width={100}>
                    </Column>
                    <Column
                        dataField="HireDate"
                        dataType="date"
                        width={100}>
                    </Column>
                    {/* ... */}
                </TreeList>
            </div>
        );
    }

    export default App;

---