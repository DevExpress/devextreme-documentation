Implement the [onValueChanged](/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#onValueChanged) handler to perform an action when users click the CheckBox.

The code below notifies a user every time the CheckBox is checked.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#check-box").dxCheckBox({
            // ...
            onValueChanged: function(e) {
                if (e.value) {
                    DevExpress.ui.notify("The CheckBox is checked", "success", 500);
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-check-box ...
        (onValueChanged)="onValueChanged($event)"
    >
    </dx-check-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import notify from 'devextreme/ui/notify';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        onValueChanged(e) {
            if (e.value) {
                notify("The CheckBox is checked", "success", 500);
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCheckBox ...
            @value-changed="onValueChanged"
        />
    </template>

    <script>
    // ...
    import notify from "devextreme/ui/notify";

    export default {
        // ...
        methods: {
            onValueChanged(e) {
                if (e.value) {
                    notify("The CheckBox is checked", "success", 500);
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback } from 'react';
    import notify from 'devextreme/ui/notify';
    // ...

    function App() { 
        const onValueChanged = useCallback((e) => {
            if (e.value) {
                notify("The CheckBox is checked", "success", 500);
            }
        }, []);

        return (
            <CheckBox ...
                onValueChanged={onValueChanged}
            />
        );
    }

    export default App;

---