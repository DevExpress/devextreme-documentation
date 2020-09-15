To open or close the **SlideOutView** menu programmatically, call the [showMenu()](/api-reference/10%20UI%20Widgets/dxSlideOutView/3%20Methods/showMenu().md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Methods/#showMenu') or [hideMenu()](/api-reference/10%20UI%20Widgets/dxSlideOutView/3%20Methods/hideMenu().md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Methods/#hideMenu') method. You can do the same thing using the [toggleMenuVisibility()](/api-reference/10%20UI%20Widgets/dxSlideOutView/3%20Methods/toggleMenuVisibility().md '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Methods/#toggleMenuVisibility') method. Pass **true** or **false** to this method to open or close the menu, respectively. For example, the following code shows how to open the slide-out menu when a user clicks the **Menu** button on the **Toolbar** (see the **onClick** function).

    <!--HTML--><div id="slideOutView">
        <div data-options="dxTemplate: { name: 'content' }">
            <div id="toolbar"></div>
            ...
        </div>
        <div data-options="dxTemplate: { name: 'menu' }">
            ...
        </div>
    </div>

    <!--JavaScript-->$(function() {
    	$("#slideOutView").dxSlideOutView({
            menuTemplate: 'menu',
            contentTemplate: 'content'
        });
    	
    	$("#toolbar").dxToolbar({
            dataSource: [{
                widget: 'dxButton',
                options: {
                    icon: 'menu',
                    onClick: function (e) {
                        $("#slideOutView").dxSlideOutView("showMenu");
                        // ---------- or ----------
                        $("#slideOutView").dxSlideOutView("toggleMenuVisibility", true);
                    }
                },
                location: 'before'
            }, {
                text: 'Title',
                location: 'center'
            }]
        });
        // ...
    });

    <!--CSS-->#slideOutView {
        height: auto;
        position: absolute;
        top: 0; 
        bottom: 0;
        width: 100%;
    }
    
#####See Also#####
- [SlideOutView API Reference](/api-reference/10%20UI%20Widgets/dxSlideOutView '/Documentation/ApiReference/UI_Widgets/dxSlideOutView/')

[tags]slideOutView, slide-out menu, open, show, close, hide