Paging is used to load data in portions, which improves the widget's performance on large datasets. Paging is enabled by default. You can control it with the [paging](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/paging '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/') object. Use this object's [pageIndex](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/paging/pageIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageIndex') and [pageSize](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/paging/pageSize.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageSize') options of  to specify the initial page and the number of rows on a page.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({  
            // ...
            paging: {
                pageSize: 15,
                pageIndex: 1    // Shows the second page
            }
        });
    });


#####Angular

    <!--HTML-->
    <dx-data-grid>
        <dxo-paging 
            [pageSize]="15"
            [pageIndex]="1"> <!-- Shows the second page -->
        </dxo-paging>
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

When working with small datasets, you can disable paging by setting the **paging**.[enabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/paging/enabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#enabled') option to **false**.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            paging: { enabled: false }
        });
    });


#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-paging [enabled]="false"></dxo-paging>
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

[tags]dataGrid, data grid, paging, pager, page size, page navigator, page info, page count
