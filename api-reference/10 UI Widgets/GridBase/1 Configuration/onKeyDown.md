---
id: GridBase.Options.onKeyDown
type: function(e)
default: null
EventForAction: GridBase.keyDown
---
---
##### shortDescription
A function that is executed when the widget is in focus and a key has been pressed down.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
The event that caused the function to execute. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a <a href="http://api.jquery.com/category/events/event-object/" target="_blank">jQuery.Event</a> when you use jQuery. The underlying native event is <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event">keydown</a>.

##### field(e.handled): Boolean
Indicates whether the widget has already handled this event.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the function's execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}").dx{WidgetName}({
            // ...
            onKeyDown(e) {
                if (e.event.key === "Ctrl + Q") {
                    // your event handling logic goes here 
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}
        (onKeyDown)="onKeyDown($event)">
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Dx{WidgetName}Module } from 'devextreme-angular';

    // ...
    export class AppComponent {
        onKeyDown(e) {
            if ( e.event.key === "Ctrl + Q") {
                // your event handling logic goes here 
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}>
            @key-down="onKeyDown">            
        </Dx{WidgetName}>
    </template>

    <script>
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        data() {},
        methods: {
            onKeyDown(e) {
                if (e.event.key === "Ctrl + Q") {
                    // your event handling logic goes here 
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.onKeyDown = this.onKeyDown.bind(this);
        }

        render() {
            return (
                <{WidgetName}
                    onKeyDown={this.onKeyDown}>
                </{WidgetName}>
            );
        }
    }
    export default App;

---
