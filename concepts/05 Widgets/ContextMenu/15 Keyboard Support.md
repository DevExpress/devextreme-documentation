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
      <td>&larr;</td>
      <td>Closes the submenu and focuses on its parent item.</td>
    </tr>
    <tr>
      <td>&rarr;</td>
      <td>Opens the submenu of the focused item.</td>
    </tr>
    <tr>
      <td>Home</td>
      <td>Sets focus to the first item in the menu/submenu.</td>
    </tr>
    <tr>
      <td>End</td>
      <td>Sets focus to the last item in the menu/submenu.</td>
    </tr>
    <tr>
      <td>Space</td>
      <td>Switches the focused item to the selected state.</td>
    </tr>
    <tr>
      <td>Enter</td>
      <td>Chooses the focused item.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let contextMenu =  $("#contextMenuContainer").dxContextMenu("instance");
        contextMenu.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        contextMenu.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxContextMenuModule, DxContextMenuComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxContextMenuComponent, { static: false }) contextMenu: DxContextMenuComponent
        // Prior to Angular 8
        // @ViewChild(DxContextMenuComponent) contextMenu: DxContextMenuComponent
        ngAfterViewInit () {
            this.contextMenu.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.contextMenu.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxContextMenuModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [ContextMenu Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/ContextMenu/Basics)
- [ContextMenu API Reference](/api-reference/10%20UI%20Widgets/dxContextMenu '/Documentation/ApiReference/UI_Widgets/dxContextMenu/')

[tags]context menu, contextMenu, accessibility, keyboard shortcuts