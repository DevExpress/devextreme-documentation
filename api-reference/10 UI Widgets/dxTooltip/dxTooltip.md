---
module: ui/tooltip
inherits: ..\dxPopover\dxPopover.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Tooltip** widget displays a tooltip for a specified element on the page.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxTooltip` jQuery plug-in.

        <!--HTML-->
        <div id="targetElement"></div>
        <div id="tooltip">
            <p>This is the target element</p>
        </div>

    <!---->

        <!--JavaScript-->
        $("#tooltip").dxTooltip({
            target: '#targetElement',
            visible: true
        });

- **Knockout**  
 Add a div element and apply the `dxTooltip` binding to this element.

        <!--HTML-->
        <div id="targetElement"></div>
        <div data-bind="dxTooltip: {
            target: '#targetElement',
            visible: true
        }">
            <p>This is the target element</p>
        </div>

- **AngularJS**  
 Add a div element and apply the `dx-tooltip` directive to this element.

        <!--HTML-->
        <div id="targetElement"></div>
        <div dx-tooltip="{
            target: '#targetElement',
            visible: true
        }">
            <p>This is the target element</p>
        </div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

You can find detailed information on the principles of working with the widget in the [dxTooltip section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets/2%20List%20of%20Overlay%20Widgets/dxTooltip.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#List_of_Overlay_Widgets/dxTooltip') of the [Overlay Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationstooltiptooltiptooltip/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="http://www.youtube.com/watch?v=kb53tdJvcZA&index=32&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>