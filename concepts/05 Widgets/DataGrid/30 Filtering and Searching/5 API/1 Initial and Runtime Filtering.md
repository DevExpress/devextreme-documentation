The API for filtering differs depending on the UI element that it affects. To specify an initial value for a [filter row cell](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/1%20Filter%20Row.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Filter_Row'), set a column's [selectedFilterOperation](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/selectedFilterOperation.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#selectedFilterOperation') and [filterValue](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/filterValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterValue') options. You can also change these options with the [columnOption](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue') method to assign a new value to a fitler row cell at runtime.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            fitlerRow: { visible: true },
            columns: [{
                // ...
                dataField: "isOnVacation",
                selectedFilterOperation: "=",
                filterValue: true
            }]
        });
    });

<!---->

    <!--JavaScript-->$("#dataGridContainer").dxDataGrid("columnOption", "isOnVacation", "filterValue", false);

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-filter-row [visible]="true"></dxo-filter-row>
        <dxi-column ...
            dataField="isOnVacation"
            selectedFilterOperation="="
            [filterValue]="true">
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        setFilterValue (dataFieldName, newValue) {
            this.dataGrid.instance.columnOption(dataFieldName, "filterValue", newValue);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

To specify initial values for a [header filter](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/2%20Header%20Filter.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Header_Filter'), set a column's [filterType](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/filterType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterType') and [filterValues](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/filterValues.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterValues') options. You can change these options with the **columnOption** method at runtime as well.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            headerFilter: { visible: true },
            columns: [{
                // ...
                dataField: "OrderDate",
                filterType: "exclude",
                filterValues: [2014]
            }]
        });
    });

<!---->

    <!--JavaScript-->$("#dataGridContainer").dxDataGrid("columnOption", "OrderDate", "filterValues", [2014, 2015]);

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-header-filter [visible]="true"></dxo-header-filter>
        <dxi-column ...
            dataField="OrderDate"
            filterType="exclude"
            [filterValues]="[2014]">
        </dxi-column>
    </dx-data-grid>


    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        setFilterValues (dataFieldName, newValue) {
            this.dataGrid.instance.columnOption(dataFieldName, "filterValues", newValue);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

You can specify an initial text for the [search panel](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/3%20Search%20Panel.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Search_Panel') using the **searchPanel**.[text](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/searchPanel/text.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/#text') option. Call the [searchByText(text)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/searchByText(text).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#searchByTexttext') method to change the text at runtime.

---
##### jQuery


    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            searchPanel: {
                visible: true,
                text: "Pending"
            }
        });
    });

<!---->

    <!--JavaScript-->$("#dataGridContainer").dxDataGrid("searchByText", "Solved");

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-search-panel [visible]="true" text="Pending"></dxo-search-panel>
    </dx-data-grid>

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        setSearchString (newString) {
            this.dataGrid.instance.searchByText(newString);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

All the aforementioned options and methods filter data that was returned by the data source. If you need to pre-filter data in the data source, call the [filter(filterExpr)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr') method passing a [filter expression](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering') as an argument. Note that this filter can be cleared only [programmatically](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/5%20API/8%20Clear%20Filtering%20Settings.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#API/Clear_Filtering_Settings').

---
##### jQuery

    <!--JavaScript-->$("#dataGridContainer").dxDataGrid("filter", [
        [ "Cost", ">", 1000 ],
        "and",
        [ "Cost", "<=", 2000 ]
    ]);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        filterByCost () {
            this.dataGrid.instance.filter([
                [ "Cost", ">", 1000 ],
                "and",
                [ "Cost", "<=", 2000 ]
            ]);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

Since there are many ways to filter data, you may need to get a filter combined from all applied filters. For this, call the [getCombinedFilter()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/getCombinedFilter().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getCombinedFilter') method. It returns the filter with [getters](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters') by default. Call it passing **true** as the argument to get the combined filter with [data fields](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/dataField.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField').

---
##### jQuery

    <!--JavaScript-->$("#dataGridContainer").dxDataGrid("getCombinedFilter", true);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        getCombinedFilter () {
            return this.dataGrid.instance.getCombinedFilter(true);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

#####See Also#####
- [Filtering API - Clear Filtering Settings](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/5%20API/8%20Clear%20Filtering%20Settings.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#API/Clear_Filtering_Settings')