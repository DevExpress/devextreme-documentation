The load panel is displayed while the widget loads data. It consists of a loading indicator and text, both placed on a pane.

![DevExtreme HTML5/JavaScript DataGrid Widget - Load Panel](/images/DataGrid/visual_elements/load_panel.png)

The load panel is shown only for remote data sources by default. To show it regardless of the data source type, assign **true** to the **loadPanel**.[enabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/loadPanel/enabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/#enabled') option. Setting the same option to **false** disables the load panel completely.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            loadPanel: {
                enabled: true
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-load-panel
            [enabled]="true">
        </dxo-load-panel>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

You can also control the load panel programmatically using the [beginCustomLoading(messageText)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/beginCustomLoading(messageText).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#beginCustomLoadingmessageText') and [endCustomLoading()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/endCustomLoading().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#endCustomLoading') methods.

---
##### jQuery

    <!--JavaScript-->var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
    dataGrid.beginCustomLoading();
    // ...
    dataGrid.endCustomLoading();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        doSomeLongOperation () {
            this.dataGrid.instance.beginCustomLoading();
            // ...
            this.dataGrid.instance.endCustomLoading();
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

Since the load panel is a DevExtreme [LoadPanel](/concepts/05%20Widgets/LoadPanel/00%20Overview.md '/Documentation/Guide/Widgets/LoadPanel/Overview/') widget, you can declare any [options of this widget](/api-reference/10%20UI%20Widgets/dxLoadPanel/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/') in the **DataGrid**'s [loadPanel](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/loadPanel '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/') object. For example, you can change the panel's size with the [height](/api-reference/10%20UI%20Widgets/dxLoadPanel/1%20Configuration/height.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#height') and [width](/api-reference/10%20UI%20Widgets/dxLoadPanel/1%20Configuration/width.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#width') options, or employ another loading indicator using the [indicatorSrc](/api-reference/10%20UI%20Widgets/dxLoadPanel/1%20Configuration/indicatorSrc.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#indicatorSrc') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            loadPanel: {
                height: 100,
                width: 250,
                indicatorSrc: "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-load-panel
            [height]="100"
            [width]="250"
            indicatorSrc="https://js.devexpress.com/Content/data/loadingIcons/rolling.svg">
        </dxo-load-panel>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
- [LoadPanel Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Load_Panel/Overview)
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/AjaxRequest)
