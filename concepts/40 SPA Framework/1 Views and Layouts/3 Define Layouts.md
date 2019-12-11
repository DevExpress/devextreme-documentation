Normally, there is a commonality between application screens. In the following image, a toolbar and navigation bar are located on each screen.

![View Merged into Layout](/images/PhoneJS/commonLayoutInScreens.png)

The framework allows you to organize some structure for each screen. This structure is called **layout**. It is defined once by a markup declared as a [dxLayout](/api-reference/40%20SPA%20Framework/Markup%20Components/dxLayout '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxLayout/') markup component. This markup includes so-called placeholders for varying content. In the image above, the list on the first screen is changed to another list on the second screen and to a set of fields on the third screen. In addition, the title and a set of buttons on the toolbar are changed from screen to screen. The changing content is defined within the [dxView](/api-reference/40%20SPA%20Framework/Markup%20Components/dxViewPlaceholder '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxViewPlaceholder/') markup component. When navigating to a view, the markup of the corresponding **dxView** template is merged with the markup of the required **dxLayout** component. The resulting markup is then rendered as a page.

![View Merged into Layout](/images/PhoneJS/NavbarLayoutAndViewGathering.png)

To define a layout, add a **div** element and include the required markup in it. Set the **div** element's **data-options** attribute to [dxLayout](/api-reference/40%20SPA%20Framework/Markup%20Components/dxLayout '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxLayout/'), and specify the required [layout markup options](/api-reference/40%20SPA%20Framework/Markup%20Components/dxLayout/1%20Configuration '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxLayout/Configuration/').

    <!--HTML--><div data-options="dxLayout: { name: 'myLayout'}">
        <!-- Layout markup goes here -->
    </div>

To add a placeholder to a layout, add a **div** element, set the **data-options** attribute to [dxContentPlaceholder](/api-reference/40%20SPA%20Framework/Markup%20Components/dxContentPlaceholder '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxContentPlaceholder/') and specify the required [placeholder markup options](/api-reference/40%20SPA%20Framework/Markup%20Components/dxContentPlaceholder/1%20Configuration '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxContentPlaceholder/Configuration/').

    <!--HTML--><div data-options="dxLayout: { name: 'myLayout'}">
        <!-- Layout markup goes here -->
        <div data-options="dxContentPlaceholder: {name: 'content'}" ></div>
    </div>

In the following image, you can see that a layout may include static content. This content is not changed from  view to view. However, the content in placeholders is changing. When an application navigates to a view, the view's [content](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/4%20Insert%20View%20into%20Layout.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Insert_View_into_Layout') is merged with the content of the layout content placeholders.

![Content Placeholders](/images/PhoneJS/ContentPlaceholders.png)

Since there can be several placeholders in a layout, their content will be shown sooner or later depending on the difficulty of the inner elements. So to show the entire changing content at once, wrap all the content placeholders by a div element and apply the **data-options** attribute set to [dxTransition](/api-reference/40%20SPA%20Framework/Markup%20Components/dxTransition '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxTransition/'). 

    <!--HTML--><div data-options="dxLayout: { name: 'myLayout'}">
        <div data-options="dxTransition: { name: 'main', animation: 'slide' }">
            <div data-options="dxContentPlaceholder : { name: 'header' } " ></div>
            <div data-options="dxContentPlaceholder: {name: 'content' }"></div>
            <div data-options="dxContentPlaceholder : { name: 'footer' } " ></div>
        </div>
    </div>

Note that a transition element unites changing content. The markup outside this element is static.

![Transition Element](/images/PhoneJS/TransitionElement.png)

Use the **dxTransition** component's [animation](/api-reference/40%20SPA%20Framework/Markup%20Components/dxTransition/1%20Configuration/animation.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxTransition/Configuration/#animation') configuration option to set the animation that will be used when the content that is rendered to the placeholders included to the **dxTransition** element is changed.

To set a specific transition effect for a specific content placeholder, exclude this placeholder from the **dxTransition** element and specify the [animation](/api-reference/40%20SPA%20Framework/Markup%20Components/dxContentPlaceholder/1%20Configuration/animation.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxContentPlaceholder/Configuration/#animation') option.

    <!--HTML--><div data-options="dxLayout: { name: 'myLayout'}>
        <div data-options="dxContentPlaceholder: {name: 'content', animation:'slide'}"></div>
    </div>

In addition to an HTML markup, a layout is accompanied by CSS style sheets and is managed by a JavaScript controller. Generally, there is a base **DefaultLayoutController** that manages the process of showing views, navigation and transitions between views. To bind this controller with your layout markup, create an instance of this controller passing an object with the specified **name** field as a constructor parameter. Then, add this controller to the application's [layout set](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/layoutSet.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#layoutSet') defining a navigation context for this controller. Here is an example.

    <!--JavaScript-->window.AppNamespace = {};
    $(function () {
    AppNamespace.myController = new DevExpress.framework.html.DefaultLayoutController({ name: "myLayout" })     
        AppNamespace.app = new DevExpress.framework.html.HtmlApplication({
            namespace: AppNamespace,
            layoutSet: [
                { platform: 'ios', phone: true, root: false, controller: AppNamespace.myController }
            ],
			//...
        });
        AppNamespace.app.router.register(":view/:name", { view: "home", name: '' });
        AppNamespace.app.navigate();
    });

You can inherit from the **DefaultLayoutController** to override the basic functionality, if required. In this instance, you can bind a layout template within your controller. To take into account the custom controller, register its instance within the **layoutSet** list.

    <!--JavaScript-->myController = DevExpress.framework.html.DefaultLayoutController.inherit({
        //your implementation here
    });
    AppNamespace.app = new DevExpress.framework.html.HtmlApplication({
        namespace: AppNamespace,
        layoutSet: [
            { platform: 'ios', phone: true, root: false, controller: new myController() }
        ],
		//...
    });
    AppNamespace.app.router.register(":view/:name", { view: "home", name: '' });
    AppNamespace.app.navigate();

As a rule, you will not have to define layouts for your views. The framework comes with predefined layout sets. When a view is displayed, an appropriate layout controller from the application's layout set is used to render a layout markup for this view. To learn more about predefined layout sets, refer to the [Built-in Layouts](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/') article.

    <!--JavaScript-->$(function() {
        app = new DevExpress.framework.html.HtmlApplication({
            layoutSet: DevExpress.framework.html.layoutSets['navbar'],
			//...
        });
    });
