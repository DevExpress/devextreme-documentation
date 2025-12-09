---
id: dxForm.Options.colCountByScreen
type: Object
inherits: ColCountResponsible
default: undefined
---
---
##### shortDescription
Specifies the number of Form columns for different screen sizes.

---

The following code snippet specifies 2 columns for the "xs" screen size:

---
##### jQuery

    <!-- tab: index.js -->
    $("#form-container").dxForm({
        colCountByScreen: {
            xs: 2
        }
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-form ... >
        <dxo-col-count-by-screen [xs]="2"></dxo-col-count-by-screen>
    </dx-form>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm ... >
            <DxColCountByScreen :xs="2" />
        </DxForm>
    </template>
    <script setup lang="ts">
    import { DxForm, DxColCountByScreen } from 'devextreme-vue/form';

    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import { Form, ColCountByScreen } from 'devextreme-react/form';

    function App() {
        return (
            <Form ... >
                <ColCountByScreen xs={2} />
            </Form>
        );
    };

    export default App;

---

[note] Changing the column count [repaints](/Documentation/ApiReference/UI_Components/dxForm/Methods/#repaint) the Form. Repainting resets item states and reinitializes Form items and item templates.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/ColumnsAdaptability/"
}
