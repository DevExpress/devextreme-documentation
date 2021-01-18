To divide items into groups, declare items with the "group" [itemType](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/#itemType) in the [items[]](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items) array. A group can contain [simple items](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/), other groups, [tabs](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/) or [empty items](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/EmptyItem/). To put an item into a group, declare this item inside the group as shown in the example below. You can configure each group's layout separately. 

The following code creates two groups, each group occupies a separate column. The resulting layout looks as follows:

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

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
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
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxFormModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxFormModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

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
