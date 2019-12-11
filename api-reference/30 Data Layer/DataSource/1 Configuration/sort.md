---
type: Sort expression
---
---
##### shortDescription
Specifies the initial **sort** option value.

---
For information on **sort** expressions, refer to the [Sorting](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/1%20Sorting.md '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting') section of the Data Layer article.

In an [ASP.NET MVC Control](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/'), specify this option in the following manner:

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .DataSourceOptions(dso => dso
            .Sort("Discount", false) // for a single sorting condition
            // === or ===
            .Sort(s => {             // for multiple sorting conditions
                s.AddSorting("LastName");
                s.AddSorting("Discount", false);
            })
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().WidgetName() _
        .DataSourceOptions(Sub(dso)
            dso.Sort("Discount", False) ' for a single sorting condition
            ' === or ===
            dso.Sort(Sub(s)             ' for multiple sorting conditions
                s.AddSorting("LastName")
                s.AddSorting("Discount", False)
            End Sub)
        End Sub)
    )