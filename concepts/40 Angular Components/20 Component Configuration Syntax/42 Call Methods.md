To call widget methods, you need the widget instance. To access it, use the `@ViewChild` or `@ViewChildren` decorator (depending on whether you are getting a single or multiple widget instances) and the component's `instance` property. These decorators accept a component name or a <a href="https://angular.io/guide/template-syntax#template-reference-variables--var-" target="_blank">template reference variable</a>. The following code illustrates this approach by the example of the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Angular/Light) widget:  

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from "@angular/core";
    import { DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent
        // ===== or using a template reference variable =====
        @ViewChild("targetDataGrid", { static: false }) dataGrid: DxDataGridComponent

        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent
        // @ViewChild("targetDataGrid") dataGrid: DxDataGridComponent
        refresh() {
            this.dataGrid.instance.refresh();
        }

        // Getting multiple instances of one widget
        // @ViewChildren(DxDataGridComponent) dataGrids: QueryList<DxDataGridComponent>
    }

    <!-- tab: app.component.html -->
    <dx-data-grid #targetDataGrid [dataSource]="dataSource"></dx-data-grid>
    <dx-button text="Refresh data" (onClick)="refresh()"></dx-button>

Alternatively, you can save the widget instance in a component property once the widget is initialized:

    <!-- tab: app.component.html -->
    <dx-data-grid
        [dataSource]="dataSource"
        (onInitialized)="saveGridInstance($event)">
    </dx-data-grid>
    <dx-button text="Refresh data" (onClick)="refresh()"></dx-button>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";
    import DataGrid from "devextreme/ui/data_grid";
    // ...
    export class AppComponent {
        dataGridInstance: DataGrid;
        saveGridInstance (e) {
            this.dataGridInstance = e.component;
        }
        refresh() {
            this.dataGridInstance.refresh();
        }
    }
