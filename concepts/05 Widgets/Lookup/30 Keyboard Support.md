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
      <td>Alt + &darr;</td>
      <td>Opens the drop-down menu.</td>
    </tr>
    <tr>
      <td>Enter or Backspace</td>
      <td>If the drop-down menu is closed, opens it; otherwise selects the current item.</td>
    </tr>
    <tr>
      <td>Esc</td>
      <td>Closes the drop-down menu.</td>
    </tr>
    <tr>
      <td>&uarr; / &darr;</td>
      <td>If the drop-down menu is opened, moves focus to the previous/next item.</td>
    </tr>
    <tr>
      <td>Tab / Shift + Tab</td>
      <td>If the drop-down menu is opened, moves focus to the list / search field.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxLookup/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let lookup =  $("#lookupContainer").dxLookup("instance");
        lookup.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        lookup.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxLookupModule, DxLookupComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxLookupComponent, { static: false }) lookup: DxLookupComponent
        // Prior to Angular 8
        // @ViewChild(DxLookupComponent) lookup: DxLookupComponent
        ngAfterViewInit () {
            this.lookup.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.lookup.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics)
- [Lookup API Reference](/api-reference/10%20UI%20Widgets/dxLookup '/Documentation/ApiReference/UI_Widgets/dxLookup/')

[tags]lookup, accessibility, keyboard shortcuts