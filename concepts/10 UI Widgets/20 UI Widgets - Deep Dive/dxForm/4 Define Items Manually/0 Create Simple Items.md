The main item type used in a form is [Simple](/api-reference/10%20UI%20Widgets/dxForm/5%20Simple%20Item '/Documentation/ApiReference/UI_Widgets/dxForm/Simple_Item/'). An item of this type consists of a label and an editor. In addition, a help text can be displayed under the editor.

If you do not need to modify any options of a simple item, you may define this item implicitly using a string instead of a configuration object. The string should contain the name of the data object field associated with the item.

    <!--JavaScript-->
    var formOptions = {
        formData: employeeData,
        items: ["FirstName", "LastName", "Position"]
    }

If the default item configuration does not satisfy your requirements, you should define the required configuration options. The name of the data field associated with the form item is specified using the [dataField](/api-reference/10%20UI%20Widgets/dxForm/5%20Simple%20Item/dataField.md '/Documentation/ApiReference/UI_Widgets/dxForm/Simple_Item/#dataField') option. You can also specify the type of the editor used to edit the field value, the number of columns spanned by the item, help text displayed under the editor, editor validation rules, etc.

    <!--JavaScript-->
    var formOptions = {
        formData: employeeData,
        items: [
            . . .,
            {
                dataField: "Email",
                colSpan: 3,
                label: {
                    text: "E-mail"
                }
            },
            {
                dataField: "Phone",
                colSpan: 3,
                helpText: "Example: +1 (111) 111-1111"
            },
            . . .
        ]
    }

The **Form** widget enables you to customize the appearance of a simple item using an item template. Pass a template name, a template element, or a function rendering a template to the [template](/api-reference/10%20UI%20Widgets/dxForm/5%20Simple%20Item/template.md '/Documentation/ApiReference/UI_Widgets/dxForm/Simple_Item/#template') option of the item. For more information on using templates, refer to the [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/') article.

#####See Also#####
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/') 
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')


For the complete list of simple item configuration options, refer to the [Simple Item](/api-reference/10%20UI%20Widgets/dxForm/5%20Simple%20Item '/Documentation/ApiReference/UI_Widgets/dxForm/Simple_Item/') API reference.