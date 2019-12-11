To consider the filter expression syntax, begin by creating a sample DataSource.

    <!--JavaScript-->var dataSource = new DevExpress.data.DataSource([
        { name: "First item", value: 5 },
        { name: "Second item", value: 7 },
        { name: "Last item", value: 3 }
    ]);

Filtering conditions are specified as a filter expression, which is a set of filter expressions separated by group operators. The filtering conditions can be defined via the [filter](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/filter.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter') configuration option or the [filter(filterExpr)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#filterfilterExpr') method of the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').

