To load data in portions, modify paging options of the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance associated with the widget. Set the [paginate](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') option to *true* and specify the number of items per page using the [pageSize](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/pageSize.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize') option.

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "https://js.devexpress.com/Demos/DevAV/odata/Products"
                },
                select: ["Product_ID", "Product_Name", "Product_Cost"],
                paginate: true,
                pageSize: 5
            }),
            valueExpr: "Product_ID",
            displayExpr: "Product_Name"
        });
    });

By default, the **Lookup** widget loads the next page once the list of items is scrolled down to the bottom. To enable loading on clicking the "Next" button, assign *'nextButton'* to the [pageLoadMode](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/pageLoadMode.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#pageLoadMode') option. To change the text displayed by the "Next" button, use the [nextButtonText](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/nextButtonText.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#nextButtonText') option.

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
             dataSource: new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "https://js.devexpress.com/Demos/DevAV/odata/Products"
                },
                select: ["Product_ID", "Product_Name", "Product_Cost"],
                paginate: true,
                pageSize: 5
            }),
            valueExpr: "Product_ID",
            displayExpr: "Product_Name",
            pageLoadMode: "nextButton",
            nextButtonText: "See more"
        });
    });

#####See Also#####
- [Lookup - Enable Grouping](/concepts/05%20Widgets/Lookup/10%20Enable%20Grouping.md '/Documentation/Guide/Widgets/Lookup/Enable_Grouping/')
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics)
- [Lookup API Reference](/api-reference/10%20UI%20Widgets/dxLookup '/Documentation/ApiReference/UI_Widgets/dxLookup/')

[tags]lookup, paginate, page size, pageSize, loading mode