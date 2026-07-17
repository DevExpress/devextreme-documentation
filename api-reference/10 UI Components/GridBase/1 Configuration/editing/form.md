---
id: GridBase.Options.editing.form
---
---
##### shortDescription
Configures the form. Used only if **editing**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode') is *"form"* or *"popup"*.

---
Default form editors depend on the [columns' configuration](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/'). If the generated form does not meet your requirements, and you need to reorganize form items or set other [form properties](/api-reference/10%20UI%20Components/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Components/dxForm/Configuration/'), specify it in the **form** object. To link a [form item](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/items.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#items') with a grid column, assign identical values to the **form**.**items**.[dataField](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#dataField') and **columns**.[dataField](/api-reference/_hidden/GridBaseColumn/dataField.md '{basewidgetpath}/Configuration/columns/#dataField') properties.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            editing: {
                allowUpdating: true,
                mode: "form",
                form: {
                    items: [{
                        itemType: "group",
                        caption: "Personal Data",
                        items: [
                            { dataField: "Prefix" },
                            { dataField: "Full_Name" },
                            { dataField: "Position" },
                            { dataField: "Duties", editorType: "dxTextArea" }
                        ]
                        // or simply
                        // items: ["Prefix", "Full_Name", "Position"]
                    }, {
                        itemType: "group",
                        caption: "Contacts",
                        items: ["Email", "Skype"]
                    }]
                }
            },
            columns: [ 
                { dataField: "Full_Name" }, 
                { dataField: "Prefix" },
                { dataField: "Position" },
                { dataField: "Duties" },
                { dataField: "Email" },
                { dataField: "Skype" } 
            ]
        });
    });

