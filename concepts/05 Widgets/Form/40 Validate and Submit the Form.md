The **Form** UI component uses the built-in validation engine to validate form item values. You can attach validation rules to a simple item using its [validationRules](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#validationRules') option when you [create items explicitly](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items/01%20Create%20a%20Simple%20Item.md '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/#Create_a_Simple_Item')...

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart"
            },
            items: [{
                dataField: "firstName",
                validationRules: [{
                    type: "required",
                    message: "First Name is required"
                }, {
                    type: "pattern",
                    pattern: "^[a-zA-Z]+$",
                    message: "The name should not contain digits"
                }]
            },
            // ...
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form [(formData)]="employee">
        <dxi-item dataField="firstName">
            <dxi-validation-rule
                type="required"
                message="First Name is required">
            </dxi-validation-rule>
            <dxi-validation-rule
                type="pattern"
                pattern="^[a-zA-Z]+$"
                message="The name should not contain digits">
            </dxi-validation-rule>
        </dxi-item>
        <!-- ... -->
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart"
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm :form-data="employee">
            <DxSimpleItem data-field="firstName">
                <DxRequiredRule
                    message="First Name is required"
                />
                <DxPatternRule
                    pattern="^[a-zA-Z]+$"
                    message="The name should not contain digits"
                />
            </DxSimpleItem>
            <!-- ... -->
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxForm, {
        DxSimpleItem,
        DxRequiredRule,
        DxPatternRule
    } from 'devextreme-vue/form';

    export default {
        components: {
            DxForm,
            DxSimpleItem,
            DxRequiredRule,
            DxPatternRule
        },
        data() {
            return {
                employee: {
                    firstName: 'John',
                    lastName: 'Heart'
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

    import Form, {
        SimpleItem,
        RequiredRule,
        PatternRule
    } from 'devextreme-react/form';

    class App extends React.Component {
        employee: {
            firstName: 'John',
            lastName: 'Heart'
        }

        render() {
            return (
                <Form
                    formData={this.employee}>
                    <SimpleItem dataField="firstName">
                        <RequiredRule
                            message="First Name is required"
                        />
                        <PatternRule
                            pattern="^[a-zA-Z]+$"
                            message="The name should not contain digits"
                        />
                    </SimpleItem>
                    {/* ... */}
                </Form>
            );
        }
    }
    export default App;

---

... or when you [customize automatically generated items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items/05%20Customize%20a%20Simple%20Item.md '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/#Customize_a_Simple_Item').

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart"
            },
            customizeItem: function(item) {
                if(item.dataField === "FirstName" || item.dataField === "LastName") {
                    item.validationRules = [{
                        type: "required",
                        message: "The value is required"
                    }, {
                        type: "pattern",
                        pattern: "^[a-zA-Z]+$",
                        message: "The value should not contain digits"
                    }]
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [customizeItem]="form_customizeItem">
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart"
        }
        form_customizeItem (item) {
            if (item.dataField === "FirstName" || item.dataField === "LastName") {
                item.validationRules = [{
                    type: "required",
                    message: "The value is required"
                }, {
                    type: "pattern",
                    pattern: "^[a-zA-Z]+$",
                    message: "The value should not contain digits"
                }]
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm
            :form-data="employee"
            :customize-item="form_customizeItem">
        </DxForm>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxForm from 'devextreme-vue/form';

    export default {
        components: {
            DxForm
        },
        data() {
            return {
                employee: {
                    firstName: 'John',
                    lastName: 'Heart'
                }
            }
        },
        methods: {
            form_customizeItem (item) {
                if (item.dataField === "FirstName" || item.dataField === "LastName") {
                    item.validationRules = [{
                        type: "required",
                        message: "The value is required"
                    }, {
                        type: "pattern",
                        pattern: "^[a-zA-Z]+$",
                        message: "The value should not contain digits"
                    }]
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

    import Form from 'devextreme-react/form';

    class App extends React.Component {
        employee: {
            firstName: 'John',
            lastName: 'Heart'
        }

        customizeItem(item) {
            if (item.dataField === "FirstName" || item.dataField === "LastName") {
                item.validationRules = [{
                    type: "required",
                    message: "The value is required"
                }, {
                    type: "pattern",
                    pattern: "^[a-zA-Z]+$",
                    message: "The value should not contain digits"
                }]
            }
        }

        render() {
            return (
                <Form
                    formData={this.employee}
                    customizeItem={this.customizeItem}>
                </Form>
            );
        }
    }
    export default App;

---

[note] The [RequiredRule](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/RequiredRule '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RequiredRule/') is attached to a form item implicitly if this item's [isRequired](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/isRequired.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#isRequired') option is set to **true**.

A single **Form** editor is validated individually once its value changes. If the value fails to pass the validation check, the editor displays an error message. Note that you can also call the [validate()](/api-reference/10%20UI%20Widgets/dxForm/3%20Methods/validate().md '/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#validate') method to validate all **Form** editors simultaneously. In this case, the **Form** can display all validation errors at the bottom if you set the [showValidationSummary](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/showValidationSummary.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#showValidationSummary') option to **true**. 

<div class="simulator-desktop-container" data-view="/Content/Applications/20_2/UIWidgets/dxForm/Validation/markup.html, /Content/Applications/20_2/UIWidgets/dxForm/Validation/script.js, /Content/Applications/20_2/UIWidgets/dxForm/common-styles.css"></div>

Usually, **Form** editors should be submitted to the server after being successfully validated on the client. The following code shows how to do this using a [button form item](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/ButtonItem '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/ButtonItem/'). Note that the **Form** UI component is wrapped in the <a href="http://www.w3schools.com/html/html_forms.asp" target="_blank">`<form>`</a> tag in the markup.

---
##### jQuery

    <!--HTML--><form action="/Login" method="post">
        <div id="formWidget"></div>
    </form>

    <!--JavaScript-->
    $(function () {
        $("#formWidget").dxForm({
            // ...
            validationGroup: "groupName",
            items: [{
                itemType: "button",
                buttonOptions: {
                    text: "Submit the Form",
                    useSubmitBehavior: true
                }
            },
            // ...
            ]
        });
    });

##### Angular

    <!--HTML-->
    <form action="/Login" method="post">
        <dx-form ...
            validationGroup="groupName">
            <dxi-item 
                itemType="button"
                [buttonOptions]="buttonOptions">
            </dxi-item>
        </dx-form>
    </form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        buttonOptions = {
            text: "Submit the Form",
            useSubmitBehavior: true
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <form action="/Login" method="post">
            <DxForm ...
                validation-group="groupName">
                <!-- ... -->
                <DxButtonItem>
                    <DxButtonOptions
                        text="Submit the Form"
                        :use-submit-behavior="true"
                    />
                </DxButtonItem>
            </DxForm>
        </form>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxForm, {
        DxButtonItem,
        DxButtonOptions
    } from 'devextreme-vue/form';

    export default {
        components: {
            DxForm,
            DxButtonItem,
            DxButtonOptions
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Form, {
        ButtonItem,
        ButtonOptions
    } from 'devextreme-react/form';

    class App extends React.Component {
        render() {
            return (
                <form action="/Login" method="post">
                    <Form ...
                        validationGroup="groupName">
                        {/* ... */}
                        <ButtonItem>
                            <ButtonOptions
                                text="Submit the Form"
                                useSubmitBehavior={true}
                            />
                        </ButtonItem>
                    </Form>
                </form>
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Validation/"
}

#####See Also#####
- [Data Validation](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation '/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/')
- <a href="https://docs.devexpress.com/AspNetCore/400576/devextreme-based-controls/concepts/data-validation#validate-and-submit-the-form-control" target="_blank">ASP.NET MVC Controls - Validate and Submit the Form Control</a>
- [Button - Validate and Submit an HTML Form](/concepts/05%20Widgets/Button/10%20Validate%20and%20Submit%20an%20HTML%20Form.md '/Documentation/Guide/Widgets/Button/Validate_and_Submit_an_HTML_Form/')

[tags]form, validation, validation rules, validate, validation summary, validation group, validationGroup, submit form, submit behavior
