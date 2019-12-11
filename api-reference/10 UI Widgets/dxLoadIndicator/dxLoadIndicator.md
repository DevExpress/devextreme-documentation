---
module: ui/load_indicator
inherits: ..\Widget\Widget.md
---
---
##### widgettree

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **LoadIndicator** is a UI element notifying the viewer that a process is in progress.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxLoadIndicator` jQuery plug-in.

        <!--HTML-->
        <div id="loadIndicator"></div>

    <!---->

        <!--JavaScript-->
        $("#loadIndicator").dxLoadIndicator({
            visible: true
        });

- **Knockout**  
 Add a div element and apply the `dxLoadIndicator` binding to this element.

        <!--HTML-->
        <div data-bind="dxLoadIndicator: {
            visible: true
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-load-indicator` directive to this element.

        <!--HTML-->
        <div dx-load-indicator="{
            visible: true
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

You can find detailed information on the principles of working with the widget in the [dxLoadIndicator section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/Individual%20Widgets/dxLoadIndicator.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/#dxLoadIndicator') of the [Individual Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/Individual%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationsloadindicatorloadindicatorloadindicator/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>