---
module: events/hold
type: eventType
---
---
##### shortDescription
Raised when the element was held for a specified time. The default time interval is 750 ms.

##### param(event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery.

---
To specify the time span after which the event is raised, pass the object containing the timeout property to the function that subscribes to the event.

If you need to subscribe to **dxhold** for two elements that are in the parent-child relationship, make sure that the timeout of the parent element is equal or longer than that of the child. **dxhold** triggers when The following example illustrates the case, where the parent's timeout is longer:

---
##### jQuery

    <!-- tab: index.html -->
    <div id="parent">
        Parent element
        <div id="child">
            Child element
        </div>
    </div>

    <!-- tab: index.js -->
    $(function() {
        var dxholdHandler = function() {
            alert(`${event.data.elemName} was held for ${event.data.timeout} ms.`);
            return true; // true - continues event propagation, false - stops
        });

        $("#parent").on("dxhold", { timeout: 1000, elemName: 'Parent' }, dxholdHandler);
        $("#child").on("dxhold", { timeout: 750, elemName: 'Child' }, dxholdHandler);
    });

    <!-- tab: index.css -->
    #parent {
        background-color: aquamarine;
        width: 250px;
        height: 150px;
    }

    #child {
        background-color: bisque;
        width: 180px;
        height: 100px;
    }

##### Angular

    <!-- tab: app.component.html -->
    <div id="parent">
        Parent element
        <div id="child">
            Child element
        </div>
    </div>

    <!-- tab: app.component.ts -->
    import { Component, AfterViewInit } from '@angular/core';
    import { on } from 'devextreme/events';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent implements AfterViewInit {
        ngAfterViewInit() {
            const dxholdHandler = (event) => {
                alert(`${event.data.elemName} was held for ${event.data.timeout} ms.`);
                return true; // true - continues event propagation, false - stops
            }
            const parent: HTMLElement = document.getElementById("parent");
            const child: HTMLElement = document.getElementById("child");

            on(parent, "dxhold", { timeout: 1000, elemName: 'Parent' }, dxholdHandler);
            on(child, "dxhold", { timeout: 750, elemName: 'Child' }, dxholdHandler);
        }
    }

    <!-- tab: app.component.css -->
    #parent {
        background-color: aquamarine;
        width: 250px;
        height: 150px;
    }

    #child {
        background-color: bisque;
        width: 180px;
        height: 100px;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
    <div id="parent">
        Parent element
        <div id="child">
            Child element
        </div>
    </div>
    </template>

    <script>
    import { on } from 'devextreme/events';

    export default {
        mounted() {
            const dxholdHandler = (event) => {
                alert(`${event.data.elemName} was held for ${event.data.timeout} ms.`);
                return false; // true - continues event propagation, false - stops
            }
            const parent = document.getElementById("parent");
            const child = document.getElementById("child");

            on(parent, "dxhold", { timeout: 1000, elemName: 'Parent' }, dxholdHandler);
            on(child, "dxhold", { timeout: 750, elemName: 'Child' }, dxholdHandler);
        }
    };
    </script>

    <style>
    #parent {
        background-color: aquamarine;
        width: 250px;
        height: 150px;
    }
    #child {
        background-color: bisque;
        width: 180px;
        height: 100px;
    }
    </style>

---

#####See Also#####
- [UI Events - Introduction](/api-reference/10%20UI%20Widgets/UI%20Events '/Documentation/ApiReference/UI_Widgets/UI_Events/')