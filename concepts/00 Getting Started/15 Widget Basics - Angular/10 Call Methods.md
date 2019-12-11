Before calling a widget's method, get the widget's component using either its name or a [template reference variable](https://angular.io/guide/template-syntax#template-reference-variables--var-) applying the [@ViewChild()](https://angular.io/api/core/ViewChild) decorator. The component's **instance** property exposes all the widget's methods. The following example shows how to call the [DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid '/Documentation/ApiReference/UI_Widgets/dxDataGrid/') widget's [refresh()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/refresh().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#refresh') method:

    <!--TypeScript-->
    import { Component, ViewChild } from "@angular/core";
    import { DxDataGridComponent } from "devextreme-angular";

    @Component({
        selector: 'my-app',
        template: `
            <dx-data-grid #targetDataGrid [dataSource]="dataSource"></dx-data-grid>
            <dx-button text="Refresh Data" (onClick)="refresh()"></dx-button>
        `
    })
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent
        // or
        // @ViewChild("targetDataGrid") dataGrid: DxDataGridComponent
        dataSource = [ ... ];
        refresh() {
            this.dataGrid.instance.refresh();
        }
    }

If a page contains several instances of one widget, you can get a specific one using a template reference variable as shown in the previous code, or you can get a [QueryList](https://angular.io/api/core/QueryList) of all instances using the [@ViewChildren()](https://angular.io/api/core/ViewChildren) decorator:

    <!--TypeScript-->
    import { Component, ViewChildren, QueryList } from "@angular/core";
    import { DxDataGridComponent } from "devextreme-angular";

    @Component({
        selector: 'my-app',
        template: `
            <dx-data-grid [dataSource]="dataSource1"></dx-data-grid>
            <dx-data-grid [dataSource]="dataSource2"></dx-data-grid>
            <dx-button text="Refresh All Data" (onClick)="refreshAllGrids()"></dx-button>
        `
    })
    export class AppComponent {
        @ViewChildren(DxDataGridComponent) dataGrids: QueryList<DxDataGridComponent>
        dataSource1 = [ ... ];
        dataSource2 = [ ... ];
        refreshAllGrids() {
            this.dataGrids.forEach(function(dataGrid) {
                dataGrid.instance.refresh();  
            })
        }
    }

#####See Also#####
- **API Reference**.**WidgetName**.**Methods**, for example, **API Reference**.[DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid '/Documentation/ApiReference/UI_Widgets/dxDataGrid/').[Methods](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/')
- [DevExtreme-Angular on GitHub](https://github.com/DevExpress/devextreme-angular)

[tags]basics, angularjs, call methods, widget instance
