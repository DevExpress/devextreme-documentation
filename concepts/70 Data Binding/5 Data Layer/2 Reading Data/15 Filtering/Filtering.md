This section explains filter creation syntax.

[note] Filtering works with a plain data structure only. For filtering hierarchical data, transform the plain data with the **DataSource**'s [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') property.

Create a sample DataSource:

    <!--JavaScript-->const dataSource = new DevExpress.data.DataSource([
        { name: "First item", value: 5 },
        { name: "Second item", value: 7 },
        { name: "Last item", value: 3 }
    ]);

You can use a _filter expression_ to specify filtering conditions (a set of filter expressions separated by group operators). Use the [filter](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') configuration property or the DataSource [filter(filterExpr)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#filterfilterExpr') method to define filtering conditions.