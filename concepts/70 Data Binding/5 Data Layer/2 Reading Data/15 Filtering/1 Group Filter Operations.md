To combine multiple binary operations, use group operators **"and"** or **"or"**.

    <!--JavaScript-->dataSource.filter([
        [ "value", ">", 3 ],
        "and",
        [ "value", "<", 7 ]
    ]);
    dataSource.load().done(function(result) {
        //'result' contains the "First item" item
    });

<!---->

    <!--JavaScript-->dataSource.filter([
        [ "value", "<", 4 ],
        "or",
        [ "value", ">", 6 ]
    ]);
    dataSource.load().done(function(result) {
        //'result' contains the "Second item" and "Last item" items
    });

If neighboring filter expressions are not separated by a group operator, the "and" operator is implied.

    <!--JavaScript-->The following filter conditions are equal
    dataSource.filter([
        [ "value", ">", 3 ],
        "and",
        [ "value", "<", 7 ]
    ]);
    
    dataSource.filter([
        [ "value", ">", 3 ],
        [ "value", "<", 7 ]
    ]);

The operator priority depends on the implementation of the underlying [Store](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores'). Alternatively, enclose the required expression in square brackets to define the operator priority:

    <!--JavaScript-->dataSource.filter([
        ["name", "notcontains", "Second"],
        "and", //calculated second
        [
            [ "value", "<", 4 ],
            "or", //calculated first
            [ "value", ">", 6 ]
        ]
    ]);