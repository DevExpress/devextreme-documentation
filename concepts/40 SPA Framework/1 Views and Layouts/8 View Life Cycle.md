The replacement of a view with another view is initiated by invoking the [navigate](/api-reference/40%20SPA%20Framework/HtmlApplication/3%20Methods/navigate(uri_options).md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#navigateuri_options') method of the **HtmlApplication** object. When the application navigates to a view, the previous view is hidden or disposed. When it is hidden, this view can be restored from the cache quickly to be displayed again. When it is disposed, a new life cycle is initiated when the application navigates to this view repeatedly. All of the view life cycle steps are detailed below.

1. [Get View Info](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#GetViewInfo)
2. [Create a View Model](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#CreateViewModel)
3. [Render the View](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#RenderView)
4. [Show the View](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#ShowView)
5. [Hide the View](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#HideView)
6. [Display the View Repeatedly](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#DisplayViewRepeatedly)
7. [Dispose the View](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#DisposeView)

<a id="GetViewInfo"></a><h4>1 - Get View Info</h4>

![Step 1](/images/PhoneJS/ViewLifeCycle_Step1.png)  

When a view's display process begins, the only thing we know about the view is its name. It is the view name that is specified in the URI passed as the **navigate** function's parameter or the default view name specified in the [routing rule](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing/1%20Declare%20a%20Routing.md '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Declare_a_Routing'). To get more information about the view, the application's [view cache](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/viewCache.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#viewCache') is used. Information on all views that are contained in the current [navigation history](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/') is stored within the cache. However, there can be no information on a view in the cache, because the view was removed during the application flow, or the view has not been displayed before or the cache is [disabled](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/disableViewCache.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#disableViewCache'). In this instance, the information on the view is gathered from scratch and added to the cache, so that the next time everything that is needed to display this view is contained in the cache.

**viewInfo** is an object that collects information on a view gathered during the whole view display process. At this step, the fields of this object provide the following information on the view.

- **viewName**  
	A string specifying the name of the displayed view.

- **routeData**  
	An object representing route parameters for the displayed view.

- **uri**  
	The URI to which the application is currently navigating.

- **viewTemplateInfo**  
	An object that provides the specified values of the dxView component options.

- **layoutController**  
	The controller that will be used to display the view within the layout markup. This controller, like all controllers that are registered in the application, is initialized beforehand. 

The following events of the **HTMLApplication** object can be handled to change the flow of the view display at this step.

- [navigating](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/navigating.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#navigating')  
	This event fires at the very beginning - before you search the view in the cache. Handle this event to cancel the display of the view, or to redirect to another view. For this purpose, use the **cancel** and **uri** fields of the object passed as a parameter.

- [resolveLayoutController](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/resolveLayoutController.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#resolveLayoutController')  
	This event fires before an appropriate layout controller from the application's [layout set](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/7%20Ready-to-Use%20Layout%20Sets.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Ready-to-Use_Layout_Sets') is found, based on the current navigation context. Handle this event to set a custom layout controller for the displayed view. This layout controller will use the required layout template for the view.

<a id="CreateViewModel"></a><h4>2 - Create a View Model</h4>

![Step 2](/images/PhoneJS/ViewLifeCycle_Step3.png)  

To get the View Model object, a function with the same name as the view is searched for in the application's [namespace](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/namespace.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#namespace'), and, if found, the function is called. The object returned by this function is the view's ViewModel.

The following events of the **HTMLApplication** object can be handled to change the flow of the view display at this step.

- [beforeViewSetup](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/beforeViewSetup.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#beforeViewSetup')  
	This event fires before creating the ViewModel object. You can set a custom ViewModel object to be used for the view. To do this, add the **model** field to the **viewInfo** object. This object can be accessed using the **viewInfo** field of the object passed as a parameter.

- [afterViewSetup](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/afterViewSetup.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#afterViewSetup')  
	This event fires after the ViewModel object is created for the view. At this time, you can modify the created ViewModel object. It is available to you as the **model** field of the **viewInfo** object exposed by the parameter object.

<a id="RenderView"></a><h4>3 - Render the View</h4>

![Step 3](/images/PhoneJS/ViewLifeCycle_Step4.png)  

When showing a view for the first time or when information on it has been removed from the [cache](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/viewCache.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#viewCache'), the **viewInfo** object does not contain the **renderResult** field. At this step, the view is rendered and the result of the rendering is assigned to this field.

To be shown within the layout, the content of the view's dxContent elements is merged with the corresponding dxContentPlaceholder elements of the layout. The merged result is added to the corresponding dxTransition element of the layout as an additional view markup in an inactive state.

![View Rendering](/images/PhoneJS/ViewRendering.png)

[note]Only the markup that is added to the dxContent elements will be rendered to the resulting view.

The following events of the **HTMLApplication** object can be handled to change the flow of the view display at this step.

- [viewRendered](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/viewRendered.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewRendered')  
	This event fires after markup was rendered for the view. This markup can be accessed using the **markup** field of the **renderResult** object that is exposed by the **viewInfo** object passed as the event handler's parameter.

[note]The rendering process may take a lot of time in some views. In this instance, you can defer the rendering of some view elements and provide a quick request to an end-user. For this purpose, use the [DeferRendering](/api-reference/10%20UI%20Widgets/dxDeferRendering '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/') widget within the view. The content enclosed into this widget will be rendered and shown with specified animation at a specified moment. While waiting for this moment, the view will be shown with a loading indicator or a custom loading state indication. For details on how to use the **DeferRendering** widget for views, refer to the [Defer View Content Rendering](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/43%20Defer%20View%20Content%20Rendering.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Defer_View_Content_Rendering') topic.

<a id="ShowView"></a><h4>4 - Show the View</h4>

![Step 4](/images/PhoneJS/ViewLifeCycle_Step5.png)

To show the view, the inactive markup corresponding to this view is made active while other markup elements, which correspond to the previously shown view, are made inactive.

![Show View](/images/PhoneJS/ShowView.png)

[note]You can access the active view using the *$('.dx-active-view .my-selector')* selector.


Handle the following event at this step.

- [viewShowing](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/viewShowing.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewShowing')  
	This event is raised before showing the view.

- [viewShown](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/viewShown.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewShown')  
	This event fires each time after a view is displayed. Handle this event to refresh data in the view each time the view is shown. Access the view's ViewModel using the **model** field of the object passed as the **viewInfo** parameter.

<a id="HideView"></a><h4>5- Hide the View</h4>

If the navigation to another view implies conserving the current view in the navigation history, the view markup becomes inactive. Information on the view is stored in the [cache](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/viewCache.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#viewCache').

Handle the following event at this step.

- [viewHidden](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/viewHidden.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewHidden')  
	This event fires each time after a view is hidden. Access the **viewInfo** object using the **viewInfo** field of the object passed as a parameter.

<a id="DisplayViewRepeatedly"></a><h4>6 - Display the View Repeatedly</h4>

The next time the application navigates to the view, the view is ready to be displayed if information on this view is stored in the [cache](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/viewCache.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#viewCache'). If the previous view was displayed by the same layout controller, there is an "inactive" markup of the current view in the dxTransition element of the layout. So, the view is made active and the previous active content is made inactive.

![Show View](/images/PhoneJS/ShowViewRepeatedly.png)

If the layout controller of the previous view is not the controller of the displayed view, the previous controller is deactivated first. This means that the layout markup provided by this controller is removed from the **view port** element of the application page. The controller of the view that must be displayed is then activated. Therefore, the layout markup provided by this controller is inserted to the **view port** element of the application page.

View-related events are raised in the following order.

- [navigating](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/navigating.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#navigating')
- [viewShowing](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/viewShowing.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewShowing')
- [viewShown](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/viewShown.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewShown')

<a id="DisposeView"></a><h4>7 - Dispose the View</h4>

The following events are raised when the current view is not displayed and information on this view has already been removed from the [cache](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/viewCache.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#viewCache'). 

- [viewDisposing](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/viewDisposing.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewDisposing')  
	This event is raised before disposing of the view.

- [viewDisposed](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/viewDisposed.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewDisposed')  
	This event is raised after disposing of the view.