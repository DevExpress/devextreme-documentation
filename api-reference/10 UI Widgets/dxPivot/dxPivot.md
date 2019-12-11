---
module: ui/pivot
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### widgettree
dataSource: [
    {
        title: "Main courses",
        text: "First and second course of a meal"
    },
    {
        title: "Seafood",
        text: "Seafood: ocean and sea"
    },
    {
        title: "Desserts",
        text: "Desserts: biscuits and cookies"
    },
    {
        title: "Drinks",
        text: "Drinks: Soft vine and tea"
    }
],
height: 300

##### lib
dx.mobile.js, dx.all.js

##### shortDescription
The **Pivot** provides a quick way to manage multiple views. It includes a collection of views and a navigation header. An end user switches the views by swiping them or by clicking their titles on the navigation header.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxPivot` jQuery plug-in.

        <!--HTML-->
        <div id="pivot"></div>

    <!---->

        <!--JavaScript-->
        $("#pivot").dxPivot({
            dataSource: pivotData
        });

- **Knockout**  
 Add a div element and apply the `dxPivot` binding to this element.

        <!--HTML-->
        <div data-bind="dxPivot: {
            dataSource: pivotData
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-pivot` directive to this element.

        <!--HTML-->
        <div dx-pivot="{
            dataSource: pivotData
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

Since the **Pivot** widget is used to display multiple items, it supports common Collection Container widget functionality. You can find detailed information on the principles of working with the widget in the [dxPivot section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/1%20List%20of%20Collection%20Container%20Widgets/dxPivot.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#List_of_Collection_Container_Widgets/dxPivot') of the [Collection Container Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationpivotpivotpivot/iphone/ios7/default/default" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="http://www.youtube.com/watch?v=EVE8ykPZxOE&index=10&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>