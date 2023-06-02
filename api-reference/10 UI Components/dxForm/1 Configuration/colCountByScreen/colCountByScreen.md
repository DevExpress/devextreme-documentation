---
id: dxForm.Options.colCountByScreen
type: Object
inherits: ColCountResponsible
default: undefined
---
---
##### shortDescription
Specifies dependency between the screen factor and the count of columns in the form layout.

---

The following code sample illustrates how to set this property:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            // ...
            colCountByScreen: {
                xs: 2
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-form ... >
        <dxo-col-count-by-screen [xs]="2"></dxo-col-count-by-screen>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm ...>
            <DxColCountByScreen :xs="2"/>
        </DxForm>
    </template>
    <script>
    import DxForm, { DxColCountByScreen } from 'devextreme-vue/form';

    export default {
        components: {
            DxForm,
            DxColCountByScreen
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Form, { ColCountByScreen } from 'devextreme-react/form';

    const App = () => {
        return (
            <Form ...>
                <ColCountByScreen xs={2} />
            </Form>
        );
    };

    export default App;

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/ColumnsAdaptability/"
}