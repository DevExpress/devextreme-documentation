---
id: dxForm.Options.onSmartPasting
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before an AI service populates the Form.

##### param(e): ui/form:SmartPastingEvent
Information about the event that caused the function's execution.

##### field(e.aiResult): Object
Smart Paste results. This data populates the Form fields.

##### field(e.cancel): Boolean | Promise<Boolean>
`true`, a Promise resolved with `true`, or a rejected Promise stops Smart Pasting.       
`false` or a Promise resolved with `false` or `undefined` continues Smart Pasting.

##### field(e.component): {WidgetName}
UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

---
The following code snippet cancels Smart Paste operation when a ZIP code is not present in the `aiResult`:

---
##### jQuery

    <!-- tab: index.js -->
    $("#form").dxForm({
        // ...
        onSmartPasting(e) {
            if (!e.aiResult.ZIP) {
                e.cancel = true;
                DevExpress.ui.notify("Could not paste: the ZIP address was not recognized");
            }
        },
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { DxFormTypes } from "devextreme-angular/ui/form";
    import notify from 'devextreme/ui/notify';
    // ...
    export class AppComponent {
        onSmartPasting(e: DxFormTypes.SmartPastingEvent) {
            if (!e.aiResult.ZIP) {
                e.cancel = true;
                DevExpress.ui.notify("Could not paste: the ZIP address was not recognized");
            }
        }
    }

    <!-- tab: app.component.html -->
    <dx-form (onSmartPasting)="onSmartPasting($event)" ... ></dx-form>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm @smart-pasting="onSmartPasting" ... />
    </template>

    <script setup lang="ts">
    import {
        DxForm,
        DxFormTypes,
    } from 'devextreme-vue/form';
    import notify from 'devextreme/ui/notify';
    // ...

    const onSmartPasting = (e: DxFormTypes.SmartPastingEvent) => {
        if (!e.aiResult.ZIP) {
            e.cancel = true;
            DevExpress.ui.notify("Could not paste: the ZIP address was not recognized");
        }
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import Form, {
        FormTypes,
    } from 'devextreme-react/form';
    import notify from 'devextreme/ui/notify';
    // ...

    const onSmartPasting = (e: FormTypes.SmartPastingEvent) => {
        if (!e.aiResult.ZIP) {
            e.cancel = true;
            DevExpress.ui.notify("Could not paste: the ZIP address was not recognized");
        }
    };

    const App = () => {
        return (
            <Form onSmartPasting={onSmartPasting} ... />
        );
    }

---
