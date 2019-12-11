<article>
The **Form** widget uses the **DevExtreme validation engine** to validate form item values. You can specify validation rules for each form item using the [validationRules](/api-reference/10%20UI%20Widgets/dxForm/5%20Simple%20Item/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxForm/Simple_Item/#validationRules') option of the item. You can specify validation rules when defining form items manually,

#####See Also#####
- [Validation Engine](/concepts/10%20UI%20Widgets/80%20Common/20%20Validation '/Documentation/Guide/UI_Widgets/Common/Validation/')
- [Validation Engine - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/25%20Validation%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Validation_-_MVVM_Approach/')

<!---->

    <!--JavaScript-->
    var formOptions = {
        formData: employeeData,
        items: [
            {
                dataField: "FirstName",
                validationRules: [
                    {
                        type: "required",
                        message: "First Name is required"
                    },
                    {
                        type: "pattern",
                        pattern: "^[a-zA-Z]+$",
                        message: "The name should not contain digits"
                    }
                ]
            },
            . . .
        ]
    }

or when customizing automatically generated items.

    <!--JavaScript-->
    var formOptions = {
        formData: employeeData,
        customizeItem: function(item){
            if(item.dataField === "FirstName" || item.dataField === "LastName"){
                item.validationRules = [
                    {
                        type: "required",
                        message: "The value is required"
                    },
                    {
                        type: "pattern",
                        pattern: "^[a-zA-Z]+$",
                        message: "The value should not contain digits"
                    }
                ]
            }
            . . .
        }
    }

The [RequiredRule](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/RequiredRule '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RequiredRule/') validation rule is automatically applied to a form item, if the [isRequired](/api-reference/10%20UI%20Widgets/dxForm/5%20Simple%20Item/isRequired.md '/Documentation/ApiReference/UI_Widgets/dxForm/Simple_Item/#isRequired') option of this item is set to *true*.

    var formOptions = {
        formData: employeeData,
        items: [
            {
                dataField: "FirstName",
                isRequired: true
            },
            . . .
        ]
    }

Each editor of the form is automatically validated when its value has been updated. However, you can validate the entire form using the [validate()](/api-reference/10%20UI%20Widgets/dxForm/3%20Methods/validate().md '/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#validate') method. Once the form has been validated, validation information is displayed at each editor that does not satisfy validation rules. In addition, if you assign *true* to the [showValidationSummary](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/showValidationSummary.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#showValidationSummary') option, the widget displays validation summary at the bottom of the form.

    <!--JavaScript-->
    // Get form instance
    . . .
    formInstance.validate();

<div class="simulator-desktop-container" data-view="Content/Applications/16_1/UIWidgets/dxForm/Validation/markup.html, Content/Applications/16_1/UIWidgets/dxForm/Validation/script.js, Content/Applications/16_1/UIWidgets/dxForm/common-styles.css"></div>
</article>