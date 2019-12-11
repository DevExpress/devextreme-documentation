You can use one of the predefined animation sets in your DevExtreme applications. Here they are.

- *'default'*  
A default animation set for DevExtreme applications. This set is characterized by a big number of different animations so that your application looks 'live' and attractive out-of-the-box.

- *'native'*  
This animation set is organized so that your DevExtreme apps look and behave as a native application on any device.

- *'slide'*  
The animation set that applies a 'slide' animation where it is appropriate.

- *'zoom'*  
The animation set that applies 'zoom' animation where it is appropriate.

To use a predefined animation set, assign it to the [animationSet](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/animationSet.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#animationSet') option of the **HtmlApplication** object.

	<!--JavaScript-->MyApp.app = new DevExpress.framework.html.HtmlApplication({
		//...
        animationSet: DevExpress.framework.html.animationSets['slide'],
    });

The following animation presets are collected in all of these sets.

- *"view-content-change"*  
Used to animate the replacement of a view content when navigating from view to view. This preset is specified for the 'content' [content placeholder](/api-reference/40%20SPA%20Framework/Markup%20Components/dxContentPlaceholder '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxContentPlaceholder/') in a markup of [predefined layouts](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/').

- *"view-content-rendered"*  
Can be used to animate the process of displaying view content after it is rendered. If a view's render result is [cached](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/viewCache.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#viewCache'), this animation will be applied once when the view appears for the first time. Specify this preset for the [dxDeferRendered](/concepts/05%20Widgets/DeferRendering/00%20Overview.md '/Documentation/Guide/Widgets/DeferRendering/Overview/') widget bound to the 'content' [view content](/api-reference/40%20SPA%20Framework/Markup%20Components/dxContent '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxContent/'). 

- *"view-header-toolbar"*  
Used to animate the replacement of a header content when navigating from view to view. This preset is specified for the 'header' [content placeholder](/api-reference/40%20SPA%20Framework/Markup%20Components/dxContentPlaceholder '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxContentPlaceholder/') in a markup of [predefined layouts](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/').

- *"command-rendered"*  
Used by the framework to animate the process of displaying commands in a view.

- *"list-item-rendered"*  
Can be used to animate the process of displaying a list view. Specify this preset for the [dxDeferRendered](/concepts/05%20Widgets/DeferRendering/00%20Overview.md '/Documentation/Guide/Widgets/DeferRendering/Overview/') widget that encloses the content of the list view.

- *"detail-item-rendered"*  
Can be used to animate the process of displaying a detail view. Specify this preset for the [dxDeferRendered](/concepts/05%20Widgets/DeferRendering/00%20Overview.md '/Documentation/Guide/Widgets/DeferRendering/Overview/') widget that encloses the content of the detail view.

- *"edit-item-rendered"*  
Can be used to animate the process of displaying a detail view in edit mode. Specify this preset for the [dxDeferRendered](/concepts/05%20Widgets/DeferRendering/00%20Overview.md '/Documentation/Guide/Widgets/DeferRendering/Overview/') widget that encloses the content of the detail view.

- *"layout-change"*  
Used to animate the replacement of a layout when navigating from a view contained in one layout to a view contained in another layout. This preset is specified for the [dxLayout](/api-reference/40%20SPA%20Framework/Markup%20Components/dxLayout '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxLayout/') markup component.