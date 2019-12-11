All the predefined layout sets, except for **Simple**, utilize the layouts that include a widget that implements global navigation. This widget provides access to the main views of the application - the root views. To specify which views must be accessible from  global navigation, use the [navigation](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/navigation.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#navigation') configuration option of the [HtmlApplication](/api-reference/40%20SPA%20Framework/HtmlApplication '/Documentation/ApiReference/SPA_Framework/HtmlApplication/') object.

	<!--JavaScript-->window.MyApp = {};
	$(function() {
		MyApp.app = new DevExpress.framework.html.HtmlApplication({
			namespace: MyApp,
			layoutSet: DevExpress.framework.html.layoutSets['navbar'],
			navigation: [
				{
					title: "Home",
					onExecute: "#home",
					icon: "home"
				},
				{
					title: "About",
					onExecute: "#about",
					icon: "info"
				}
			],
			//...
		});
	});


[note]In specific scenarios, you can define global navigation dynamically and render the navigation control so that the defined navigation items are displayed. For this purpose, use the [createNavigation](/api-reference/40%20SPA%20Framework/HtmlApplication/3%20Methods/createNavigation(navigationConfig).md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#createNavigationnavigationConfig') and [renderNavigation](/api-reference/40%20SPA%20Framework/HtmlApplication/3%20Methods/renderNavigation().md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#renderNavigation') methods of the **htmlApplication** object.

When navigating to a view, the target URI is compared with the URI provided by the **onExecute** option of each global navigation command. If there is a command whose URI coincides with the navigated URI, the corresponding item of the widget that implements global navigation (navbar item, slide-out menu item or pivot item) is selected automatically.

There can be scenarios, when you have to select a certain navigation item manually in code. For instance, there is a navigation item with the *view1* URI. When navigating to the view1 using the *view1/1* URI, this navigation item will not be selected, because its URI does not coincide with the navigated URI. To select it, do the following.

- Set the **id** option for the required navigation commands.

		<!--JavaScript-->navigation: [
			{
				id: "view1"
				title: "View1",
				onExecute: "#view1"
			},
			{
				id: "view2"
				title: "View2",
				onExecute: "#view2"
			}
		],

- Set the **currentNavigationItemId** field to the corresponding command id within the required ViewModels.

		<!--JavaScript-->MyApp.view1 = function (params) {
			var viewModel = {
				currentNavigationItemId = "view1"
			};
			return viewModel;
		};