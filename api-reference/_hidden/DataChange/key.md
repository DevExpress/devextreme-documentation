---
id: DataChange.key
type: any
---
---
##### shortDescription
The key of the row being updated or removed.

---

The **key** property supports a simple and composite keys.

---

##### jQuery

    <!--JavaScript-->
    var grid = $("#dataGridContainer").dxDataGrid("instance");
    //...
    changes.push({
        type: 'update',
        data: { FirstName : 'name1', LastName: 'name2' }

        key: 1 // simple key
        // or ...
        key: {ID: 1, SecondID: 2} // composite key
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";  
    
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

        changes.push({
            type: 'update',
            data: { FirstName : 'name1', LastName: 'name2' }

            key: 1 // simple key
            // or ...
            key: {ID: 1, SecondID: 2} // composite key
        });
    }

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            id="gridContainer">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    const dataGridRef = 'dataGrid';

    export default {
        components: {
            DxDataGrid
        },
        data() {
            return {
                dataGridRef
            }
        },
        computed: {
            dataGrid: function() {
                return this.$refs[dataGridRef].instance;
            }
        },
        methods: {
            changes.push({
                type: 'update',
                data: { FirstName : 'name1', LastName: 'name2' }

                key: 1 // simple key
                // or ...
                key: {ID: 1, SecondID: 2} // composite key
            });
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.dataGridRef = React.createRef();

            changes.push({
                type: 'update',
                data: { FirstName : 'name1', LastName: 'name2' }

                key: 1 // simple key
                // or ...
                key: {ID: 1, SecondID: 2} // composite key
            });
        }

        get dataGrid() {
            return this.dataGridRef.current.instance;
        }

        render() {
            return (
                <DataGrid ...
                    ref={this.dataGridRef}>
                </DataGrid>
            );
        }
    }
    export default App;


##### ASP.NET Core Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().DataGrid()
        .ID("dataGrid")
        @* ... *@
    )

    <script type="text/javascript">
    changes.push({
        type: 'update',
        data: { FirstName : 'name1', LastName: 'name2' }

        key: 1 // simple key
        // or ...
        key: {ID: 1, SecondID: 2} // composite key
    });
    </script>

##### ASP.NET MVC Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().DataGrid()
        .ID("dataGrid")
        @* ... *@
    )

    <script type="text/javascript">
    changes.push({
        type: 'update',
        data: { FirstName : 'name1', LastName: 'name2' }

        key: 1 // simple key
        // or ...
        key: {ID: 1, SecondID: 2} // composite key
    });
    </script>

---
