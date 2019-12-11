Call **dispose()** to free up the allocated resources and remove the DOM node associated with the widget:

    <!--HTML-->
    <dx-data-grid #dataGridVar id="myDataGrid"></dx-data-grid>

<!---->

    <!--TypeScript-->
    import { Component, ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild('dataGridVar', { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild('dataGridVar') dataGrid: DxDataGridComponent;

        removeDataGrid (e) {
            this.dataGrid.instance.dispose();
            document.getElementById('myDataGrid').remove();
        }
    }