An end user can use the following keys to interact with the widget.

<div class="simple-table">
  <table>
    <thead>
    <tr>
      <th>Key</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Shift + Mouse Wheel</td>
      <td>Scrolls the content left/right if the <a href="/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#scrollDirection">scrollDirection</a> option is <i>"horizontal"</i> or <i>"both"</i>.</td>
    </tr>
    <tr>
      <td>&uarr; / &darr;</td>
      <td>Moves focus to the previous/next node.</td>
    </tr>
    <tr>
        <td>Home / End</td>
        <td>Moves focus to the first/last node.</td>
    </tr>
    <tr>
        <td>&rarr;</td>
        <td>Expands the node.</td>
    </tr>
    <tr>
        <td>&larr;</td>
        <td>Collapses the node.</td>
    </tr>
    <tr>
        <td>Asterisk Sign (*)</td>
        <td>Expands all nodes. Available only if <a href="/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#expandAllEnabled">expandAllEnabled</a> is set to <i>true</i>.</td>
    </tr>
    <tr>
        <td>Minus Sign (-)</td>
        <td>Collapses all nodes. Available only if <a href="/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#expandAllEnabled">expandAllEnabled</a> is set to <i>true</i>.</td>
    </tr>
    <tr>
        <td>Enter or Space</td>
        <td>Selects the node.</td>
    </tr>
    <tr>
        <td>Shift + &uarr; / Shift + &darr;</td>
        <td>Extends selection up/down by one node.</td>
    </tr>
    <tr>
        <td>Shift + Home</td>
        <td>Extends selection up to the first node.</td>
    </tr>
    <tr>
        <td>Shift + End</td>
        <td>Extends selection down to the last node.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let treeView =  $("#treeViewContainer").dxTreeView("instance");
        treeView.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        treeView.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxTreeViewModule, DxTreeViewComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent
        // Prior to Angular 8
        // @ViewChild(DxTreeViewComponent) treeView: DxTreeViewComponent
        ngAfterViewInit () {
            this.treeView.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.treeView.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [TreeView Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/HierarchicalDataStructure)
- [TreeView API Reference](/api-reference/10%20UI%20Widgets/dxTreeView '/Documentation/ApiReference/UI_Widgets/dxTreeView/')

[tags]treeview, tree view, navigation, accessibility, keyboard shortcuts