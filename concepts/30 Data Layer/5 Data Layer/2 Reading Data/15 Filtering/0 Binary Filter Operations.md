To specify a binary filter operation, use an array containing the following items.

1. The [getter](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters') by which data items are filtered.
2. The comparison operator. The available operators are: **"="**, **"<>"**, **">"**, **">="**, **"<"**, **"<="**, **"startswith"**, **"endswith"**, **"contains"**, **"notcontains"**.
3. The value to which the getter value is compared.

To specify filtering conditions, call the [filter(filterExpr)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/filter(filterExpr).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#filterfilterExpr') method of the DataSource. If a filter expression consists of a single binary operation, you can either pass an array of the items described above, or you can pass those items as separate arguments.

    <!--JavaScript-->dataSource.filter("value", ">", 3);
    dataSource.load().done(function(result) {
        //'result' contains the "First item" and "Second item" items
    });

<!---->

    <!--JavaScript-->dataSource.filter("name", "contains", "st");
    dataSource.load().done(function(result) {
        //'result' contains the "First item" and "Last item" items
    });

The second item of the filter expression array is optional. You can specify only the [getter](/concepts/30%20Data%20Layer/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters') and the value. The default operator is "=".

    <!--JavaScript-->dataSource.filter("value", "=", 3);

is equal to

    <!--JavaScript-->dataSource.filter("value", 3);