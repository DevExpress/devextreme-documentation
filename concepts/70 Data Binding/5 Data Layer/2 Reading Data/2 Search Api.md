[note] Searching works when inputting a plain data structure only. However, if you need the searching capability and hierarchical data, transform the plain data using the **DataSource**'s [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') option.

In addition to filtering capabilities, the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') provides the search API. It is a convenient way to augment filtering by text search. The search API consists of three options: [searchExpr](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchExpr.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr'), [searchOperation](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchOperation.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchOperation'), and [searchValue](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchValue.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchValue').

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        store: [
            { firstName: "John", lastName: "Doe", birthYear: 1970 },
            . . .
        ],
        filter: [ "birthYear" , "<", 2000 ],
        searchExpr: function(dataItem) {
            return dataItem.firstName + " " + dataItem.lastName;
        }
    });

    dataSource.searchValue("doe");
    dataSource.load().done(function(result) {
        //'result' contains items whose birthYear is less then 2000 and firstName or lastName contain "doe"
    });

The default search operation is "contains". It can be changed by providing the DataSource's [searchOperation](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchOperation.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchOperation') configuration option. You can also modify the search API options via the appropriate methods: [searchExpr(expr)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/searchExpr(expr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#searchExprexpr'), [searchOperation(op)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/searchOperation(op).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#searchOperationop'), and [searchValue(value)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/searchValue(value).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#searchValuevalue').
