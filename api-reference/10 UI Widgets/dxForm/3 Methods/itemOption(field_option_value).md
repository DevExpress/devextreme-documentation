---
##### shortDescription
Updates the value of a form item option.

##### param(field): String
Specifies the path to the required <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxForm/Configuration#formData">formData</a> field, or the name of the required editor.

##### param(option): String
The name of the option to be updated.

##### param(value): any
The new option value.

---
If the required item is contained in a group or tabbed item, add the group or tab title followed by a dot before the required item name and pass this value to the **field** argument.

    <!--JavaScript-->
    $("#myForm").dxForm("instance").itemOption("MyGroup.MyItem", "visible", false);