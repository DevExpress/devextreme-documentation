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
Set this property to an array of numbers that specify available page sizes. If you want to let users display all records on a single page, add the *"all"* value to this array. The default value *"auto"* means that the component automatically determines available page sizes based on the total number of records.
