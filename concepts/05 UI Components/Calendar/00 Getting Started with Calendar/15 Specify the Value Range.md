Use the [min](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#min) and [max](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#max) properties to specify the range of available dates.

---
##### jQuery

    <!--tab: index.js-->
    $(function() {
        $("#calendar").dxCalendar({
            // ...
            min: new Date('2022-01-01T00:00:00.000Z'),
            max: new Date('2022-12-31T00:00:00.000Z')
        });
    });

##### Angular

    <!--tab: app.component.html-->
    <dx-calendar ...
        [min]="minDate"
        [max]="maxDate">
    </dx-calendar>

    <!--tab: app.component.ts-->
    // ...
    export class AppComponent {
        minDate = new Date('2022-01-01T00:00:00.000Z');
        maxDate = new Date('2022-12-31T00:00:00.000Z');
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCalendar ...
            :min="minDate"
            :max="maxDate"
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
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const minDate = new Date('2022-01-01T00:00:00.000Z');
    const maxDate = new Date('2022-12-31T00:00:00.000Z');

    function App() {
        return (
            <Calendar ...
                minDate={minDate}
                maxDate={maxDate} 
            >
            </Calendar>
        );
    }

    export default App;

---

