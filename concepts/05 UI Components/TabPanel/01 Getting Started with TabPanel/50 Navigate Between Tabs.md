Specify the following properties to configure navigation between tabs:      
- [swipeEnabled](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#swipeEnabled)      
Specifies whether users can switch between views with the swipe gesture.

- [loop](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#loop)      
Specifies whether to loop views.

- [animationEnabled](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#animationEnabled)      
Specifies whether to animate the change of the current view.

---
##### jQuery  

    <!-- tab: index.js -->
    $(function(){   
        $("#tab-panel").dxTabPanel({
            loop: true,
            animationEnabled: true,
            swipeEnabled: true,
            items: [{ 
                title: "Employee",
                icon: "floppy",
                template: function (itemData, itemIndex, element) {
                    let formDiv = $("<div style='padding:15px'>")
                    formDiv.appendTo(element);
                    formDiv.dxForm({
                        formData: employeeData,
                        items: ["name", "position", "hireDate", "officeNumber"]
                    }).dxForm('instance');
                }
            }, {
                title: "Notes",
                icon: "comment",
                template: function (itemData, itemIndex, element) {
                    let textAreaDiv = $("<div style='padding:15px; height: 100%'>")
                    textAreaDiv.appendTo(element);
                    textAreaDiv.dxTextArea({
                        value: employeeData.notes
                    }).dxTextArea('instance');
                }
            }, {
                title: "Role",
                icon: "isnotblank",
                badge: "new",
                template: function (itemData, itemIndex, element) {
                    let radioGroupDiv = $("<div style='padding:15px'>")
                    radioGroupDiv.appendTo(element);
                    radioGroupDiv.dxRadioGroup({
                        items: ["Owner", "Administrator", "Manager"],
                        value: "Owner"
                    }).dxRadioGroup('instance');
                }
            }]
        });

        const employeeData = {
            name: 'John Heart',
            position: 'CEO',
            hireDate: new Date(2012, 4, 13),
            officeNumber: 901,
            notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.'
        };
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tab-panel
        [loop]="true"
        [animationEnabled]="true"
        [swipeEnabled]="true">   
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
                    [value]="employeeData.notes">
                </dx-text-area>
            </div>
        </dxi-item>
        <dxi-item title="Role" icon="isnotblank" badge="new">
            <div *dxTemplate>
                <dx-radio-group
                    [items]="radioGroupItems"
                    value="Owner">
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
            notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.'
        }

        radioGroupItems = ['Owner', 'Administrator', 'Manager']
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
        <DxTabPanel
            :loop="true"
            :animation-enabled="true" 
            :swipe-enabled="true">
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
                        :value="employeeData.notes"
                    />
                </template>
            </DxItem>
            <DxItem title="Role" icon="isnotblank" badge="new">
                <template #default>
                    <DxRadioGroup 
                        :items="radioGroupItems"
                        value="Owner"
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
                notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.'
            };
            const radioGroupItems = [
                'Owner', 
                'Administrator', 
                'Manager'
            ];
            return {
                employeeData,
                radioGroupItems
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
        notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.'
    };

    const radioGroupItems = [
        'Owner', 
        'Administrator', 
        'Manager'
    ];

    const App = () => {
        return (
            <TabPanel
            loop={true}
            animationEnabled={true} 
            swipeEnabled={true}>
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
                        value={employeeData.notes}
                    />
                </Item>
                <Item title="Role" icon="isnotblank" badge="new">
                    <RadioGroup 
                        items={radioGroupItems}
                        value="Owner"
                    />
                </Item>
            </TabPanel>
        );
    }

    export default App;

---

For further information on the TabPanel UI component, refer to the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TabPanel/Overview/)
* [API Reference](/Documentation/ApiReference/UI_Components/dxTabPanel/)
