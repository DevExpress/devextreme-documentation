---
id: Editor.Options.validationErrors
type: Array<any>
default: null
---
---
##### shortDescription
An array of validation errors.

---

The component updates this property automatically as it validates values. You can also update **validationErrors** manually to display custom errors and implement custom validation logic. The following code snippet demonstrates how to define items in this array:

---

##### jQuery

    <!-- tab: index.js -->
    $('#{widget-name}').dx{WidgetName}({
        isValid: false,
        validationErrors: [{ message: "Custom validation error" }],
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}
        [isValid]="false"
        [validationErrors]="validationErrors"
    ></dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Dx{WidgetName}Component } from 'devextreme-angular/ui/{widget-name}'

    export class AppComponent {
        validationErrors = [
            { message: 'Custom validation error' }
        ];
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { Dx{WidgetName} } from 'devextreme-vue/{widget-name}';

    const validationErrors = [
        { message: 'Custom validation error' }
    ];
    </script>

    <template>
        <Dx{WidgetName} 
            :isValid="false"
            :validation-errors="validationErrors"
        />
    </template>

##### React

    <!-- tab: App.tsx -->
    import { {WidgetName} } from 'devextreme-react/{widget-name}';

    const validationErrors = [
        { message: 'Custom validation error' }
    ];

    function App(): JSX.Element {
        return (
            <{WidgetName}
                isValid={false}
                validationErrors={validationErrors}
            />
        )
    }

---