By default, the DataSource loads items by pages. Page size is determined by the [pageSize](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/pageSize.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize') configuration option of the DataSource. 

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        pageSize: 30,
        . . .
    });

The current page index can be accessed and modified via the [pageIndex()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/pageIndex().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#pageIndex') and [pageIndex(newIndex)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/pageIndex(newIndex).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#pageIndexnewIndex') methods respectively. 

    <!--JavaScript-->
    dataSource.pageIndex(1); // Switch to the next page
    dataSource.load();

To disable paging, assign **false** to the [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') configuration option of the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        paginate: false,
        . . .
    });