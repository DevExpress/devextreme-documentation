Add a [Button Item](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/ButtonItem '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/ButtonItem/') and set its [useSubmitBehavior](/api-reference/10%20UI%20Components/dxButton/1%20Configuration/useSubmitBehavior.md '/Documentation/ApiReference/UI_Components/dxButton/Configuration/#useSubmitBehavior') property to `true` to submit a form. You can submit the Form to a server only if input validation is successful. 

The **useSubmitBehavior** property requires that you wrap the dxForm in the HTML <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" target="_blank">form</a> element. You should also set the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault" target="_blank">preventDefault</a> property to `true` to override the HTML form submit event as shown in the code example.

The following code shows how to add a submit button, but does not show how to implement the backend. The example displays a confirmation message after the timeout:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#form").dxForm({
            formData: {
                // ...
            },
            colCount: 2,
            items: [{
                itemType: "group",
                caption: "Personal Information",
                colCount: 2,
                items: [{
                    dataField: "name",
                    isRequired: "true"
                }, {
                    dataField: "officeNumber",
                    validationRules: [{
                        type: "numeric"
                    }] 
                }, {
                    dataField: "email",
                    validationRules: [{
                        type: "email"
                    }] 
                }]
            }, {
                itemType: "button",
                buttonOptions: {
                    text: "Submit the Form",
                    useSubmitBehavior: true
                }
            }]
        });

        $("#form-container").on("submit", function(e) {
            setTimeout(function () { 
                alert("Submitted");          
            }, 1000);
            
            e.preventDefault();
        });
    });

    <!-- tab: index.html -->
    <form action="/employee-page" id="form-container">
        <div id="form"></div>
    </form>

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    <form action="/employee-page" id="form-container">
        @(Html.DevExtreme().Form()
            .ColCount(2)
            .Items(FormItems => {
                FormItems.AddGroup().ColCount(2).Caption("Personal Information").Items(MainGroupItems => {
                    MainGroupItems.AddSimple().DataField("Name")
                        .IsRequired(true);
                    MainGroupItems.AddSimple().DataField("OfficeNumber").ValidationRules(r => 
                        Rules.AddNumeric()
                    );
                    MainGroupItems.AddSimple().DataField("Email").ValidationRules(r => 
                        Rules.AddEmail()
                    );
                });
                FormItems.AddButton().ButtonOptions(Button => 
                    Button.Text("Submit the Form").UseSubmitBehavior(true)
                );
            })
        )
    </form>

    <script>
        $('#form-container').on('submit', (e) => {
            setTimeout(() => {
                DevExpress.ui.notify('Submitted', 'success', 2000);
            }, 1000);

            e.preventDefault();
        });
    </script>

##### Angular

    <!-- tab: app.component.html -->
    <form action="/employee-page" (submit)="handleSubmit($event)">
        <dx-form
            [formData]="employee"
            [colCount]="2">
            <dxi-form-item 
                itemType="group" 
                caption="Personal Information"
                [colCount]="2">
                <dxi-form-item dataField="name" [isRequired]="true">
                </dxi-form-item>
                <dxi-form-item dataField="officeNumber">
                    <dxi-form-validation-rule type="numeric">
                    </dxi-form-validation-rule>
                </dxi-form-item>
                <dxi-form-item dataField="email">
                    <dxi-form-validation-rule type="email">
                    </dxi-form-validation-rule>
                </dxi-form-item>
            </dxi-form-item>
            <dxi-form-item 
                itemType="button"
                [buttonOptions]="submitButtonOptions">
            </dxi-form-item>
        </dx-form>
    </form>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        employee = {
            // ...
        }

        submitButtonOptions = {
            text: "Submit the Form",
            useSubmitBehavior: true
        }

        handleSubmit = function(e: Event) {
            setTimeout(() => { 
                alert("Submitted");          
            }, 1000);
            
            e.preventDefault();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <form action="/employee-page" @submit="handleSubmit">
            <DxForm 
                :form-data="employee"
                :col-count="2">
                <DxGroupItem
                    caption="Personal Information"
                    :col-count="2">
                    <DxSimpleItem data-field="name" :is-required="true"/>
                    <DxSimpleItem data-field="officeNumber">
                        <DxNumericRule/>
                    </DxSimpleItem>
                    <DxSimpleItem data-field="email">
                        <DxEmailRule/>
                    </DxSimpleItem>
                </DxGroupItem>
                <DxButtonItem :button-options="submitButtonOptions"/>
            </DxForm>
        </form>
    </template>

    <script setup lang="ts">
    import { DxForm, DxSimpleItem, DxGroupItem, DxButtonItem, DxNumericRule, DxEmailRule } from 'devextreme-vue/form';
    
    const employee = {
        // ...
    };

    const submitButtonOptions = {
        text: "Submit the Form",
        useSubmitBehavior: true
    };

    const handleSubmit = (e: Event): void => {
        setTimeout(() => {
            notify('Submitted', 'success', 2000);
        }, 1000);

        e.preventDefault();
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback } from 'react';
    import { Form, SimpleItem, GroupItem, ButtonItem, NumericRule, EmailRule } from 'devextreme-react/form';

    const employee = {
        // ...
    };

    const submitButtonOptions = {
        text: "Submit the Form",
        useSubmitBehavior: true
    };

    export default function App() {
        const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
            setTimeout(() => {
                notify('Submitted', 'success', 2000);
            }, 1000);

            e.preventDefault();
        }, []);

        return (
            <form action="/employee-page" onSubmit={handleSubmit}>
                <Form
                    formData={employee}
                    colCount={2}>
                    <GroupItem 
                        caption="Personal Information"
                        colCount={2}>
                        <SimpleItem dataField="name" isRequired={true} />
                        <SimpleItem dataField="officeNumber">
                            <NumericRule />
                        </SimpleItem>
                        <SimpleItem dataField="email">
                            <EmailRule />
                        </SimpleItem>
                    </GroupItem>
                    <ButtonItem buttonOptions={submitButtonOptions} />
                </Form>
            </form>
        );
    }

