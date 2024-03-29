---
uid: ui/data_grid:GroupingTexts.groupContinuesMessage
type: String
default: 'Continues on the next page'
---
---
##### shortDescription
Specifies the message displayed in a group row when the corresponding group continues on the next page.

---
<!--
When grid records are grouped, the groups might be parted due to the fact that their sizes do not match the [page size](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/paging/pageSize.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/paging/#pageSize'). In that case, the group row corresponding to a parted group is supplemented with a message notifying the user that the group does not end on the current page. To specify the text of this message, use the **groupContinuesMessage** property.

Additionally, you can specify the message displayed in a group row when the corresponding group is continued from the previous page. Use the **groupContinuedMessage** property for this purpose.

[note]If a group simultaneously continues on the next page and is continued from the previous page, the texts specified by the **groupContinuedMessage** and **groupContinuesMessage** properties will be concatenated.
-->