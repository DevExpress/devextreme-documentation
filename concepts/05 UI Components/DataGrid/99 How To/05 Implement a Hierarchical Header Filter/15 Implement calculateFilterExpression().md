To apply hierarchical header filter values, define the [calculateFilterExpression](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateFilterExpression) function. Return a [group filter expression](/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Filtering/Group_Filter_Operations) that compares **filterValue** with both item and group fields:

---

##### jQuery

    <!-- tab: index.js -->
    $('#gridContainer').dxDataGrid({
        columns: [{
            calculateFilterExpression(filterValue, selectedFilterOperation, target) {
                if (target === "headerFilter" && filterValue) {
                    return [["City", selectedFilterOperation, filterValue], "or", ["State", selectedFilterOperation, filterValue]];
                }
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
        calculateFilterExpression(filterValue, selectedFilterOperation, target) {
            if (target === "headerFilter" && filterValue) {
                return [["City", selectedFilterOperation, filterValue], "or", ["State", selectedFilterOperation, filterValue]];
            }
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
    import { DxDataGrid, DxColumn, DxHeaderFilter } from 'devextreme-vue/data-grid';

    const groupInterval: string[] = ["State", "City"];
    function calculateFilterExpression(filterValue, selectedFilterOperation, target) {
        if (target === "headerFilter" && filterValue) {
            return [["City", selectedFilterOperation, filterValue], "or", ["State", selectedFilterOperation, filterValue]];
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import { DataGrid, Column, HeaderFilter } from 'devextreme-react/data-grid';

    const groupInterval: string[] = ["State", "City"];

    function calculateFilterExpression(filterValue, selectedFilterOperation, target) {
        if (target === "headerFilter" && filterValue) {
            return [["City", selectedFilterOperation, filterValue], "or", ["State", selectedFilterOperation, filterValue]];
        }
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