---

Alternatively, if you want to implement custom validation logic, handle the Button [click](/api-reference/10%20UI%20Components/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Components/dxButton/Configuration/#onClick') event:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#form").dxForm({
            // ...
            items: [{
                itemType: "button",
                buttonOptions: {
                    text: "Submit the Form",
                    onClick: function() {
                        const validationResult = formInstance.validate(); // get Form instance beforehand
                        if (validationResult.isValid)
                            document.getElementById("form-container").submit();
                        else
                            alert("Form is invalid");
                    }
                }
            }]
        });
    });

    <!-- tab: index.html -->
    <form action="/employee-page" id="form-container">
        <div id="form"></div>
    </form>

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    <form action="/employee-page" id="form-container">
        @(Html.DevExtreme().Form()
            .ColCount(2)
            .Items(FormItems => {
                @* ... *@
                FormItems.AddButton().ButtonOptions(Button => 
                    Button
                        .Text("Submit the Form")
                        .UseSubmitBehavior(true)
                        .OnClick("handleSubmitButtonClick")
                );
            })
        )
    </form>

    <script>
        function handleSubmitButtonClick() {
            const validationResult = formInstance.validate(); // get Form instance beforehand
            if (validationResult.isValid)
                document.getElementById("form-container").submit();
            else
                alert("Form is invalid");
        }
    </script>

##### Angular

    <!-- tab: app.component.html -->
    <form action="/employee-page" id="form-container">
        <dx-form>
            <dxi-form-item 
                itemType="button"
                [buttonOptions]="submitButtonOptions">
            </dxi-form-item>
        </dx-form>
    </form>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        submitButtonOptions = {
            text: "Submit the Form",
            onClick: function() {
                const validationResult = formInstance.validate(); // get Form instance beforehand
                if (validationResult.isValid)
                    document.getElementById("form-container").submit();
                else
                    alert("Form is invalid");
            }
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <form action="/employee-page" id="form-container">
            <DxForm>
                <DxButtonItem :button-options="submitButtonOptions"/>
            </DxForm>
        </form>
    </template>

    <script setup lang="ts">
    import { DxForm, DxButtonItem } from 'devextreme-vue/form';

    const submitButtonOptions = {
        text: "Submit the Form",
        onClick: function() {
            const validationResult = formInstance.validate(); // get Form instance beforehand
            if (validationResult.isValid)
                document.getElementById("form-container").submit();
            else
                alert("Form is invalid");
        }
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import { Form, ButtonItem } from 'devextreme-react/form';

    const submitButtonOptions = {
        text: "Submit the Form",
        onClick: function() {
            const validationResult = formInstance.validate(); // get Form instance beforehand
            if (validationResult.isValid)
                document.getElementById("form-container").submit();
            else
                alert("Form is invalid");
        }
    };

    export default function App() {
        return (
            <form action="/employee-page" id="form-container">
                <Form ... >
                    <ButtonItem buttonOptions={submitButtonOptions} />
                </Form>
            </form>
        );
    }

[note]

React 19 offers a [useActionState](https://react.dev/reference/react/useActionState) hook that allows you to update state based on a form action result. When you use this hook, [clear](/api-reference/10%20UI%20Components/dxForm/3%20Methods/clear().md '/Documentation/ApiReference/UI_Components/dxForm/Methods/#clear') the Form as the initial step when you implement an action:

    <!-- tab: App.js -->
    import React, { useActionState, useRef } from "react";
    import { Form, SimpleItem, GroupItem, ButtonItem, NumericRule, EmailRule } from "devextreme-react/form";

    const employee = {
        // ...
    };

    const submitButtonOptions = {
        text: "Submit the form",
        useSubmitBehavior: true,
    };

    export default function App() {
        const form = useRef(null);

        const [error, submitAction, isPending] = useActionState(
            async (previousState, formData) => {
                form?.current?.instance?.().clear?.(); // Clear the form
                await new Promise((resolve) => 
                    // Resolve the promise
                );
                if ( ... ) { // Configure when to return an error
                    return new Error("Submitting failed!");
                }
                const fieldValues = Object.fromEntries(formData);
                return fieldValues;
            },
            null
        );

        return (
            <form action={submitAction}>
                <Form ref={form} formData={employee} colCount={1}>
                    <GroupItem caption="Personal Information" colCount={1}>
                        <SimpleItem dataField="name" isRequired={true} />
                        <SimpleItem dataField="officeNumber">
                            <NumericRule />
                        </SimpleItem>
                        <SimpleItem dataField="email">
                            <EmailRule />
                        </SimpleItem>
                    </GroupItem>
                    <ButtonItem
                        horizontalAlignment="left"
                        buttonOptions={{ ...submitButtonOptions, disabled: isPending }}
                    />
                </Form>
            </form>
        );
    }

[/note]

---

For more information on the Form UI component, refer to the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Overview/)
* [API Reference](/api-reference/10%20UI%20Components/dxForm '/Documentation/ApiReference/UI_Components/dxForm/')
