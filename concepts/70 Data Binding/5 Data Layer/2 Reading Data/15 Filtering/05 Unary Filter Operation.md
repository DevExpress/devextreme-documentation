The unary *not* operation allows you to filter out data matching some conditions.

To specify an unary filter operation, use an array containing the following items.

1. The "!" operator. 
2. The array with matching conditions.

To specify filtering conditions, call the [filter(filterExpr)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#filterfilterExpr') method of the DataSource. Note that filter expression should be included into square brackets.

    <!--JavaScript-->dataSource.filter( ["!", ["value", "=", 3]] );
    dataSource.load().done(function(result) {
        //'result' contains the "First item" and "Second item" items
    });

<!---->

    <!--JavaScript-->dataSource.filter( ["!", ["name", "contains", "st"]] );
    dataSource.load().done(function(result) {
        //'result' contains the "Second item"
    });
