---
##### merge

---
A lookup column restricts the set of values that can be chosen when a user edits or filters the column. In a lookup column, each cell is a drop-down menu. You can use a lookup column when you need to substitute displayed values with required values. For example, consider that you have two arrays of objects: `drivers` and `buses`.

    <!--JavaScript-->var drivers = [
        { driverID: 1, firstName: "John", lastName: "Smith", busID: 2 },
        { driverID: 2, firstName: "Lizzy", lastName: "Cook", busID: 1 },
        { driverID: 3, firstName: "Brian", lastName: "Hawkins", busID: 3 }
    ];

    var buses = [
        { busID: 1, plates: "123456" },
        { busID: 2, plates: "AB-1234" },
        { busID: 3, plates: "CD-9876" }
    ];

All `drivers` have the `busID` field, which refers to a bus. If `drivers` is the main [dataSource](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource'), the *Bus ID* column displays bus IDs, which provides little information to a user. It will be more useful to display bus license plates instead of IDs. For this, the `buses` array must be set as a lookup [dataSource](/api-reference/_hidden/GridBaseColumn/lookup/dataSource.md '{basewidgetpath}/Configuration/columns/lookup/#dataSource') for the *Bus ID* column. Then, the names of data fields must be assigned to the [valueExpr](/api-reference/_hidden/GridBaseColumn/lookup/valueExpr.md '{basewidgetpath}/Configuration/columns/lookup/#valueExpr') and [displayExpr](/api-reference/_hidden/GridBaseColumn/lookup/displayExpr.md '{basewidgetpath}/Configuration/columns/lookup/#displayExpr') options. Values from the **valueExpr** data field will be replaced with values from the **displayExpr** data field.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            dataSource: drivers,
            // ...
            columns: [{
                dataField: "busID",
                lookup: {
                    dataSource: buses,
                    valueExpr: "busID",
                    displayExpr: "plates"
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-data-grid [dataSource]="drivers">
        <dxi-column dataField="busID">
            <dxo-lookup
                [dataSource]="buses"
                valueExpr="busID"
                displayExpr="plates">
            </dxo-lookup>
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        drivers = [
            { driverID: 1, firstName: "John", lastName: "Smith", busID: 2 },
            { driverID: 2, firstName: "Lizzy", lastName: "Cook", busID: 1 },
            { driverID: 3, firstName: "Brian", lastName: "Hawkins", busID: 3 }
        ];
        buses = [
            { busID: 1, plates: "123456" },
            { busID: 2, plates: "AB-1234" },
            { busID: 3, plates: "CD-9876" }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

With this code, the *Bus ID* column contains license plates instead of IDs. Moreover, the user can choose a plate number from the drop-down menu when editing cells or applying a filter to this column.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CascadingLookups/"
}

#####See Also#####
- [Bind a Lookup Column to a Custom Data Source](/concepts/05%20Widgets/DataGrid/99%20How%20To/Bind%20a%20Lookup%20Column%20to%20a%20Custom%20Data%20Source.md '/Documentation/Guide/Widgets/DataGrid/How_To/Bind_a_Lookup_Column_to_a_Custom_Data_Source/')
- [Customize Editors](/concepts/05%20Widgets/DataGrid/20%20Editing/40%20Customize%20Editors.md '/Documentation/Guide/Widgets/DataGrid/Editing/#Customize_Editors')
- [Enhance Performance on Large Datasets - Lookup Optimization](/concepts/05%20Widgets/DataGrid/10%20Enhance%20Performance%20on%20Large%20Datasets/020%20Lookup%20Optimization.md '/Documentation/Guide/Widgets/DataGrid/Enhance_Performance_on_Large_Datasets/#Lookup_Optimization')