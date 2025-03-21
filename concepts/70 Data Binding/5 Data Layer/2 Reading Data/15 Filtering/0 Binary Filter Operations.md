To specify a binary filter operation, use an array containing the following items:

1. The [getter](/concepts/70%20Data%20Binding/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Binding/Data_Layer/#Getters_And_Setters') that filters data items.
2. The comparison operator. The following options are available:    
    - **"="**
    - **"<>"**
    - **">"**
    - **">="**
    - **"<"**
    - **"<="**
    - **"startswith"**
    - **"endswith"**
    - **"contains"**
    - **"notcontains"**
3. The comparison value.

Call the [filter(filterExpr)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/filter(filterExpr).md) method of the DataSource to specify filtering conditions. For a single binary operation in the filter expression, pass the items as an array or as separate arguments.

    <!--JavaScript-->dataSource.filter("value", ">", 3);
    dataSource.load().done(function(result) {
        //'result' contains the "First item" and "Second item" items
    });

<!---->

    <!--JavaScript-->dataSource.filter("name", "contains", "st");
    dataSource.load().done(function(result) {
        //'result' contains the "First item" and "Last item" items
    });

The second item of the filter expression array is optional. You can specify only the [getter](/concepts/70%20Data%20Binding/5%20Data%20Layer/9%20Getters%20And%20Setters '/Documentation/Guide/Data_Binding/Data_Layer/#Getters_And_Setters') and the value. The default operator is **"="**.

    <!--JavaScript-->// The following filter expressions are equal
    dataSource.filter("value", "=", 3);
    
    dataSource.filter("value", 3);