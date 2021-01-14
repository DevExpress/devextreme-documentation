The Form uses the [TabPanel](/Documentation/ApiReference/UI_Widgets/dxTabPanel/) component to display tabs. You can specify the tab panel's settings in the [tabPanelOptions](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/#tabPanelOptions) object. A tab can contain any item type.

The following example shows a Form with two groups. A tabbed item is nested in the `Personal Information` group. We also configure the tab panel's [height](/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#height) property in the **tabPanelOptions** object:


---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#form").dxForm({
            formData: {
                name: 'John Heart',
                position: 'CEO',
                hireDate: new Date(2012, 4, 13),
                officeNumber: 901,
                phone: '+1(213) 555-9392',
                skype: 'jheart_DX_skype',
                email: 'jheart@dx-email.com',
                notes: 'John has been in the Audio/Video industry since 1990.'
            },
            items: [{
                itemType: "group",
                colCount: 2,
                items: [{
                    itemType: "group",
                    caption: "Employee",
                    items: ["name", "position", "hireDate", "officeNumber"]
                }, {
                    itemType: "group",
                    caption: "Personal Information",
                    items: [{
                        itemType: "tabbed",
                        tabPanelOptions: {
                            height: 280
                        },
                        tabs: [{
                            title: "Contacts",
                            items: ["skype", "phone",  "email"]
                        }, {
                            title: "Note",
                            items: ["notes"]
                        }]
                    }]
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
            <dxi-item dataField="position"></dxi-item>
            <dxi-item dataField="hireDate"></dxi-item>
            <dxi-item dataField="officeNumber"></dxi-item>
        </dxi-item>
        <dxi-item itemType="group" caption="Personal Information">
            <dxi-item itemType="tabbed">
                <dxo-tab-panel-options [height]="280">
                </dxo-tab-panel-options>
                <dxi-tab title="Contacts">
                	<dxi-item dataField="skype"></dxi-item>
                    <dxi-item dataField="phone"></dxi-item>
                    <dxi-item dataField="email"></dxi-item>
                </dxi-tab>
                <dxi-tab title="Note">
                    <dxi-item dataField="notes"></dxi-item>
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
            name: 'John Heart',
            position: 'CEO',
            hireDate: new Date(2012, 4, 13),
            officeNumber: 901,
            phone: '+1(213) 555-9392',
            skype: 'jheart_DX_skype',
            email: 'jheart@dx-email.com',
            notes: 'John has been in the Audio/Video industry since 1990.'
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
                <DxSimpleItem data-field="position"/>
                <DxSimpleItem dataField="hireDate"/>
                <DxSimpleItem dataField="officeNumber"/>
            </DxGroupItem>
            <DxGroupItem caption="Personal Information">
                <DxTabbedItem>
                    <DxTabPanelOptions :height="280"/>
                    <DxTab title="Contacts">
                        <DxSimpleItem dataField="skype"/>
                        <DxSimpleItem dataField="phone"/>
                        <DxSimpleItem dataField="email"/>
                    </DxTab>
                    <DxTab title="Note">
                        <DxSimpleItem data-field="notes"/>
                    </DxTab>
                </DxTabbedItem>
            </DxGroupItem>
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { 
        DxForm, 
        DxSimpleItem, 
        DxGroupItem, 
        DxTabbedItem,
        DxTab,
        DxTabPanelOptions 
    } from 'devextreme-vue/form';
    
    const employee = {
        name: 'John Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        phone: '+1(213) 555-9392',
        skype: 'jheart_DX_skype',
        email: 'jheart@dx-email.com',
        notes: 'John has been in the Audio/Video industry since 1990.'
    };

    export default {
        components: {
            DxForm,
            DxSimpleItem,
            DxGroupItem,
            DxTabbedItem,
            DxTabPanelOptions
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
        Tab,
        TabPanelOptions
    } from 'devextreme-react/form';

    const employee = {
        name: 'John Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        phone: '+1(213) 555-9392',
        skype: 'jheart_DX_skype',
        email: 'jheart@dx-email.com',
        notes: 'John has been in the Audio/Video industry since 1990.'
    };

    const App = () => {
        return (
            <Form
                formData={employee}
                colCount={2}>
                <GroupItem caption="Employee">
                    <SimpleItem dataField="name" />
                    <SimpleItem dataField="position" />
                    <SimpleItem dataField="hireDate" />
                    <SimpleItem dataField="officeNumber" />
                </GroupItem>
                <GroupItem caption="Personal Information">
                    <TabbedItem>
                        <TabPanelOptions height="280" />
                        <Tab title="Contacts">
                            <SimpleItem dataField="phone" />
                            <SimpleItem dataField="skype" />
                            <SimpleItem dataField="email" />
                        </Tab>
                        <Tab title="Note">
                            <SimpleItem dataField="notes" />
                        </Tab>
                    </TabbedItem>
                </GroupItem>
            </Form>
        );
    }

    export default App;

---

If you run this code, you will get the Form that looks like the following one:

![DevExtreme Form: Tabbed Items](/images/UiWidgets/form-getting-started-tabs.png)