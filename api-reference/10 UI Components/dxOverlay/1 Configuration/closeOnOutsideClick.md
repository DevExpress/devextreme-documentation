---
id: dxOverlay.Options.closeOnOutsideClick
type: Boolean | function(event)
default: false
---
---
##### shortDescription
Specifies whether to close the UI component if a user clicks outside it.

##### param(event): event
The event that caused UI component closing. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a <a href="http://api.jquery.com/category/events/event-object/" target="_blank">jQuery.Event</a> when you use jQuery.

##### return: Boolean
**true** if the UI component should be closed; otherwise **false**.

---
The function passed to this option enables you to specify a custom condition for UI component closing. For instance, you can prevent closing until a user clicks a certain element.

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            closeOnOutsideClick: function(e) {
                return e.target === $("#someElement").get()[0];
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        closeOnOutsideClick(e) {
            return e.target === document.getElementById("someElement");
        }
    }
    @NgModule({
         imports: [
             // ...
             Dx{WidgetName}Module
         ],
         // ...
     })

    <!--HTML-->
    <dx-{widget-name} ...
        [closeOnOutsideClick]="closeOnOutsideClick">
    </dx-{widget-name}>

---

The **closeOnOutsideClick** function is called when a user clicks the UI component or outside it.