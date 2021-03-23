The Form UI component can have a fixed number of columns in the layout...

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO"
            },
            colCount: 3
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [colCount]="3">
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            position: "CEO"
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
            :col-count="3">
            <DxSimpleItem data-field="firstName" />
            <DxSimpleItem data-field="lastName" />
            <DxSimpleItem data-field="position" />
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxSimpleItem } from 'devextreme-vue/form';

    export default {
        components: {
            DxForm,
            DxSimpleItem
        },
        data() {
            return {
                employee: {
                    firstName: 'John',
                    lastName: 'Heart',
                    position: 'CEO'
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

    import { Form, SimpleItem } from 'devextreme-react/form';

    class App extends React.Component {
        employee = {
            firstName: 'John',
            lastName: 'Heart',
            position: 'CEO'
        }

        render() {
            return (
                <Form
                    formData={this.employee}
                    colCount={3}>
                    <SimpleItem dataField="firstName" />
                    <SimpleItem dataField="lastName" />
                    <SimpleItem dataField="position" />
                </Form>
            );
        }
    }
    export default App;

---

... or it can vary the number of columns depending on the width of the container. To enable the latter mode, assign *"auto"* to the [colCount](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/colCount.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#colCount') property and specify the minimum column width using the [minColWidth](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/minColWidth.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#minColWidth') property. In this case, the maximum number of columns the layout can fit equals to `floor(container_width / minColWidth)`. Note that [groups](/concepts/05%20UI%20Components/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Groups/') and [tabs](/concepts/05%20UI%20Components/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Tabs/') can also have their own multi-column layouts inside.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO",
                hireDate: new Date(2012, 4, 13),
                city: "Los Angeles",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            colCount: "auto",
            minColWidth: 500,
            items: ["firstName", "lastName", {
                itemType: "tabbed",
                tabs: [{
                    title: "Info",
                    colCount: 3,
                    items: ["position", "hireDate", "city" ]
                }, {
                    title: "Contacts",
                    colCount: 2,
                    items: ["phone", "email"]
                }]
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        colCount="auto"
        [minColWidth]="500">
        <dxi-item dataField="firstName"></dxi-item>
        <dxi-item dataField="lastName"></dxi-item>
        <dxi-item itemType="tabbed">
            <dxi-tab
                title="Info"
                [colCount]="3"
                [items]="['position', 'hireDate', 'city' ]">
            </dxi-tab>
            <dxi-tab
                title="Contacts"
                [colCount]="2"
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
            position: "CEO",
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
        <DxForm 
            :form-data="employee"
            col-count="auto"
            :min-col-width="500">
            <DxSimpleItem dataField="firstName" />
            <DxSimpleItem dataField="lastName" />
            <DxTabbedItem>
                <DxTab
                    title="Info"
                    :col-count="3">
                    <DxSimpleItem dataField="position" />
                    <DxSimpleItem dataField="hireDate" />
                    <DxSimpleItem dataField="city" />
                </DxTab>
                <DxTab
                    title="Contacts"
                    :col-count="2">
                    <DxSimpleItem dataField="phone" />
                    <DxSimpleItem dataField="email" />
                </DxTab>
            </DxTabbedItem>
        </DxForm>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxTabbedItem, DxSimpleItem, DxTab } from 'devextreme-vue/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13),
        city: 'Los Angeles',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    export default {
        components: {
            DxForm, DxTabbedItem, DxSimpleItem, DxTab
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

    import { Form, SimpleItem, TabbedItem, Tab }  from 'devextreme-react/form';

    const employee = {
        firstName: 'John',
        lastName: 'Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13),
        city: 'Los Angeles',
        phone: '+1(213) 555-9392',
        email: 'jheart@dx-email.com'
    };

    class App extends React.Component {
        render() {
            return (
                <Form 
                    formData={employee}
                    colCount="auto"
                    minColWidth={500}>
                    <SimpleItem dataField="firstName" />
                    <SimpleItem dataField="lastName" />
                    <TabbedItem>
                        <Tab
                            title="Info"
                            colCount={3}>
                            <SimpleItem dataField="position" />
                            <SimpleItem dataField="hireDate" />
                            <SimpleItem dataField="city" />
                        </Tab>
                        <Tab
                            title="Contacts"
                            colCount={2}>
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
