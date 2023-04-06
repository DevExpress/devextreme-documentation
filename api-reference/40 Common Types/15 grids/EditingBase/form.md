---
uid: common\grids:EditingBase.form
type: dxForm_Options
---
---
##### shortDescription
Configures the form. Used only if **editing**.[mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode') is *"form"* or *"popup"*.

---
<!--
Default form editors depend on the [columns' configuration](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/'). If the generated form does not meet your requirements, and you need to reorganize form items or set other [form properties](/api-reference/10%20UI%20Components/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Components/dxForm/Configuration/'), specify it in the **form** object. To link a [form item](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/items.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#items') with a grid column, assign identical values to the **form**.**items**.[dataField](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#dataField') and **columns**.[dataField](/api-reference/_hidden/GridBaseColumn/dataField.md '{basewidgetpath}/Configuration/columns/#dataField') properties.

---
##### jQuery

    &lt;!-- tab: index.js --&gt;
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
    
    &lt;!-- tab: app.component.html --&gt;
    &lt;dx-{widget-name} ... &gt;
        &lt;dxo-editing
            [allowUpdating]="true"
            mode="form"&gt;
            &lt;dxo-form&gt;
                &lt;dxi-item itemType="group" caption="Personal Data"&gt;
                    &lt;dxi-item dataField="Prefix"&gt;&lt;/dxi-item&gt;
                    &lt;dxi-item dataField="Full_Name"&gt;&lt;/dxi-item&gt;
                    &lt;dxi-item dataField="Position"&gt;&lt;/dxi-item&gt;
                    &lt;dxi-item dataField="Duties" editorType="dxTextArea"&gt;&lt;/dxi-item&gt;
                &lt;/dxi-item&gt;
                &lt;dxi-item itemType="group" caption="Contacts"&gt;
                    &lt;dxi-item dataField="Email"&gt;&lt;/dxi-item&gt;
                    &lt;dxi-item dataField="Skype"&gt;&lt;/dxi-item&gt;
                &lt;/dxi-item&gt;
            &lt;/dxo-form&gt;
        &lt;/dxo-editing&gt;
        &lt;dxi-column dataField="Full_Name"&gt;&lt;/dxi-column&gt;
        &lt;dxi-column dataField="Prefix"&gt;&lt;/dxi-column&gt;
        &lt;dxi-column dataField="Position"&gt;&lt;/dxi-column&gt;
        &lt;dxi-column dataField="Duties"&gt;&lt;/dxi-column&gt;
        &lt;dxi-column dataField="Email"&gt;&lt;/dxi-column&gt;
        &lt;dxi-column dataField="Skype"&gt;&lt;/dxi-column&gt;
    &lt;/dx-{widget-name}&gt;

    &lt;!-- tab: app.component.ts --&gt;
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
    }

    &lt;!-- tab: app.module.ts --&gt;
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

    &lt;!--Razor C#--&gt;
    @(Html.DevExtreme().{WidgetName}()
        // ...
        .Editing(e =&gt; e
            .AllowUpdating(true)
            .Mode(GridEditMode.Form)
            .Form(f =&gt; f
                .Items(i =&gt; {
                    i.AddGroup()
                        .Caption("Personal Data")
                        .Items(groupItems =&gt; {
                            groupItems.AddSimple().DataField("Prefix");
                            groupItems.AddSimple().DataField("Full_Name");
                            groupItems.AddSimple().DataField("Position");
                            groupItems.AddSimple().DataField("Duties")
                                .Editor(e =&gt; e.TextArea());
                        });
                    i.AddGroup()
                        .Caption("Contacts")
                        .Items(groupItems =&gt; {
                            groupItems.AddSimple().DataField("Email");
                            groupItems.AddSimple().DataField("Skype");
                        });
                })
            )
        )
        .Columns(cols =&gt; {
            cols.Add().DataField("Full_Name");
            cols.Add().DataField("Prefix");
            cols.Add().DataField("Position");
            cols.Add().DataField("Duties");
            cols.Add().DataField("Email");
            cols.Add().DataField("Skype");
        })
    )

##### Vue

    &lt;!-- tab: App.vue --&gt;
    &lt;template&gt;
        &lt;Dx{WidgetName} ... &gt;
            &lt;DxEditing
                :allow-updating="true"
                mode="form"&gt;
                    &lt;DxForm&gt;
                        &lt;DxItem itemType="group" caption="Personal Data"&gt;
                            &lt;DxItem dataField="Prefix" /&gt;
                            &lt;DxItem dataField="Full_Name" /&gt;
                            &lt;DxItem dataField="Position" /&gt;
                            &lt;DxItem dataField="Duties" editorType="dxTextArea" /&gt;
                        &lt;/DxItem&gt;
                        &lt;DxItem itemType="group" caption="Contacts"&gt;
                            &lt;DxItem dataField="Email" /&gt;
                            &lt;DxItem dataField="Skype" /&gt;
                        &lt;/DxItem&gt;
                    &lt;/DxForm&gt;
            &lt;/DxEditing&gt;
            &lt;DxColumn data-field="Full_Name" /&gt;
            &lt;DxColumn data-field="Prefix" /&gt;
            &lt;DxColumn data-field="Position" /&gt;
            &lt;DxColumn data-field="Duties" /&gt;
            &lt;DxColumn data-field="Email" /&gt;
            &lt;DxColumn data-field="Skype" /&gt;
        &lt;/Dx{WidgetName}&gt;
    &lt;/template&gt;

    &lt;script&gt;
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
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';

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
                &lt;{WidgetName} ... &gt;
                    &lt;Editing
                        mode="form"
                        allowUpdating={true}&gt;
                        &lt;Form&gt;
                            &lt;Item itemType="group" caption="Personal Data"&gt;
                                &lt;Item dataField="Prefix" /&gt;
                                &lt;Item dataField="Full_Name" /&gt;
                                &lt;Item dataField="Position" /&gt;
                                &lt;Item dataField="Duties" editorType="dxTextArea" /&gt;
                            &lt;/Item&gt;
                            &lt;Item itemType="group" caption="Contacts"&gt;
                                &lt;Item dataField="Email" /&gt;
                                &lt;Item dataField="Skype" /&gt;
                            &lt;/Item&gt;
                        &lt;/Form&gt;
                    &lt;/Editing&gt;
                    &lt;Column dataField="Prefix" /&gt;
                    &lt;Column dataField="Full_Name" /&gt;
                    &lt;Column dataField="Position" /&gt;
                    &lt;Column dataField="Duties" /&gt;
                    &lt;Column dataField="Email" /&gt;
                    &lt;Column dataField="Skype" /&gt;
                &lt;/{WidgetName}&gt;
            );
        }
    }
    export default App;

---

Do not specify the following properties in the **form** object:

- [readOnly](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/readOnly.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#readOnly') (use [allowEditing](/api-reference/_hidden/GridBaseColumn/allowEditing.md '{basewidgetpath}/Configuration/columns/#allowEditing') instead)          

- [template](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#template') for items that have a [dataField](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#dataField') (use a column's [editCellTemplate](/api-reference/_hidden/dxDataGridColumn/editCellTemplate.md '{basewidgetpath}/Configuration/columns/#editCellTemplate') instead)      

- Any [event](/api-reference/10%20UI%20Components/dxForm/4%20Events '/Documentation/ApiReference/UI_Components/dxForm/Events/') handler ([properties](/api-reference/10%20UI%20Components/Widget/1%20Configuration/onContentReady.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#onContentReady') whose name starts with *"on..."*)

Also, the [colCount](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/colCount.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#colCount') property defaults to 2, but it can be redefined.

#include widgets-config-object-option-note with {
    optionName: "form"
}

If you need to customize an individual form item, use the [formItem](/api-reference/_hidden/GridBaseColumn/formItem.md '{basewidgetpath}/Configuration/columns/#formItem') object.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/PopupEditing/"
}

#####See Also#####
- [Form Guides](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/')

-->