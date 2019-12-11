The **HtmlApplication** object exposes the [events](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/8%20View%20Life%20Cycle.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle') that are raised for each view displayed in the application. You can handle these events to perform certain actions for all the views in the application. At the same time, you may need to handle a particular event for a certain view only. In such a case, add a field with the event's name to the view's ViewModel and assign the required function to it. The following is the list of the events that can be handled in this manner.


- [viewRendered](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/viewRendered.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewRendered')
- [viewShowing](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/viewShowing.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewShowing')
- [viewShown](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/viewShown.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewShown')
- [viewHidden](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/viewHidden.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewHidden')
- [viewDisposing](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/viewDisposing.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewDisposing')
- [viewDisposed](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/viewDisposed.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewDisposed')

For instance, you can handle the **viewShowing** event to get the required data for the view. In the following example, the **viewShown** event is handled to set a focus to a particular numberbox on the view.
 
	<!--HTML--><div data-options="dxView : { name: 'home' }">            
		<!-- ... -->
		<div class="dx-fieldset">            
			<div class="dx-field">
				<div class="dx-field-label">Bill Total:</div>                
				<div id="billTotalInput" class="dx-field-value" data-bind="dxNumberBox: { value: billTotal, placeholder: 'Type here...', valueChangeEvent: 'keyup', min: 0 }"></div>
			</div>
		</div>
	</div>
 
<!-- -->
 
	<!--JavaScript-->MyApp.home = function(params) {
		var billTotal = ko.observable(),
		//...
		function viewShown() {
			$("#billTotalInput").dxNumberBox("instance").focus();
		}
		return {
			billTotal: billTotal,
			viewShown: viewShown,
			//...
		};
	};