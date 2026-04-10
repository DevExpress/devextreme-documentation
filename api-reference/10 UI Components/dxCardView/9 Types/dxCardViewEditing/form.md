---
id: dxCardViewEditing.form
type: dxForm_Options
---
---
##### shortDescription
Configures the form inside the editing popup.

---
Default form editors depend on the [columns' configuration](/api-reference/10%20UI%20Components/dxCardView/9%20Types/ColumnProperties '{basewidgetpath}/Configuration/columns/'). If the generated form does not meet your requirements, and you need to reorganize form items or set other [form properties](/api-reference/10%20UI%20Components/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Components/dxForm/Configuration/'), specify it in the **form** object. To link a [form item](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/items.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#items') with a CardView field, assign identical values to the **form**.**items**.[dataField](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#dataField') and **columns**.[dataField](/api-reference/10%20UI%20Components/dxCardView/9%20Types/ColumnProperties/dataField.md '{basewidgetpath}/Configuration/columns/#dataField') properties.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            editing: {
                allowUpdating: true,
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
        <dxo-editing [allowUpdating]="true">
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxEditing :allow-updating="true">
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

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import Dx{WidgetName}, { DxColumn, DxEditing, DxForm } from 'devextreme-vue/{widget-name}';
    import { DxItem } from 'devextreme-vue/form';
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

    const App = () => {
        return (
            <{WidgetName} ... >
                <Editing allowUpdating={true}>
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
    export default App;

---

Do not specify the following properties in the **form** object:

- [readOnly](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/readOnly.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#readOnly') (use [columns[]]({basewidgetpath}/Configuration/columns/).[allowEditing](/api-reference/10%20UI%20Components/dxCardView/9%20Types/ColumnProperties/allowEditing.md '{basewidgetpath}/Configuration/columns/#allowEditing') instead)             

- [Event](/api-reference/10%20UI%20Components/dxForm/4%20Events '/Documentation/ApiReference/UI_Components/dxForm/Events/') handlers ([properties](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/onContentReady.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#onContentReady') that start with *"on..."*), except for [onInitialized](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/onInitialized.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#onInitialized') and [onContentReady](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/onContentReady.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#onContentReady')

The [colCount](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/colCount.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#colCount') property defaults to 2, but can be redefined.

#include widgets-config-object-option-note with {
    optionName: "form"
}

If you need to customize an individual form item, use the [formItem](/api-reference/10%20UI%20Components/dxCardView/9%20Types/ColumnProperties/formItem.md '{basewidgetpath}/Configuration/columns/#formItem') object.