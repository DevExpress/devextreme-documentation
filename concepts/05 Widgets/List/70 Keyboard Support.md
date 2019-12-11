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
      <td>&uarr; / &darr;</td>
      <td>Moves focus to the previous/next item.</td>
    </tr>
    <tr>
      <td>Page Up / Page Down</td>
      <td>Moves focus to the item located a screen above/below the current one.</td>
    </tr>
    <tr>
      <td>Home / End</td>
      <td>Moves focus to the first/last item.</td>
    </tr>
    <tr>
      <td>Enter or Space</td>
      <td><a href="/Documentation/Guide/Widgets/List/Selection/#User_Interaction">Selects</a> the focused item.</td>
    </tr>
    <tr>
      <td>Shift + &uarr; / &darr;</td>
      <td>Shifts the focused item one item up/down. Active if the <a href="/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#allowItemReordering">allowItemReordering</a> option is set to <i>true</i>.</td>
    </tr>
    <tr>
      <td>Delete</td>
      <td>Removes the focused item. Active if the <a href="/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#allowItemDeleting">allowItemDeleting</a> option is set to <i>true</i>.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let list =  $("#listContainer").dxList("instance");
        list.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        list.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxListModule, DxListComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxListComponent, { static: false }) list: DxListComponent
        // Prior to Angular 8
        // @ViewChild(DxListComponent) list: DxListComponent
        ngAfterViewInit () {
            this.list.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.list.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [List - Item Deletion - User Interaction](/concepts/05%20Widgets/List/35%20Item%20Deletion/01%20User%20Interaction.md '/Documentation/Guide/Widgets/List/Item_Deletion/#User_Interaction')
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI)
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')

[tags]list, accessibility, keyboard shortcuts