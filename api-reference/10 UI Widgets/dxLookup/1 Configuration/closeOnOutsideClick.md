---
default: false
type: Boolean | function()
---
---
##### shortDescription
A Boolean value specifying whether or not a widget is closed if a user clicks outside of the overlaying window.

##### return: Boolean
The required option value.

---
The function passed to this option enables you to specify a custom condition for widget closing. For instance, you can prevent closing until a user clicks a certain element.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#lookupContainer").dxLookup({
            // ...
            closeOnOutsideClick: function(e) {
                return e.target === $("#someElement").get()[0];
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxLookupModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
        closeOnOutsideClick (e) {
            return e.target === document.getElementById("someElement");
        }
    }
    @NgModule({
         imports: [
             // ...
             DxLookupModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-lookup ...
        (closeOnOutsideClick)="closeOnOutsideClick($event)">
    </dx-lookup>

---