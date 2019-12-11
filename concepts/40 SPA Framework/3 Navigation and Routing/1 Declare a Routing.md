To declare a rule after instantiating the application object, access your application object's **router** and invoke the **register** method. This method takes the following parameters.

- **URL Pattern**

 A routing rule's URL pattern specifies the parameters a URL must contain in order to be processed by the rule. Parameter names begin with a colon and are separated by slashes. For example, the following pattern will fit any URL containing three string values separated by slashes (e.g., "order/beverage/108").
 
		":view/:category/:id"

 When a routing rule is used for decoding a URL used to navigate to a view, parameters are copied to the ViewModel along with their values. As a result, when navigating to the "order/beverage/108" URL from the previous example, the "order" view will be shown and the remaining parameters will be accessible via the object passed as the "order" function's parameter.

		<!--JavaScript-->order = function(params) {
			var viewModel = {
				message: params.category + '( id: '+ params.id + ')' //returns 'beverage(id: 108)'
			};
			return viewModel;
		};

	In URL patterns, you can use constant values in place of parameters. For example, the ":view/Details" pattern will fit any URL containing two string values, the second of which is "Details".

	Note that even when you do not intend to pass any parameters via a URL, it must still be possible to determine the view to which you wish to navigate. As a result, the URL should contain a **view** parameter or a default **view** parameter value must be specified.

- **Default Parameter Values**
 
 You can make a parameter optional by specifying its default value. In this case, even if a URL does not specify the parameter, the rule can still be used to process the URL. Default parameter values are specified as an object whose property names correspond to parameter names. The property values contain default parameter values.

		<!--JavaScript-->{ view: "home", category: undefined, id: undefined }
 
- **Parameter constraints**

	A constraint specifies the range of values a parameter can accept. If a URL specifies a parameter value out of a rule's parameter constraint range, the rule will not be used to process the URL.

	The constraints are specified as an object whose property names correspond to parameter names. The property values contain constraint expressions. The value can be either a JavaScript regular expression or a string representation of the expression.

		<!--JavaScript-->{ id: /\d+/, category: "\\d+" }

The following code line is a sample declaration of a versatile routing rule.

	<!--JavaScript-->myApplication.router.register(":view/:id/", { view: "home", id: undefined });

This routing rule can process an empty URL, in which case it will navigate to the "home" view. The rule can also process URLs with a single parameter specifying the view name; or the rule can process a two-parameter URL where the first parameter specifies the view name and the second parameter specifies an object identifier.

You can declare several routing rules in your application. In this instance, when a URL needs to be processed, the rules are evaluated in the order of declaration. If the URL fits a rule, the rule is used to process the URL. Otherwise, the remaining routing rules are evaluated. In the following code snippet, the first rule is used to process Product view URLs with one or two additional parameters. The second rule is used for all of the remaining views.

	<!--JavaScript-->myApplication.router.register("Product/:categoryId/:id", { view: "Product", categoryId: "Beverages", id: undefined });
	myApplication.router.register(":view/:id", { view: "home", id: undefined });