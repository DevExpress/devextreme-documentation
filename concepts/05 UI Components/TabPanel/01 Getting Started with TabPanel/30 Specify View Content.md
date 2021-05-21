You can use the following properties to specify tab content:       
- [itemTemplate](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#itemTemplate)
Specifies a custom template for content of all TabPanel views.

- **items[]**.[text](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#text)        
Specifies text displayed in a separate view. 

- **items[]**.[template](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#template)        
Allows you to set a custom template for a separate view's content. This property overrides **itemTemplate**.

- [noDataText](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#noDataText)        
Specifies text or markup to display when views do not have content.

This tutorial demonstrates the use of the **items[]**.**template** property. This property allows to specify different content for separate views. In the code below, the views contain [Form](/Documentation/ApiReference/UI_Components/dxForm/), [TextArea](/Documentation/ApiReference/UI_Components/dxTextArea/), and [RadioGroup](/Documentation/ApiReference/UI_Components/dxRadioGroup/) UI components. 

---
##### jQuery  

    <!-- tab: index.js -->
    $(function(){   
        $("#tabPanel").dxTabPanel({
            items: [{ 
                title: "Employee",
                icon: "floppy",
                template: function (itemData, itemIndex, element) {
                    const formDiv = $("<div style='padding:15px'>")
                    formDiv.dxForm({
                        formData: employeeData,
                        items: ["name", "position", "hireDate", "officeNumber"]
                    });
                    formDiv.appendTo(element);
                }
            }, {
                title: "Notes",
                icon: "comment",
                template: function (itemData, itemIndex, element) {
                    const textAreaDiv = $("<div style='padding:15px; height: 100%'>")
                    textAreaDiv.dxTextArea({
                        value: employeeData.notes
                    });
                    textAreaDiv.appendTo(element);
                }
            }, {
                title: "Role",
                icon: "isnotblank",
                badge: "new",
                template: function (itemData, itemIndex, element) {
                    const radioGroupDiv = $("<div style='padding:15px'>")
                    radioGroupDiv.dxRadioGroup({
                        items: employeeData.roles,
                        value: employeeData.roles[0]
                    });
                    radioGroupDiv.appendTo(element);
                }
            }]
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
                    [formData]="employeeData">
                    <dxi-item dataField="name"></dxi-item>
                    <dxi-item dataField="position"></dxi-item>
                    <dxi-item dataField="hireDate"></dxi-item>
                    <dxi-item dataField="officeNumber"></dxi-item>      
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
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxTabPanelModule } from 'devextreme-angular';
    import { DxFormModule } from 'devextreme-angular/ui/form';
    import { DxTextAreaModule } from 'devextreme-angular/ui/text-area';
    import { DxRadioGroupModule } from 'devextreme-angular/ui/radio-group';

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
                    <DxForm :form-data="employeeData">
                        <DxSimpleItem data-field="name" />
                        <DxSimpleItem data-field="position" />
                        <DxSimpleItem data-field="hireDate" />
                        <DxSimpleItem data-field="officeNumber" />
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
    import DxForm, { DxSimpleItem } from "devextreme-vue/form";
    import DxTextArea from "devextreme-vue/text-area";
    import DxRadioGroup from "devextreme-vue/radio-group";

    export default {
        components: {
            DxTabPanel,
            DxItem,
            DxForm,
            DxSimpleItem,
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
                roles: ['Chief Officer', 'Manager', 'Administrator']
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
    import Form, { SimpleItem } from "devextreme-react/form";
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

    const App = () => {
        return (
            <TabPanel>
                <Item title="Employee" icon="floppy">
                    <Form formData={employeeData}>
                        <SimpleItem dataField="name" />
                        <SimpleItem dataField="position" />
                        <SimpleItem dataField="hireDate" />
                        <SimpleItem dataField="officeNumber" />
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
