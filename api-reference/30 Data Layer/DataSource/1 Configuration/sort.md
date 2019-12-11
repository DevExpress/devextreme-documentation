---
type: Sort expression
---
---
##### shortDescription
Specifies data sorting options.

---
This option accepts one of the following:

- **String**        
The field name to sort by.

- **Object**        
An object with the following fields:

    * **selector**: String    
    The field name to sort by.
    * **desc**: Boolean     
     Sorts the **selector** field in descending order.

- **Array**         
An array of strings and objects described above.

- **Function**      
A function implementing custom sorting logic.

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        sort: [
            "LastName",
            { selector: "Discount", desc: true }
        ]
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // ...
                sort: [
                    "LastName",
                    { selector: "Discount", desc: true }
                ]
            });
        }
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .DataSourceOptions(dso => dso
            .Sort("Discount", true) // for sorting by a single field
            // === or ===
            .Sort(s => {             // for sorting by multiple fields
                s.AddSorting("LastName");
                s.AddSorting("Discount", true);
            })
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().WidgetName() _
        .DataSourceOptions(Sub(dso)
            dso.Sort("Discount", True) ' for sorting by a single field
            ' === or ===
            dso.Sort(Sub(s)             ' for sorting by multiple fields
                s.AddSorting("LastName")
                s.AddSorting("Discount", True)
            End Sub)
        End Sub)
    )

---

#####See Also#####
- [Sorting](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/1%20Sorting.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting')