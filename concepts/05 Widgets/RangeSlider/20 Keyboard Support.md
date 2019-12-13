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
      <td>&larr; / &rarr; </td>
      <td>Decreases/increases the value of the focused handle by a <a href="/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#step">step</a>.</td>
    </tr>
    <tr>
      <td>Page Up / Page Down</td>
      <td>Decreases/increases the value of the focused handle by a <a href="/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#keyStep">keyStep</a>.</td>
    </tr>
    <tr>
      <td>Home / End</td>
      <td>Sets the focused handle to the <a href="/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#min">minimum</a>/<a href="/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#max">maximum</a> value or to the value of the other handle.</td>
    </tr>
    <tr>
      <td>Tab / Shift + Tab</td>
      <td>Switches between the handles.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let rangeSlider =  $("#rangeSliderContainer").dxRangeSlider("instance");
        rangeSlider.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        rangeSlider.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxRangeSliderModule, DxRangeSliderComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxRangeSliderComponent, { static: false }) rangeSlider: DxRangeSliderComponent
        // Prior to Angular 8
        // @ViewChild(DxRangeSliderComponent) rangeSlider: DxRangeSliderComponent
        ngAfterViewInit () {
            this.rangeSlider.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.rangeSlider.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxRangeSliderModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [RangeSlider Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSlider/Overview)
- [RangeSlider API Reference](/api-reference/10%20UI%20Widgets/dxRangeSlider '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/')

[tags]range slider, rangeSlider, accessibility, keyboard shortcuts