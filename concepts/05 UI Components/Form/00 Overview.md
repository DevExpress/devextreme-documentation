The **Form** UI component represents fields of a data object as a collection of label-editor pairs. These pairs can be arranged in several groups, tabs and columns.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Overview/"
}

The following code adds the **Form** UI component to your page. The simplest configuration of this UI component includes only a data object. 

---
##### jQuery

    <!--HTML-->
    <div id="formContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO",
                officeNo: 901,
                birthDate: new Date(1964, 3, 15),
                hireDate: new Date(2012, 4, 13),
                city: "Los Angeles",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            position: "CEO",
            officeNo: 901,
            birthDate: new Date(1964, 3, 15),
            hireDate: new Date(2012, 4, 13),
            city: "Los Angeles",
            phone: "+1(213) 555-9392",
            email: "jheart@dx-email.com"
        }
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
        <DxForm :form-data="employee" />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxForm from 'devextreme-vue/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        position: 'CEO',
        officeNo: 901,
        birthDate: new Date(1964, 3, 15),
        hireDate: new Date(2012, 4, 13),
        city: 'Los Angeles',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    export default {
        components: {
            DxForm
        },
        data() {
            return {
                employee
            };
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Form from 'devextreme-react/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        position: 'CEO',
        officeNo: 901,
        birthDate: new Date(1964, 3, 15),
        hireDate: new Date(2012, 4, 13),
        city: 'Los Angeles',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    class App extends React.Component {
        render() {
            return (
                <Form formData={employee} />
            );
        }
    }

    export default App;

---

The configuration above creates one label-editor pair per each field of the data object. Such a pair is called ["simple item"](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items '/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/''). Simple items can be organized in [groups](/concepts/05%20UI%20Components/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/concepts/05%20UI%20Components/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Groups/''), [tabs](/concepts/05%20UI%20Components/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Tabs/') and [columns](/concepts/05%20UI%20Components/Form/10%20Organize%20Simple%20Items/15%20In%20Columns '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Columns/').

#####See Also#####
#include common-link-configurewidget
- [Form - Configure Simple Items](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items '/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/'')
- [Form - Organize Simple Items](/concepts/05%20UI%20Components/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/concepts/05%20UI%20Components/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Groups/'')
- [Form - Configure Item Labels](/concepts/05%20UI%20Components/Form/15%20Configure%20Item%20Labels/05%20Location%20and%20Alignment '/Documentation/Guide/UI_Components/Form/Configure_Item_Labels/Location_and_Alignment/')
- [Form - Change Options at Runtime](/Documentation/Guide/UI_Components/Form/Change_Options_at_Runtime/)
- [Form - Handle the Value Change Event](/concepts/05%20UI%20Components/Form/25%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/UI_Components/Form/Handle_the_Value_Change_Event/')
- [Form - Update Form Data Using the API](/concepts/05%20UI%20Components/Form/30%20Update%20Form%20Data%20Using%20the%20API.md '/Documentation/Guide/UI_Components/Form/Update_Form_Data_Using_the_API/')
- [Form - Generate a Data Object from Form Items](/concepts/05%20UI%20Components/Form/35%20Generate%20a%20Data%20Object%20from%20Form%20Items.md '/Documentation/Guide/UI_Components/Form/Generate_a_Data_Object_from_Form_Items/')
- [Form - Validate and Submit the Form](/concepts/05%20UI%20Components/Form/40%20Validate%20and%20Submit%20the%20Form.md '/Documentation/Guide/UI_Components/Form/Validate_and_Submit_the_Form/')
- [Form API Reference](/api-reference/10%20UI%20Components/dxForm '/Documentation/ApiReference/UI_Components/dxForm/')

[tags]dxform, form, overview, form data
