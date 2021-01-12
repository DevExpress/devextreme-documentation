If an item should span more than one column, assign the required number to the [colSpan](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/colSpan.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#colSpan') property. Groups and tabs can also have individual **colSpan** values. 

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
            <DxSimpleItem data-field="firstName" />
            <DxSimpleItem data-field="lastName" />
            <DxSimpleItem data-field="notes" :col-span="2" />
            <DxTabbedItem :col-span="2">
                <DxTab title="Contacts">
                    <DxSimpleItem data-field="phone" />
                    <DxSimpleItem data-field="email" />
                </DxTab>
            </DxTabbedItem>
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxSimpleItem, DxTabbedItem, DxTab } from 'devextreme-vue/form';

    export default {
        components: {
            DxForm, DxSimpleItem, DxTabbedItem, DxTab
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

    import { Form, SimpleItem, TabbedItem, Tab } from 'devextreme-react/form';

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
                    <SimpleItem dataField="firstName" />
                    <SimpleItem dataField="lastName" />
                    <SimpleItem dataField="notes" colSpan={2} />
                    <TabbedItem colSpan={2}>
                        <Tab title="Contacts">
                            <SimpleItem dataField="phone" />
                            <SimpleItem dataField="email" />
                        </Tab>
                    </TabbedItem>
                </Form>
            );
        }
    }
    export default App;

---
