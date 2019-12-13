---
id: UI Events.dxhold
module: events/hold
type: eventType
---
---
##### shortDescription
Raised when the element is being held during a specified time.

##### param(event): event
#include common-ref-eventparam

---
To specify the time span after which the event is raised, pass the object containing the timeout property to the function subscribing to the event.

If you need to subscribe to **dxhold** for two elements that are in the parent-child relationship, make sure that the timeout of the parent element is equal or longer than that of the child. The following example illustrates the case when the parent's timeout is longer:

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
    import 'devextreme/events/hold';

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
    import 'devextreme/events/hold';

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

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import { on } from 'devextreme/events';
    import 'devextreme/events/hold';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    let parentStyle = {
        backgroundColor: "aquamarine",
        width: 250,
        height: 150
    };

    let childStyle = {
        backgroundColor: "bisque",
        width: 180,
        height: 100
    };

    class App extends React.Component {
        componentDidMount() {
            const dxholdHandler = (event) => {
            alert(`${event.data.elemName} was held for ${event.data.timeout} ms.`);
            return true; // true - continues event propagation, false - stops
            }
            const parent = document.getElementById("parent");
            const child = document.getElementById("child");
            
            on(parent, "dxhold", { timeout: 1000, elemName: 'Parent' }, dxholdHandler);
            on(child, "dxhold", { timeout: 750, elemName: 'Child' }, dxholdHandler);
        }

        render() {
            return (
                <div id="parent" style={parentStyle}>
                    Parent element
                    <div id="child" style={childStyle}>
                        Child element
                    </div>
                </div>
            )
        }
    }

    export default App;

---

#####See Also#####
- [UI Events - Introduction](/api-reference/10%20UI%20Widgets/UI%20Events '/Documentation/ApiReference/UI_Widgets/UI_Events/')