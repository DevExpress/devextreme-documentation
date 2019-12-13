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
      <td>Decreases/increases the value of the focused handle by a <a href="/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#step">step</a>.</td>
    </tr>
    <tr>
      <td>Page Up / Page Down</td>
      <td>Decreases/increases the value of the focused handle by a <a href="/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#keyStep">keyStep</a>.</td>
    </tr>
    <tr>
      <td>Home / End</td>
      <td>Sets the focused handle to the <a href="/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#min">minimum</a>/<a href="/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#max">maximum</a> value or to the value of the other handle.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxSlider/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let slider =  $("#sliderContainer").dxSlider("instance");
        slider.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        slider.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxSliderModule, DxSliderComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxSliderComponent, { static: false }) slider: DxSliderComponent
        // Prior to Angular 8
        // @ViewChild(DxSliderComponent) slider: DxSliderComponent
        ngAfterViewInit () {
            this.slider.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.slider.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSliderModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [Slider Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Slider/Overview)
- [Slider API Reference](/api-reference/10%20UI%20Widgets/dxSlider '/Documentation/ApiReference/UI_Widgets/dxSlider/')

[tags]slider, accessibility, keyboard shortcuts