---
id: ExcelExportBase.Options.encodeExecutableContent
type: Boolean
default: false
---
---
##### shortDescription
Specifies if the CSV export routine saves potentially dangerous content as plain text data.

---
Exported spreadsheet documents can be unsafe because executable content (such as formulas) may include malicious code. A spreadsheet application can execute this code if a user opens such a file and confirms that the application can load and execute dynamic content.

Enable this property to ensure that exported CSV files are safe for loading in third-party spreadsheet applications.