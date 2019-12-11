---
module: ui/panorama
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### widgettree
dataSource: [
    {
        header: "Main courses",
        text: "First and second course of a meal"
    },
    {
        header: "Seafood",
        text: "Seafood: ocean and sea"
    },
    {
        header: "Desserts",
        text: "Desserts: biscuits and cookies"
    },
    {
        header: "Drinks",
        text: "Drinks: Soft vine and tea"
    }
],
height: 300

##### lib
dx.mobile.js, dx.all.js

##### shortDescription
The **Panorama** widget is a full-screen widget that allows you to arrange items on a long horizontal canvas split into several views. Each view contains several items, and an end user navigates the views with the swipe gesture. The **Panorama** is often used as a navigation map on the first page of an application.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxPanorama` jQuery plug-in.

        <!--HTML-->
        <div id="panorama"></div>

    <!---->

        <!--JavaScript-->
        $("#panorama").dxPanorama({
            dataSource: panoramaData,
            title: 'Panorama title',
            backgroundImage: '/images/panoramaBG.png'
        });

- **Knockout**  
 Add a div element and apply the `dxPanorama` binding to this element.

        <!--HTML-->
        <div data-bind="dxPanorama: {
            dataSource: panoramaData,
            title: 'Panorama title',
            backgroundImage: '/images/panoramaBG.png'
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-panorama` directive to this element.

        <!--HTML-->
        <div dx-panorama="{
            dataSource: panoramaData,
            title: 'Panorama title',
            backgroundImage: '/images/panoramaBG.png'
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

Since the **Panorama** widget is used to display multiple items, it supports common Collection Container widget functionality. You can find detailed information on the principles of working with the widget in the [dxPanorama section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/1%20List%20of%20Collection%20Container%20Widgets/dxPanorama.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#List_of_Collection_Container_Widgets/dxPanorama') of the [Collection Container Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationpanoramapanoramapanorama/iphone/ios7/default/default" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="http://www.youtube.com/watch?v=zVDFC0BuGG0&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=11" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>