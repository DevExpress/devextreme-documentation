The TextBox raises three keyboard events: [keyDown](/api-reference/10%20UI%20Components/dxTextEditor/4%20Events/keyDown.md '/Documentation/ApiReference/UI_Components/dxTextBox/Events/#keyDown'), [keyUp](/api-reference/10%20UI%20Components/dxTextEditor/4%20Events/keyUp.md '/Documentation/ApiReference/UI_Components/dxTextBox/Events/#keyUp') and [enterKey](/api-reference/10%20UI%20Components/dxTextEditor/4%20Events/enterKey.md '/Documentation/ApiReference/UI_Components/dxTextBox/Events/#enterKey'). Within the functions that handle them, you can access the original keyboard events.

In this example, the typed in [value]() can be seen in the browser console after users hit the Enter key.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#textbox").dxTextBox({ 
            // ...
            onEnterKey: function(e) {
                console.log(e.component.option("value"));
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-text-box ...
        [(value)]="value"
        (onEnterKey)="onEnterKey()"
    >
    </dx-text-box>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        value: string = "";
        onEnterKey() {
            console.log(this.value);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTextBox 
            v-model:value="value"
            @enterKey="onEnterKey($event)"
        />
    </template>

    <script>
    // ...

    export default {
        // ...
        data() {
            return {
                value: ""
            }
        },
        methods: {
            onEnterKey() {
                console.log(this.value);
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useState, useCallback } from 'react';
    // ...

    function App() {
        const [value, setValue] = useState("");
        const onValueChange = useCallback((v) => {
            setValue(v)
        }, []);
        const onEnterKey = useCallback(() => {
            console.log(value)
        }, [value]);
        return (
            <TextBox ...
                value={value}
                valueChangeEvent="input"
                onEnterKey={onEnterKey}
            />
        );
    }

    export default App;

---