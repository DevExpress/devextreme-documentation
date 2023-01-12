If a user edits the text in a TextArea, the UI component updates the [value](/api-reference/10%20UI%20Components/dxTextBox/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxTextArea/Configuration/#value') property. The update happens on the <a href="https://developer.mozilla.org/en/docs/Web/Events/change" target="_blank">change</a> event. To specify another value change event, use the [valueChangeEvent](/api-reference/10%20UI%20Components/dxTextEditor/1%20Configuration/valueChangeEvent.md '/Documentation/ApiReference/UI_Components/dxTextArea/Configuration/#valueChangeEvent') property.

To handle the value change event, implement the [onValueChanged](/api-reference/10%20UI%20Components/dxTextEditor/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Components/dxTextArea/Configuration/#onValueChanged') function.

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