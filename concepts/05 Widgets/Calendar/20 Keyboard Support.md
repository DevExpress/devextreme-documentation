An end user can use the following keys to interact with the widget.

<div class="simple-table">
  <table>
    <thead>
    <tr>
      <th>Key</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>&larr; &rarr; &uarr; &darr;</td>
      <td>Moves focus to the day nearby.</td>
    </tr>
    <tr>
      <td>Page Up or Ctrl + &larr;</td>
      <td>Displays the previous month.</td>
    </tr>
    <tr>
      <td>Page Down or Ctrl + &rarr;</td>
      <td>Displays the next month.</td>
    </tr>
    <tr>
      <td>Enter</td>
      <td>Selects the focused day.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxCalendar/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        let calendar =  $("#calendarContainer").dxCalendar("instance");
        calendar.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        calendar.registerKeyHandler("space", function (e) {
            // ...
        });
    }


##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxCalendarModule, DxCalendarComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxCalendarComponent, { static: false }) calendar: DxCalendarComponent
        // Prior to Angular 8
        // @ViewChild(DxCalendarComponent) calendar: DxCalendarComponent
        ngAfterViewInit () {
            this.calendar.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.calendar.instance.registerKeyHandler("space", function (e) {
                // ...
            });
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
        <DxCalendar :ref="myCalendarRef" />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxCalendar from 'devextreme-vue/calendar';

    const myCalendarRef = 'my-calendar';

    export default {
        components: {
            DxCalendar
        },
        data() {
            return {
                myCalendarRef
            }
        },
        computed: {
            calendar: function() {
                return this.$refs[myCalendarRef].instance;
            }
        },
        mounted: function() {
            this.calendar.registerKeyHandler("backspace", function(e) {
                // The argument "e" contains information on the event
            });
            this.calendar.registerKeyHandler("space", function(e) {
                // ...
            });
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
        constructor(props) {
            super(props);
            this.calendarRef = React.createRef();
        }

        render() {
            return (
                <Calendar ref={this.calendarRef} />
            );
        }

        get calendar() {
            return this.calendarRef.current.instance;
        }

        componentDidMount() {
            this.calendar.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.calendar.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    export default App;

---

#####See Also#####
#include common-link-callmethods
- [Calendar Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Calendar/Overview)
- [Calendar API Reference](/api-reference/10%20UI%20Widgets/dxCalendar '/Documentation/ApiReference/UI_Widgets/dxCalendar/')

[tags]calendar, accessibility, keyboard shortcuts