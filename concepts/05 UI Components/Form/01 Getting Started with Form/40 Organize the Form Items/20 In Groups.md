You can use groups to organize the data entry form. To add a group, create a [group item](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/GroupItem '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/') and nest other items in it as shown in the code below. Items of any type can be nested, including other group items. You can configure each group's layout separately. 

The following code creates two groups, each occupies a separate column. The resulting layout looks as follows:

![DevExtreme Form: Grouped Items](/images/UiWidgets/form-getting-started-groups.png)

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#form").dxForm({
            formData: {
                name: "John Heart",
                position: "CEO",
                hireDate: new Date(2012, 4, 13),
                officeNumber: 901,
                phone: "+1(213) 555-9392",
                skype: "jheart_DX_skype",
                email: "jheart@dx-email.com"
            },
            colCount: 2,
            items: [{
                itemType: "group",
                caption: "Personal Information",
                items: ["name", "position", "hireDate", "officeNumber"]
            }, {
                itemType: "group",
                caption: "Contacts",
                items: ["phone", "skype", "email"]
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-form
        [formData]="employee"
        [colCount]="2">
        <dxi-item 
            itemType="group" 
            caption="Personal Information">
            <dxi-item dataField="name"></dxi-item>
            <dxi-item dataField="position"></dxi-item>
            <dxi-item dataField="hireDate"></dxi-item>
            <dxi-item dataField="officeNumber"></dxi-item>
        </dxi-item>
        <dxi-item itemType="group" caption="Contacts">
            <dxi-item dataField="phone"></dxi-item>
            <dxi-item dataField="skype"></dxi-item>
            <dxi-item dataField="email"></dxi-item>
        </dx-item>
    </dx-form>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    #include angular-component-decorator
    export class AppComponent {
        employee = {
            name: 'John Heart',
            position: 'CEO',
            hireDate: new Date(2012, 4, 13),
            officeNumber: 901,
            phone: '+1(213) 555-9392',
            skype: 'jheart_DX_skype',
            email: 'jheart@dx-email.com'
        }
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm 
            :form-data="employee"
            :col-count="2">
            <DxGroupItem
                caption="Personal Information">
                <DxSimpleItem data-field="name"/>
                <DxSimpleItem data-field="position"/>
                <DxSimpleItem data-field="hireDate"/>
                <DxSimpleItem data-field="officeNumber"/>
            </DxGroupItem>
            <DxGroupItem caption="Contacts">
                <DxSimpleItem data-field="phone"/>
                <DxSimpleItem data-field="skype"/>
                <DxSimpleItem data-field="email"/>
            </DxGroupItem>
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, DxSimpleItem, DxGroupItem } from 'devextreme-vue/form';
    
    const employee = {
        name: 'John Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        phone: '+1(213) 555-9392',
        skype: 'jheart_DX_skype',
        email: 'jheart@dx-email.com'
    };

    export default {
        components: {
            DxForm,
            DxSimpleItem,
            DxGroupItem
        },
        data: {
            return: {
                employee
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        Form,
        SimpleItem,
        GroupItem
    } from 'devextreme-react/form';

    const employee = {
        name: 'John Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        phone: '+1(213) 555-9392',
        skype: 'jheart_DX_skype',
        email: 'jheart@dx-email.com'
    };

    const App = () => {
        return (
            <Form
                formData={employee}
                colCount={2}>
                <GroupItem 
                    caption="Personal Information"
                    colCount={2}>
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="position" />
                    <SimpleItem dataField="hireDate" />
                    <SimpleItem dataField="officeNumber" />
                </GroupItem>
                <GroupItem caption="Contacts">
                    <SimpleItem dataField="phone" />
                    <SimpleItem dataField="skype" />
                    <SimpleItem dataField="email" />
                </GroupItem>
            </Form>
        );
    }

    export default App;

---
