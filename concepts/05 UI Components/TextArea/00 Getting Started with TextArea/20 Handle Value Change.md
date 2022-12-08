When users type text into the TextArea, the UI component writes this text into the [value](/Documentation/ApiReference/UI_Components/dxTextArea/Configuration/#value) property when the <a href="https://developer.mozilla.org/en/docs/Web/Events/change" target="_blank">change</a> event is raised. To specify another value change event, use the [valueChangeEvent](/Documentation/ApiReference/UI_Components/dxTextArea/Configuration/#valueChangeEvent) property.

To handle the value change event, implement the [onValueChanged](/Documentation/ApiReference/UI_Components/dxTextArea/Configuration/#onValueChanged) function.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#text-area").dxTextArea({ 
            // ...
            valueChangeEvent: "keyup",
            onValueChanged() {
                DevExpress.ui.notify("The value has been changed");
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-text-area ...
        valueChangeEvent="keyup"
        (onValueChanged)="onValueChanged()"
    >
    </dx-text-area>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import notify from 'devextreme/ui/notify';

    // ...

    export class AppComponent {
        onValueChanged() {
            notify("The value has been changed");
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTextArea ...
            value-change-event="keyup"
            @value-changed="onValueChanged"
        />
    </template>

    <script>
        // ...
        import notify from "devextreme/ui/notify";

        export default {
            components: {
                DxTextArea
            },
            data() {
                // ...
            },
            methods: {
                onValueChanged() {
                    notify("The value has been changed");
                }
            }
        }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback } from "react";
    import "devextreme/dist/css/dx.light.css";
    import { TextArea } from 'devextreme-react/text-area';
    import notify from "devextreme/ui/notify";
    
    // ...

    function App() {
        const onValueChanged = useCallback(() => {
            notify("The value has been changed");
        }, []);
        return (
            <TextArea ...
                valueChangeEvent="keyup"
                onValueChanged={onValueChanged}
            />
        );
    }

    export default App;

---