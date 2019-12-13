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
      <td>Changes the widget value.</td>
    </tr>
    <tr>
      <td>&rarr;</td>
      <td>Changes the switch state to "On".</td>
    </tr>
    <tr>
      <td>&larr;</td>
      <td>Changes the switch state to "Off".</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxSwitch/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let switch =  $("#switchContainer").dxSwitch("instance");
        switch.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        switch.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxSwitchModule, DxSwitchComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxSwitchComponent, { static: false }) switch: DxSwitchComponent
        // Prior to Angular 8
        // @ViewChild(DxSwitchComponent) switch: DxSwitchComponent
        ngAfterViewInit () {
            this.switch.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.switch.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSwitchModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [Switch Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Switch/Overview)
- [Switch API Reference](/api-reference/10%20UI%20Widgets/dxSwitch '/Documentation/ApiReference/UI_Widgets/dxSwitch/')

[tags]switch, navigation, accessibility, keyboard shortcuts