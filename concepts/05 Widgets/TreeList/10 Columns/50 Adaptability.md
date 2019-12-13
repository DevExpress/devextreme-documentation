When adapting to a small container or screen, the **TreeList** can hide columns. To enable this feature, set the [columnHidingEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnHidingEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#columnHidingEnabled') to **true**. Columns have hiding priorities - zero-based indexes that determine the order in which they are hidden. These indexes ascend from right to left by default, which means that the rightmost column is always at risk of being hidden. Use the [hidingPriority](/api-reference/_hidden/GridBaseColumn/hidingPriority.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#hidingPriority') option to specify a custom hiding priority and cancel the default priorities.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columnHidingEnabled: true,
            columns: [{
                // ...
                hidingPriority: 2 // a valuable column
            }, {
                // ...
                hidingPriority: 1 // a not-so-valuable column 
            }, {
                // ...
                hidingPriority: 0 // a first-to-hide column
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... 
        [columnHidingEnabled]="true">
        <dxi-column [hidingPriority]="2" ... ></dxi-column> <!-- a valuable column -->
        <dxi-column [hidingPriority]="1" ... ></dxi-column> <!-- a not-so-valuable column -->
        <dxi-column [hidingPriority]="0" ... ></dxi-column> <!-- a first-to-hide column -->
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

[note]

The table layout does not automatically adapt to changes made in the widget's container at runtime. Therefore, if you enable a user to resize the container, call the [updateDimensions()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/updateDimensions().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#updateDimensions') method after each resizing to render the **TreeList** in the new size.

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

Data from hidden columns is still available in adaptive detail rows. A user can expand or collapse these rows by clicking the ellipsis buttons in the adaptive column.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular TreeList Adaptability](/images/treelist/visual_elements/adaptive-column.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Adaptability/"
}

You can expand or collapse adaptive detail rows programmatically by calling the [expandAdaptiveDetailRow(key)](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/expandAdaptiveDetailRow(key).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#expandAdaptiveDetailRowkey') or [collapseAdaptiveDetailRow()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/collapseAdaptiveDetailRow().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#collapseAdaptiveDetailRow') method. Note that adaptive detail rows cannot be expanded simultaneously, therefore, calling the **expandAdaptiveDetailRow(key)** method collapses the previously expanded row. To check whether a specific row is expanded, call the [isAdaptiveDetailRowExpanded(key)](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/isAdaptiveDetailRowExpanded(key).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#isAdaptiveDetailRowExpandedkey') method.

---
##### jQuery

    <!--JavaScript-->var expandAdaptiveDetailRow = function (key, treeListInstance) {
        if (!treeListInstance.isAdaptiveDetailRowExpanded(key)) {
            treeListInstance.expandAdaptiveDetailRow(key);
        }
    }

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        expandAdaptiveDetailRow (key) {
            if (!this.treeList.instance.isAdaptiveDetailRowExpanded(key)) {
                this.treeList.instance.expandAdaptiveDetailRow(key);
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
    
---

All adaptive detail rows contain the [DevExtreme Form widget](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/'), so you can customize a row by changing the [options of this widget](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/'). To access them, implement the [onAdaptiveDetailRowPreparing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onAdaptiveDetailRowPreparing.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onAdaptiveDetailRowPreparing') event handler. For example, the following code marks the form item whose data field is *"OrderID"* as required:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            onAdaptiveDetailRowPreparing: function (e) {
                for (let formItem of e.formOptions.items) {
                    if (formItem.dataField == "OrderID") {
                        formItem.isRequired = true;
                    }
                }
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onAdaptiveDetailRowPreparing (e) {
            for (let formItem of e.formOptions.items) {
                if (formItem.dataField == "OrderID") {
                    formItem.isRequired = true;
                }
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
    <dx-tree-list ...
        (onAdaptiveDetailRowPreparing)="onAdaptiveDetailRowPreparing($event)">
    </dx-tree-list>
    
---

#####See Also#####
- [Column Fixing](/concepts/05%20Widgets/TreeList/10%20Columns/30%20Column%20Fixing.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_Fixing/')
- [Column Chooser](/concepts/05%20Widgets/TreeList/10%20Columns/60%20Column%20Chooser.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_Chooser/')
