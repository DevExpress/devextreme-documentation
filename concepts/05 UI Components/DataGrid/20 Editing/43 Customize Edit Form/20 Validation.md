DataGrid validation is based on validation rules in all edit modes. Refer to the following topic for more details about DataGrid validation: [Data Validation](/concepts/05%20UI%20Components/DataGrid/20%20Editing/50%20Data%20Validation.md '/Documentation/Guide/UI_Components/DataGrid/Editing/#Data_Validation').

[note] DataGrid validates only modified values.

DataGrid automatically applies rules defined for columns to editors in an [edit form](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/form.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#form'). If you define form items in the edit form, do not assign validation rules directly to form items since validation may work incorrectly. Do not specify **FormItem**.[isRequired](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/isRequired.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#isRequired') as DataGrid automatically specifies this property for all form items whose corresponding columns include [RequiredRule](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules/RequiredRule '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RequiredRule/').

---
##### jQuery

    <!-- tab: index.js -->
    $("#dataGridContainer").dxDataGrid({
        columns: [{
            dataField: "Full_Name",
            validationRules: [{ type: "required" }] // correct
        }
        // ...
        ],
        editing: {
            form: {
                items: [{
                    dataField: "Full_Name",
                    validationRules: [{type: 'required'}] // incorrect
                }]
            }
        }
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column dataField="Full_Name">
            <!-- correct -->
            <dxi-validation-rule type="required"></dxi-validation-rule>
        </dxi-column>
        <dxo-editing>
            <dxo-form>
                <dxi-item dataField="Full_Name">
                    <!-- incorrect -->
                    <dxi-validation-rule type="required">    
                </dxi-item>
            </dxo-form>
        </dxo-editing>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <DxDataGrid ... >
        <DxColumn data-field="Full_Name">
            <!-- correct -->
            <DxRequiredRule />
        </DxColumn>
        <DxEditing>
            <DxForm>
                <DxItem dataField="Full_Name">
                    <!-- incorrect -->
                    <DxRequiredRule />
                </DxItem>
            </DxForm>
        </DxEditing>
    </DxDataGrid>

##### React

    <!-- tab: App.js -->
    <DataGrid ... >
        <Column dataField="Full_Name">
            <!-- correct -->
            <RequiredRule />
        </Column>
        <Editing>
            <Form>
                <Item dataField="Full_Name" >
                    <!-- incorrect -->
                    <RequiredRule />
                </Item>
            </Form>
        </Editing>
    </DataGrid>

---

To display the validation summary, enable the **form**.[showValidationSummary](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/showValidationSummary.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#showValidationSummary') property.

If your form layout contains tabs, disable **TabbedItem.tabPanelOptions**.[deferRendering](/api-reference/10%20UI%20Components/dxMultiView/1%20Configuration/deferRendering.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#deferRendering') so DataGrid can validate all editors in all tabs. Otherwise, validation rules are not executed for items under non-initialized tabs.

---
##### jQuery

    <!-- tab: index.js -->
    $("#dataGridContainer").dxDataGrid({
        editing: {
            form: {
                items: [{
                    itemType: "tabbed",
                    tabPanelOptions: {
                        deferRendering: false,
                    },
                    tabs: [...]
                }]
            }
        }
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxo-editing>
            <dxo-form>
                <dxi-itemitemType="tabbed">
                    <dxo-tab-panel-options [deferRendering]="false">
                    </dxo-tab-panel-options>
                    <dxi-tab></dxi-tab>
                </dxi-item>
            </dxo-form>
        </dxo-editing>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <DxDataGrid ... >
        <DxEditing>
            <DxForm>
                <DxTabbedItem>
                    <DxTabPanelOptions
                        :defer-rendering="false"
                    />
                    <DxTab></DxTab>
                </DxTabbedItem>
            </DxForm>
        </DxEditing>
    </DxDataGrid>

##### React

    <!-- tab: App.js -->
    <DataGrid ... >
        <Editing>
            <Form>
                <TabbedItem>
                    <TabPanelOptions deferRendering={false} />
                    <Tab></Tab>
                </Item>
            </Form>
        </Editing>
    </DataGrid>

---