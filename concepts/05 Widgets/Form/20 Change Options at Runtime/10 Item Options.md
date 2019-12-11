[note]In this article, the [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') widget is used to change item options. This choice is made for purely demonstrational purposes, and you can do the same operations using another widget following the same guidelines.

To change a single item option at runtime, call the [itemOption(field, option, value)](/api-reference/10%20UI%20Widgets/dxForm/3%20Methods/itemOption(field_option_value).md '/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#itemOptionfield_option_value') method. If the needed item is [in a group](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/05%20In%20Groups '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/') or [in a tab](/concepts/05%20Widgets/Form/10%20Organize%20Simple%20Items/10%20In%20Tabs '/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/'), the *field* parameter should be given the group caption or tab title followed by the item's name. An example is shown below.

    <!--JavaScript-->
    $(function() {
        var form = $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            items: ["firstName", "lastName", {
                itemType: "group",
                caption: "Contacts",
                items: ["phone", "email"]
            }]
        }).dxForm("instance");

        $("#buttonContainer").dxButton({
            text: 'Hide the Phone Number',
            onClick: function () {
                form.itemOption("Contacts.phone", "visible", false);
            }
        });
    });

To change several options at a time, pass an object to the [itemOption(field, options)](/api-reference/10%20UI%20Widgets/dxForm/3%20Methods/itemOption(field_options).md '/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#itemOptionfield_options') method.
Being called with the *field* parameter only, this method returns the current configuration of the specified form item.

    <!--JavaScript-->
    $(function() {
        // ...
        $("#buttonContainer").dxButton({
            text: 'Change the Phone Options',
            onClick: function () {
                form.itemOption("Contacts.phone", {
                    isRequired: true, 
                    helpText: "+1(111)111-1111" 
                });
            }
        });
    });

#####See Also#####
- [Call Methods - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/10%20Call%20Methods.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/')
- [Call Methods - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/10%20Call%20Methods.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/')
- [Call Methods - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/10%20Call%20Methods.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/')
- [Form - Change Editor Options at Runtime](/concepts/05%20Widgets/Form/20%20Change%20Options%20at%20Runtime/15%20Editor%20Options.md '/Documentation/Guide/Widgets/Form/Change_Options_at_Runtime/Editor_Options/')
- [Form - Configure Simple Items](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/')
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-grouped_fields)
- [Form API Reference](/api-reference/10%20UI%20Widgets/dxForm '/Documentation/ApiReference/UI_Widgets/dxForm/')

[tags]form, modify item, item option, change option