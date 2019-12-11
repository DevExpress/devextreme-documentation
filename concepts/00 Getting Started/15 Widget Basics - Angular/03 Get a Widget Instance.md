You can use the `@ViewChild` or `@ViewChildren` decorator (depending on whether you are getting a single or multiple widget instances) and the component's `instance` property to access a widget instance. These decorators accept a component name or a [template reference variable](https://angular.io/guide/template-syntax#template-reference-variables--var-):

    <!--TypeScript-->
    import { Component, ViewChild } from "@angular/core";
    import { DxDataGridComponent } from "devextreme-angular";

    @Component({
        selector: 'my-app',
        template: `
            <dx-data-grid #targetDataGrid [dataSource]="dataSource"></dx-data-grid>
            <dx-button text="Refresh data" (onClick)="refresh()"></dx-button>
        `
    })
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent
        // or using a template reference variable
        // @ViewChild("targetDataGrid") dataGrid: DxDataGridComponent
        refresh() {
            this.dataGrid.instance.refresh();
        }

        // Getting multiple instances of one widget
        // @ViewChildren(DxDataGridComponent) dataGrids: QueryList<DxDataGridComponent>
    }

To access a widget instance in the markup, use the same template reference variables:

    <!--HTML-->
    <dx-select-box #targetSelectBox [items]="items"></dx-select-box>
    {{targetSelectBox.value}}

If none of the above can be used, save the widget instance in a component property once the widget is initialized:

    <!--TypeScript-->
    import { Component } from "@angular/core";
    import DataGrid from "devextreme/ui/data_grid";

    @Component({
        selector: 'my-app',
        template: `
            <dx-data-grid
                [dataSource]="dataSource"
                (onInitialized)="saveGridInstance($event)">
            </dx-data-grid>
            <dx-button text="Refresh data" (onClick)="refresh()"></dx-button>
        `
    })
    export class AppComponent {
        dataGridInstance: DataGrid;
        saveGridInstance (e) {
            this.dataGridInstance = e.component;
        }
        refresh() {
            this.dataGridInstance.refresh();
        }
    }

#####See Also#####
- [Change Options](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Change_Options/')
- [Handle Events](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/')
