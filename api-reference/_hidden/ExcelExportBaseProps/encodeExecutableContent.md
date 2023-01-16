---
id: ExcelExportBaseProps.encodeExecutableContent
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether to encode potentially dangerous content when it is exported to a CSV file.

---
Exported data can contain executable content such as formulas. This content makes it possible to execute malicious commands if a user opens a file in the spreadsheet application and confirms that the file can be loaded and commands executed.

Enable this property to encode formulas into simple data when the content is exported to CSV.