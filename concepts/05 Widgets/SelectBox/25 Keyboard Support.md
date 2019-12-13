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
      <td>Opens the drop-down list.</td>
    </tr>
    <tr>
      <td>Alt + &uarr;</td>
      <td>Closes the drop-down list.</td>
    </tr>
    <tr>
      <td>Esc</td>
      <td>Closes the drop-down list and removes focus from the widget.</td>
    </tr>
    <tr>
      <td>&uarr; / &darr;</td>
      <td>If the drop-down list is opened, moves focus to the previous/next item; otherwise, selects the previous/next item.</td>
    </tr>
    <tr>
      <td>Page Up / Page Down</td>
      <td>Moves focus to the first/last item.</td>
    </tr>
    <tr>
      <td>Enter or Space</td>
      <td>Selects the item.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let selectBox =  $("#selectBoxContainer").dxSelectBox("instance");
        selectBox.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        selectBox.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxSelectBoxModule, DxSelectBoxComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxSelectBoxComponent, { static: false }) selectBox: DxSelectBoxComponent
        // Prior to Angular 8
        // @ViewChild(DxSelectBoxComponent) selectBox: DxSelectBoxComponent
        ngAfterViewInit () {
            this.selectBox.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.selectBox.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSelectBoxModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [SelectBox - Configure Search Parameters](/concepts/05%20Widgets/SelectBox/10%20Configure%20Search%20Parameters.md '/Documentation/Guide/Widgets/SelectBox/Configure_Search_Parameters/')
- [SelectBox - Handle the Value Change Event](/concepts/05%20Widgets/SelectBox/04%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/SelectBox/Handle_the_Value_Change_Event/')
- [SelectBox API Reference](/api-reference/10%20UI%20Widgets/dxSelectBox '/Documentation/ApiReference/UI_Widgets/dxSelectBox/')
- [SelectBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/Overview)

[tags]select box, selectBox, navigation, accessibility, keyboard shortcuts