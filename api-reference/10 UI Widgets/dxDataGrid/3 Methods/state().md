---
##### shortDescription
Gets the current **DataGrid** state.

##### return: Object
The current **DataGrid** state.

---
The following example shows how to save the widget state in the local storage and load it from there:

#####jQuery

    <!--JavaScript-->
    $(function () {
        var dataGrid = $("#dataGridContainer").dxDataGrid({ 
            // ...
        }).dxDataGrid;
        $("#save").dxButton({
            text: 'Save State',
            onClick: function() {
                var state = dataGrid.state();
                // Saves the state in the local storage
                localStorage.setItem("dataGridState", JSON.stringify(state));
            }
        });
        $("#load").dxButton({
            text: 'Load State',
            onClick: function() {
                let state = JSON.parse(localStorage.getItem("dataGridState"));
                dataGrid.state(state);
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { Component, ViewChild } from '@angular/core';
    import { 
        DxDataGridModule, 
        DxButtonModule, 
        DxDataGridComponent 
    } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) DataGrid: DxDataGridComponent
        saveState() {
            let state = this.dataGrid.instance.state();
            // Saves the state in the local storage
            localStorage.setItem("dataGridState", JSON.stringify(state));
        }
        loadState() {
            let state = JSON.parse(localStorage.getItem("dataGridState"));
            this.dataGrid.instance.state(state);
        }
    }
    @NgModule({
        imports: [
            DxDataGridModule,
            DxButtonModule,
            // ...
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ...>
    </dx-data-grid>
    <dx-button
        text="Save State"
        (onClick)="saveState()">
    </dx-button>
    <dx-button
        text="Load State"
        (onClick)="loadState()">
    </dx-button>

---

#####See Also#####
#include common-link-callmethods
- [stateStoring](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/stateStoring '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/')