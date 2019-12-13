The **DateBox** provides the following controls for picking values.

- [Calendar](/concepts/05%20Widgets/Calendar/00%20Overview.md '/Documentation/Guide/Widgets/Calendar/Overview/')       
Available when the [type](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#type') option is set to *"date"* or *"datetime"*.

    ![DevExtreme DateBox PickerType DatePicker](/images/UiWidgets/DateBox/pickerTypes_calendar.png)

- **Rollers**       
Available when the [type](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#type') option is set to *"date"*, *"time"* or *"datetime"*.

    ![DevExtreme DateBox PickerType DatePicker](/images/UiWidgets/DateBox/pickerTypes_rollers.png)

- **List**          
Available when the [type](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#type') option is set to *"time"*.

    ![DevExtreme DateBox PickerType DatePicker](/images/UiWidgets/DateBox/pickerTypes_list.png)

By default, the picking control and its appearance vary depending on the platform. If you need to force the use of a certain control, specify the [pickerType](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/pickerType.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#pickerType') option. In the description of this option, you can find information about which control is the default one for a certain platform. The images above show how the controls look in a generic desktop browser.

For the **List** picker, you can specify the step of available time values in minutes using the [interval](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/interval.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#interval') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dateBoxContainer").dxDateBox({
            value: new Date(),
            type: "time",
            pickerType: "list",
            interval: 20
        });
    });

##### Angular

    <!--HTML-->
    <dx-date-box
        [(value)]="date"
        type="time"
        pickerType="list"
        [interval]="20">
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

#####See Also#####
- [DateBox - Control the Behavior](/concepts/05%20Widgets/DateBox/05%20Control%20the%20Behavior.md '/Documentation/Guide/Widgets/DateBox/Control_the_Behavior')
- [DateBox - Specify Value Range](/concepts/05%20Widgets/DateBox/15%20Specify%20Value%20Range.md '/Documentation/Guide/Widgets/DateBox/Specify_Value_Range')
- [DateBox - Handle the Value Change Event](/concepts/05%20Widgets/DateBox/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/DateBox/Handle_the_Value_Change_Event')
- [DateBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DateBox/Overview)
- [DateBox API Reference](/api-reference/10%20UI%20Widgets/dxDateBox '/Documentation/ApiReference/UI_Widgets/dxDateBox/')

[tags]date box, dateBox, editor, scheduling, picker type, calendar, rollers, list, pickerType, interval