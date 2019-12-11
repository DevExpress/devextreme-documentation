All collection container widgets include the **dataSource** option, which takes on an array of items, or a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance. Using a **DataSource** instance gives you a great advantage, because it can access data whether it is stored in an in-memory array, local storage or remote data service. Whatever data source you use, you can always access data currently displayed by a collection container widget using the **items** option.

    <!--JavaScript-->
    var myDataSource = new DevExpress.data.DataSource("http://www.example.com/dataservices/jsondata"),
    var listOptions = { dataSource: myDataSource }

For detailed information on working with data, refer to the [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/') and [Data Source Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Layer/Data_Source_Examples/') documentation sections.

In MVVM approach, if you are using a collection widget to display several items, which are not bound to a data source, you may use the [dxItem](/api-reference/10%20UI%20Widgets/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Widgets/Markup_Components/#dxItem') markup component. This approach enables you to define individual markup for each item.

#####AngularJS Approach#####

    <!--HTML-->
    <div dx-list="{}" >
        <div data-options="dxItem: {}">
            <!--First item markup-->
        </div>
        <div data-options="dxItem: {}">
            <!--Second item markup-->
        </div>
        <div data-options="dxItem: { disabled: true }">
            <!--Third item markup-->
        </div>
        . . .
    </div>

#####Knockout Approach#####

    <!--HTML-->
    <div data-bind="dxList" >
        <div data-options="dxItem: {}">
            <!--First item markup-->
        </div>
        <div data-options="dxItem: {}">
            <!--Second item markup-->
        </div>
        <div data-options="dxItem: { disabled: true }">
            <!--Third item markup-->
        </div>
        . . .
    </div>