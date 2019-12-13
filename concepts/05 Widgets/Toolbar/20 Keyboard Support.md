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
      <td>Tab</td>
      <td>Moves focus to the next toolbar item.</td>
   </tr>
    <tr>
      <td>Shift + Tab</td>
      <td>Moves focus to the previous toolbar item.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/Documentation/ApiReference/UI_Widgets/dxToolbar/Methods/#registerKeyHandlerkey_handler) method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let toolbar =  $("#toolbarContainer").dxToolbar("instance");
        toolbar.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        toolbar.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxToolbarModule, DxToolbarComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxToolbarComponent, { static: false }) toolbar: DxToolbarComponent
        // Prior to Angular 8
        // @ViewChild(DxToolbarComponent) toolbar: DxToolbarComponent
        ngAfterViewInit () {
            this.toolbar.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.toolbar.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxToolbarModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [Toolbar Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Toolbar/Overview)
- [Toolbar API Reference](/api-reference/10%20UI%20Widgets/dxToolbar '/Documentation/ApiReference/UI_Widgets/dxToolbar/')

[tags]toolbar, navigation, accessibility, keyboard shortcuts