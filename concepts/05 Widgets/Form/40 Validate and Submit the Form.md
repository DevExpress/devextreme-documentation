The **Form** widget uses the built-in validation engine to validate form item values. You can attach validation rules to a simple item using its [validationRules](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#validationRules') option. You can do it when you [create items explicitly](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items/01%20Create%20a%20Simple%20Item.md '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/#Create_a_Simple_Item')...

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
            // . . .
            ]
        });
    });

... or when you [customize automatically generated items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items/05%20Customize%20a%20Simple%20Item.md '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/#Customize_a_Simple_Item').

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

[note] The [RequiredRule](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/RequiredRule '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RequiredRule/') is attached to a form item implicitly if the [isRequired](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/isRequired.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#isRequired') option of this item is set to *true*.

A single **Form** editor is validated individually once its value is changed. If the value fails to pass the validation check, the editor displays an error message. Note that in addition, you can call the [validate()](/api-reference/10%20UI%20Widgets/dxForm/3%20Methods/validate().md '/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#validate') method to validate all **Form** editors at once. In this case, the **Form** can display all occurred validation errors in the bottom, but only if you set the [showValidationSummary](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/showValidationSummary.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#showValidationSummary') option to *true*. 

<div class="simulator-desktop-container" data-view="Content/Applications/16_2/UIWidgets/dxForm/Validation/markup.html, Content/Applications/16_2/UIWidgets/dxForm/Validation/script.js, Content/Applications/16_2/UIWidgets/dxForm/common-styles.css"></div>

Commonly, **Form** editors should be submitted to the server after being successfully validated on the client. This scenario is supported by the [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') widget out of the box. Wrap both **Form** and **Button** widgets in the [`<form>`](https://www.w3schools.com/html/html_forms.asp) tag. Then, bind the **Button** to the inner validation group of the **Form** using the [validationGroup](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/validationGroup.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#validationGroup') option. After that, pass *true* to the [useSubmitBehavior](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/useSubmitBehavior.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#useSubmitBehavior') option of the **Button** to activate the submit behavior. In this case, a click on the **Button** validates all **Form** editors, and if they are valid, submits the HTML form to the server.

    <!--HTML--><form action="/Login" method="post">
        <div id="formWidget"></div>
        <div id="validateSubmitButton"></div>
    </form>

<!---->

    <!--JavaScript-->
    $(function () {
        $("#formWidget").dxForm({
            // ...
            validationGroup: "groupName"
        });
    
        $("#validateSubmitButton").dxButton({
            // ...
            validationGroup: "groupName",
            useSubmitBehavior: true
        });
    });

#####See Also#####
- [Validation Engine](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Validation '/Documentation/Guide/Widgets/Common/UI_Widgets/Validation/')
- [Validation Engine - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/25%20Validation%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Validation_-_MVVM_Approach/')
- [ASP.NET MVC Wrappers - Validate and Submit the Form Widget](/concepts/35%20ASP.NET%20MVC%20Wrappers/35%20Client-Side%20Data%20Validation/28%20Validate%20and%20Submit%20the%20Form%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Client-Side_Data_Validation/Validate_and_Submit_the_Form_Widget/')
- [Button - Validate and Submit an HTML Form](/concepts/05%20Widgets/Button/10%20Validate%20and%20Submit%20an%20HTML%20Form.md '/Documentation/Guide/Widgets/Button/Validate_and_Submit_an_HTML_Form/')
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-overview)
- [Form API Reference](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/')

[tags]form, validation, validation rules, validate, validation summary, validation group, validationGroup, submit form, submit behavior