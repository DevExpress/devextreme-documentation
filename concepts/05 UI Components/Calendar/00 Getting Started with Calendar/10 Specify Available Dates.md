Use the [min](/api-reference/10%20UI%20Components/dxCalendar/1%20Configuration/min.md '/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#min') and [max](/api-reference/10%20UI%20Components/dxCalendar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#max') properties to specify the range of available dates. You can also use the [disabledDates](/api-reference/10%20UI%20Components/dxCalendar/1%20Configuration/disabledDates.md '/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#disabledDates') property to disable certain dates. For example, the code below disables all Sundays and limits the range of dates to the current year.

---
##### jQuery

    <!--tab: index.js-->
    $(function() {
        function changeYear(date) {
            const thisDate = new Date();
            const thisYear = thisDate.getFullYear();
            return new Date(date.setFullYear(thisYear));
        };

        $("#calendar").dxCalendar({
            min: changeYear(new Date('2022-01-01T00:00:00.000Z')),
            max: changeYear(new Date('2022-12-31T00:00:00.000Z')),
            disabledDates: function(data) {
                return data.view === 'month' && data.date.getDay() === 0;
            }
        });
    });

##### Angular

    <!--tab: app.component.html-->
    <dx-calendar
        [min]="minDate"
        [max]="maxDate"
        [disabledDates]="disabledDates">
    </dx-calendar>

    <!--tab: app.component.ts-->
    // ...
    export class AppComponent {
        changeYear(date: Date) {
            const thisDate = new Date();
            const thisYear = thisDate.getFullYear();
            return new Date(date.setFullYear(thisYear));
        };
        minDate = this.changeYear(new Date('2022-01-01T00:00:00.000Z'));
        maxDate = this.changeYear(new Date('2022-12-31T00:00:00.000Z'));
        disabledDates(data) {
            return data.view === 'month' && data.date.getDay() === 0;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCalendar
            :min="minDate"
            :max="maxDate"
            :disabled-dates="disabledDates"
        >
        </DxCalendar>
    </template>

    <script>
    // ...
    function changeYear(date) {
        const thisDate = new Date();
        const thisYear = thisDate.getFullYear();
        return new Date(date.setFullYear(thisYear));
    }

    export default {
        // ...
        data() {
            return {
                minDate: changeYear(new Date('2022-01-01T00:00:00.000Z')),
                maxDate: changeYear(new Date('2022-12-31T00:00:00.000Z'))
            }
        }б
        methods: {
            disabledDates(data) {
                return data.view === 'month' && data.date.getDay() === 0;
            }
        Ъ
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const minDate = changeYear(new Date('2022-01-01T00:00:00.000Z'));
    const maxDate = changeYear(new Date('2022-12-31T00:00:00.000Z'));

    function App() {
        return (
            <Calendar
                minDate={minDate}
                maxDate={maxDate}
                disabledDates={disabledDates} 
            >
            </Calendar>
        );
    };

    function changeYear(date) {
        const thisDate = new Date();
        const thisYear = thisDate.getFullYear();
        return new Date(date.setFullYear(thisYear));
    };

    function disabledDates(data) {
        return data.view === 'month' && data.date.getDay() === 0;
    };

    export default App;

---

