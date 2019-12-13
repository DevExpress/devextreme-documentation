The **SlideOutView** widget is a classic slide-out menu paired with a view. This widget is very similar to the [SlideOut](/concepts/05%20Widgets/SlideOut/00%20Overview.md '/Documentation/Guide/Widgets/SlideOut/Overview/') with only one difference - the **SlideOut** always contains the [List](/concepts/05%20Widgets/List/00%20Overview.md '/Documentation/Guide/Widgets/List/Overview/') in the slide-out menu, while the **SlideOutView** can hold any collection there.

The following code adds the **SlideOutView** widget to your page. The view contains a [Toolbar](/concepts/05%20Widgets/Toolbar/00%20Overview.md '/Documentation/Guide/Widgets/Toolbar/Overview/') and a [Chart](/concepts/05%20Widgets/Chart/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Overview/'); the slide-out menu contains a [TreeView](/concepts/05%20Widgets/TreeView/00%20Overview.md '/Documentation/Guide/Widgets/TreeView/Overview/'). This example is expanded further in the [Customize the View](/concepts/05%20Widgets/SlideOutView/10%20Customize%20the%20View.md '/Documentation/Guide/Widgets/SlideOutView/Customize_the_View/') and [Customize the Menu](/concepts/05%20Widgets/SlideOutView/05%20Customize%20the%20Menu.md '/Documentation/Guide/Widgets/SlideOutView/Customize_the_Menu/') articles.

    <!--HTML--><div id="slideOutView">
        <div data-options="dxTemplate: { name: 'content' }">
            <div id="toolbar"></div>
            <div id="chart"></div>
        </div>
        <div data-options="dxTemplate: { name: 'treeView' }">
            <div id="treeView"></div>
        </div>
    </div>
    
    <!--JavaScript-->$(function() {
    	var slideOutView = $("#slideOutView").dxSlideOutView({
            menuTemplate: 'treeView',
            contentTemplate: 'content'
        }).dxSlideOutView("instance");
    	
    	var toolbar = $("#toolbar").dxToolbar({
            // Toolbar is configured in the "Customize the View" article
        }).dxToolbar("instance");
    
        var chart = $("#chart").dxChart({
            // Chart is configured in the "Customize the View" article
        }).dxChart("instance");
        
        $("#treeView").dxTreeView({
            // TreeView is configured in the "Customize the Menu" article
        });
    });


    <!--CSS-->#slideOutView {
        height: auto;
        position: absolute;
        top: 0; 
        bottom: 0;
        width: 100%;
    }

#####See Also#####
#include common-link-configurewidget
- [SlideOutView - Customize the Menu](/concepts/05%20Widgets/SlideOutView/05%20Customize%20the%20Menu.md '/Documentation/Guide/Widgets/SlideOutView/Customize_the_Menu/')
- [SlideOutView - Customize the View](/concepts/05%20Widgets/SlideOutView/10%20Customize%20the%20View.md '/Documentation/Guide/Widgets/SlideOutView/Customize_the_View/')
- [SlideOutView - Open and Close the Menu Using the API](/concepts/05%20Widgets/SlideOutView/15%20Open%20and%20Close%20the%20Menu%20Using%20the%20API.md '/Documentation/Guide/Widgets/SlideOutView/Open_and_Close_the_Menu_Using_the_API/')
- [SlideOutView API Reference](/api-reference/10%20UI%20Widgets/dxSlideOutView '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/')

[tags]slideOutView, slide-out menu, navigation, overview