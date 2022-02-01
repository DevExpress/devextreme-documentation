Enable the [showTodayButton](/api-reference/10%20UI%20Components/dxCalendar/1%20Configuration/showTodayButton.md '/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#showTodayButton') property to add a **Today** button that selects the current date.

---
##### jQuery

    <!--tab: index.js-->
    $(function() {
        $("#calendar").dxCalendar({
            // ...
            showTodayButton: true
        });
    });

##### Angular

    <!--tab: app.component.html-->
    <dx-calendar ...
        [showTodayButton]="true">
    </dx-calendar>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCalendar ...
            :show-today-button="true"
        >
        </DxCalendar>
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...

    function App() {
        return (
            <Calendar ...
                showTodayButton={true}
            >
            </Calendar>
        );
    }

    export default App;

---
