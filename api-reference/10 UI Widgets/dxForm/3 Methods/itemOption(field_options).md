---
##### shortDescription
Updates the values of form item options.

##### param(field): string
Specifies the path to the required <a href="Documentation/ApiReference/UI_Widgets/dxForm/Configuration#formData">formData</a> field, or the name of the required item.

##### param(options): object
A configuration object containing options to be updated and their values.

---
Use this method to update several options of a form item.

If the required item is contained in a group or tabbed item, add the group or tab title followed by a dot before the required item name and pass this value to the **field** argument.

    <!--JavaScript-->
    $("#myForm").dxForm("instance").itemOption("MyGroup.MyItem", {. . .});