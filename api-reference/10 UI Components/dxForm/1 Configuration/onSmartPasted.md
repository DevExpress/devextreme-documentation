---
id: dxForm.Options.onSmartPasted
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after an AI service populates the Form.

##### param(e): ui/form:SmartPastedEvent
Information about the event that caused the function's execution.

##### field(e.aiResult): Object
Smart Paste results. This data populates the Form fields.

##### field(e.component): {WidgetName}
UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

---
The following code snippet displays a notification that indicates whether Smart Paste is successful:

---
##### jQuery

    <!-- tab: index.js -->
    $("#form").dxForm({
        // ...
        onSmartPasted(e) {
            if (Object.keys(e.aiResult).length !== 0) {
                DevExpress.ui.notify("Smart Paste finished successfully");
            }
            else {
                DevExpress.ui.notify("No data to be pasted");
            }
        },
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { DxFormTypes } from "devextreme-angular/ui/form";
    import notify from 'devextreme/ui/notify';
    // ...
    export class AppComponent {
        onSmartPasted(e: DxFormTypes.SmartPastedEvent) {
            if (Object.keys(e.aiResult).length !== 0) {
                notify("Smart Paste finished successfully");
            }
            else {
                notify("No data to be pasted");
            }
        }
    }

    <!-- tab: app.component.html -->
    <dx-form (onSmartPasted)="onSmartPasted($event)" ... ></dx-form>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm @smart-pasted="onSmartPasted" ... />
    </template>

    <script setup lang="ts">
    import {
        DxForm,
        DxFormTypes,
    } from 'devextreme-vue/form';
    import notify from 'devextreme/ui/notify';
    // ...

    const onSmartPasted = (e: DxFormTypes.SmartPastedEvent) => {
        if (Object.keys(e.aiResult).length !== 0) {
            notify("Smart Paste finished successfully");
        }
        else {
            notify("No data to be pasted");
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

    const onSmartPasted = (e: FormTypes.SmartPastedEvent) => {
        if (Object.keys(e.aiResult).length !== 0) {
            notify("Smart Paste finished successfully");
        }
        else {
            notify("No data to be pasted");
        }
    };

    const App = () => {
        return (
            <Form onSmartPasted={onSmartPasted} ... />
        );
    }

---
