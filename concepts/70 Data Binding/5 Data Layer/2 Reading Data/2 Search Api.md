[note] You can search plain data structures only. To search hierarchical data, transform the plain data with the **DataSource** [group](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/group.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group') property.

The [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') includes search capabilities alongside filtering. The search API consists of three properties: [searchExpr](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchExpr.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr'), [searchOperation](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchOperation.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchOperation'), and [searchValue](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchValue.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchValue').

    <!--JavaScript-->
    const dataSource = new DevExpress.data.DataSource({
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

The default search operation is "contains". To change the search operation, specify the DataSource [searchOperation](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/searchOperation.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchOperation') property. You can also modify the search API properties with the following methods: 

- [searchExpr(expr)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/searchExpr(expr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#searchExprexpr')
- [searchOperation(op)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/searchOperation(op).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#searchOperationop')
- [searchValue(value)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/searchValue(value).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#searchValuevalue')
