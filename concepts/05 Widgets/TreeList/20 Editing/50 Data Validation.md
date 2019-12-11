The **TreeList** widget uses the build-in validation engine to validate user input. You can attach validation rules using the **columns**.[validationRules](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#validationRules') option which accepts an array of objects with fields described in the [Validation Rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') section. The editor displays an error message if a value fails to pass the validation check.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "Full_Name",
                validationRules: [{ type: "required" }]
            }, {
                dataField: "Login",
                validationRules: [{ 
                    type: "stringLength", 
                    min: 3, 
                    message: "Login should be longer than 3 symbols" 
                }]
            },
            // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column dataField="Full_Name">
            <dxi-validation-rule type="required"></dxi-validation-rule>
        </dxi-column>
        <dxi-column dataField="Login">
            <dxi-validation-rule
                type="stringLength"
                [min]="3"
                message="Login should be longer than 3 symbols" >
            </dxi-validation-rule>
        </dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

The [onRowValidating](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowValidating.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowValidating') handler allows you to interfere before a notification that a validation rule has been broken is displayed. For instance, you can perform additional checks in this handler and change the validation result by changing the **isValid** field of the handler parameter. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
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
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        barAdministratorLogin (e) {
            if (e.isValid && e.newData.Login === "Administrator") {
                e.isValid = false;
                e.errorText = "Your cannot log in as Administrator";
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ...
        (onRowValidating)="barAdministratorLogin($event)">
    </dx-tree-list>
    
---

#####See Also#####
- [Data Validation](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation '/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/')



