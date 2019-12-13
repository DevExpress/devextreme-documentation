The **DataGrid** generates column headers based on the names of [data fields](/api-reference/_hidden/GridBaseColumn/dataField.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField') by default. For example, if a data field is *"fullName"*, the column header text is "Full Name". 

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid ColumnHeaders](/images/DataGrid/ColumnHeaders.png)

Specify the **columns**.[caption](/api-reference/_hidden/GridBaseColumn/caption.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#caption') option to change the column header text.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [
                { dataField: "CompanyName", caption: "Company" },
                // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column dataField="CompanyName" caption="Company"></dxi-column>
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

If you need a more specific customization, define a custom template in the **columns**.[headerCellTemplate](/api-reference/_hidden/dxDataGridColumn/headerCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#headerCellTemplate') option. This option accepts a function or template container. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "Title",
                caption: "Position",
                headerCellTemplate: function (header, info) {
                    $('<div>')
                        .html(info.column.caption)
                        .css('font-size', '16px')
                        .appendTo(header);
                }
            }, {
                dataField: "Address",
                headerCellTemplate: $('<i style="color: black">Mailing Address</i>')
            }]
        });
     });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column
            dataField="Title"
            caption="Position"
            headerCellTemplate="titleHeaderTemplate">
        </dxi-column>
        <dxi-column
            dataField="Address"
            headerCellTemplate="addressHeaderTemplate">
        </dxi-column>
        <div *dxTemplate="let info of 'titleHeaderTemplate'">
            <p style="font-size:16px">{{info.column.caption}}</p>
        </div>
        <div *dxTemplate="let info of 'addressHeaderTemplate'">
            <i style="color: black">Mailing Address</i>
        </div>
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

To hide column headers, assign **false** to the [showColumnHeaders](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/showColumnHeaders.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#showColumnHeaders') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            showColumnHeaders: false
        });
     });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        [showColumnHeaders]="false">
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
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalDataSource)
