---
default: undefined
type: String | function(data)
---
---
##### shortDescription
Specifies the data source field whose values must be displayed.

##### param(data): Object
A row's data.

---
This option accepts a string - the name of the data field that provides displayed values, or a function that returns the displayed value, combined from values of several data fields.

[note]

Values in a lookup column are sorted by the **valueExpr** field. Implement the column's [calculateSortValue](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/calculateSortValue.md '{basewidgetpath}/Configuration/columns/#calculateSortValue') function if you want to sort by the **displayExpr** field instead:

---

##### jQuery

    <!--JavaScript-->columns: [{
        // ...
        lookup: {
            // ...
        },
        calculateSortValue: function (data) {
            var value = this.calculateCellValue(data);
            return this.lookup.calculateCellValue(value);
        }
    }]

##### Angular

    <!--HTML-->
    <dxi-column
        ...
        [calculateSortValue]="calculateSortValue">
        <dxo-lookup ... ></dxo-lookup>
    </dxi-column>

    <!--TypeScript-->
    export class AppComponent {
        calculateSortValue (data) {
            let column = this as any;
            let value = column.calculateCellValue(data);
            return column.lookup.calculateCellValue(value);
        }
    }
    
---

[/note]