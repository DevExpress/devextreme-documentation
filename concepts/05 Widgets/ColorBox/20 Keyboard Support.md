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
      <td>&larr; &rarr; &uarr; &darr;</td>
      <td>Moves the color pointer.</td>
    </tr>
    <tr>
      <td>Ctrl + &uarr;</td>
      <td>Moves the RGB slider up.</td>
    </tr>
    <tr>
      <td>Ctrl + &darr;</td>
      <td>Moves the RGB slider down.</td>
    </tr>
    <tr>
      <td>Ctrl + &larr;</td>
      <td>Moves the transparency slider left.</td>
    </tr>
    <tr>
      <td>Ctrl + &rarr;</td>
      <td>Moves the transparency slider right.</td>
    </tr>
    <tr>
      <td>Enter</td>
      <td>Selects the color.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxColorBox/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let colorBox =  $("#colorBoxContainer").dxColorBox("instance");
        colorBox.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        colorBox.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxColorBoxModule, DxColorBoxComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxColorBoxComponent, { static: false }) colorBox: DxColorBoxComponent
        // Prior to Angular 8
        // @ViewChild(DxColorBoxComponent) colorBox: DxColorBoxComponent
        ngAfterViewInit () {
            this.colorBox.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.colorBox.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxColorBoxModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [ColorBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/ColorBox/Overview)
- [ColorBox API Reference](/api-reference/10%20UI%20Widgets/dxColorBox '/Documentation/ApiReference/UI_Widgets/dxColorBox/')

[tags]color box, colorBox, navigation, accessibility, keyboard shortcuts