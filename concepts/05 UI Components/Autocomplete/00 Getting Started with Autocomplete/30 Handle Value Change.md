Implement the [onValueChanged](/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#onValueChanged) handler to perform an action when a user selects an item or types in the Autocomplete text field. In the code below, this function logs previous and new values in the console.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        // ...

        $("#autocomplete").dxAutocomplete({
            // ...
            onValueChanged: function(e) {
                console.log(e.value);
                console.log(e.previousValue);
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-autocomplete ...
        (onValueChanged)="onValueChanged($event)">
    </dx-autocomplete>

    <!-- tab: app.component.ts -->
    // ...

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
        <DxAutocomplete ...
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
    // ...
    import React, { useCallback } from 'react';

    function App() { 
        // ...
        const onValueChanged = useCallback((e) => {
            console.log(e.previousValue);
            console.log(e.value);
        }, []);

        return (
            <Autocomplete ...
                onValueChanged={onValueChanged}
            />
        );
    }

    export default App;

---