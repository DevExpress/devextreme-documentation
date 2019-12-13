To process new **TagBox** values, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onValueChanged](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#onValueChanged') option when you configure the widget.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            onValueChanged: function (e) {
                var previousValues = e.previousValue;
                var newValues = e.value;
                // Event handling commands go here
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-tag-box ...
        (onValueChanged)="onValueChanged($event)">
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onValueChanged (e) {
            let previousValue = e.previousValue;
            let newValue = e.value;
            // Event handling commands go here
        }
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

---

[note]The `previousValue` and `newValue` fields are _arrays_ that contain values taken from the [valueExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#valueExpr') data field.

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var valueChangedHandler1 = function (e) {
        var previousValues = e.previousValue;
        var newValues = e.value;
        // First handler of the "valueChanged" event
    };

    var valueChangedHandler2 = function (e) {
        var previousValues = e.previousValue;
        var newValues = e.value;
        // Second handler of the "valueChanged" event
    };

    $("#tagBoxContainer").dxTagBox("instance")
        .on("valueChanged", valueChangedHandler1)
        .on("valueChanged", valueChangedHandler2);

#####See Also#####
#include common-link-handleevents
- [TagBox - Control the Behavior](/concepts/05%20Widgets/TagBox/03%20Control%20the%20Behavior.md '/Documentation/Guide/Widgets/TagBox/Control_the_Behavior/')
- [TagBox - Configure Search Parameters](/concepts/05%20Widgets/TagBox/10%20Configure%20Search%20Parameters.md '/Documentation/Guide/Widgets/TagBox/Configure_Search_Parameters/')
- [TagBox - Create a User-Defined Item](/concepts/05%20Widgets/TagBox/15%20Create%20a%20User-Defined%20Item.md '/Documentation/Guide/Widgets/TagBox/Create_a_User-Defined_Item/')
- [TagBox API Reference](/api-reference/10%20UI%20Widgets/dxTagBox '/Documentation/ApiReference/UI_Widgets/dxTagBox/')
- [TagBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TagBox/Overview)

[tags]tagBox, tag box, editor, get value, set value, change value, valueChanged