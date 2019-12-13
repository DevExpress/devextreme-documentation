The **DateBox** is a widget that displays a date and time in a specified format, and enables a user to pick or type in the required date/time value.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DateBox/Overview/"
}

The following code adds a simple **DateBox** to your page.

---
##### jQuery

    <!--HTML-->
    <div id="dateBoxContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#dateBoxContainer").dxDateBox({
            value: new Date(),
            type: "date"
        });
    });

##### Angular

    <!--HTML-->
    <dx-date-box
        [(value)]="date"
        type="date">
    </dx-date-box>

    <!--TypeScript-->
    import { DxDateBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        date: Date = new Date()
    }
    @NgModule({
        imports: [
            // ...
            DxDateBoxModule
        ],
        // ...
    })

---

The **DateBox** accepts values of the following formats: <a href="http://www.w3schools.com/jsref/jsref_obj_date.asp" target="_blank">dates</a>, numeric values specifying the number of milliseconds since January 1, 1970, 00:00:00, and strings that match the following patterns: `'yyyy-MM-dd'`, `'yyyy-MM-ddTHH:mm:ss'`, `'yyyy-MM-ddTHH:mm:ssZ'`, or `'yyyy-MM-ddTHH:mm:ssx'`. Note that in code, the format stays the same until a value of a different format is assigned to the **value** option. For example, numbers remain numbers until you pass a string to the **value** option.

In addition, the **DateBox** supports several date and time types. That is, it can display only the date or time, or both. To specify the required type, set the [type](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#type') option.

Depending on the platform, the **DateBox** provides different controls for picking values. See the [Platform-Specific Value Pickers](/concepts/05%20Widgets/DateBox/03%20Platform-Specific%20Value%20Pickers.md '/Documentation/Guide/Widgets/DateBox/Platform-Specific_Value_Pickers') topic for details.

#####See Also#####
#include common-link-configurewidget
- [DateBox - Control the Behavior](/concepts/05%20Widgets/DateBox/05%20Control%20the%20Behavior.md '/Documentation/Guide/Widgets/DateBox/Control_the_Behavior')
- [DateBox - Specify Value Range](/concepts/05%20Widgets/DateBox/15%20Specify%20Value%20Range.md '/Documentation/Guide/Widgets/DateBox/Specify_Value_Range')
- [DateBox - Handle the Value Change Event](/concepts/05%20Widgets/DateBox/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/DateBox/Handle_the_Value_Change_Event')
- [DateBox - Keyboard Support](/concepts/05%20Widgets/DateBox/20%20Keyboard%20Support.md '/Documentation/Guide/Widgets/DateBox/Keyboard_Support')
- [DateBox API Reference](/api-reference/10%20UI%20Widgets/dxDateBox '/Documentation/ApiReference/UI_Widgets/dxDateBox/')

[tags]date box, dateBox, editor, scheduling, overview, date and time type