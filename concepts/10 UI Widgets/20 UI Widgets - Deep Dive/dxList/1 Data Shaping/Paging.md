<article data-show="Content/Applications/16_1/UIWidgets/dxList/Paging/markup.html,
        Content/Applications/16_1/UIWidgets/dxList/Paging/script.js,
        Content/Applications/16_1/UIWidgets/dxList/Paging/styles.css">

The **List** widget can display data source items by pages. You can modify paging options using the DataSource instance associated with the widget.

    <!--JavaScript-->
    var listData = new DevExpress.data.DataSource({
        store: [ . . . ], //Specifies data associated with the DataSource instance
        paginate: true, //Specifies whether or not DataSource loads data by pages
        pageSize: 10 //Specifies the number of items contained in a single page
    });
    var listOptions = {
        dataSource: listData
    };

The widget includes the following means used to simplify working with paged data.

- Page load modes  

 If the data source associated with the widget loads data by pages, the **List** widget can automatically add a new page to the end of the list each time the list is scrolled to the bottom or when a user clicks the "next" button, depending on the [pageLoadMode](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/pageLoadMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#pageLoadMode') option value.

        <!--JavaScript-->
        //load next page when the list is scrolled to the bottom
        var listOptions = {
            dataSource: listData,
            pageLoadMode: "scrollBottom"
        };

        //load next page when the next button clicked
        var listOptions = {
            dataSource: listData,
            pageLoadMode: "nextButton"
        };

- Refreshing the list  

 If the list data is displayed by pages, an end-user can refresh the list (clear and load the first page) by the "Pull down to refresh" gesture. You can specify feature availability using the [pullRefreshEnabled](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/pullRefreshEnabled.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#pullRefreshEnabled') option.

        <!--JavaScript-->
        var listOptions = {
            dataSource: listData,
            pullRefreshEnabled: true
        };
</article>