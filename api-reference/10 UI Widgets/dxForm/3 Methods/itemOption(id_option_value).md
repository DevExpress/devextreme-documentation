---
##### shortDescription
Updates the value of a single item option.

##### param(id): String
An item's **name** or a path to it.     
The path may include the group's caption or the tab's title.

##### param(option): String
The option's name.

##### param(value): any
The new option value.

---
The following code shows how to call this method for an item organized in a group:

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
    });

<!------>

    <!--JavaScript-->
    form.itemOption("Contacts.phone", "visible", false)


#####See Also#####
#include common-link-callmethods