The **DeferRendering** is a widget that waits for its content to be ready before rendering it. While the content is getting ready, the **DeferRendering** displays a loading indicator.

[note]The **DeferRendering** widget is designed for applications built using the [DevExtreme SPA Framework](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts '/Documentation/Guide/SPA_Framework/Views_and_Layouts/'). Bear in mind that code examples in this section are supposed to be used in the SPA Framework environment.

In the following example, the [List](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/') widget is populated with remote data. While this data is being loaded, the **DeferRendering** widget displays a loading indicator. Note that the **DeferRendering** requires its [renderWhen](/api-reference/10%20UI%20Widgets/dxDeferRendering/1%20Configuration/renderWhen.md '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#renderWhen') option to be set to a [jQuery.Promise](https://api.jquery.com/Types/#Promise). The content of the **DeferRendering** will be shown once the Deferred of this Promise is [resolved](https://api.jquery.com/deferred.resolve).

    <!--HTML--><div data-options="dxView: { name: 'Products', title: 'Products' }">
        <div data-options="dxContent: { targetPlaceholder: 'content' }" data-bind="dxDeferRendering: {
            showLoadIndicator: true,
            renderWhen: isReady
        }">             
            <div data-bind="dxList: {
                dataSource: productList
            }"></div>
        </div>
    </div>

<!---->

    <!--JavaScript-->MyApp.Products = function(params, viewInfo) {
        var isReady = $.Deferred();
        return {
            isReady: isReady.promise(),
            productList: db.Products,
            viewShown: function() {
                productList.load().done(function() {
                    isReady.resolve();
                });
            }
        };   
    };

#####See Also#####
- [SPA Framework - Views and Layouts](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts '/Documentation/Guide/SPA_Framework/Views_and_Layouts/')
- [DeferRendering - Indicate the Loading State](/concepts/05%20Widgets/DeferRendering/05%20Indicate%20the%20Loading%20State.md '/Documentation/Guide/Widgets/DeferRendering/Indicate_the_Loading_State/')
- [DeferRendering - Animate the Content Appearance](/concepts/05%20Widgets/DeferRendering/10%20Animate%20the%20Content%20Appearance.md '/Documentation/Guide/Widgets/DeferRendering/Animate_the_Content_Appearance/')
- [DeferRendering API Reference](/api-reference/10%20UI%20Widgets/dxDeferRendering '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/')

[tags]deferRendering, defer rendering, overview