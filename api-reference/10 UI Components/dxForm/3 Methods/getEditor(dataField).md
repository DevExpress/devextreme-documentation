---
id: dxForm.getEditor(dataField)
---
---
##### shortDescription
Gets an editor instance. Takes effect only if the form item is visible.

##### return: Editor | undefined
The editor instance.

##### param(dataField): String
The item's [name](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/name.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#name') or [dataField](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#dataField').

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

[note] This method works only for [predefined editors](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorType'), and is unavailable when using a custom [template](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#template').

#####See Also#####
#include common-link-callmethods
- [Change Properties at Runtime - Editor Properties](/concepts/05%20UI%20Components/Form/20%20Change%20Properties%20at%20Runtime/15%20Editor%20Properties.md '/Documentation/Guide/UI_Components/Form/Change_Properties_at_Runtime/Editor_Properties/')
