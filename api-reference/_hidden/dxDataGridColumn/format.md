<!-- %fullDescription% -->
        
The following predefined [formats](/Documentation/ApiReference/Common/Object_Structures/format/#type) are automatically converted to the corresponding <a href="https://support.office.com/en-us/article/available-number-formats-in-excel-0afe8f52-97db-41f1-b972-4b46e9f1e8d2" _target="_blank">Excel format</a> when exporting to Excel:

- Numeric Formats (except for *"largeNumber"* that is exported as the <a href="https://support.office.com/en-us/article/available-number-formats-in-excel-0afe8f52-97db-41f1-b972-4b46e9f1e8d2" arget="_blank">General</a> format)
- Currency Formats
- Date-Time Formats (The *"quarter"* and *"quarterAndYear"* types will be exported as *"shortDate"*. The *"minute"* and *"millisecond"* types will be exported as *"longTime"*)

Other [formats](/Documentation/ApiReference/Common/Object_Structures/format/) - *"function"* and [custom format string](/Documentation/Guide/Common/Value_Formatting/#Format_Widget_Values/Custom_Format_String) are not converted  to XLSX format string. To export these formats, customize cell values using the [customizeExcelCell](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#customizeExcelCell) callback.
<!-- import * from "api-reference\_hidden\GridBaseColumn\format.md" -->