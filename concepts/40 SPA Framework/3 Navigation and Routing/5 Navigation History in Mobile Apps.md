When providing a navigation control for your application, you have the views to which end users can navigate from any view using this navigation control's items (read [Add a Global navigation](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/75%20Global%20Navigation%20Items.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Global_Navigation_Items')). These views are so-called *root* views. The first view invoked in the application is also made root. When you [navigate to another view](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing/2%20Navigate%20to%20a%20View.md '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigate_to_a_View') from a root view, and then navigate to one more view from the invoked view, and so on, the navigation history is saved to a *navigation stack*.

![Navigation Stack](/images/PhoneJS/NavigationStack.png)

Several such navigation stacks can be created.

![Several Navigation Stacks](/images/PhoneJS/SeveralNavigationStacks.png)

A new navigation stack is created not only when clicking a navigation control item, but also when you call the **navigate** method of the **HtmlApplication** object passing *true* as the **root** parameter.

	<!--JavaScript-->Application1.app.navigate('View1', { root: true });

![Navigate to Root View from Stack](/images/PhoneJS/NavigateToRootViewFromStack.png)

In addition to the **root** parameter, you can specify the **target** parameter to explicitly set a place for the invoked view in the navigation stack. The following values are supported for the **target** parameter.

- 'blank' - adds the invoked view to the navigation history (the default value)  
    ![Blank Target Navigation](/images/PhoneJS/BlankTargetNavigation.png)

- 'current' - replaces the current view in the navigation stack with the invoked view  
    ![Current Target Navigation](/images/PhoneJS/CurrentTargetNavigation.png)

The following code snippet demonstrates a sample function that uses the **navigate** function with two parameters to invoke an OrderItems view for a specified order identifier. The invoked view will replace the current view in the navigation history.

	<!--JavaScript-->function goToOrder(orderId) {
		myApplication.navigate('OrderItems/' + orderId, { target: 'current' });
	}

The [Back button](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing/4%20Navigate%20Back%20in%20Mobile%20Apps.md '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigate_Back_in_Mobile_Apps') is available in each view in a stack except for the root view. This button displays the previous view in the stack.

![Back in Navigation Stack](/images/PhoneJS/BackInNavigationStack.png)

The state of each invoked view in a stack is saved. For instance, the values entered into edit boxes are saved, and the position in a scrolled list is also saved. So, when you press the Back button, the previous view in the stack is displayed in the last state.

If you return back to a previous view and invoke a new view from it, the history saved before will be removed from the cache.

![New Branch from Navigation Stack](/images/PhoneJS/NewBranchFromNavigationStack.png)

When pressing a navigation control item, the corresponding root view is displayed. If this view has been displayed before, it is restored from the cache. You can change this behavior and display the view that was displayed last in the stack based on this root view. For this purpose, set the [navigateToRootViewMode](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/navigateToRootViewMode.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#navigateToRootViewMode') option of the HtmlApplication object to *keepHistory*.