<!-- %fullDescription% -->
The following predefined **format**.[types](/Documentation/ApiReference/Common/Object_Structures/format/#type) are automatically converted to XLSX format string when exporting to Excel:

- Numeric Formats (except for *"largeNumber"* that is exported as a blank cell)
- Currency Formats
- Date-Time Formats (The *"quarter"* and *"quarterAndYear"* types will be exported as *"shortDate"*. The *"minute"* and *"millisecond"* types will be exported as *"longTime"*)

Other [formats](/Documentation/ApiReference/Common/Object_Structures/format/) - *"function"* and [custom format string](/Documentation/Guide/Common/Value_Formatting/#Format_Widget_Values/Custom_Format_String) are not converted  to XLSX format string. To export these formats, use the *"fixedPoint"* predefined format to get the same formatting in the XLSX file:

    format: {  
        type: 'fixedPoint',  
        precision: 2  
    } 

You can also configure XLSX format string settings manually in the **numberFormat** property of the **options** object in the [customizeExcelCell](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#customizeExcelCell) callback.
<!-- import * from "api-reference\_hidden\GridBaseColumn\format.md" -->