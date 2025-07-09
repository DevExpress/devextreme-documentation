A filter expression can also be a function that takes an item object and returns a Boolean value that determines whether the item meets the filter condition.

    <!--JavaScript-->dataSource.filter(function(itemData) {
        return itemData.value > 3 && itemData.name != "Second item";
    });
    dataSource.load().done(function(result) {
        //'result' contains the "First item" item
    });

[Stores](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') support the same filter expression syntax as the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').

    <!--JavaScript-->const arrayStore = new DevExpress.data.ArrayStore(data);
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