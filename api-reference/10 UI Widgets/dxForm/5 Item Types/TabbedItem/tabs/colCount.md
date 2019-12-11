---
default: 1
type: Number
---
---
##### shortDescription
The count of columns in the tab layout.

---
[note]

For extra small screens, this option always equals *1* to make the widget adaptive. Specify the [colCountByScreen](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/colCountByScreen/) option to override this logic.

    <!--JavaScript-->
    $(function(){
        $("#formContainer").dxForm({
			// ...
			items: [{
				itemType: "tabbed",
				tabs: [ ... ],
				colCountByScreen: {
					xs: 2
				}
			},
			// ...
			]
        });
    });

[/note]