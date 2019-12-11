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
A function that returns the value to sort by.

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        sort: [
            "Position",
            { selector: "Last_Name", desc: true }
        ],
        /* or as a function
        sort: function(e) {
            // CEOs are always displayed at the top
            if(e.Position == "CEO") 
                return "!";
            else
                return e.Position;
        } */
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
                    "Position",
                    { selector: "Last_Name", desc: true }
                ],
                /* or as a function
                sort: function(e) {
                    // CEOs are always displayed at the top
                    if(e.Position == "CEO") 
                        return "!";
                    else
                        return e.Position;
                } */
            });
        }
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .DataSourceOptions(dso => dso
            .Sort("Position", true) // for sorting by a single field
            // === or ===
            .Sort("sort_function")
            // === or ===
            .Sort(s => {             // for sorting by multiple fields
                s.AddSorting("Position");
                s.AddSorting("Last_Name", true);
            })
        )
    )

    <script type="text/javascript">
        function sort_function(e) {
            // CEOs are always displayed at the top
            if(e.Position == "CEO")
                return "!";
            else
                return e.Position;
        }
    </script>

    <!--Razor VB-->
    @(Html.DevExtreme().WidgetName() _
        .DataSourceOptions(Sub(dso)
            dso.Sort("Position", True) ' for sorting by a single field
            ' === or ===
            dso.Sort("sort_function")
            ' === or ===
            dso.Sort(Sub(s)             ' for sorting by multiple fields
                s.AddSorting("Position")
                s.AddSorting("Last_Name", True)
            End Sub)
        End Sub)
    )

    <script type="text/javascript">
        function sort_function(e) {
            // CEOs are always displayed at the top
            if(e.Position == "CEO")
                return "!";
            else
                return e.Position;
        }
    </script>

---

#####See Also#####
- [Sorting](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/1%20Sorting.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting')