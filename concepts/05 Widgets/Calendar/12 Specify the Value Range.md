Use the [min](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/min.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#min') and [max](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#max') options to specify the range of available dates.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#calendarContainer").dxCalendar({
            value: new Date(),
            min: new Date(2000, 1, 1),
            max: new Date(2020, 12, 31)
        });
    });

##### Angular

    <!--HTML-->
    <dx-calendar
        [(value)]="date"
        [min]="minDate"
        [max]="maxDate">
    </dx-calendar>

    <!--TypeScript-->
    import { DxCalendarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        date: Date = new Date();
        minDate: Date = new Date(2000, 1, 1);
        maxDate: Date = new Date(2020, 12, 31);
    }
    @NgModule({
        imports: [
            // ...
            DxCalendarModule
        ],
        // ...
    })

---

If you need to disable specific dates, use the [disabledDates](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/disabledDates.md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#disabledDates') option. You can specify either an array of predefined dates or a function that determines whether a date is available. For example, the following code disables weekends: 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#calendarContainer").dxCalendar({
            value: new Date(),
            disabledDates: function (data) {
                var day = data.date.getDay();
                var isWeekend = (day === 0 || day === 6);
                return data.view === "month" && isWeekend;
            })
        });
    });

##### Angular

    <!--HTML-->
    <dx-calendar
        [(value)]="date"
        [disabledDates]="disabledDates">
    </dx-calendar>

    <!--TypeScript-->
    import { DxCalendarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        date: Date = new Date();
        disabledDates (data) {
            let day = data.date.getDay();
            let isWeekend = (day === 0 || day === 6);
            return data.view === "month" && isWeekend;
        };
    }
    @NgModule({
        imports: [
            // ...
            DxCalendarModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Calendar/Overview/"
}

#####See Also#####
- [Calendar - Handle the Value Change Event](/concepts/05%20Widgets/Calendar/05%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/Calendar/Handle_the_Value_Change_Event')
- [Calendar - Specify Zoom Level](/concepts/05%20Widgets/Calendar/10%20Specify%20Zoom%20Level.md '/Documentation/Guide/Widgets/Calendar/Specify_Zoom_Level')

[tags]calendar, editor, date range, rande, disable dates, disabledDates