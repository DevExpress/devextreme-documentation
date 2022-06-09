When you assign *"invalid"* to **validationStatus**, you can also use the [validationErrors](/api-reference/10%20UI%20Components/Editor/1%20Configuration/validationErrors.md '{basewidgetpath}/Configuration/#validationErrors') array to set an error message as shown below:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const {widgetName} = $("#{widgetName}Container").dx{WidgetName}({
            // ...
        }).dx{WidgetName}("instance");

        function setInvalidStatus(message) {
            {widgetName}.option({
                validationStatus: "invalid",
                validationErrors: [{ message: message }]
            });
        }
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}
        [validationStatus]="validationStatus"
        [validationErrors]="validationErrors">
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        validationStatus: string = "valid";
        validationErrors: any;
        // ...
        setInvalidStatus(message) {
            this.validationStatus = "invalid";
            this.validationErrors = [{ message: message }];
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :validation-status="validationStatus"
            :validation-errors="validationErrors"
        />
    </template>

    <script>
        // ...
        export default {
            // ...
            data() {
                return {
                    validationStatus: "valid",
                    validationErrors: []
                }
            },
            methods: {
                setInvalidStatus(message) {
                    this.validationStatus = "invalid";
                    this.validationErrors = [{ message: message }];
                }
            }
        }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useState } from 'react';
    // ...

    function App() {
        const [validationStatus, setValidationStatus] = useState("valid");
        const [validationErrors, setValidationErrors] = useState([]);

        const setInvalidStatus = message => {
            setValidationStatus("invalid");
            setValidationErrors([{ message: message }]);
        }

        return (
            <{WidgetName}
                validationStatus={validationStatus}
                validationErrors={validationErrors}
            />
        ); 
        
    };
    export default App;

---
