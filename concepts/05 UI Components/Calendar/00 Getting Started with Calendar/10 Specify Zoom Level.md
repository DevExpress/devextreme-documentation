To specify which calendar view (month, year, decade, or century) should be displayed initially, set the [zoomLevel](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#zoomLevel) property. To make certain calendar views inaccessible, specify the [maxZoomLevel](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#maxZoomLevel) and [minZoomLevel](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#minZoomLevel) properties.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#calendar").dxCalendar({
            zoomLevel: "year"
        });
    });


##### Angular

    <!-- tab: app.component.html -->
    <dx-calendar
        zoomLevel="year"
    >
    </dx-calendar>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCalendar
            zoom-level="year"
        >
        </DxCalendar>
    </template>

    <script>
    // ...
    </script>

##### React

When using React, it is necessary to add the `default` prefix to the **zoomLevel** property to control the change of the component state. For more information, refer to the following article: [Uncontrolled Mode](/Documentation/Guide/React_Components/State_Management/#Uncontrolled_Mode).

    <!-- tab: App.js -->
    // ...

    function App() {
        return (
            <Calendar
                defaultZoomLevel="year"
            >
            </Calendar>
        );
    }

    export default App;

---