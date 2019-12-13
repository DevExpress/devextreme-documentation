---
id: dxForm.getEditor(dataField)
---
---
##### shortDescription
Gets an editor instance. Takes effect only if the form item is visible.

##### return: Editor | undefined
The editor instance.

##### param(dataField): String
The item's [name](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/name.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#name') or [dataField](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField').

---
The following code shows how to get an editor of an item in a group:

    <!--JavaScript-->
    var form = $(function () {
        $("#formContainer").dxForm({
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
            text: "Customize Phone Editor",
            onClick: function (e) {
                var editor = form.getEditor("phone");
                // Customizations go here
            }
        });
    });

[note] This method works only for [predefined editors](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType'), and is unavailable when using a custom [template](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#template').

#####See Also#####
#include common-link-callmethods
- [Change Options at Runtime - Editor Options](/concepts/05%20Widgets/Form/20%20Change%20Options%20at%20Runtime/15%20Editor%20Options.md '/Documentation/Guide/Widgets/Form/Change_Options_at_Runtime/Editor_Options/')
