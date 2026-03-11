---
id: dxForm.reset(editorsData)
---
---
##### shortDescription
Resets editors to specified or initial values.

##### param(editorsData): Object
New editor values.

---
Specify the **editorsData** parameter following the [formData](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/formData.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#formData') structure to assign new values to Form editors. To reset editors to initial values (set on editor initialization), omit corresponding **formData** fields in **editorsData**. To reset all editors to initial values, call this function witout the **editorsData** parameter.

---

##### jQuery

    <!-- tab: index.js -->
    const form = $('#form').dxForm({
        // ...
    }).dxForm('instance');

    function resetForm() {
        form.reset({
            'name': 'John Smith',
            'email': 'johnsmith@example.com',
        });
    };

##### Angular

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import { DxFormComponent } from 'devextreme-angular';

    // ...
    export class AppComponent {
        @ViewChild('formRef', { static: false }) form!: DxFormComponent;

        resetForm() {
            this.form.instance.reset({
                'name': 'John Smith',
                'email': 'johnsmith@example.com',
            });
        };
    };

    <!-- tab: app.component.html -->
    <dx-form ... 
        #formRef
    >
        <!-- ... -->
    </dx-form>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm ...
            :ref="formRef"
        >
            <!-- ... -->
        </DxForm>
    </template>

    <script>
    import { ref } from 'vue';
    import { DxForm } from 'devextreme-vue/form';

    const formRef = ref(null);
    
    function resetForm() {
        formRef.value.instance.reset({
            'name': 'John Smith',
            'email': 'johnsmith@example.com',
        });
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useRef, useCallback } from 'react';
    import { Form } from 'devextreme-react/form';

    function App() {
        const formRef = useRef(null);

        const resetForm = useCallback(() => {
            formRef.current.instance().reset({
                'name': 'John Smith',
                'email': 'johnsmith@example.com',
            });
        }, []);

        return (
            <Form ...
                ref={formRef}
            >
                <!-- ... -->
            </Form>
        );
    };

---

[note]

- Form updates initial editor values on each [repaint](/api-reference/10%20UI%20Components/Widget/3%20Methods/repaint().md '/Documentation/ApiReference/UI_Components/dxForm/Methods/#repaint'), including on component size or layout changes. To reset editors to original values (set in formData) after a repaint, pass a **formData** clone ([structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone)) as the **editorsData** parameter.
- This method does not support nested **editorsData** objects. If your data includes nested objects, call the [option()](/api-reference/10%20UI%20Components/Component/3%20Methods/option(optionName_optionValue).md '/Documentation/ApiReference/UI_Components/dxForm/Methods/#optionoptionName_optionValue') method instead:

    ---

    ##### jQuery

        <!-- tab: index.js -->
        // ...

        form.option("formData", formDataObject);

    ##### Angular

        <!-- tab: app.component.ts -->
        // ...
        
        this.form.instance.option("formData", formDataObject);

    ##### Vue

        <!-- tab: App.vue -->
        // ...

        formRef.value.instance.option("formData", formDataObject);

    ##### React

        <!-- tab: App.tsx -->
        // ...
        
        formRef.current.instance().option("formData", formDataObject);

    ---

- This method resets [isDirty](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/isDirty.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#isDirty') to `false`.

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Validation/"
}

#####See Also#####
- [clear()](/api-reference/10%20UI%20Components/dxForm/3%20Methods/clear().md '/Documentation/ApiReference/UI_Components/dxForm/Methods/#clear')