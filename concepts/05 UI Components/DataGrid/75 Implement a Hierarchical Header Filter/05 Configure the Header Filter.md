To configure a hierarchical header filter, specify the following properties:

- [groupInterval](/api-reference/_hidden/GridBaseColumn/headerFilter/groupInterval.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/headerFilter/#groupInterval')    
Assign a string array that contains multiple items to the **groupInterval** property. Specify the nesting levels you want to implement in this array:

    ---

    ##### jQuery

        <!-- tab: index.js -->
        $('#gridContainer').dxDataGrid({
            columns: [{
                headerFilter: {
                    groupInterval: ["State", "City"],
                }
            }]
        })

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-data-grid ... >
            <dxi-column>
                <dxo-header-filter
                    [groupInterval]="groupInterval"
                ></dxo-header-filter>
            </dxi-column>
        </dx-data-grid>

        <!-- tab: app.component.ts -->
        export class AppComponent {
            groupInterval = ["State", "City"];
        }

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <DxDataGrid ... >
                <DxColumn ... >
                    <DxHeaderFilter
                        :group-interval="groupInterval"
                    />
                </DxColumn>
            </DxDataGrid>
        <template>

        <script setup lang="ts">
        import { DxDataGrid, DxColumn, DxHeaderFilter } from 'devextreme-vue/data-grid';

        const groupInterval = ["State", "City"];
        </script>

    ##### React

        <!-- tab: App.tsx -->
        import { DataGrid, Column, HeaderFilter } from 'devextreme-react/data-grid';

        const groupInterval = ["State", "City"];

        function App() {
            return (
                <DataGrid ... >
                    <Column ... >
                        <HeaderFilter
                            groupInterval={groupInterval}
                        />
                    </Column>
                </DataGrid>
            )
        }

    ---

- **headerFilter**.[dataSource](/api-reference/_hidden/GridBaseColumn/headerFilter/dataSource.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/headerFilter/#dataSource')    
Configure a hierarchical **headerFilter**.**dataSource** following the *"tree"* [DataStructure](/api-reference/40%20Common%20Types/DataStructure.md '/Documentation/ApiReference/Common_Types/#DataStructure'). Specify the `text`, `value`, and `items[]` properties:

    ---

    ##### jQuery

        <!-- tab: index.js -->
        $('#gridContainer').dxDataGrid({
            columns: [{
                headerFilter: {
                    groupInterval: ["State", "City"],
                    dataSource: [{
                        text: "Arkansas",
                        value: "Arkansas",
                        items: [{
                            text: "Bentonville",
                            value: "Bentonville",
                        }]
                    }]
                }
            }]
        })

    ##### Angular

        <!-- tab: app.component.html -->
        <dx-data-grid ... >
            <dxi-column>
                <dxo-header-filter
                    [groupInterval]="groupInterval"
                    [dataSource]="headerFilterDataSource"
                ></dxo-header-filter>
            </dxi-column>
        </dx-data-grid>

        <!-- tab: app.component.ts -->
        export class AppComponent {
            groupInterval = ["State", "City"];
            headerFilterDataSource = [{
                text: "Arkansas",
                value: "Arkansas",
                items: [{
                    text: "Bentonville",
                    value: "Bentonville",
                }]
            }];
        }

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <DxDataGrid ... >
                <DxColumn ... >
                    <DxHeaderFilter
                        :group-interval="groupInterval"
                        :data-source="headerFilterDataSource"
                    />
                </DxColumn>
            </DxDataGrid>
        <template>

        <script setup lang="ts">
        import { DxDataGrid, DxColumn, DxHeaderFilter } from 'devextreme-vue/data-grid';

        const groupInterval = ["State", "City"];
        const headerFilterDataSource = [{
            text: "Arkansas",
            value: "Arkansas",
            items: [{
                text: "Bentonville",
                value: "Bentonville",
            }]
        }];
        </script>

    ##### React

        <!-- tab: App.tsx -->
        import { DataGrid, Column, HeaderFilter } from 'devextreme-react/data-grid';

        const groupInterval = ["State", "City"];
        const headerFilterDataSource = [{
            text: "Arkansas",
            value: "Arkansas",
            items: [{
                text: "Bentonville",
                value: "Bentonville",
            }]
        }]

        function App() {
            return (
                <DataGrid ... >
                    <Column ... >
                        <HeaderFilter
                            groupInterval={groupInterval}
                            dataSource={headerFilterDataSource}
                        />
                    </Column>
                </DataGrid>
            )
        }

    ---

For more information about hierarchical data structures in DevExtreme, refer to the following topic: [TreeList - dataStructure](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/dataStructure.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#dataStructure').