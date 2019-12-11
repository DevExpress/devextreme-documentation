---
default: true
type: Boolean
---
---
##### shortDescription
Specifies whether HTML tags are displayed as plain text or applied to the values of the column.

---
By default, the values of a data source field are displayed in a column as plain text, which is sufficient in most cases. But if your data source contains text marked up with HTML tags, you may want these tags to be applied. In this case, set the **encodeHtml** property of the column to *false*.