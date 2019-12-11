---
module: ui/multi_view
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### widgettree
dataSource: [
    { text: "Super Mart of the West" },
    { text: "Electronics Depot" },
    { text: "Tom's Club" }
],
height: 300,
loop: true

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **MultiView** is a widget that contains several views. An end user navigates through the views by swiping them in the horizontal direction.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxMultiView` jQuery plug-in.

        <!--HTML-->
        <div id="multiView"></div>

    <!---->

        <!--JavaScript-->
        $("#multiView").dxMultiView({
            dataSource: multiViewData,
            selectedIndex: 0
        });

- **Knockout**  
 Add a div element and apply the `dxMultiView` binding to this element.

        <!--HTML-->
        <div data-bind="dxMultiView: {
            dataSource: multiViewData,
            selectedIndex: 0
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-multi-view` directive to this element.

        <!--HTML-->
        <div dx-multi-view="{
            dataSource: multiViewData,
            selectedIndex: 0
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

Since the **MultiView** widget is used to display multiple items, it supports the common Collection Container widget functionality. You can find detailed information on the principles of working with the widget in the [dxMultiView section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/1%20List%20of%20Collection%20Container%20Widgets/dxMultiView.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#List_of_Collection_Container_Widgets/dxMultiView') of the [Collection Container Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationmultiviewmultiviewmultiview/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>