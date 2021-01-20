---
id: dxForm.Options.colCount
acceptValues: 'auto'
type: Number | String
default: 1
---
---
##### shortDescription
The count of columns in the form layout.

---
[note]

For extra small screens, this property always equals *1* to make the UI component adaptive. To override this logic, specify the [colCountByScreen](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/colCountByScreen '/Documentation/ApiReference/UI_Components/dxForm/Configuration/colCountByScreen/') property.

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

[/note]

#include common-ref-enum with {
    enum: "`Mode`",
    values: "`Auto`"
}

#####See Also#####
- [Organize Simple Items In Columns](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/15%20In%20Columns/05%20Fixed%20and%20Floating%20Number%20of%20Columns.md '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Columns/#Fixed_and_Floating_Number_of_Columns')
