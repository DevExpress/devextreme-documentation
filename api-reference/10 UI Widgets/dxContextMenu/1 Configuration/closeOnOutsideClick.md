---
id: dxContextMenu.Options.closeOnOutsideClick
type: Boolean | function(event)
default: true
---
---
##### shortDescription
Specifies whether to close the **ContextMenu** if a user clicks outside it.

##### param(event): event
The event that caused widget closing. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a <a href="http://api.jquery.com/category/events/event-object/" target="_blank">jQuery.Event</a> when you use jQuery.

##### return: Boolean
**true** if the widget should be closed; otherwise **false**.

---
The function passed to this option enables you to specify a custom condition for closing the widget. For instance, you can prevent closing until a user clicks a certain element.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#contextMenuContainer").dxContextMenu({
            // ...
            closeOnOutsideClick: function(e) {
                return e.target === $("#someElement").get()[0];
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxContextMenuModule } from "devextreme-angular";
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
             DxContextMenuModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-context-menu ...
        [closeOnOutsideClick]="closeOnOutsideClick">
    </dx-context-menu>

---