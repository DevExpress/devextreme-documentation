---
id: GridBase.showColumnChooser()
---
---
##### shortDescription
Shows the [column chooser](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnChooser '{basewidgetpath}/Configuration/columnChooser/').

---
If the following conditions are met:

- You use [state storing]({basewidgetpath}/Configuration/stateStoring/).

- **columnChooser**.[enabled]({basewidgetpath}/Configuration/columnChooser/#enabled) is set to `false` (default).

- You call this method.  

Then, column chooser may not update data. To fix this issue, assign `true` to the **columnChooser**.[enabled]({basewidgetpath}/Configuration/columnChooser/#enabled) property. If you still want to hide the default column chooser icon, use the [toolbar]({basewidgetpath}/Configuration/toolbar/items/) option.

#####See Also#####
#include common-link-callmethods
- [hideColumnChooser](/api-reference/10%20UI%20Components/GridBase/3%20Methods/hideColumnChooser().md '{basewidgetpath}/Methods/#hideColumnChooser')