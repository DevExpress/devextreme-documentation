---
module: ui/slide_out
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### lib
dx.mobile.js, dx.all.js

##### shortDescription
The **SlideOut** widget is a classic slide-out menu paired with a view. An end user opens the menu by swiping away the view.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxSlideOut` jQuery plug-in.

        <!--HTML-->
        <div id="slideOut"></div>

    <!---->

        <!--JavaScript-->
        $("#slideOut").dxSlideOut({
            dataSource: slideOutData
        });

- **Knockout**  
 Add a div element and apply the `dxSlideOut` binding to this element.

        <!--HTML-->
        <div data-bind="dxSlideOut: {
            dataSource: slideOutData
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-slide-out` directive to this element.

        <!--HTML-->
        <div dx-slide-out="{
            dataSource: slideOutData
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

Since the **SlideOut** widget is used to display multiple items, it supports common Collection Container widget functionality. You can find detailed information on the principles of working with the widget in the [dxSlideOut section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/1%20List%20of%20Collection%20Container%20Widgets/dxSlideOut.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#List_of_Collection_Container_Widgets/dxSlideOut') of the [Collection Container Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationslideoutslideoutgroupingmenuitems/iphone/ios7/default/default" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>