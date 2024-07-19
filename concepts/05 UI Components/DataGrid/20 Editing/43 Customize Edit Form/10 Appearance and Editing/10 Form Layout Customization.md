This section demonstrates how to configure a form item's style and arrange items. We do not recommend that you use the options mentioned in this section to change the default editor's behavior. To customize the default editor, refer to the following section: [Editor Customization](/concepts/05%20UI%20Components/DataGrid/20%20Editing/40%20Customize%20Editors.md '/Documentation/Guide/UI_Components/DataGrid/Editing/#Customize_Editors').

If you need to implement minor changes (for example, apply a style to a form item, change item visibility, configure labels, specify a number of columns spanned by an item, etc.), use the **columns[]**.[formItem](/api-reference/_hidden/GridBaseColumn/formItem.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#formItem') property.


---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                allowUpdating: true,
                mode: "form"
            },
            columns: [
                {
                    dataField: "ID",
                    formItem: {
                        visible: false
                    }
                }, {
                    dataField: "Notes",
                    formItem: {
                        colSpan: 2, 
                        cssClass: "custom-class",
                        editorType: 'dxTextArea',
                        label: {
                            location: "top"
                        },
                        editorOptions: {
                            height: 100,
                        },
                        ...
                    }
                },
                // ...
            ]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxo-editing
            [allowUpdating]="true"
            mode="form"
        >
        </dxo-editing>
        <dxi-column dataField="ID">
            <dxo-form-item [visible]="false">
            </dxo-form-item>
        </dxi-column>
        <dxi-column dataField="Notes">
            <dxo-form-item 
                [colSpan] = "2"
                cssClass = "custom-class"
                editorType = "dxTextArea"
                [editorOptions] = "{ height: 100 }"
            >
                <dxo-label location="top"></dxo-label>
            </dxo-form-item>
        </dxi-column>
    </dx-data-grid>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxDataGridModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDataGridModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxEditing
                :allow-updating="true"
                mode="form"
            />
            <DxColumn data-field="ID">
                <DxFormItem :visible="false">
                </DxFormItem>
            </DxColumn>
            <DxColumn data-field="Notes">
                <DxFormItem 
                    :col-span="2"
                    css-class = "custom-class"
                    editor-type = "dxTextArea"
                    :editor-options = "columnEditorOptions"
                >
                    <DxLabel location="top" />
                </DxFormItem>
            </DxColumn>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxEditing,
        DxColumn,
        DxFormItem,
        DxLabel
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxEditing,
            DxColumn,
            DxFormItem,
            DxLabel
        },
        data() {
            return {
                columnEditorOptions: { height: 100 }
            }
        }
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Editing,
        Column,
        FormItem,
        Label
    } from 'devextreme-react/data-grid';

    const defaultEditorOptions = { height: 100 }

    export default function App() {
        return (
            <DataGrid ... >
                <Editing
                    allowUpdating={true}
                    mode="form"
                />
                <Column dataField="ID">
                    <FormItem visible={false} />
                </Column>
                <Column dataField="Notes">
                    <FormItem 
                        colSpan={2}
                        cssClass="custom-class"
                        editorType="dxTextArea"
                        editorOptions="{ defaultEditorOptions }"
                    >
                        <Label location="top" />
                    </FormItem>
                </Column>
            </DataGrid>
        );
    }

---

If you need to implement major changes (for example, arrange items and groups), use the **editing**.[form](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/form.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#form') property. Declare all items for a column object and specify the [dataField](/api-reference/_hidden/GridBaseColumn/dataField.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataField') property. 

DataGrid automatically generates editors with the corresponding event handlers for form items based on column settings and other DataGrid options like [onEditorPrepared](/api-reference/_hidden/GridBaseColumn/dataField.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataField'). Do not use the [editorOptions](/api-reference/_hidden/GridBaseColumn/editorOptions.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editorOptions') property for items that are bound to **dataField** in the **editing.form** configuration. You can add [unbound items](/concepts/05%20UI%20Components/Form/05%20Configure%20Simple%20Items/10%20Create%20an%20Unbound%20Simple%20Item.md '/Documentation/Guide/UI_Components/Form/Configure_Simple_Items/#Create_an_Unbound_Simple_Item') in the same way as regular [Form](/api-reference/10%20UI%20Components/dxForm '/Documentation/ApiReference/UI_Components/dxForm/') components. Do not use [editCellTemplate](/api-reference/_hidden/dxDataGridColumn/editCellTemplate.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editCellTemplate') for unbound items.

You can refer to the following topic for information on how to arrange items in the Form component: [Organize Simple Items](/concepts/05%20UI%20Components/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Groups/'). You can use the same technique to arrange items in the DataGrid editing form. Note that you should leave the **formData** property unspecified because DataGrid uses a built-in mechanism to manage edited data.

#####See Also#####
- [Dynamically Change Form Item Properties in the Editing State](/concepts/05%20UI%20Components/DataGrid/99%20How%20To/Dynamically%20Change%20Form%20Item%20Properties%20in%20the%20Editing%20State.md '/Documentation/Guide/UI_Components/DataGrid/How_To/Dynamically_Change_Form_Item_Properties_in_the_Editing_State/')
