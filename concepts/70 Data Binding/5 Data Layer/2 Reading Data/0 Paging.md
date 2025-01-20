DataSource loads items by pages. The [pageSize](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/pageSize.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize') configuration property determines the page size.

    <!--JavaScript-->
    const dataSource = new DevExpress.data.DataSource({
        pageSize: 30,
        . . .
    });

Access and change the current page index with the [pageIndex()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/pageIndex().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#pageIndex') and [pageIndex(newIndex)](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/pageIndex(newIndex).md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#pageIndexnewIndex') methods.

    <!--JavaScript-->
    dataSource.pageIndex(1); // Switch to the next page
    dataSource.load();

To disable paging, assign **false** to the [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') configuration property of the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').

    <!--JavaScript-->
    const dataSource = new DevExpress.data.DataSource({
        paginate: false,
        . . .
    });