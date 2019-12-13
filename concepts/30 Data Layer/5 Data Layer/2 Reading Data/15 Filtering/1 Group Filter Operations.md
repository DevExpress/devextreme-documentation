To combine several binary operations, use group operators **"and"** or **"or"**.

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

    <!--JavaScript-->dataSource.filter([
        [ "value", ">", 3 ],
        "and",
        [ "value", "<", 7 ]
    ]);

is equal to

    <!--JavaScript-->dataSource.filter([
        [ "value", ">", 3 ],
        [ "value", "<", 7 ]
    ]);

The operator priority depends on the implementation of the underlying [Store](/Documentation/Guide/Data_Layer/Data_Layer/#What_Are_Stores), or you can define the operator priority enclosing the required expression into square brackets. 

    <!--JavaScript-->dataSource.filter([
        ["name", "notcontains", "Second"],
        "and", //calculated second
        [
            [ "value", "<", 4 ],
            "or", //calculated first
            [ "value", ">", 6 ]
        ]
    ]);