To process a new calendar value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the UI component, assign it to the [onValueChanged](/api-reference/10%20UI%20Components/Editor/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#onValueChanged') property when you configure the UI component.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#calendarContainer").dxCalendar({
            onValueChanged: function (e) {
                const previousValue = e.previousValue;
                const newValue = e.value;
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-calendar ...
        [(value)]="calendar_value"
        (onValueChanged)="calendar_valueChanged($event)">
    </dx-calendar>

    <!--TypeScript-->
    import { DxCalendarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        calendar_value: Date = new Date();

        calendar_valueChanged (e) {
            const previousValue = e.previousValue;
            const newValue = e.value;
            // Event handling commands go here
        }
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
            v-model="calendarValue"
            @value-changed="calendarValueChanged"
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
            calendarValue: new Date()
        },
        methods: {
            calendarValueChanged: function(e) {
                const previousValue = e.previousValue;
                const newValue = e.value;
                // Event handling commands go here
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Calendar from 'devextreme-react/calendar';

    class App extends React.Component {
        constructor() {
            super();

            this.state = {
                calendarValue: new Date()
            };

            this.calendarValueChanged = this.calendarValueChanged.bind(this);
        }

        render() {
            return (
                <Calendar
                    value={this.state.calendarValue}
                    onValueChanged={this.calendarValueChanged} />
            );
        }

        calendarValueChanged(e) {
            const previousValue = e.previousValue;
            const newValue = e.value;
            // Event handling commands go here
            this.setState({ value: newValue });
        }
    }
    export default App;

---

---
##### jQuery

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxCalendar/Methods/#oneventName_eventHandler') method. 

    <!--JavaScript-->
    const valueChangedHandler1 = function (e) {
        const previousValue = e.previousValue;
        const newValue = e.value;
        // First handler of the "valueChanged" event
    };

    const valueChangedHandler2 = function (e) {
        const previousValue = e.previousValue;
        const newValue = e.value;
        // Second handler of the "valueChanged" event
    };

    $("#calendarContainer").dxCalendar("instance")
        .on("valueChanged", valueChangedHandler1)
        .on("valueChanged", valueChangedHandler2);

---

#####See Also#####
#include common-link-handleevents
- [Calendar - Specify Zoom Level](/concepts/05%20UI%20Components/Calendar/10%20Specify%20Zoom%20Level.md '/Documentation/Guide/UI_Components/Calendar/Specify_Zoom_Level')
- [Calendar Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Calendar/Overview)
- [Calendar API Reference](/api-reference/10%20UI%20Components/dxCalendar '/Documentation/ApiReference/UI_Components/dxCalendar/')

[tags]calendar, editor, get value, set value
