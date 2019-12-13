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
      <td>&uarr; or mouse wheel up</td>
      <td>Increases the widget value by a <a href="/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#step">step</a>.</td>
    </tr>
    <tr>
      <td>&darr; or mouse wheel down</td>
      <td>Decreases the widget value by a <a href="/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#step">step</a>.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxNumberBox/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let numberBox =  $("#numberBoxContainer").dxNumberBox("instance");
        numberBox.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        numberBox.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxNumberBoxModule, DxNumberBoxComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxNumberBoxComponent, { static: false }) numberBox: DxNumberBoxComponent
        // Prior to Angular 8
        // @ViewChild(DxNumberBoxComponent) numberBox: DxNumberBoxComponent
        ngAfterViewInit () {
            this.numberBox.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.numberBox.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxNumberBoxModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [NumberBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/NumberBox/Overview)
- [NumberBox API Reference](/api-reference/10%20UI%20Widgets/dxNumberBox '/Documentation/ApiReference/UI_Widgets/dxNumberBox/')

[tags]number box, numberBox, navigation, accessibility, keyboard shortcuts