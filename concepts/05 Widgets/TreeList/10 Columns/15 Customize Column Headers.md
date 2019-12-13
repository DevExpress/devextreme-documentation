The **TreeList** generates column headers based on the names of [data fields](/api-reference/_hidden/GridBaseColumn/dataField.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#dataField') by default. For example, if a data field is *"fullName"*, the column header text is "Full Name". 

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList ColumnHeaders](/images/treelist/visual_elements/column_headers.png)

Specify the **columns**.[caption](/api-reference/_hidden/GridBaseColumn/caption.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#caption') option to change the column header text.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [
                { dataField: "CompanyName", caption: "Company" },
                // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column dataField="CompanyName" caption="Company"></dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

If you need a more specific customization, define a custom template in the **columns**.[headerCellTemplate](/api-reference/_hidden/dxTreeListColumn/headerCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#headerCellTemplate') option. This option accepts a function or template container. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
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
    <dx-tree-list ... >
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
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

To hide column headers, assign **false** to the [showColumnHeaders](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/showColumnHeaders.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#showColumnHeaders') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            showColumnHeaders: false
        });
     });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ...
        [showColumnHeaders]="false">
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

#####See Also#####
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview)
