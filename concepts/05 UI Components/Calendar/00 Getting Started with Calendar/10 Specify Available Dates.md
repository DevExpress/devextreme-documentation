Use the [min](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#min) and [max](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#max) properties to specify the range of available dates. You can also use the [disabledDates](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#disabledDates) property to disable certain dates. For example, the code below disables all Sundays and limits the range of dates to 2022.

---
##### jQuery

    <!--tab: index.js-->
    $(function() {
        $("#calendar").dxCalendar({
            min: new Date('2022-01-01T00:00:00.000Z'),
            max: new Date('2022-12-31T00:00:00.000Z'),
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
        minDate = new Date('2022-01-01T00:00:00.000Z');
        maxDate = new Date('2022-12-31T00:00:00.000Z');
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
    export default {
        // ...
        data() {
            return {
                minDate: new Date('2022-01-01T00:00:00.000Z'),
                maxDate: new Date('2022-12-31T00:00:00.000Z')
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
    const minDate = new Date('2022-01-01T00:00:00.000Z');
    const maxDate = new Date('2022-12-31T00:00:00.000Z');

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

    function disabledDates(data) {
        return data.view === 'month' && data.date.getDay() === 0;
    };

    export default App;

---

