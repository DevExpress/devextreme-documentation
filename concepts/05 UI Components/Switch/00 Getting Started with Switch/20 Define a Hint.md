The following code specifies the [hint](/api-reference/10%20UI%20Components/Widget/1%20Configuration/hint.md '/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#hint') that appears when 
 users hover the mouse pointer over the Switch. 

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#switch").dxSwitch({
            // ...
            hint: "Click to switch on",
            onValueChanged(e) {
                const message_text= e.value ? "Click to switch off" : "Click to switch on";
                e.component.option("hint", message_text);
                // ...
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-switch ...
        [hint]="hint_message"
        (onValueChanged)="onValueChanged($event)"
    >
    </dx-switch>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";
    // ...

    @Component({
        selector: "app-root",
        templateUrl: "./app.component.html",
        styleUrls: ["./app.component.css"]
    })

    export class AppComponent {
        hint_message: string = "Click to switch on";
        onValueChanged(e: {value: boolean}) {
            this.hint_message = e.value ? "Click to switch off" : "Click to switch on";
            // ...
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSwitch ...
            :hint="hint_message"
            @value-changed="onValueChanged"
        />
    </template>

    <script>
    import { DxSwitch } from "devextreme-vue/switch";
    // ...

    export default {
        components: {
            DxSwitch
        },
        data() {
            return {
                hint_message: "Click to switch on",
            };
        },
        methods: {
            onValueChanged(e) {
                this.hint_message = e.value ? "Click to switch off" : "Click to switch on";
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useState, useCallback } from "react";
    import "devextreme/dist/css/dx.light.css";

    import { Switch } from "devextreme-react/switch";

    function App() {
        const [hint_message, setHintMessage] = useState("Click to switch on");

        const onValueChanged = useCallback((e) => {
            const message_text = e.value ? "Click to switch off" : "Click to switch on";
            setHintMessage(message_text);
            // ...
        }, []);

        return (
            <Switch ...
                hint={hint_message}
                onValueChanged={onValueChanged}
            />
        );
    }

    export default App;

---