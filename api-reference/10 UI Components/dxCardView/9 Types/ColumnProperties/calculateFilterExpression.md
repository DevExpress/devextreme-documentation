---
id: ColumnProperties.calculateFilterExpression
type: function(filterValue, selectedFilterOperation, target)
---
---
##### shortDescription
Specifies the column's custom rules to filter data.

##### param(filterValue): any
A user input value.             
Contains an array if the `selectedFilterOperation` is one of the following: *"between"*, *"anyof"*, *"noneof"*.

##### param(selectedFilterOperation): String | null
A selected filter operation.

##### param(target): String
A UI element used to filter data.     
Possible values: [*"headerFilter"*](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/headerFilter.md '{basewidgetpath}/Configuration/headerFilter/'), [*"filterBuilder"*](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/filterBuilder.md '{basewidgetpath}/Configuration/#filterBuilder'), [*"search"*](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/searchPanel.md '{basewidgetpath}/Configuration/searchPanel/').

##### return: String | Array<any> | function()
A filter expression.

##### context: Column
The `this` keyword refers to the column's configuration.

---
<!-- Description goes here -->


---

##### jQuery

    <!-- tab: index.js -->
    $(#dxCardView).dxCardView({
        // ...
        columns: [{
            dataField: 'OrderDate',
            calculateFilterExpression(value, selectedFilterOperations, target) {
                if (value === 'weekends') {
                    return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
                }
                return this.defaultCalculateFilterExpression(value, selectedFilterOperations, target);
            },
        }]
    })

    function getOrderDay(rowData) {
        return (new Date(rowData.OrderDate)).getDay();
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-card-view ... >
        <dxi-card-view-column
            dataField="OrderDate"
            [calculateFilterExpression]="calculateOrderDateFilterExpression"
        ></dxi-card-view-column>
    </dx-card-view>

    <!-- tab: app.component.ts -->
    function getOrderDay(rowData: orderObj) {
        return new Date(rowData.OrderDate).getDay();
    }
    // ...
    export class AppComponent {
        calculateOrderDateFilterExpression(this: DxCardViewTypes.Column, value, selectedFilterOperations, target) {
            if (value === 'weekends') {
                return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
            }
            return this.defaultCalculateFilterExpression(value, selectedFilterOperations, target);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCardView ... >
            <DxColumn
                data-field="OrderDate"
                :calculate-filter-expression="calculateOrderDateFilterExpression"
            />
        </DxCardView>
    </template>

    <script setup lang="ts">
    import DxCardView, { DxColumn, type DxCardViewTypes } from 'devextreme-vue/card-view';

    function getOrderDay(rowData: orderObj) {
        return new Date(rowData.OrderDate).getDay();
    }

    function calculateOrderDateFilterExpression(this: DxCardViewTypes.Column, value, selectedFilterOperations, target) {
        if (value === 'weekends') {
            return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
        }
        return this.defaultCalculateFilterExpression(value, selectedFilterOperations, target) as any;
    }
    </script>

##### React

    <!-- tab: App.ts -->
    import CardView, { Column } from 'devextreme-react/card-view';

    function getOrderDay(rowData: orderObj) {
        return new Date(rowData.OrderDate).getDay();
    }

    function calculateOrderDateFilterExpression(value, selectedFilterOperations, target) {
        if (value === 'weekends') {
            return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
        }
        return this.defaultCalculateFilterExpression(value, selectedFilterOperations, target);
    }

    function App() {
        return (
            <CardView ... >
                <Column
                    dataField="OrderDate"
                    calculateFilterExpression={calculateOrderDateFilterExpression}
                />
            </CardView>
        )
    }

---