Implement the [onValueChanged](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/#onValueChanged) handler to perform an action when a user selects an item. In the code below, this function logs ${{output}}.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}").dx{WidgetName}({
            // ...
            onValueChanged: function(e) {
                console.log(e.value);
                console.log(e.previousValue);
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        (onValueChanged)="onValueChanged($event)">
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
        onValueChanged(e) {
            console.log(e.previousValue);
            console.log(e.value);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            @value-changed="onValueChanged"
        />
    </template>

    <script>
    export default {
        // ...
        methods: {
            onValueChanged(e) {
                console.log(e.previousValue);
                console.log(e.value);
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback } from 'react';

    function App() { 
        const onValueChanged = useCallback((e) => {
            console.log(e.previousValue);
            console.log(e.value);
        }, []);

        return (
            <{WidgetName} ...
                onValueChanged={onValueChanged}
            />
        );
    }

    export default App;

---

