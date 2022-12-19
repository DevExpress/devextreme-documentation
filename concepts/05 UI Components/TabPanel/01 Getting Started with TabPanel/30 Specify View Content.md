You can use the following properties to specify view content:       

- [itemTemplate](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#itemTemplate')     
Specifies a custom template for all views.

- **items[]**.[template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#template')        
Specifies a custom template for an individual view. This property overrides **itemTemplate**.

- **items[]**.[text](/api-reference/_hidden/CollectionWidgetItem/text.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#text')        
Specifies text displayed in an individual view. 

- [noDataText](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/noDataText.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#noDataText')        
Specifies text or markup to display when views do not have content.

This tutorial demonstrates the use of the **items[]**.**template** property. This property allows you to specify different content for individual views. In the code below, the views contain the [Form](/api-reference/10%20UI%20Components/dxForm '/Documentation/ApiReference/UI_Components/dxForm/'), [TextArea](/api-reference/10%20UI%20Components/dxTextArea '/Documentation/ApiReference/UI_Components/dxTextArea/'), and [RadioGroup](/api-reference/10%20UI%20Components/dxRadioGroup '/Documentation/ApiReference/UI_Components/dxRadioGroup/') UI components. 

---
##### jQuery  

    <!-- tab: index.js -->
    $(function(){   
        $("#tabPanel").dxTabPanel({
            items: [
                {
                    title: "Employee",
                    icon: "floppy",
                    template: function () {
                        return $("<div id='form'>").dxForm({
                            formData: employeeData,
                            items: [
                                {
                                    dataField: "name",
                                    label: {
                                        template: labelTemplate("user"),
                                    },
                                },
                                {
                                    dataField: "position",
                                    label: {
                                        template: labelTemplate("group"),
                                    },
                                },
                                "hireDate",
                                {
                                    dataField: "officeNumber",
                                    label: {
                                        template: labelTemplate("info"),
                                    },
                                },
                            ],
                        });
                    },
                },
                {
                    title: "Notes",
                    icon: "comment",
                    template: function () {
                        return $("<div id='textArea'>").dxTextArea({
                            value: employeeData.notes,
                        });
                    },
                },
                {
                    title: "Role",
                    icon: "isnotblank",
                    badge: "new",
                    template: function () {
                        return $("<div id='radioGroup'>").dxRadioGroup({
                            items: employeeData.roles,
                            value: employeeData.roles[0],
                        });
                    },
                },
            ]
        });

        const employeeData = {
            name: "John Heart",
            position: "CEO",
            hireDate: new Date(2012, 4, 13),
            officeNumber: 901,
            notes: "John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.",
            roles: ["Chief Officer", "Manager", "Administrator"]
        };
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tab-panel>
        <dxi-item title="Employee" icon="floppy">
            <div *dxTemplate>
                <dx-form
                    id="form"
                    [formData]="employeeData"
                >
                    <dxi-item dataField="name">
                        <dxo-label template="name"></dxo-label>
                    </dxi-item>
                    <dxi-item dataField="position">
                        <dxo-label template="position"></dxo-label>
                    </dxi-item>
                    <<dxi-item dataField="hireDate"></dxi-item>
                    <dxi-item dataField="officeNumber">
                        <dxo-label template="officeNumber"></dxo-label>
                    </dxi-item>
                    <ng-container *ngFor="let label of labelTemplates">
                        <div *dxTemplate="let data of label.name">
                            <div><i class="dx-icon {{ label.icon }}"></i>{{ data.text }}</div>
                        </div>
                    </ng-container>
                </dx-form>
            </div>
        </dxi-item>
        <dxi-item title="Notes" icon="comment">
            <div *dxTemplate>
                <dx-text-area
                    [(value)]="employeeData.notes">
                </dx-text-area>
            </div>
        </dxi-item>
        <dxi-item title="Role" icon="isnotblank" badge="new">
            <div *dxTemplate>
                <dx-radio-group
                    [items]="employeeData.roles"
                    [(value)]="employeeData.roles[0]">
                </dx-radio-group>
            </div>
        </dxi-item>
    </dx-tab-panel>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        employeeData = {
            name: 'John Heart',
            position: 'CEO',
            hireDate: new Date(2012, 4, 13),
            officeNumber: 901,
            notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.',
            roles: ['Chief Officer', 'Administrator', 'Manager']
        }
        labelTemplates = [
            {name: 'name', icon: 'dx-icon-info'},
            {name: 'position', icon: 'dx-icon-group'},
            {name: 'officeNumber', icon: 'dx-icon-info'}
        ]
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import {
        DxTabPanelModule,
        DxFormModule,
        DxTextAreaModule,
        DxRadioGroupModule
    } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTabPanelModule,
            DxFormModule,
            DxTextAreaModule,
            DxRadioGroupModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTabPanel>
            <DxItem title="Employee" icon="floppy">
                <template #default>
                    <DxForm 
                        id="form"
                        :form-data="employeeData"
                    >
                        <DxSimpleItem data-field="name">
                            <DxLabel template="nameLabel"/>
                        </DxSimpleItem>
                        <DxSimpleItem data-field="position">
                            <DxLabel template="positionLabel"/>
                        </DxSimpleItem>
                        <DxSimpleItem data-field="hireDate" />
                        <DxSimpleItem data-field="officeNumber">
                            <DxLabel template="officeNumberLabel"/>
                        </DxSimpleItem>
                        <template #nameLabel="{ data }">
                            <i class="dx-icon dx-icon-user"/>{{ data.text }}
                        </template>
                        <template #positionLabel="{ data }">
                            <i class="dx-icon dx-icon-group"/>{{ data.text }}
                        </template>
                        <template #officeNumberLabel="{ data }">
                            <i class="dx-icon dx-icon-info"/>{{ data.text }}
                        </template>
                    </DxForm>
                </template>
            </DxItem>
            <DxItem title="Notes" icon="comment">
                <template #default>
                    <DxTextArea 
                        v-model:value="employeeData.notes"
                    />
                </template>
            </DxItem>
            <DxItem title="Role" icon="isnotblank" badge="new">
                <template #default>
                    <DxRadioGroup 
                        :items="employeeData.roles"
                        v-model:value="employeeData.roles[0]"
                    />
                </template>
            </DxItem>
        </DxTabPanel>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTabPanel, { DxItem } from "devextreme-vue/tab-panel";
    import DxForm, { DxSimpleItem, DxLabel } from "devextreme-vue/form";
    import DxTextArea from "devextreme-vue/text-area";
    import DxRadioGroup from "devextreme-vue/radio-group";

    export default {
        components: {
            DxTabPanel,
            DxItem,
            DxForm,
            DxSimpleItem,
            DxLabel,
            DxTextArea,
            DxRadioGroup
        },
        data() {
            const employeeData = {
                name: 'John Heart',
                position: 'CEO',
                hireDate: new Date(2012, 4, 13),
                officeNumber: 901,
                notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.',
                roles: ['Chief Officer', 'Administartor', 'Manager']
            };
            return {
                employeeData
            };
        },
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TabPanel, { Item } from "devextreme-react/tab-panel";
    import Form, { SimpleItem, Label } from "devextreme-react/form";
    import TextArea from "devextreme-react/text-area";
    import RadioGroup from "devextreme-react/radio-group";

    const employeeData = {
        name: 'John Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.',
        roles: ['Chief Officer', 'Administrator', 'Manager']
    };

    const labelTemplate = (iconName) => {
        return function template(data) {
            return (<div><i className={`dx-icon dx-icon-${iconName}`}></i>{ data.text }</div>);
        };
    }

    const App = () => {
        return (
            <TabPanel>
                <Item title="Employee" icon="floppy">
                    <Form 
                        id="form"
                        formData={employeeData}
                    >
                        <SimpleItem dataField="name">
                            <Label render={labelTemplate('user')} />
                        </SimpleItem>
                        <SimpleItem dataField="position">
                            <Label render={labelTemplate('group')} />
                        </SimpleItem>
                        <SimpleItem dataField="hireDate" />
                        <SimpleItem dataField="officeNumber">
                            <Label render={labelTemplate('info')} />
                        </SimpleItem>
                    </Form>
                </Item>
                <Item title="Notes" icon="comment">
                    <TextArea
                        defaultValue={employeeData.notes}
                    />
                </Item>
                <Item title="Role" icon="isnotblank" badge="new">
                    <RadioGroup 
                        items={employeeData.roles}
                        defaultValue={employeeData.roles[0]}
                    />
                </Item>
            </TabPanel>
        );
    }

    export default App;

---
