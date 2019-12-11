Data columns are the most common type of columns used in the **DataGrid** widget. They are generated for all [column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array members that do not configure [band columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/2%20Band%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/#Band_Columns'). Usually, a data column displays values from a [data field](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/dataField.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField') to which it is bound, but you can populate a data column with custom values (see [Customize Cells](/concepts/05%20Widgets/DataGrid/15%20Columns/40%20Customize%20Cells '/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Cells/')).

![DevExtreme HTML5 JavaScript DataGrid DataColumns](/images/DataGrid/visual_elements/column-types_data.png)

If data column values should be cast to another type (for example, date values stored as strings), specify the target type using the [dataType](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/dataType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "HireDate",
                dataType: "date"
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column dataField="HireDate" dataType="date"></dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
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
- [Customize Cells](/concepts/05%20Widgets/DataGrid/15%20Columns/40%20Customize%20Cells '/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Cells/')
- [Lookup Columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/3%20Lookup%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/#Lookup_Columns')
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/SimpleArray/jQuery/Light)

[tags] dataGrid, data grid, column types, data columns
