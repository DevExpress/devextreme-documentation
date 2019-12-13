The **Calendar** is a widget that displays a calendar and allows an end user to select the required date within a specified date range.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Calendar/Overview/"
}

The following code adds a simple **Calendar** to your page.

---
##### jQuery

    <!--HTML-->
    <div id="calendarContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#calendarContainer").dxCalendar({
            value: new Date()
        });
    });

##### Angular

    <!--HTML-->
    <dx-calendar
        [(value)]="date">
    </dx-calendar>

    <!--TypeScript-->
    import { DxCalendarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        date: Date = new Date()
    }
    @NgModule({
        imports: [
            // ...
            DxCalendarModule
        ],
        // ...
    })

---

The **Calendar** accepts values of the following formats: <a href="http://www.w3schools.com/jsref/jsref_obj_date.asp" target="_blank">dates</a>, numeric values specifying the number of milliseconds since January 1, 1970, 00:00:00, and strings that match the following patterns: `'yyyy-MM-dd'`, `'yyyy-MM-ddTHH:mm:ss'`, `'yyyy-MM-ddTHH:mm:ssZ'`, or `'yyyy-MM-ddTHH:mm:ssx'`. Note that in code, the format stays the same until a value of a different format is assigned to the **value** option. For example, numbers remain numbers until you pass a string to the **value** option.

To specify which day should be considered the beginning of the week, pass its index (0 - for Sunday, 1 - for Monday, and so on) to the [firstDayOfWeek](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/firstDayOfWeek.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#firstDayOfWeek') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#calendarContainer").dxCalendar({
            firstDayOfWeek: 1
        });
    });   

##### Angular

    <!--HTML-->
    <dx-calendar ...
        [firstDayOfWeek]="1">
    </dx-calendar>

    <!--TypeScript-->
    import { DxCalendarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxCalendarModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-configurewidget
- [Calendar - Handle the Value Change Event](/concepts/05%20Widgets/Calendar/05%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/Calendar/Handle_the_Value_Change_Event')
- [Calendar - Specify Zoom Level](/concepts/05%20Widgets/Calendar/10%20Specify%20Zoom%20Level.md '/Documentation/Guide/Widgets/Calendar/Specify_Zoom_Level')
- [Calendar - Customize Cell Appearance](/concepts/05%20Widgets/Calendar/15%20Customize%20Cell%20Appearance.md '/Documentation/Guide/Widgets/Calendar/Customize_Cell_Appearance')
- [Calendar - Keyboard Support](/concepts/05%20Widgets/Calendar/20%20Keyboard%20Support.md '/Documentation/Guide/Widgets/Calendar/Keyboard_Support')
- [Calendar API Reference](/api-reference/10%20UI%20Widgets/dxCalendar '/Documentation/ApiReference/UI_Widgets/dxCalendar/')
- [DateBox - Overview](/concepts/05%20Widgets/DateBox/00%20Overview.md '/Documentation/Guide/Widgets/DateBox/Overview/')

[tags]calendar, editor, scheduling, overview, value format, date format, date range