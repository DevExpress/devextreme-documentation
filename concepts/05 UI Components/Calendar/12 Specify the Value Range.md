Use the [min](/api-reference/10%20UI%20Components/dxCalendar/1%20Configuration/min.md '/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#min') and [max](/api-reference/10%20UI%20Components/dxCalendar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#max') properties to specify the range of available dates.

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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCalendar
            :value="date"
            :min-date="minDate"
            :max-date="maxDate"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxCalendar from 'devextreme-vue/calendar';

    export default {
        components: {
            DxCalendar
        },
        data() {
            return {
                date: new Date(),
                minDate: new Date(2000, 1, 1),
                maxDate: new Date(2020, 12, 31)
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Calendar from 'devextreme-react/calendar';

    const date = new Date();
    const minDate = new Date(2000, 1, 1);
    const maxDate = new Date(2020, 12, 31);

    class App extends React.Component {
        render() {
            return (
                <Calendar
                    defaultValue={date}
                    minDate={minDate}
                    maxDate={maxDate} />
            );
        }
    }
    export default App;

---

If you need to disable specific dates, use the [disabledDates](/api-reference/10%20UI%20Components/dxCalendar/1%20Configuration/disabledDates.md '/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#disabledDates') property. You can specify either an array of predefined dates or a function that determines whether a date is available. For example, the following code disables weekends:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#calendarContainer").dxCalendar({
            value: new Date(),
            disabledDates: function (data) {
                const day = data.date.getDay();
                const isWeekend = (day === 0 || day === 6);
                return data.view === "month" && isWeekend;
            })
        });
    });

##### Angular

    <!--HTML-->
    <dx-calendar
        [(value)]="date"
        [disabledDates]="isDateDisabled">
    </dx-calendar>

    <!--TypeScript-->
    import { DxCalendarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        date: Date = new Date();
        isDateDisabled({ date, view }) {
            const day = date.getDay();
            const isWeekend = (day === 0 || day === 6);
            return view === "month" && isWeekend;
        };
    }
    @NgModule({
        imports: [
            // ...
            DxCalendarModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCalendar
            :value="date"
            :min-date="minDate"
            :max-date="maxDate"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxCalendar from 'devextreme-vue/calendar';

    export default {
        components: {
            DxCalendar
        },
        data() {
            return {
                date: new Date()
            }
        },
        methods: {
            isDateDisabled({ date, view }) {
                const day = date.getDay();
                const isWeekend = (day === 0 || day === 6);
                return view === "month" && isWeekend;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Calendar from 'devextreme-react/calendar';

    const date = new Date();

    class App extends React.Component {
        render() {
            return (
                <Calendar
                    defaultValue={date}
                    disabledDates={this.isDateDisabled} />
            );
        }

        isDateDisabled({ date, view }) {
            const day = date.getDay();
            const isWeekend = (day === 0 || day === 6);
            return view === "month" && isWeekend;
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Calendar/Overview/"
}

#####See Also#####
- [Calendar - Handle the Value Change Event](/concepts/05%20UI%20Components/Calendar/05%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/UI_Components/Calendar/Handle_the_Value_Change_Event')
- [Calendar - Specify Zoom Level](/concepts/05%20UI%20Components/Calendar/10%20Specify%20Zoom%20Level.md '/Documentation/Guide/UI_Components/Calendar/Specify_Zoom_Level')

[tags]calendar, editor, date range, rande, disable dates, disabledDates
