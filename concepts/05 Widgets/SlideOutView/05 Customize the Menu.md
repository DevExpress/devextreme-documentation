By default, the slide-out menu is empty. To specify its content, declare a template for it. Although the slide-out menu can contain any widget, we recommend you place a collection widget there. For example, in the following code, the slide-out menu contains the [TreeView](/concepts/05%20Widgets/TreeView/00%20Overview.md '/Documentation/Guide/Widgets/TreeView/Overview/') widget. Note that this widget is placed into a [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') whose name is assigned to the [menuTemplate](/api-reference/10%20UI%20Widgets/dxSlideOutView/1%20Configuration/menuTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Configuration/#menuTemplate') option of the **SlideOutView**. All the other code configures the **TreeView** and does not affect the **SlideOutView** directly.

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
            width: 200,
            selectionMode: "single",
            selectByClick: true,
            onContentReady: function (e) {
                e.component.selectItem("1_1");
            },
            dataSource: [{
                id: '1',
                text: 'Fruits',
                expanded: true,
                items: [
                    { id: '1_1', text: 'Apples', china: 37001601, usa: 4110050 , turkey: 2889000 },
                    { id: '1_2', text: 'Oranges', china: 14400000, usa: 15700000, turkey: 1800000 }
                ]
            }, {
                id: '2',
                text: 'Vegetables',
                expanded: true,
                items: [
                    { id: '2_1', text: 'Cucumbers', china: 54300000, usa: 886480, turkey: 1800000 },
                    { id: '2_2', text: 'Tomatoes', china: 33911935, usa: 10965452, turkey: 5976732 }
                ]
            }],
            onItemSelectionChanged: function (e) {
                if(e.node.children.length < 1) {
                    slideOutView.hideMenu();
                    var toolbarItems = toolbar.option("dataSource");
                    toolbarItems[1].text = e.node.itemData.text;
                    toolbar.option("dataSource", toolbarItems);
                    chart.option("dataSource", [e.node.itemData]);
                }
            }
        });
    });

    <!--CSS-->#slideOutView {
        height: auto;
        position: absolute;
        top: 0; 
        bottom: 0;
        width: 100%;
    }

The **menuTemplate** option can also accept a function combining the HTML markup. In this case, you do not need to specify any markup for the slide-out menu in the HTML file.

    <!--HTML--><div id="slideOutView">
        <div data-options="dxTemplate: { name: 'content' }">
            <div id="toolbar"></div>
            <div id="chart"></div>
        </div>
    </div>

    <!--JavaScript-->$(function() {
    	var slideOutView = $("#slideOutView").dxSlideOutView({
            menuTemplate: function (menu) {
                menu.append(
                    $("<div />").attr("id", "treeView")
                )
            },
            contentTemplate: 'content'
        }).dxSlideOutView("instance");

        // The rest is omitted for brevity
    });

By default, the menu slides out from the left side of the screen. To make it slide out from the right side, change the [menuPosition](/api-reference/10%20UI%20Widgets/dxSlideOutView/1%20Configuration/menuPosition.md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Configuration/#menuPosition') option. 

    <!--JavaScript-->$(function() {
    	var slideOutView = $("#slideOutView").dxSlideOutView({
            menuTemplate: 'treeView',
            contentTemplate: 'content',
            menuPosition: 'inverted' // or "normal"
        }).dxSlideOutView("instance");

        // ...
    });

In addition, you can use a 3rd-party template engine to customize the menu. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.
 
#####See Also#####
- [SlideOutView - Customize the View](/concepts/05%20Widgets/SlideOutView/10%20Customize%20the%20View.md '/Documentation/Guide/Widgets/SlideOutView/Customize_the_View/')
- [SlideOutView - Open and Close the Menu Using the API](/concepts/05%20Widgets/SlideOutView/15%20Open%20and%20Close%20the%20Menu%20Using%20the%20API.md '/Documentation/Guide/Widgets/SlideOutView/Open_and_Close_the_Menu_Using_the_API/')
- [SlideOutView API Reference](/api-reference/10%20UI%20Widgets/dxSlideOutView '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/')

[tags]slideOutView, slide-out menu, navigation, menu appearance, customize, templates