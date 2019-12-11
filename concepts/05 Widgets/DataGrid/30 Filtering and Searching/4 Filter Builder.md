The [**FilterBuilder**](/api-reference/10%20UI%20Widgets/dxFilterBuilder '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/') widget helps a user build a complex filter expression and apply it to all grid columns at once.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid FilterBuilder](/images/DataGrid/visual_elements/filter_builder.png)

To integrate the **FilterBuilder** with the **DataGrid**, first, pass an array of columns that should be filtered to the **FilterBuilder**'s [fields](/api-reference/10%20UI%20Widgets/dxFilterBuilder/1%20Configuration/fields.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#fields') option. Each item in this array should at least have the [dataField](/api-reference/10%20UI%20Widgets/dxFilterBuilder/5%20Field/dataField.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#dataField'). The following code allows using all **DataGrid** columns in the **FilterBuilder**:

---
#####jQuery

    <!--JavaScript-->
    var columns = [{
        caption: "ID",
        dataField: "Product_ID",
        dataType: "number"
    }, {
        dataField: "Product_Name"
    }, {
        caption: "Cost",
        dataField: "Product_Cost",
        dataType: "number",
        format: "currency"
    }];

    $(function () {
        $("#dataGrid").dxDataGrid({
            dataSource: products, 
            columns: columns
        });
        $("#filterBuilder").dxFilterBuilder({
            fields: columns
        });
    });

#####Angular

    <!--HTML-->
    <dx-filter-builder 
        [fields]="columns">
    </dx-filter-builder>
    <dx-data-grid 
        [dataSource]="products"  
        [columns]="columns">
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule, DxFilterBuilderModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        columns = [{
            caption: "ID",
            dataField: "Product_ID",
            dataType: "number"
        }, {
            dataField: "Product_Name"
        }, {
            caption: "Cost",
            dataField: "Product_Cost",
            dataType: "number",
            format: "currency"
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule,
            DxFilterBuilderModule
        ],
        // ...
    })

---

Then, add a button that updates a filter of the **DataGrid**'s data source according to the build filter expression. The [value](/api-reference/10%20UI%20Widgets/dxFilterBuilder/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#value') option stores this expression.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        // ...
        $("#button").dxButton({
            text: "Apply Filter",
            onClick: function () {
                var filter = $("#filterBuilder").dxFilterBuilder("instance").option("value");
                $("#dataGrid").dxDataGrid("instance").filter(filter);
            },
        });
    });

#####Angular

    <!--TypeScript-->
    import { 
        DxDataGridModule, 
        DxFilterBuilderModule, 
        DxDataGridComponent, 
        DxFilterBuilderComponent 
    } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        @ViewChild(DxFilterBuilderComponent) filterBuilder: DxFilterBuilderComponent;
        // ...
        buttonClick() {
            this.dataGrid.filter(this.filterBuilder.value);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule,
            DxFilterBuilderModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-button 
        text="Apply Filter"
        (onClick)="buttonClick()">
    </dx-button>   

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FilterBuilder/WithDataGrid/Angular/Light/"
}

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/5%20API/1%20Initial%20and%20Runtime%20Filtering.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering')
