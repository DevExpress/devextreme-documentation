Set the [zoomLevel](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#zoomLevel) property to specify which calendar view (month, year, decade, or century) the component should display. To make certain calendar views inaccessible, specify the [maxZoomLevel](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#maxZoomLevel) and [minZoomLevel](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#minZoomLevel) properties (not demonstrated in this tutorial).

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#calendar").dxCalendar({
            // ...
            zoomLevel: "year"
        });
    });


##### Angular

    <!-- tab: app.component.html -->
    <dx-calendar ...
        zoomLevel="year"
    >
    </dx-calendar>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCalendar ...
            zoom-level="year"
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
                defaultZoomLevel="year"
            >
            </Calendar>
        );
    }

    export default App;

In the code above, the **zoomLevel** property has the `default` prefix. This prefix specifies that the Calendar handles property changes internally. For more information, refer to the following article: [Uncontrolled Mode](/Documentation/Guide/React_Components/State_Management/#Uncontrolled_Mode).

---