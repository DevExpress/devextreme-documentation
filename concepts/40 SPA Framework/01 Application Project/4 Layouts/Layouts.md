According to the framework's [Views and Layouts](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts '/Documentation/Guide/SPA_Framework/Views_and_Layouts/') concept, a screen is a combination of  view and layout markups. Each screen has a common element such as a navigation bar or a toolbar. These elements are added to the layout markup, which is then applied to each displayed view. Since several different layouts can be used in an application, a layout set should be specified as an array assigned to the [layoutSet](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/layoutSet.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#layoutSet') configuration option of the application object. The framework comes with ready-to-use layout sets that are based on predefined layouts.

    <!--JavaScript-->window.MyApp = {};
    MyApp.$(function() {
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
            ]
        });
    });

In the code above, the [navigation](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/navigation.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#navigation') option is specified. The array assigned to this option will be used by the 'navbar' predefined layout to create navigation items on the navbar widget.

The predefined layouts that are used in the specified layout set should be contained in the application and referenced in the application page. Read the subsections below to learn two possible ways to provide links to the necessary layout files.

To learn more about view and layout concepts, refer to the [Views and Layouts](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts '/Documentation/Guide/SPA_Framework/Views_and_Layouts/') article.

To learn about layout sets and predefined layouts, refer to the [Built-in Layouts](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/') article.
