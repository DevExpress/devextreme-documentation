View rendering may take significant time. For instance, there may be a delay while waiting for data from a server or the view content may be so "heavy" that its rendering takes a lot of time. In this instance, an end-user should be notified that view content is being loaded so that the view does not look as broken. To indicate a loading state of a view, use the [DeferRendering](/api-reference/10%20UI%20Widgets/dxDeferRendering '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/') widget. Wrap  the view content that will be shown with a delay by the widget's element.

	<!--HTML--><div data-options="dxView : { name: 'Products', title: 'Products' } " >
		<!--...-->
		<div  data-options="dxContent : { targetPlaceholder: 'content' } " data-bind="dxDeferRendering: { showLoadIndicator: true, renderWhen: isReady }" >             
			  <!--...-->
		</div>
	</div>

<!--...-->

	<!--JavaScript-->MyApp.Products = function(params, viewInfo) {
		var isReady = $.Deferred();
		return {
			isReady: isReady.promise(),
			viewShown: function() {
			  db.Products.load().done(function() {
				  isReady.resolve();
			   });
			}
		};   
	};

The content enclosed into the **DeferRendering** widget is shown when the Promise object assigned to the widget's [renderWhen](/api-reference/10%20UI%20Widgets/dxDeferRendering/1%20Configuration/renderWhen.md '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#renderWhen') option is resolved. While waiting for the moment when the deferred content is allowed to be rendered, you can show a loading indicator. For this purpose, set the widget's [showLoadIndicator](/api-reference/10%20UI%20Widgets/dxDeferRendering/1%20Configuration/showLoadIndicator.md '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#showLoadIndicator') option to **true**.

To specify the animation to be used when showing the deferred content enclosed to the **DeferRendering** widget, use the widget's [animation](/api-reference/10%20UI%20Widgets/dxDeferRendering/1%20Configuration/animation.md '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#animation') option.

If your view is "heavy" enough, it may take a lot of time to display the whole view at once. So, you can divide the view into several blocks each enclosed into a separate **DeferRendering** widget. If you do not specify the **renderWhen** option of these widgets, the content of each **DeferRendering** widget will be rendered one after another from top to bottom. This will provide a quicker response to a user.

#####See Also#####
- [DeferRendering - Overview](/concepts/05%20Widgets/DeferRendering/00%20Overview.md '/Documentation/Guide/Widgets/DeferRendering/Overview/')
