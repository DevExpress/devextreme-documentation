---
id: CellRange
type: Object
---
---
##### shortDescription
The coordinates of the exported **DataGrid** in the Excel file.

---     

This object has the following structure: 

    {
        from: { row: 1, column:1 }, 
        to: { row: 4, column: 4 }
    }

The rows in Excel are enumerated with letters. The numeral value in the **row** field in the object above correspond to the position of the letter in the alphabet. The first row matches the "A" row in Excel. 