To apply hierarchical header filter values, define the [calculateFilterExpression](/api-reference/_hidden/GridBaseColumn/calculateFilterExpression.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateFilterExpression') function. Return a [group filter expression](/concepts/70%20Data%20Binding/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering/1%20Group%20Filter%20Operations.md '/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Filtering/Group_Filter_Operations') that compares **filterValue** with both item and group fields:

---

##### jQuery

    <!-- tab: index.js -->
    $('#gridContainer').dxDataGrid({
        columns: [{
            calculateFilterExpression(filterValue, selectedFilterOperation, target) {
                if (target === "headerFilter" && filterValue) {
                    return [["City", selectedFilterOperation, filterValue], "or", ["State", selectedFilterOperation, filterValue]];
                }
                return this.defaultCalculateFilterExpression(filterValue, selectedFilterOperations, target);
            },
        }]
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column>
            <dxo-header-filter
                [calculateFilterExpression]="calculateFilterExpression"
            ></dxo-header-filter>
        </dxi-column>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    export class AppComponent {
        calculateFilterExpression(this: DxDataGridTypes.Column, filterValue, selectedFilterOperation, target) {
            if (target === "headerFilter" && filterValue) {
                return [["City", selectedFilterOperation, filterValue], "or", ["State", selectedFilterOperation, filterValue]];
            }
            return this.defaultCalculateFilterExpression(filterValue, selectedFilterOperations, target);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn ... >
                <DxHeaderFilter
                    :group-interval="groupInterval"
                    :calculate-filter-expression="calculateFilterExpression"
                />
            </DxColumn>
        </DxDataGrid>
    <template>

    <script setup lang="ts">
    import { DxDataGrid, DxColumn, DxHeaderFilter, type DxDataGridTypes } from 'devextreme-vue/data-grid';

    const groupInterval: string[] = ["State", "City"];
    function calculateFilterExpression(this: DxDataGridTypes.Column, filterValue, selectedFilterOperation, target) {
        if (target === "headerFilter" && filterValue) {
            return [["City", selectedFilterOperation, filterValue], "or", ["State", selectedFilterOperation, filterValue]];
        }
        return this.defaultCalculateFilterExpression(filterValue, selectedFilterOperations, target);
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import { DataGrid, Column, HeaderFilter, type DxDataGridTypes } from 'devextreme-react/data-grid';

    const groupInterval: string[] = ["State", "City"];

    function calculateFilterExpression(this: DxDataGridTypes.Column, filterValue, selectedFilterOperation, target) {
        if (target === "headerFilter" && filterValue) {
            return [["City", selectedFilterOperation, filterValue], "or", ["State", selectedFilterOperation, filterValue]];
        }
        return this.defaultCalculateFilterExpression(filterValue, selectedFilterOperations, target);
    }

    function App() {
        return (
            <DataGrid ... >
                <Column ... >
                    <HeaderFilter
                        groupInterval={groupInterval}
                        calculateFilterExpression={calculateFilterExpression}
                    />
                </Column>
            </DataGrid>
        )
    }

---