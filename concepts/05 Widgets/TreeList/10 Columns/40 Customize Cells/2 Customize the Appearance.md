To specify custom cell appearance, define a [cellTemplate](/api-reference/_hidden/dxTreeListColumn/cellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#cellTemplate') ([cellRender](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#cellRender) in React). Within the template, you can access cell data. For example, the following code uses the template to color the cells blue:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "Title",
                cellTemplate: function(element, info) {
                     element.append("<div>" + info.text + "</div>")
                            .css("color", "blue");
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column dataField="Title" cellTemplate="cell-template"></dxi-column>
        <div *dxTemplate="let cell of 'cell-template'">
            <div style="color:blue">{{ cell.text }}</div>
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

While **cellTemplate** customizes data cells only, the [onCellPrepared](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onCellPrepared.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onCellPrepared') function can customize any cell. Unlike **cellTemplate**, this function does customizations after a cell is created, so you cannot use it to change the cell value. Check the [rowType](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType') field of the function's argument to detect the UI element that owns the cell.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            onCellPrepared: function(e) {
                if (e.rowType == "detailAdaptive") {
                    e.cellElement.addClass("adaptiveRowStyle"); 
                }
            }
        });
    });

    <!--CSS-->
    .adaptiveRowStyle { 
        background-color: #cce6ff;
        font-size: 12pt
    }

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onCellPrepared (e) {
            if (e.rowType == "detailAdaptive") {
                e.cellElement.addClass("adaptiveRowStyle");
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list
        (onCellPrepared)="onCellPrepared($event)">
    </dx-tree-list>

    <!--CSS-->
    .adaptiveRowStyle { 
        background-color: #cce6ff;
        font-size: 12pt
    }
    
---

#####See Also#####
- [Customize Column Headers](/concepts/05%20Widgets/TreeList/10%20Columns/15%20Customize%20Column%20Headers.md '/Documentation/Guide/Widgets/TreeList/Columns/Customize_Column_Headers/')
