Set the [showTodayButton](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#showTodayButton) property to **true** to add a **Today** button that selects the current date.

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

You have configured basic Calendar features. For more information about this UI component and examples, refer to the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Calendar/Overview/)
* [API Reference](/Documentation/ApiReference/UI_Components/dxCalendar/)