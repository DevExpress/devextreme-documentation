---
default: false
type: boolean
---
---
##### shortDescription
Specifies whether or not a user can nullify values of a lookup column.

---
By default, when editing, a user cannot assign *null* to a cell of a lookup column. But if your data source accepts null values, set the **lookup** | **allowClearing** option to *true* for the column. In this case, a cell of a lookup column in the editing state is supplied with a button that nullifies this cell's value.