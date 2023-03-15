---
id: dxDropDownEditor.Options.validationMessagePosition
type: Enums.Position | Enums.Mode
default: 'auto'
---
---
##### shortDescription
Specifies the position of a validation message relative to the component. The validation message describes the [validation rules](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/') that this component's value does not satisfy.

---
If you set this property to `auto`, the component specifies the validation message position automatically.

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