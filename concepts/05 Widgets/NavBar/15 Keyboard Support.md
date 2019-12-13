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
      <td>Moves focus to the previous item.</td>
   </tr>
    <tr>
      <td>&rarr;</td>
      <td> Moves focus to the next item.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxNavBar/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let navBar =  $("#navBarContainer").dxNavBar("instance");
        navBar.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        navBar.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxNavBarModule, DxNavBarComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxNavBarComponent, { static: false }) navBar: DxNavBarComponent
        // Prior to Angular 8
        // @ViewChild(DxNavBarComponent) navBar: DxNavBarComponent
        ngAfterViewInit () {
            this.navBar.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.navBar.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxNavBarModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods
- [NavBar Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Navbar/Overview)
- [NavBar API Reference](/api-reference/10%20UI%20Widgets/dxNavBar '/Documentation/ApiReference/UI_Widgets/dxNavBar/')

[tags]nav bar, navBar, navigation bar, accessibility, keyboard shortcuts