##### Angular
    
    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-{widget-name}-editing
            [allowUpdating]="true"
            mode="form">
            <dxo-{widget-name}-form>
                <dxi-{widget-name}-item itemType="group" caption="Personal Data">
                    <dxi-{widget-name}-item dataField="Prefix"></dxi-{widget-name}-item>
                    <dxi-{widget-name}-item dataField="Full_Name"></dxi-{widget-name}-item>
                    <dxi-{widget-name}-item dataField="Position"></dxi-{widget-name}-item>
                    <dxi-{widget-name}-item dataField="Duties" editorType="dxTextArea"></dxi-{widget-name}-item>
                </dxi-{widget-name}-item>
                <dxi-{widget-name}-item itemType="group" caption="Contacts">
                    <dxi-{widget-name}-item dataField="Email"></dxi-{widget-name}-item>
                    <dxi-{widget-name}-item dataField="Skype"></dxi-{widget-name}-item>
                </dxi-{widget-name}-item>
            </dxo-{widget-name}-form>
        </dxo-{widget-name}-editing>
        <dxi-{widget-name}-column dataField="Full_Name"></dxi-{widget-name}-column>
        <dxi-{widget-name}-column dataField="Prefix"></dxi-{widget-name}-column>
        <dxi-{widget-name}-column dataField="Position"></dxi-{widget-name}-column>
        <dxi-{widget-name}-column dataField="Duties"></dxi-{widget-name}-column>
        <dxi-{widget-name}-column dataField="Email"></dxi-{widget-name}-column>
        <dxi-{widget-name}-column dataField="Skype"></dxi-{widget-name}-column>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().{WidgetName}()
        // ...
        .Editing(e => e
            .AllowUpdating(true)
            .Mode(GridEditMode.Form)
            .Form(f => f
                .Items(i => {
                    i.AddGroup()
                        .Caption("Personal Data")
                        .Items(groupItems => {
                            groupItems.AddSimple().DataField("Prefix");
                            groupItems.AddSimple().DataField("Full_Name");
                            groupItems.AddSimple().DataField("Position");
                            groupItems.AddSimple().DataField("Duties")
                                .Editor(g => g.TextArea());
                        });
                    i.AddGroup()
                        .Caption("Contacts")
                        .Items(groupItems => {
                            groupItems.AddSimple().DataField("Email");
                            groupItems.AddSimple().DataField("Skype");
                        });
                })
            )
        )
        .Columns(cols => {
            cols.Add().DataField("Full_Name");
            cols.Add().DataField("Prefix");
            cols.Add().DataField("Position");
            cols.Add().DataField("Duties");
            cols.Add().DataField("Email");
            cols.Add().DataField("Skype");
        })
    )

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxEditing
                :allow-updating="true"
                mode="form">
                    <DxForm>
                        <DxItem itemType="group" caption="Personal Data">
                            <DxItem dataField="Prefix" />
                            <DxItem dataField="Full_Name" />
                            <DxItem dataField="Position" />
                            <DxItem dataField="Duties" editorType="dxTextArea" />
                        </DxItem>
                        <DxItem itemType="group" caption="Contacts">
                            <DxItem dataField="Email" />
                            <DxItem dataField="Skype" />
                        </DxItem>
                    </DxForm>
            </DxEditing>
            <DxColumn data-field="Full_Name" />
            <DxColumn data-field="Prefix" />
            <DxColumn data-field="Position" />
            <DxColumn data-field="Duties" />
            <DxColumn data-field="Email" />
            <DxColumn data-field="Skype" />
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import Dx{WidgetName}, { DxColumn, DxEditing, DxForm } from 'devextreme-vue/{widget-name}';
    import { DxItem } from 'devextreme-vue/form';

    export default {
        components: {
            Dx{WidgetName},
            DxEditing,
            DxForm,
            DxItem
        },
        data() {
            return {
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import {WidgetName}, {
        Column,
        Editing,
        Form
    } from 'devextreme-react/{widget-name}';
    import { Item } from 'devextreme-react/form';

    export default function App() {
        return (
            <{WidgetName} ... >
                <Editing
                    mode="form"
                    allowUpdating={true}>
                    <Form>
                        <Item itemType="group" caption="Personal Data">
                            <Item dataField="Prefix" />
                            <Item dataField="Full_Name" />
                            <Item dataField="Position" />
                            <Item dataField="Duties" editorType="dxTextArea" />
                        </Item>
                        <Item itemType="group" caption="Contacts">
                            <Item dataField="Email" />
                            <Item dataField="Skype" />
                        </Item>
                    </Form>
                </Editing>
                <Column dataField="Prefix" />
                <Column dataField="Full_Name" />
                <Column dataField="Position" />
                <Column dataField="Duties" />
                <Column dataField="Email" />
                <Column dataField="Skype" />
            </{WidgetName}>
        );
    }

---

Do not specify the following properties in the **form** object:

- [readOnly](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/readOnly.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#readOnly') (use [columns[]]({basewidgetpath}/Configuration/columns/).[allowEditing](/api-reference/_hidden/GridBaseColumn/allowEditing.md '{basewidgetpath}/Configuration/columns/#allowEditing') instead)          

- [template](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#template') for items (use **columns[]**.[editCellTemplate](/api-reference/_hidden/dxDataGridColumn/editCellTemplate.md '{basewidgetpath}/Configuration/columns/#editCellTemplate') instead)      

- [Event](/api-reference/10%20UI%20Components/dxForm/4%20Events '/Documentation/ApiReference/UI_Components/dxForm/Events/') handlers ([properties](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/onContentReady.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#onContentReady') that start with *"on..."*), except for [onInitialized](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/onInitialized.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#onInitialized') and [onContentReady](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/onContentReady.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#onContentReady')

Also, the [colCount](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/colCount.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#colCount') property defaults to 2, but can be redefined. Refer to the following help topic for more information about form customization: [Customize Edit Form](/concepts/05%20UI%20Components/DataGrid/20%20Editing/43%20Customize%20Edit%20Form '/Documentation/Guide/UI_Components/DataGrid/Editing/#Customize_Edit_Form').

If you need to customize an individual form item, use the [formItem](/api-reference/_hidden/GridBaseColumn/formItem.md '{basewidgetpath}/Configuration/columns/#formItem') object.

[note]

---

##### jQuery

If you configure a form with [tabbed items](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/TabbedItem '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/'), the component does not validate editors in hidden tabs. To validate hidden tab editors, disable **form**.**TabbedItem**.[tabPanelOptions](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/TabbedItem/tabPanelOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/#tabPanelOptions').[deferRendering](/api-reference/10%20UI%20Components/dxMultiView/1%20Configuration/deferRendering.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#deferRendering'):

    <!-- tab: index.js -->
    $(function() {
        $('#gridContainer').dxDataGrid({
            editing: {
                form: {
                    items: [{
                        itemType: 'tabbed',
                        tabPanelOptions: {
                            deferRendering: false,
                        },
                        tabs: [{
                            items: [ ... ],
                        }]
                    }]
                }
            }
        })
    })

##### Angular

- The nested component that configures the **form** property does not support event and two-way property bindings.

- If you configure a form with [tabbed items](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/TabbedItem '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/'), the component does not validate editors in hidden tabs. To validate hidden tab editors, disable **form**.**TabbedItem**.[tabPanelOptions](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/TabbedItem/tabPanelOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/#tabPanelOptions').[deferRendering](/api-reference/10%20UI%20Components/dxMultiView/1%20Configuration/deferRendering.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#deferRendering'):

        <!-- tab: app.component.html -->
        <dx-data-grid ... >
            <dxo-data-grid-editing ... >
                <dxo-data-grid-form>
                    <dxi-data-grid-item itemType="tabbed">
                        <dxo-tab-panel-options [deferRendering]="false"></dxo-tab-panel-options>
                        <dxi-tab ... >
                            <dxi-data-grid-item ... ></dxi-data-grid-item>
                        </dxi-tab>
                    </dxi-data-grid-item>
                </dxo-data-grid-form>
            </dxo-data-grid-editing>
        </dx-data-grid>

        <!-- tab: app.module.ts -->
        import { DxDataGridModule, DxFormModule } from 'devextreme-angular';

        @NgModule({
            imports: [
                BrowserModule,
                DxFormModule,
            ],
            // ...
        })


##### Vue

- The nested component that configures the **form** property does not support event and two-way property bindings.

- If you configure a form with [tabbed items](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/TabbedItem '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/'), the component does not validate editors in hidden tabs. To validate hidden tab editors, disable **form**.**TabbedItem**.[tabPanelOptions](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/TabbedItem/tabPanelOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/#tabPanelOptions').[deferRendering](/api-reference/10%20UI%20Components/dxMultiView/1%20Configuration/deferRendering.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#deferRendering'):

        <!-- tab: App.vue -->
        <template>
            <DxDataGrid ... >
                <DxEditing ... >
                    <DxForm>
                        <DxTabbedItem>
                            <DxTabPanelOptions :deferRendering="false" />
                            <DxTab ... >
                                <DxSimpleItem ... />
                            </DxTab>
                        </DxTabbedItem>
                    </DxForm>
                </DxEditing>
            </DxDataGrid>
        </template>

        <script setup lang="ts">
        import { DxDataGrid, DxEditing, DxForm } from 'devextreme-vue/data-grid';
        import { DxSimpleItem, DxTabbedItem, DxTabPanelOptions, DxTab } from 'devextreme-vue/form';

        </script>


##### React

If you configure a form with [tabbed items](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/TabbedItem '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/'), the component does not validate editors in hidden tabs. To validate hidden tab editors, disable **form**.**TabbedItem**.[tabPanelOptions](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/TabbedItem/tabPanelOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/#tabPanelOptions').[deferRendering](/api-reference/10%20UI%20Components/dxMultiView/1%20Configuration/deferRendering.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#deferRendering'):

    <!-- tab: App.tsx -->
    import { DataGrid, Editing, Form } from 'devextreme-react/data-grid';
    import { SimpleItem, TabbedItem, TabPanelOptions, Tab } from 'devextreme-react/form';

    function App() {
        return (
            <DataGrid ... >
                <Editing ... >
                    <Form>
                        <TabbedItem>
                            <TabPanelOptions deferRendering={false} />
                            <Tab ... >
                                <SimpleItem ... />
                            </Tab>
                        </TabbedItem>
                    </Form>
                </Editing>
            </DataGrid>
        )
    }

---

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/PopupEditing/"
}

#####See Also#####
- [Form Guides](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/')
