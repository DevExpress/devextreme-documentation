---
##### shortDescription
Gets the value of the form item option.

##### param(field): string
Specifies the path to the required <a href="Documentation/ApiReference/UI_Widgets/dxForm/Configuration#formData">formData</a> field, or the name of the required item.

##### return: any
The value of an item option.

---
If the required item is contained in a group or tabbed item, add the group or tab title followed by a dot before the required item name, and pass this value to the **field** argument.

    <!--JavaScript-->
    $("#myForm").dxForm("instance").itemOption("MyGroup.MyItem");