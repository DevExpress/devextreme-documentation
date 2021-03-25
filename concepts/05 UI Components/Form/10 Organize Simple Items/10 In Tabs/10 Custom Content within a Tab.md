The Form UI component allows you to specify custom templates for an individual tab and its content. For this purpose, assign callback functions to the [tabTemplate](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/TabbedItem/tabs/tabTemplate.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/tabs/#tabTemplate') and [template](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/TabbedItem/tabs/template.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/tabs/#template') properties, respectively. With Angular, you can declare templates using the [dxTemplate](/api-reference/10%20UI%20Components/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Components/Markup_Components/dxTemplate/') component.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
                birthDate: new Date(1964, 3, 15),
                position: "CEO",
                city: "Los Angeles",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            items: ["name", {
                itemType: "tabbed",
                tabs: [{
                    title: "Data Protection Policy",
                    tabTemplate: function (itemData, itemIndex, itemElement) {
                        itemElement.append("<p style='color: red'>" + itemData.title);
                    },
                    template: function (itemData, itemIndex, itemElement) {
                        itemElement.append("<p><i>By filling out this form," 
                                            + " you agree to the terms of the" 
                                            + "<a href='#'>Data Protection Policy</a></i></p>");
                    }
                }, {
                    title: "Info",
                    items: ["position", "birthDate", "city"]
                }, {
                    title: "Contacts",
                    items: [ "phone", "email"]
                }]
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item dataField="name"></dxi-item>
        <dxi-item itemType="tabbed" [colSpan]="2">
            <dxi-tab
                title="Data Protection Policy"
                tabTemplate="tab"
                [template]="'tabContent'">
            </dxi-tab>
            <dxi-tab title="Info">
                <dxi-item dataField="position"></dxi-item>
                <dxi-item dataField="birthDate"></dxi-item>
                <dxi-item dataField="city"></dxi-item>
            </dxi-tab>
            <dxi-tab title="Contacts">
                <dxi-item dataField="phone"></dxi-item>
                <dxi-item dataField="email"></dxi-item>
            </dxi-tab>
        </dxi-item>
        <div *dxTemplate="let tabData of 'tab'; let i = index">
            <p style="color:red">{{tabData.title}}</p>
        </div>
        <div *dxTemplate="let data of 'tabContent'">
            <p>
                <i>By filling out this form, you agree
                   to the terms of the <a href='#'>Data Protection Policy</a></i>
            </p>
        </div>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            name: "John Heart",
            birthDate: new Date(1964, 3, 15),
            position: "CEO",
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
        <DxForm :form-data="employee">
            <template #tab="{ data }">
                <p style="color:red">{{ data.title }}</p>
            </template>
            <template #tabContent="{ data }">
                <p>
                    <i>By filling out this form, you agree
                    to the terms of the <a href='#'>Data Protection Policy</a></i>
                </p>
            </template>
            <DxSimpleItem data-field="name" />
            <DxTabbedItem :col-span="2">
                <DxTab
                    title="Data Protection Policy"
                    tab-template="tab"
                    template="tabContent" />
                <DxTab title="Info">
                    <DxSimpleItem data-field="position" />
                    <DxSimpleItem data-field="birthDate" />
                    <DxSimpleItem data-field="city" />
                </DxTab>
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

    const employee = {
        name: 'John Heart',
        birthDate: new Date(1964, 3, 15),
        position: 'CEO',
        city: 'Los Angeles',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    export default {
        components: {
            DxForm, DxSimpleItem, DxTabbedItem, DxTab
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

    import { Form, SimpleItem, TabbedItem, Tab } from 'devextreme-react/form';

    const employee = {
        name: 'John Heart',
        birthDate: new Date(1964, 3, 15),
        position: 'CEO',
        city: 'Los Angeles',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    class App extends React.Component {
        render() {
            return (
                <Form formData={employee}>
                    <SimpleItem dataField="name" />
                    <TabbedItem colSpan={2}>
                        <Tab
                            title="Data Protection Policy"
                            tabRender={tabRender}
                            render={tabContentRender} />
                        <Tab title="Info">
                            <SimpleItem dataField="position" />
                            <SimpleItem dataField="birthDate" />
                            <SimpleItem dataField="city" />
                        </Tab>
                        <Tab title="Contacts">
                            <SimpleItem dataField="phone" />
                            <SimpleItem dataField="email" />
                        </Tab>
                    </TabbedItem>
                </Form>
            );
        }
    }

    function tabRender(data) {
        return (
            <p style={{color:'red'}}>{ data.title }</p>
        );
    }

    function tabContentRender(data) {
        return (
            <p>
                <i>By filling out this form, you agree
                to the terms of the <a href='#'>Data Protection Policy</a></i>
            </p>
        );
    }    

    export default App;

---

#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')
