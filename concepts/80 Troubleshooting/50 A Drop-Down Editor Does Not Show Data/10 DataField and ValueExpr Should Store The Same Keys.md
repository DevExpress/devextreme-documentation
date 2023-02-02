If you use a lookup column editor in the DataGrid or TreeList, you need to specify the [columns](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/').[dataField](/api-reference/_hidden/GridBaseColumn/dataField.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataField') property. The value of that field should match the values in [lookup](/api-reference/_hidden/GridBaseColumn/lookup '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/lookup/').[valueExpr](/api-reference/_hidden/GridBaseColumn/lookup/valueExpr.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/lookup/#valueExpr'). In the code below, the `StateID` and `ID` fields should store the same keys and have the same type (for example, `String`).

---
##### jQuery

    $('#gridContainer').dxDataGrid({
        // ...
        columns: [
            {
                dataField: 'StateID',
                lookup: {
                    dataSource: {
                        store: {
                            type: 'array',
                            data: sampleData,
                            key: 'ID',
                        },
                    },
                    valueExpr: 'ID'
                }
            }
        ]
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column 
            dataField="StateID"
        >
            <dxo-lookup 
                [dataSource]="dataSource" 
                valueExpr="ID"
            >
            </dxo-lookup>
        </dxi-column>
     </dx-data-grid>

    <!-- tab: app.component.ts -->
    import ArrayStore from 'devextreme/data/array_store';

    // ...
    export class AppComponent {
        dataSource: any;
        constructor(service: Service) {
            this.dataSource = {
                store: new ArrayStore({
                    data: sampleData,
                    key: 'ID',
                })
            };
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn
                data-field="StateID"
            >
                <DxLookup
                    :data-source="dataSource"
                    value-expr="ID"
                />
            </DxColumn>
        </DxDataGrid>
    </template>

    <script>
        import { DxDataGrid, DxColumn, DxLookup } from 'devextreme-vue/data-grid';
        // ...

        export default {
            components: {
                DxDataGrid, 
                DxColumn, 
                DxLookup
            },
        data() {
            return {
                dataSource: {
                    store: {
                        type: 'array',
                        data: sampleData,
                        key: 'ID'
                    }
                }
            }
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import DataGrid, { Column, Lookup } from 'devextreme-react/data-grid';

    const dataSource = {
        store: {
            type: 'array',
            data: sampleData,
            key: 'ID',
        },
    };

    function App() {
        render (
            <React.Fragment>
                <DataGrid ... >
                    <Column
                        dataField="StateID"
                    >
                        <Lookup dataSource={dataSource} valueExpr="ID" />
                    </Column>
                </DataGrid>
            </React.Fragment>
        );
    }

    export default App;

---
