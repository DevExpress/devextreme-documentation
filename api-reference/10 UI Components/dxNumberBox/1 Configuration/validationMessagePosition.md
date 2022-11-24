This property also applies position rules to the component's [inner validation message](/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#invalidValueMessage).

The following example positions a validation message at the component's right:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            validationMessagePosition: 'right'
        }).dxValidator({
            validationRules: [{
                type: 'required',
                message: 'Required',
            }],
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        validationMessagePosition="right">
        <dx-validator>
            <dxi-validation-rule
                type="required"
                message="Required"
            >
            </dxi-validation-rule>
        </dx-validator>
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            validation-message-position="right"
        >
            <DxValidator>
                <DxRequiredRule message="Required" />
            </DxValidator>
        </Dx{WidgetName}>
    </template>

    <script>
        // ...
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    // ...

    function App() {
        return (
            <{WidgetName} ...
                validationMessagePosition="right"
            >
                <Validator>
                    <RequiredRule message="Required" />
                </Validator>
            </{WidgetName}>
        ); 
        
    };
    export default App;

---