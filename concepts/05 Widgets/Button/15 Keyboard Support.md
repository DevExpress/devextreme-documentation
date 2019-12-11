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
      <td>Enter or Space</td>
      <td>Identical to a click.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxButton/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let button =  $("#buttonContainer").dxButton("instance");
        button.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        button.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from '@angular/core';
    import { DxButtonModule, DxButtonComponent } from 'devextreme-angular';
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxButtonComponent) button: DxButtonComponent
        ngAfterViewInit () {
            this.button.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.button.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxButtonModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [Button Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-button-icons)
- [Button API Reference](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/')

[tags]button, accessibility, keyboard shortcuts