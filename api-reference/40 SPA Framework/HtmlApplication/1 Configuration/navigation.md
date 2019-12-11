---
type: Array
---
---
##### shortDescription
An array of [dxCommand](/api-reference/40%20SPA%20Framework/Markup%20Components/dxCommand '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/') configuration objects used to define [commands](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/6%20Add%20Commands%20to%20Views.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Add_Commands_to_Views') available from the application's [global navigation](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/75%20Global%20Navigation%20Items.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Global_Navigation_Items').

---
If you use one of the predefined [layout sets](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/layoutSet.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#layoutSet'), the built-in layouts that are used to display your views will include a global navigation control. This control is usually accessible from any view and provides access to the main application views - root views.

When developing a cross-platform application, consider the fact that a navigation control will be displayed differently across devices. Thus, navigation must be defined in an abstract way. For this purpose, the HTMLApplication object exposes the **navigation** option. This option is set to an array of objects, which in turn are used by the framework to create application navigation [commands](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/6%20Add%20Commands%20to%20Views.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Add_Commands_to_Views'). Specify [command configuration options](/api-reference/40%20SPA%20Framework/Markup%20Components/dxCommand/1%20Configuration '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/') within each object of the array. The framework will create commands using these objects as configuration objects. The commands will be displayed according to the current layout, based on the current device and platform.

The following example illustrates how to create an HtmlApplication, and add the "Index" and "About" commands to the application's global navigation.

    <!--JavaScript-->$(function () {
        app = new DevExpress.framework.html.HtmlApplication({ 
            layoutSet: DevExpress.framework.html.layoutSets['navbar'],
            navigation:[
                {
                    title: "Index",
                    onExecute: "#Index",
                    icon: "home"
                },
                {
                    title: "About",
                    onExecute: "#About",
                    icon: "info"
                }
            ]
        });
        app.router.register(":view", { view: "mainView" });
        app.navigate();
    });

In this example, a navbar widget will be used for global navigation, and commands will be displayed as navbar items. To learn how to define a command that will navigate to a particular view, refer to the [Global Navigation Items](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/75%20Global%20Navigation%20Items.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Global_Navigation_Items') topic of the documentation.