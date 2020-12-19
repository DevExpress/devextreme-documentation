A tab can contain [simple items](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/), other tabs, [groups](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/) or [empty items](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/EmptyItem/). To create a tabbed item, assign "tabbed" to the [itemType](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/#itemType) option.

The **Form** uses the [TabPanel](/Documentation/ApiReference/UI_Widgets/dxTabPanel/) component to display tabs. You can specify the tab panel's settings in the [tabPanelOptions](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/#tabPanelOptions) object.

The following example shows a **Form** with two groups. A tabbed item is nested in the `Personal Data` group. We also configure the tab panel's [height](/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#height) property in the **tabPanelOptions** object:


---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#formContainer").dxForm({
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
                caption: "Employee",
                items: ["name"]
            }, {
                itemType: "group",
                caption: "Personal Data",
                items: [{
                    itemType: "tabbed",
                    tabPanelOptions: {
                        height: "55px"
                    },
                    tabs: [{
                        title: "Profile",
                        items: ["position", "hireDate", "officeNumber"]
                    }, {
                        title: "Contacts",
                        items: ["phone", "skype", "email"]
                    }]
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
            caption="Employee">
            <dxi-item dataField="name"></dxi-item>
        </dxi-item>
        <dxi-item itemType="group" caption="Personal Data">
            <dxi-item itemType="tabbed" [tabPanelOptions]="personalDataOptions">
                <dxi-tab title="Profile">
                    <dxi-item dataField="position"></dxi-item>
                    <dxi-item dataField="hireDate"></dxi-item>
                    <dxi-item dataField="officeNumber"></dxi-item>
                </dxi-tab>
                <dxi-tab title="Contacts">
                	<dxi-item dataField="skype"></dxi-item>
                    <dxi-item dataField="phone"></dxi-item>
                    <dxi-item dataField="email"></dxi-item>
                </dxi-tab>
            </dxi-item>
        </dxi-item>
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
            name: "John Heart",
            position: "CEO",
            hireDate: new Date(2012, 4, 13),
            officeNumber: 901,
            phone: "+1(213) 555-9392",
            skype: "jheart_DX_skype",
            email: "jheart@dx-email.com"
        }

        personalDataOptions = {
            height: "55px"
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
            <DxGroupItem caption="Employee">
                <DxSimpleItem data-field="name"/>
            </DxGroupItem>
            <DxGroupItem caption="Personal Data">
                <DxTabbedItem :tab-panel-options="personalDataOptions">
                    <DxTab title="Profile">
                        <DxSimpleItem data-field="position"/>
                        <DxSimpleItem dataField="hireDate"/>
                        <DxSimpleItem dataField="officeNumber"/>
                    </DxTab>
                    <DxTab title="Contacts">
                        <DxSimpleItem dataField="skype"/>
                        <DxSimpleItem dataField="phone"/>
                        <DxSimpleItem dataField="email"/>
                    </DxTab>
                </DxTabbedItem>
            </DxGroupItem>
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxForm, 
        DxSimpleItem, 
        DxGroupItem, 
        DxTabbedItem,
        DxTab 
    } from 'devextreme-vue/form';
    
    let employee = {
        name: "John Heart",
        position: "CEO",
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        phone: "+1(213) 555-9392",
        skype: "jheart_DX_skype",
        email: "jheart@dx-email.com"
    };

    const personalDataOptions = {
        height: "55px"
    };

    export default {
        components: {
            DxForm,
            DxSimpleItem,
            DxGroupItem,
            DxTabbedItem
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
        GroupItem,
        TabbedItem,
        Tab
    } from 'devextreme-react/form';

    let employee = {
        name: "John Heart",
        position: "CEO",
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        phone: "+1(213) 555-9392",
        skype: "jheart_DX_skype",
        email: "jheart@dx-email.com"
    };

    const personalDataOptions = {
        height: "55px"
    };

    const App = () => {
        return (
            <Form
                formData={employee}
                colCount={2}>
                <GroupItem caption="Employee">
                    <SimpleItem dataField="name" />
                </GroupItem>
                <GroupItem caption="Personal Data">
                    <TabbedItem tabPanelOptions={personalDataOptions}>
                        <Tab title="Profile">
                            <SimpleItem dataField="position" />
                            <SimpleItem dataField="hireDate" />
                            <SimpleItem dataField="officeNumber" />
                        </Tab>
                        <Tab title="Contacts">
                            <SimpleItem dataField="phone" />
                            <SimpleItem dataField="skype" />
                            <SimpleItem dataField="email" />
                        </Tab>
                    </TabbedItem>
                </GroupItem>
            </Form>
        );
    }

    export default App;

---

