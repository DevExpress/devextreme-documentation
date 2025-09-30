---
id: dxFormSimpleItem.aiOptions
type: Object
---
---
##### shortDescription
Specifies options for an AI service that parses Smart Paste data.

---
Use options available in this class to customize how an AI Service processes data. You can apply the following changes: 

- Mark an field as disabled for AI processing.
- Specify custom parsing instructions for a field.

The following code snippet adds a custom instruction to the item:

---
##### jQuery

    <!-- tab: index.js -->
    $("#form").dxForm({
        // ...
        items: [
            {
                dataField: 'Email',
                editorType: 'dxTextBox',
                validationRules: [{ type: 'email' }],
                aiOptions: {
                    instruction: 'Do not fill this field if the text contains an invalid email address. A valid email is in the following format: email@example.com',
                },
            }
        ]
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-form ... >
        <dxi-form-item
            dataField="Email"
            editorType="dxTextBox"
            [aiOptions]="emailAIOptions"
        >
            <dxi-validation-rule type="email"></dxi-validation-rule>
        </dxi-form-item>
    </dx-form>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        emailAIOptions = { instruction: 'Do not fill this field if the text contains an invalid email address. A valid email is in the following format: email@example.com' };
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm ... >
            <DxItem
                data-field="Email"
                editor-type="dxTextBox"
                :ai-options="emailAIOptions"
                :validation-rules="emailValidationRules"
            />
        </DxForm>
    </template>

    <script setup lang="ts">
    import { DxForm, DxItem } from 'devextreme-vue/form';
    import type { ValidationRule } from 'devextreme-vue/common';
    // ...
    const emailValidationRules: ValidationRule[] = [{ type: 'email' }];
    const emailAIOptions = { instruction: 'Do not fill this field if the text contains an invalid email address. A valid email is in the following format: email@example.com' };
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import Form, {
        Item,
    } from 'devextreme-react/form';
    import type { ValidationRule } from 'devextreme-react/common';
    // ...

    const emailValidationRules: ValidationRule[] = [{ type: 'email' }];
    const emailAIOptions = { instruction: 'Do not fill this field if the text contains an invalid email address. A valid email is in the following format: email@example.com' };

    const App = () => {
        return (
            <Form ... >
                <Item
                    dataField="Email"
                    editorType="dxTextBox"
                    aiOptions={emailAIOptions}
                    validationRules={emailValidationRules}
                />
            </Form>
        );
    }

---
