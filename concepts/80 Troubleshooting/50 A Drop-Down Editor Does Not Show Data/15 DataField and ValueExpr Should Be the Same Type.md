If you use a lookup column editor in the DataGrid or TreeList, you need to specify the [columns](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/).[dataField](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataField) property. The [store](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/).[key](/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key), the [lookup](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/lookup/).[valueExpr](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/lookup/#valueExpr) and the [columns](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/).[dataField](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataField) values should be the same data type. In the code below, the `StateID` and `ID` fields should have the same type (for example, `String`).

---
##### jQuery

    $('#gridContainer').dxDataGrid({
        // ...
        columns: [
            {
                dataField: 'StateID',
                lookup: {
                    dataSource: new DevExpress.data.DataSource({
                        store: {
                            type: 'array',
                            data: sampleData,
                            key: 'ID',
                        },
                    }),
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
    import DataSource from 'devextreme/data/data_source';
    import ArrayStore from 'devextreme/data/array_store';

    // ...
    export class AppComponent {
        dataSource: DataSource;
        constructor(service: Service) {
            this.dataSource = new DataSource({
                store: new ArrayStore({
                    data: sampleData,
                    key: 'ID',
                })
            });
        }
    }

##### Vue

    <!-- tab: App.vue-->
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
        import DataSource from 'devextreme/data/data_source';
        // ...

        export default {
            components: {
                DxDataGrid, 
                DxColumn, 
                DxLookup
            },
        data() {
            return {
                dataSource: new DataSource({
                    store: {
                        type: 'array',
                        data: sampleData,
                        key: 'ID'
                    }
                })
            }
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import DataGrid, { Column, Lookup } from 'devextreme-react/data-grid';

    import DataSource from 'devextreme/data/data_source';

    const dataSource = new DataSource({
        store: {
            type: 'array',
            data: sampleData,
            key: 'ID',
        },
    });

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
