DevExtreme supports Generics for properties and methods that operate internal data. You can use Generics inside event handlers and to define instances of data-aware components like DataGrid:

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import { DxDataGridComponent, DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
    import { Employee } from './data';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid!: DxDataGridComponent<Employee, number>;

        onEditorPreparing(e: DxDataGridTypes.EditorPreparingEvent<Employee, number>) {
            if (e.dataField === 'LastName' && e.parentType === 'dataRow') {
                e.editorOptions.disabled = e.row?.data && e.row?.data.FirstName === '';
            }
        }

        onButtonClick() {
            const keys: number[] = this.dataGrid.instance.getSelectedRowKeys();
        }
    }

    <!-- tab: app.component.html -->
    <dx-button
        text="Get Selected Keys"
        (onClick)="onButtonClick()"
    >
    </dx-button>
    <dx-data-grid ...
        (onEditorPreparing)="onEditorPreparing($event)"
    >
    </dx-data-grid>