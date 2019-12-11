The **DateBox**'s value is formatted according to the application's [locale](/api-reference/50%20Common/utils/localization/locale().md '/Documentation/ApiReference/Common/utils/localization/#locale'). You can use the [displayFormat](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/displayFormat.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#displayFormat') option that accepts [predefined](/concepts/Common/34%20Value%20Formatting/10%20Format%20Widget%20Values/10%20Predefined%20Formats.md '/Documentation/Guide/Common/Value_Formatting/#Format_Widget_Values/Predefined_Formats') and [custom formats](/concepts/Common/34%20Value%20Formatting/10%20Format%20Widget%20Values/20%20Custom%20Format%20String.md '/Documentation/Guide/Common/Value_Formatting/#Format_Widget_Values/Custom_Format_String') to change the format.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DateBox/Formatting/"
}

In addition to value formatting, the **displayFormat** can be used as a mask to control user input if [useMaskBehavior](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/useMaskBehavior.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#useMaskBehavior') is **true**:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dateBoxContainer").dxDateBox({
            displayFormat: "EEEE, d 'of' MMM", // "Tuesday, 16 of Oct" 
            useMaskBehavior: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-date-box
        [useMaskBehavior]="true"
        displayFormat="EEEE, d 'of' MMM"> <!-- "Tuesday, 16 of Oct" -->
    </dx-date-box>

    <!--TypeScript-->
    import { DxDateBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDateBoxModule
        ],
        // ...
    })

---

The following changes apply when masked input is enabled:

- The mouse wheel or Up/Down Arrow key increases/decreases the selected value portion by 1.
- The caret is moved to the next date portion when the previous date portion is entered.
- The year is entered right-to-left. For example, if `1` is entered, the year is `2001`; if `18` is entered, the year is `2018`.
- Numbers and first letters can be used to specify the month and day of week when they are displayed as text. For example, enter `A` or `4` to specify "April".
