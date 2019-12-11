A view has a unique name that serves as an identifier. The view name is encoded into the fragment identifier of the application URL. The framework uses this name to find the view's HTML markup and the JavaScript function that returns the view's ViewModel.

To implement a view's HTML markup, add a **div** element and include the required markup in it. Set the **div** element's **data-options** attribute to [dxView](/api-reference/40%20SPA%20Framework/Markup%20Components/dxView '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/'), and specify the required [view markup options](/api-reference/40%20SPA%20Framework/Markup%20Components/dxView/1%20Configuration '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/').

	<!--HTML--><div data-options="dxView: { name: 'home', title: 'Home' }">
		<!-- View markup goes here -->
		<h1>'Welcome!'</h1>
	</div>

The view's markup may have [bindings](https://knockoutjs.com/documentation/binding-syntax.html) to the fields of the view's **ViewModel**. Implement the ViewModel as an object returned by a JavaScript function. This function must have the view's name and must be declared within the application's [namespace](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/namespace.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#namespace').

![View and Layout Merging](/images/PhoneJS/DefineAView.png)

The ViewModel may get the required data from the view's **Model** - a JavaScript object in a general case. However, there may be scenarios when the ViewModel prepares data by itself.

Within the function that returns a ViewModel, you can use the information that is passed when navigating to the view. This information is accessible using the following parameters of the function.

- **Navigation parameters**  
	When navigating to a view, extra navigation parameters can be specified in addition to the name of the target view. These parameters conform to the application's [routing format](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing/1%20Declare%20a%20Routing.md '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Declare_a_Routing'). You can access these navigation parameters as the fields of the object passed as the first parameter of the function that returns the ViewModel of the target view.

- **View info**  
	The second parameter passed as the function's parameter represents an object that specifies the information that is gathered on the view by the time the function is called. The following fields of this object are accessible: **key**, **viewName**, **uri**, **routeData**, **canBack** and **previousViewInfo**.

[note]As you can see, binding to the ViewModel is organized using the Knockout framework. Generally, the [ko.applyBindings()](https://knockoutjs.com/documentation/observables.html) method should be called to activate Knockout. However, this method is called in DevExtreme applications internally. So you don't have to call this method in your code. At the same time, don't forget about this method, because when you insert a markup with the data-bind syntax dynamically, you will have to call the **ko.applyBindings()** method manually to initialize bindings.
