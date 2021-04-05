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
The component processes the data to determine the page sizes available in the page size selector. Use this property to specify custom page sizes. If you want an additional option to display all rows on a single page, add *"all"* to the **allowedPageSizes** array.
