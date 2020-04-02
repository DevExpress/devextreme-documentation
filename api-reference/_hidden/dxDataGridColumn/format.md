<!-- %fullDescription% -->

Not all formats can be converted to the corresponding Excel format. Review the following list to see the restrictions:

- **Numeric**   
Converted automatically, except for *"largeNumber"* that is exported as the <a href="https://support.office.com/en-us/article/available-number-formats-in-excel-0afe8f52-97db-41f1-b972-4b46e9f1e8d2" target="_blank">General</a> format
- **Currency**  
Converted automatically
- **Date-Time**  
Converted automatically, except for  the *"quarter"* and *"quarterAndYear"* types that are exported as *"shortDate"* and the *"minute"* and *"millisecond"* formats that are exported as *"longTime"*
- **Function**  
Cannot be converted
- [Custom format string](/Documentation/Guide/Common/Value_Formatting/#Format_Widget_Values/Custom_Format_String)   
Cannot be converted

To export unsupported formats, use the valueText parameter of the [customizeText](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#customizeText) callback to export a formatted string.
<!-- import * from "api-reference\_hidden\GridBaseColumn\format.md" -->