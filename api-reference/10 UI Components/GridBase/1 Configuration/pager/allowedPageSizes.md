---
id: GridBase.Options.pager.allowedPageSizes
acceptValues: 'all' | 'auto'
type: Array<Number, String> | String
default: 'auto'
---
---
##### shortDescription
Specifies the available page sizes in the page size selector.

---
The UI component determines the allowed page sizes depending on the amount of data by default. If you need an option to display all rows on a single page, add *"all"* to the **allowedPageSizes** array. If this is the only element, set **paging**.[pageSize](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/paging/#pageSize) to 0.