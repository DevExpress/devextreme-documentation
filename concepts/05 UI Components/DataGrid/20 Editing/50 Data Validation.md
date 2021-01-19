User input is validated against a set of [validation rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/'). You can configure them in a column's [validationRules](/api-reference/_hidden/GridBaseColumn/validationRules.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#validationRules') array. Validation rules are attached to the editors and do not depend on the current edit mode.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "Full_Name",
                validationRules: [{ type: "required" }]
            }, {
                dataField: "Login",
                validationRules: [{ 
                    type: "stringLength", 
                    min: 3, 
                    message: "Login should be at least 3 symbols long" 
                }]
            },
            // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column dataField="Full_Name">
            <dxi-validation-rule type="required"></dxi-validation-rule>
        </dxi-column>
        <dxi-column dataField="Login">
            <dxi-validation-rule
                type="stringLength"
                [min]="3"
                message="Login should be at least 3 symbols long" >
            </dxi-validation-rule>
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn data-field="Full_Name">
                <DxRequiredRule />
            </DxColumn>
            <DxColumn data-field="Login">
                <DxStringLengthRule
                    :min="3"
                    message="Login should be at least 3 symbols long"
                />
            </DxColumn>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn,
        DxRequiredRule,
        DxStringLengthRule
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            DxRequiredRule,
            DxStringLengthRule
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column,
        RequiredRule,
        StringLengthRule
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Column dataField="Full_Name">
                        <RequiredRule />
                    </Column>
                    <Column dataField="Login">
                        <StringLengthRule
                            min={3}
                            message="Login should be at least 3 symbols long"
                        />
                    </Column>
                </DataGrid>
            );
        }
    }
    export default App;

    
---

The [onRowValidating](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowValidating.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowValidating') handler allows you to perform an action before a notification that a validation rule has been broken is displayed. For instance, you can perform additional checks in this handler and change the validation result by changing the handler parameter's **isValid** field. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            onRowValidating: function (e) {
                if (e.isValid && e.newData.Login === "Administrator") {
                    e.isValid = false;
                    e.errorText = "Your cannot log in as Administrator";
                }
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        denyAdminLogin (e) {
            if (e.isValid && e.newData.Login === "Administrator") {
                e.isValid = false;
                e.errorText = "Your cannot log in as Administrator";
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ...
        (onRowValidating)="denyAdminLogin($event)">
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            @row-validating="denyAdminLogin">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        methods: {
            denyAdminLogin(e) {
                if(e.isValid && e.newData.Login === "Administrator") {
                    e.isValid = false;
                    e.errorText = "Your cannot log in as Administrator";
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    class App extends React.Component {
        denyAdminLogin(e) {
            if(e.isValid && e.newData.Login === "Administrator") {
                e.isValid = false;
                e.errorText = "Your cannot log in as Administrator";
            }
        }

        render() {
            return (
                <DataGrid ...
                    onRowValidating={this.denyAdminLogin}>
                </DataGrid>
            );
        }
    }
    export default App;
    
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/DataValidation/"
}

#####See Also#####
- [Data Validation](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation '/Documentation/Guide/UI_Components/Common/UI_Widgets/Data_Validation/')



