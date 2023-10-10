DevExtreme supports Generics for properties and methods that operate internal data. You can use Generics inside event handlers and to define instances of data-aware components like DataGrid:

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import DataSource from 'devextreme/data/data_source';
    import DxDataGridComponent from 'devextreme-angular/ui/data-grid';
    import Button from 'devextreme-angular/ui/button';
    import { Employee } from './data';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        @ViewChild(DxDataGridComponent<Employee, number>) dataGrid!: DxDataGridComponent<Employee, number>;

        dataSource: DataSource;

        constructor() {
            this.dataSource = new DataSource({
                store: service,
            });
        }

        onEditorPreparing(e: any) {
            if (e.dataField === 'LastName' && e.parentType === 'dataRow') {
                e.editorOptions.disabled = e.row?.data && e.row?.data.FirstName === '';
            }
        }

        onButtonClick() {
            this.dataGrid.instance.option('disabled', true);
        }
    }

    <!-- tab: app.component.html -->
    <dx-button
        text="Disable DataGrid"
        (onClick)="onButtonClick()"
    >
    </dx-button>
    <dx-data-grid
        [dataSource]="dataSource"
        [ref]="dataGrid"
        (onEditorPreparing)="onEditorPreparing($event)"
    ></dx-data-grid>