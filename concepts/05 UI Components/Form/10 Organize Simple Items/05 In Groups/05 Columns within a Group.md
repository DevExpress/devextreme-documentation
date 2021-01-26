Items within a group can be organized in several columns. To specify the number of columns, use the [colCount](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem/colCount.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/#colCount') option. Note that the entire **Form** layout can also be organized in columns if the [colCount](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/colCount.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#colCount') property is declared on the root level. In this case, use the [colSpan](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem/colSpan.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/#colSpan') property to define how many general columns the group must span. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            // Splits the Form layout in two columns
            colCount: 2,
            items: [{
                itemType: "group",
                caption: "Personal Data",
                // Makes this group span both general columns
                colSpan: 2,
                // Organizes items inside this group in three columns
                colCount: 3,
                items: ["firstName", "lastName", "position"]
            }, {
                itemType: "group",
                caption: "Contacts",
                items: ["phone", "email"]
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [colCount]="2"> <!-- Splits the Form layout in two columns -->
        <dxi-item
            itemType="group"
            caption="Personal Data"
            [colSpan]="2" <!-- Makes this group span both general columns -->
            [colCount]="3"> <!-- Organizes items inside this group in three columns -->
                <dxi-item dataField="firstName"></dxi-item>
                <dxi-item dataField="lastName"></dxi-item>
                <dxi-item dataField="position"></dxi-item>
        </dxi-item>
        <dxi-item
            itemType="group"
            caption="Contacts">
                <dxi-item dataField="phone"></dxi-item>
                <dxi-item dataField="email"></dxi-item>
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            position: "CEO",
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
        <DxForm
            :form-data="employee"
            :col-count="2">
            <DxGroupItem
                caption="Personal Data"
                :col-span="2"
                :col-count="3">
                <DxSimpleItem data-field="firstName" />
                <DxSimpleItem data-field="lastName" />
                <DxSimpleItem data-field="position" />
            </DxGroupItem>
            <DxGroupItem caption="Contacts">
                <DxSimpleItem data-field="phone" />
                <DxSimpleItem data-field="email" />
            </DxGroupItem>
        </DxForm>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxGroupItem, DxSimpleItem } from 'devextreme-vue/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        position: 'CEO',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    export default {
        components: {
            DxForm, DxGroupItem, DxSimpleItem
        },
        data() {
            return {
                employee
            };
        },
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Form, GroupItem, SimpleItem } from 'devextreme-react/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        position: 'CEO',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    class App extends React.Component {
        render() {
            return (
                <Form
                    formData={employee}
                    colCount={2}>
                    <GroupItem
                        caption="Personal Data"
                        colSpan={2}
                        colCount={3}>
                        <SimpleItem dataField="firstName" />
                        <SimpleItem dataField="lastName" />
                        <SimpleItem dataField="position" />
                    </GroupItem>
                    <GroupItem caption="Contacts">
                        <SimpleItem dataField="phone" />
                        <SimpleItem dataField="email" />
                    </GroupItem>
                </Form>
            );
        }
    }

    export default App;

---
