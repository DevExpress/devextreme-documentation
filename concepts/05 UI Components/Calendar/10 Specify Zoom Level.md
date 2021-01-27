To specify which calendar view (month, year, decade or century) should be displayed at first, set the [zoomLevel](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/zoomLevel.md '/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#zoomLevel') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#calendarContainer").dxCalendar({
            zoomLevel: 'year'
        });
    });

##### Angular

    <!--HTML-->
    <dx-calendar ...
        zoomLevel="year">
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCalendar zoom-level="year" />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxCalendar from 'devextreme-vue/calendar';

    export default {
        components: {
            DxCalendar
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Calendar from 'devextreme-react/calendar';

    class App extends React.Component {
        render() {
            return (
                <Calendar zoomLevel="year" />
            );
        }
    }
    export default App;

---

To make certain calendar views inaccessible, specify the [maxZoomLevel](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/maxZoomLevel.md '/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#maxZoomLevel') and [minZoomLevel](/api-reference/10%20UI%20Widgets/dxCalendar/1%20Configuration/minZoomLevel.md '/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#minZoomLevel') options. For example, the following code enables the month, year and decade calendar views leaving the century view behind.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#calendarContainer").dxCalendar({
            minZoomLevel: 'decade',
            maxZoomLevel: 'month'
        });
    });

##### Angular

    <!--HTML-->
    <dx-calendar ...
        minZoomLevel="decade"
        maxZoomLevel="month">
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCalendar
            min-zoom-level="decade"
            max-zoom-level="month"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxCalendar from 'devextreme-vue/calendar';

    export default {
        components: {
            DxCalendar
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Calendar from 'devextreme-react/calendar';

    class App extends React.Component {
        render() {
            return (
                <Calendar
                    minZoomLevel="decade"
                    maxZoomLevel="month" />
            );
        }
    }
    export default App;

---

#####See Also#####
- [Calendar - Handle the Value Change Event](/concepts/05%20Widgets/Calendar/05%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/UI_Components/Calendar/Handle_the_Value_Change_Event')
- [Calendar - Specify Zoom Level](/concepts/05%20Widgets/Calendar/10%20Specify%20Zoom%20Level.md '/Documentation/Guide/UI_Components/Calendar/Specify_Zoom_Level')
- [Calendar - Customize Cell Appearance](/concepts/05%20Widgets/Calendar/15%20Customize%20Cell%20Appearance.md '/Documentation/Guide/UI_Components/Calendar/Customize_Cell_Appearance')
- [Calendar API Reference](/api-reference/10%20UI%20Widgets/dxCalendar '/Documentation/ApiReference/UI_Components/dxCalendar/')
- [Calendar Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Calendar/Overview)

[tags]calendar, editor, calendar view, zoomLevel, zoom level