This section demonstrates how to configure a form item style and arrange items. We do not recommend that you use options mentioned in this section to change the default editor behavior. To customize the default editor, refer to the following section: [Editor Customization](/Documentation/Guide/UI_Components/DataGrid/Editing/#Customize_Editors).

If you need to implement minor changes (for example, apply a style to a form item, change item visibility, configure labels, specify a number of columns spanned by an item, etc.), use the **columns[]**.[formItem](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#formItem) property.


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
                }
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
                        cssClass = "custom-class"
                        editorType = "dxTextArea"
                        editorOptions = "{ defaultEditorOptions }"
                    >
                        <Label location="top" />
                    </FormItem>
                </Column>
            </DataGrid>
        );
    }

---

If you need to implement major changes (for example, arrange items and groups), use the **editing**.[form](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#form) property. Declare the required items for this object and specify the [dataField](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataField) property. 

DataGrid automatically generates editors with the related event handlers for the form items based on column settings and other DataGrid options like [onEditorPrepared](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataField). Do not use the [editCellTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editCellTemplate) or [editorOptions](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editorOptions) properties for items that are bound to **dataField** in the **editing.form** configuration. You can add unbound items just like for a regular [Form](/Documentation/ApiReference/UI_Components/dxForm/) component.

The [Organize Simple Items](/Documentation/Guide/UI_Components/Form/Organize_Simple_Items/In_Groups/) topic illustrates how to organize form items in the Form component. You can use the same approach for the DataGrid editing form. Note that you should not specify the **formData** property because DataGrid uses its own mechanism under the hood to manage edited data.

#####See Also#####
- [Dynamically Change Form Item Properties in the Editing State](/Documentation/Guide/UI_Components/DataGrid/How_To/Dynamically_Change_Form_Item_Properties_in_the_Editing_State/)
