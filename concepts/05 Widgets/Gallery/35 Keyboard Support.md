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
      <td>&larr;</td>
      <td>Shows the previous image.</td>
    </tr>
    <tr>
      <td>&rarr;</td>
      <td>Shows the following image.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxGallery/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let gallery =  $("#galleryContainer").dxGallery("instance");
        gallery.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        gallery.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxGalleryModule, DxGalleryComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxGalleryComponent, { static: false }) gallery: DxGalleryComponent
        // Prior to Angular 8
        // @ViewChild(DxGalleryComponent) gallery: DxGalleryComponent
        ngAfterViewInit () {
            this.gallery.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.gallery.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxGalleryModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [Gallery Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gallery/Overview)
- [Gallery API Reference](/api-reference/10%20UI%20Widgets/dxGallery '/Documentation/ApiReference/UI_Widgets/dxGallery/')

[tags]gallery, accessibility, keyboard shortcuts