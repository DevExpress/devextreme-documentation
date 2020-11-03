---
id: GridBaseEditing.form
type: dxForm_Options
---
---
##### shortDescription
Configures the form. Used only if **editing**.[mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode') is *"form"* or *"popup"*.

---
Default form editors depend on the [columns' configuration](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/'). If the generated form does not meet your requirements, and you need to reorganize form items or set other [form options](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/'), specify it in the **form** object. To link a [form item](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/items.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items') with a grid column, assign identical values to the **form**.**items**.[dataField](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField') and **columns**.[dataField](/api-reference/_hidden/GridBaseColumn/dataField.md '{basewidgetpath}/Configuration/columns/#dataField') options.

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
        <dxo-editing
            [allowUpdating]="true"
            mode="form">
            <dxo-form>
                <dxi-item itemType="group" caption="Personal Data">
                    <dxi-item dataField="Prefix"></dxi-item>
                    <dxi-item dataField="Full_Name"></dxi-item>
                    <dxi-item dataField="Position"></dxi-item>
                    <dxi-item dataField="Duties" editorType="dxTextArea"></dxi-item>
                </dxi-item>
                <dxi-item itemType="group" caption="Contacts">
                    <dxi-item dataField="Email"></dxi-item>
                    <dxi-item dataField="Skype"></dxi-item>
                </dxi-item>
            </dxo-form>
        </dxo-editing>
        <dxi-column dataField="Full_Name"></dxi-column>
        <dxi-column dataField="Prefix"></dxi-column>
        <dxi-column dataField="Position"></dxi-column>
        <dxi-column dataField="Duties"></dxi-column>
        <dxi-column dataField="Email"></dxi-column>
        <dxi-column dataField="Skype"></dxi-column>
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
                                .Editor(e => e.TextArea());
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
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

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

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Column,
        Editing,
        Form
    } from 'devextreme-react/{widget-name}';
    import { Item } from 'devextreme-react/form';

    class App extends React.Component {
        render() {
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
    }
    export default App;

---

Do not specify the following options in the **form** object:

- [readOnly](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/readOnly.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#readOnly') (use [allowEditing](/api-reference/_hidden/GridBaseColumn/allowEditing.md '{basewidgetpath}/Configuration/columns/#allowEditing') instead)          

- [template](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#template') for items that have a [dataField](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField') (use a column's [editCellTemplate](/api-reference/_hidden/dxDataGridColumn/editCellTemplate.md '{basewidgetpath}/Configuration/columns/#editCellTemplate') instead)      

- Any [event](/api-reference/10%20UI%20Widgets/dxForm/4%20Events '/Documentation/ApiReference/UI_Widgets/dxForm/Events/') handler ([options](/api-reference/10%20UI%20Widgets/Widget/1%20Configuration/onContentReady.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onContentReady') whose name starts with *"on..."*)

Also, the [colCount](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/colCount.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#colCount') option defaults to 2, but it can be redefined.

#include widgets-config-object-option-note with {
    optionName: "form"
}

If you need to customize an individual form item, use the [formItem](/api-reference/_hidden/GridBaseColumn/formItem.md '{basewidgetpath}/Configuration/columns/#formItem') object.

#####See Also#####
- [Form Guides](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/')
