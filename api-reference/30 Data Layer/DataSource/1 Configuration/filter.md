---
type: Filter expression
---
---
##### shortDescription
Specifies data filtering conditions.

---
Possible variants:

* Binary filter

        [ "field", "=", 3 ]

* Unary filter

        [ "!", [ "field", "=", 3 ] ]

* Complex filter

        [
            [ "field", "=", 10 ],
            "and",
            [
                [ "otherField", "<", 3 ],
                "or",
                [ "otherField", ">", 11 ]
            ]
        ]

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        filter: [ "count", "<", "10" ]
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
                filter: [ "count", "<", "10" ]
            });
        }
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .DataSourceOptions(dso => dso
            .Filter("[ 'count', '<', '10' ]")
        )
    )

---

[note] Filtering works when inputting a plain data structure only. However, if you need the filtering capability and hierarchical data, transform the plain data using the **DataSource**'s [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') option.

#####See Also#####
- [Filtering](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering')