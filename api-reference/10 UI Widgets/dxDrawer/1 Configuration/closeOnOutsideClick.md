---
id: dxDrawer.Options.closeOnOutsideClick
type: Boolean | function(event)
default: false
---
---
##### shortDescription
Specifies whether to close the drawer if a user clicks or taps the view area.

##### param(event): event
The raised event. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a <a href="http://api.jquery.com/category/events/event-object/" target="_blank">jQuery.Event</a> when you use jQuery.

##### return: Boolean
**true** if the widget should be closed; otherwise **false**.

---
The function passed to this option enables you to specify a custom condition for widget closing. For instance, you can prevent closing until a user clicks a specific element on the view:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#drawerContainer").dxDrawer({
            // ...
            closeOnOutsideClick: function(e) {
                return e.target === $("#someElement").get()[0];
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxDrawerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        drawer_closeOnOutsideClick(e) {
            return e.target === document.getElementById("someElement");
        }
    }
    @NgModule({
         imports: [
             // ...
             DxDrawerModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-drawer ...
        [closeOnOutsideClick]="drawer_closeOnOutsideClick">
    </dx-drawer>

---