---
default: 1
type: Number
---
---
##### shortDescription
The count of columns in the group layout.

---
[note]

For extra small screens, this option always equals *1* to make the widget adaptive. Specify the [colCountByScreen](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/GroupItem/colCountByScreen '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/colCountByScreen/') option to override this logic.

    <!--JavaScript-->
    $(function(){
        $("#formContainer").dxForm({
			// ...
			items: [{
				itemType: "group",
				items: [ ... ],
				colCountByScreen: {
					xs: 2
				}
			},
			// ...
			]
        });
    });

[/note]