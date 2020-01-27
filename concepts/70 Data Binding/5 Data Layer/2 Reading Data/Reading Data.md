Consider data reading possibilities of the data layer on an example of an in-memory array. 

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource([
        { name: "item1" },
        { name: "item2" },
        { name: "item3" }
    ]);

The information given in this section is applicable to any data source. We [use in-memory data](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/From_Array) for the sake of simplicity.

To load data, call the [dataSource.load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method.

    <!--JavaScript-->
    dataSource.load()
        .done(function(result) {
            // 'result' contains the array associated with the DataSource
        })
        .fail(function(error) {
            // handle error
        });

The [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') allows you to specify initial data shaping options (sort, filter, etc.).

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        store: [
            { name: "Charlie", value: 10 },
            { name: "Alice", value: 20 },
            { name: "Bob", value: 30 }
        ],
        filter: [ "value", ">", 15 ],
        sort: { field: "name", desc: true }
    });

In the [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'), [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/') and [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') data shaping operations are applied in the following order: [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) -> [Sorting](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting) -> [Selection](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Select_Expressions) -> [Grouping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping) -> [Paging](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Paging) -> [Item mapping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Item_Mapping) -> [Post processing](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Data_Transformation/Post_Processing).

As for the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/'), data shaping options are passed to the [load(options)](/api-reference/30%20Data%20Layer/Store/3%20Methods/load(options).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#loadoptions') method, which gives you an opportunity to process them in any order you need.
