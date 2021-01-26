---
id: dxForm.itemOption(id, option, value)
---
---
##### shortDescription
Updates the value of a single item property.

##### param(id): String
An item's **name** or path without spaces if the item is in a group or a tab.     
The path may include the group's [name](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem/name.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/#name') or [caption](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem/caption.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/#caption') or the tab's [title](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/TabbedItem/tabs/title.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/TabbedItem/tabs/#title').

##### param(option): String
The option's name.

##### param(value): any
The new property value.

---
The following code shows how to call this method for an item organized in a group:

    <!--JavaScript-->
    $(function () {
        const form = $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            items: ["firstName", "lastName", {
                itemType: "group",
                caption: "Contacts",
                name: "groupName",
                items: ["phone", "email"]
            }]
        }).dxForm("instance");
    });

<!------>

    <!--JavaScript-->
    form.itemOption("groupName.phone", "visible", false);
    // ==== or ====
    form.itemOption("Contacts.phone", "visible", false);


#####See Also#####
#include common-link-callmethods
