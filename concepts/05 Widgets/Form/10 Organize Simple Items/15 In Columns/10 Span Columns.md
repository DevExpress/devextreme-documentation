If an item should span more than one column, assign the required number to the [colSpan](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/colSpan.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#colSpan') option. Groups and tabs can also have individual **colSpan** values. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                notes: "John has been in the Audio/Video industry since 1990.",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            colCount: 2,
            items: ["firstName", "lastName", {
                dataField: "notes",
                colSpan: 2
            }, {
                itemType: "tabbed",
                colSpan: 2,
                tabs: [{
                    title: "Contacts",
                    items: ["phone", "email"]
                }]
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [colCount]="2">
        <dxi-item dataField="firstName"></dxi-item>
        <dxi-item dataField="lastName"></dxi-item>
        <dxi-item dataField="notes" [colSpan]="2"></dxi-item>
        <dxi-item itemType="tabbed" [colSpan]="2">
            <dxi-tab
                title="Contacts"
                [items]="['phone', 'email']">
            </dxi-tab>
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            notes: "John has been in the Audio/Video industry since 1990.",
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
            <dx-item data-field="firstName"></dx-item>
            <dx-item data-field="lastName"></dx-item>
            <dx-item data-field="notes" :col-span="2"></dx-item>
            <dx-item item-type="tabbed" :col-span="2">
                <dx-tab
                    title="Contacts">
                        <dx-item data-field="phone"></dx-item>
                        <dx-item data-field="email"></dx-item>                    
                </dx-tab>
            </dx-item>
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxForm, {
        DxItem, DxTab
    } from 'devextreme-vue/form';

    export default {
        components: {
            DxForm,
            DxItem, 
            DxTab
        },
        data() {
            return {
                employee: {
                    firstName: 'John',
                    lastName: 'Heart',
                    notes: 'John has been in the Audio/Video industry since 1990.',
                    phone: '+1(213) 555-9392',
                    email: 'jheart@dx-email.com'
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Form, {
        Item, Tab
    } from 'devextreme-react/form';


    class App extends React.Component {
        employee = {
            firstName: 'John',
            lastName: 'Heart',
            notes: 'John has been in the Audio/Video industry since 1990.',
            phone: '+1(213) 555-9392',
            email: 'jheart@dx-email.com'
        }

        render() {
            return (
                <Form
                    formData={this.employee}
                    colCount={2}>
                    <Item dataField="firstName"></Item>
                    <Item dataField="lastName"></Item>
                    <Item dataField="notes" colSpan={2}></Item>
                    <Item itemType="tabbed" colSpan={2}>
                        <Tab
                            title="Contacts">
                                <Item dataField="phone"></Item>
                                <Item dataField="email"></Item>                    
                        </Tab>
                    </Item>
                </Form>
            );
        }
    }
    export default App;

---