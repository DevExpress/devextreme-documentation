The SlideOutView UI component is a classic slide-out menu paired with a view. This UI component is very similar to the [SlideOut](/concepts/05%20UI%20Components/SlideOut/00%20Overview.md '/Documentation/Guide/UI_Components/SlideOut/Overview/') with only one difference - the SlideOut always contains the [List](/Documentation/Guide/UI_Components/List/Getting_Started_with_List) in the slide-out menu, while the SlideOutView can hold any collection there.

The following code adds the SlideOutView UI component to your page. The view contains a [Toolbar](/concepts/05%20UI%20Components/Toolbar/00%20Overview.md '/Documentation/Guide/UI_Components/Toolbar/Overview/') and a [Chart](/concepts/05%20UI%20Components/Chart/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Overview/'); the slide-out menu contains a [TreeView](/concepts/05%20UI%20Components/TreeView/00%20Overview.md '/Documentation/Guide/UI_Components/TreeView/Overview/'). This example is expanded further in the [Customize the View](/concepts/05%20UI%20Components/SlideOutView/10%20Customize%20the%20View.md '/Documentation/Guide/UI_Components/SlideOutView/Customize_the_View/') and [Customize the Menu](/concepts/05%20UI%20Components/SlideOutView/05%20Customize%20the%20Menu.md '/Documentation/Guide/UI_Components/SlideOutView/Customize_the_Menu/') articles.

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
- [SlideOutView - Customize the Menu](/concepts/05%20UI%20Components/SlideOutView/05%20Customize%20the%20Menu.md '/Documentation/Guide/UI_Components/SlideOutView/Customize_the_Menu/')
- [SlideOutView - Customize the View](/concepts/05%20UI%20Components/SlideOutView/10%20Customize%20the%20View.md '/Documentation/Guide/UI_Components/SlideOutView/Customize_the_View/')
- [SlideOutView - Open and Close the Menu Using the API](/concepts/05%20UI%20Components/SlideOutView/15%20Open%20and%20Close%20the%20Menu%20Using%20the%20API.md '/Documentation/Guide/UI_Components/SlideOutView/Open_and_Close_the_Menu_Using_the_API/')
- [SlideOutView API Reference](/api-reference/10%20UI%20Components/dxSlideOutView '/Documentation/ApiReference/UI_Components/dxSlideOutView/')

[tags]dxslideoutview, slideOutView, slide-out menu, navigation, overview