To change the options of an editor, get its instance first using the [getEditor(field)](/api-reference/10%20UI%20Widgets/dxForm/3%20Methods/getEditor(field).md '/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#getEditorfield') method. After that, call the **option(optionName, optionValue)** or **option(optionName, options)** method of this instance. 

    <!--JavaScript-->
    $(function() {
        var form = $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            }
        }).dxForm("instance");

        $("#buttonContainer").dxButton({
            text: "Disable the First Name Editor",
            onClick: function () {
                form.getEditor("firstName")
                    .option("disabled", true);
            }
        });
    });

[note]The **getEditor(field)** method is available for visible form items only.

#####See Also#####
- [Call Methods - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/10%20Call%20Methods.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/')
- [Call Methods - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/10%20Call%20Methods.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/')
- [Call Methods - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/10%20Call%20Methods.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/')
- [Form - Change Item Options at Runtime](/concepts/05%20Widgets/Form/20%20Change%20Options%20at%20Runtime/10%20Item%20Options.md '/Documentation/Guide/Widgets/Form/Change_Options_at_Runtime/Item_Options/')
- [Form - Configure Simple Items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/')
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-grouped_fields)
- [Form API Reference](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/')

[tags]form, get editor, change editor options