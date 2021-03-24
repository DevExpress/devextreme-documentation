TreeList can hide columns to adapt to screens of different sizes. To add this feature, set the [columnHidingEnabled](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnHidingEnabled) to **true**.

Each column has a unique hiding priority. The rightmost column is the base column with the priority of 0. This value is incremented by 1 for columns from right to left; column with the lowest priority is hidden first.

You can use the **columns[]**.[hidingPriority](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#hidingPriority) property to override the default behavior: specify custom hiding priorities for those columns only that you want to hide. In this case, the **columnHidingEnabled** property can be omited.

[note]

Peculiar cases to enable the **columnHidingEnabled** property:

* TreeList truncates a column's cell text due to its length. This occurs when the column's [width](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#width) is not set or set as a percentage. If you need to hide columns until the full text is displayed, set the columnHidingEnabled property to **true**.

* TreeList adds horizontal scrolling for adaptability when all columns have a fixed (columnWidth, columns[].width set in pixels) or adaptive (columnAutoWidth) widths. Set the columnHidingEnabled property to **true** if you need to disable the horizontal scrolling and hide columns instead.

[/note]

![DevExtreme HTML5 JavaScript jQuery Knockout Angular TreeList Adaptability](/images/treelist/visual_elements/adaptive-column.png)

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columnHidingEnabled: true,
            // These columns will be hidden in the following order:
            columns: [{
                // ...
                hidingPriority: 0 // first
            }, {
                // ...
                hidingPriority: 1 // second 
            }, {
                // ...
                hidingPriority: 2 // third
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... 
        [columnHidingEnabled]="true">
        <!-- These columns will be hidden in the following order: -->
        <dxi-column [hidingPriority]="0" ... ></dxi-column> <!-- first -->
        <dxi-column [hidingPriority]="1" ... ></dxi-column> <!-- second -->
        <dxi-column [hidingPriority]="2" ... ></dxi-column> <!-- third -->
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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Adaptability/"
}

[note]

If your TreeList is inside a responsive container, you must call the [updateDimensions()](/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#updateDimensions) method on each container resize to rerender the component:

---
##### jQuery

    <!--JavaScript-->$("#treeListContainer").dxTreeList("updateDimensions");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        renderTreeList () {
            this.treeList.instance.updateDimensions();
        };
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

---

[/note]