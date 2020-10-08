---
id: dxDataGrid.Options.export.customizeExcelCell
type: function(options)
deprecated: Since v20.1, we recommend [ExcelJS-based export](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/') which does not use this option.
---
---
##### shortDescription
Customizes an Excel cell after it is created.

##### param(options): Object
Excel cell settings.

##### field(options.backgroundColor): String
The cell background color specified as a *"#RRGGBBAA"* value. <br/> R (red), G (green), B (blue), and A (alpha) are hexadecimal characters (0-9, A-F). A is optional.

##### field(options.component): dxDataGrid
The widget's instance.

##### field(options.fillPatternColor): String
The foreground color of the cell fill pattern specified as a *"#RRGGBBAA"* value. <br/> R (red), G (green), B (blue), and A (alpha) are hexadecimal characters (0-9, A-F). A is optional.

##### field(options.fillPatternType): 'darkDown' | 'darkGray' | 'darkGrid' | 'darkHorizontal' | 'darkTrellis' | 'darkUp' | 'darkVertical' | 'gray0625' | 'gray125' | 'lightDown' | 'lightGray' | 'lightGrid' | 'lightHorizontal' | 'lightTrellis' | 'lightUp' | 'lightVertical' | 'mediumGray' | 'none' | 'solid'
The cell fill pattern.

##### field(options.font): ExcelFont
The cell font.

##### field(options.gridCell): ExcelDataGridCell
A **DataGrid** cell that corresponds to the Excel cell.

##### field(options.horizontalAlignment): 'center' | 'centerContinuous' | 'distributed' | 'fill' | 'general' | 'justify' | 'left' | 'right'
The horizontal cell alignment.

##### field(options.numberFormat): String
The format that specifies how the cell value is displayed.      
Refer to the <a href="https://support.office.com/en-us/article/review-guidelines-for-customizing-a-number-format-c0a1d1fa-d3f4-4018-96b7-9c9354dd99f5" target="_blank">Review guidelines for customizing a number format</a> article for more information.     
Note that you should use `&quot;` instead of `"` to include a text entry. For example, the `0.0&quot; items&quot;` format results in `5` exported as `5 items`.

##### field(options.value): String | Number | Date
The cell value.

##### field(options.verticalAlignment): 'bottom' | 'center' | 'distributed' | 'justify' | 'top'
The vertical cell alignment.

##### field(options.wrapTextEnabled): Boolean
Specifies whether the cell text should be line-wrapped.

---

The following table shows the available fill patterns:

<table id="grid">
  <tr>
  <td>

<table class="dx-table">
    <tr>
        <th>Fill Pattern</th>
        <th>Result</th>
    </tr>
    <tr>
        <td><i>"darkDown"</i></td>
        <td><img src="/images/ExcelExport/FillPatterns/darkDown.png" /></td>
    </tr>
    <tr>
        <td><i>"darkGray"</i></td>
        <td><img src="/images/ExcelExport/FillPatterns/darkGray.png" /></td>
    </tr>
    <tr>
        <td><i>"darkGrid"</i></td>
        <td><img src="/images/ExcelExport/FillPatterns/darkGrid.png" /></td>
    </tr>
    <tr>
        <td><i>"darkHorizontal"</i></td>
        <td><img src="/images/ExcelExport/FillPatterns/darkHorizontal.png" /></td>
    </tr>
    <tr>
        <td><i>"darkTrellis"</i></td>
        <td><img src="/images/ExcelExport/FillPatterns/darkTrellis.png" /></td>
    </tr>
    <tr>
        <td><i>"darkUp"</i></td>
        <td><img src="/images/ExcelExport/FillPatterns/darkUp.png" /></td>
    </tr>
    <tr>
        <td><i>"darkVertical"</i></td>
        <td><img src="/images/ExcelExport/FillPatterns/darkVertical.png" /></td>
    </tr>
    <tr>
        <td><i>"gray0625"</i></td>
        <td><img src="/images/ExcelExport/FillPatterns/gray0625.png" /></td>
    </tr>
    <tr>
        <td><i>"gray125"</i></td>
        <td><img src="/images/ExcelExport/FillPatterns/gray125.png" /></td>
    </tr>
</table>

  </td>
  <td style="padding-left:10px">
  
<table class="dx-table">
    <tr>
        <th>Fill Pattern</th>
        <th>Result</th>
    </tr>
    <tr>
        <td><i>"lightDown"</i></td>
        <td><img src="/images/ExcelExport/FillPatterns/lightDown.png" /></td>
    </tr>
    <tr>
        <td><i>"lightGray"</i></td>
        <td><img src="/images/ExcelExport/FillPatterns/lightGray.png" /></td>
    </tr>
    <tr>
        <td><i>"lightGrid"</i></td>
        <td><img src="/images/ExcelExport/FillPatterns/lightGrid.png" /></td>
    </tr>
    <tr>
        <td><i>"lightHorizontal"</i></td>
        <td><img src="/images/ExcelExport/FillPatterns/lightHorizontal.png" /></td>
    </tr>
    <tr>
        <td><i>"lightTrellis"</i></td>
        <td><img src="/images/ExcelExport/FillPatterns/lightTrellis.png" /></td>
    </tr>
    <tr>
        <td><i>"lightUp"</i></td>
        <td><img src="/images/ExcelExport/FillPatterns/lightUp.png" /></td>
    </tr>
    <tr>
        <td><i>"lightVertical"</i></td>
        <td><img src="/images/ExcelExport/FillPatterns/lightVertical.png" /></td>
    </tr>
    <tr>
        <td><i>"mediumGray"</i></td>
        <td><img src="/images/ExcelExport/FillPatterns/mediumGray.png" /></td>
    </tr>
    <tr>
        <td><i>"solid"</i></td>
        <td><img src="/images/ExcelExport/FillPatterns/solid.png" /></td>
    </tr>
</table>

  </td>
  </tr>
</table>
