To enable column hiding, set the [columnHidingEnabled](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnHidingEnabled) property to **true**.

Each column has a unique default hiding priority. The rightmost column has the priority of 0. This value is incremented by 1 for columns from right to left; column with the lowest priority is hidden first.

You can use the **columns[]**.[hidingPriority](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#hidingPriority) property to specify custom hiding priorities for those columns that you want to hide. Other columns will never be hidden. This will override the default behavior described above. In this case, the **columnHidingEnabled** property can be omitted.


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

If your TreeList is inside a resizable container, you must call the [updateDimensions()](/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#updateDimensions) method on each container resize to rerender the component:

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
