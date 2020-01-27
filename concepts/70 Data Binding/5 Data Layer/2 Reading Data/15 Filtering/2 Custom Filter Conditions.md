A filter expression can also be a function that takes on an item object and returns a Boolean value that determines whether an item satisfies the filtering condition or not.

    <!--JavaScript-->dataSource.filter(function(itemData) {
        return itemData.value > 3 && itemData.name != "Second item";
    });
    dataSource.load().done(function(result) {
        //'result' contains the "First item" item
    });

[Stores](/Documentation/Guide/Data_Layer/Data_Layer/#What_Are_Stores) support the same filter expression syntax as the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').

    <!--JavaScript-->var arrayStore = new DevExpress.data.ArrayStore(data);
    arrayStore
        .load({
            filter: [
                [ "value", "<", 5 ],
                "or",
                [ "value", ">", 5 ]
            ]
        })
        .done(function (result) {
            // 'result' contains the "Second item" and "Last item" items
        });