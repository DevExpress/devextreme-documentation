---
module: ui/nav_bar
inherits: ..\dxTabs\dxTabs.md
---
---
##### widgettree
dataSource: [{
        text: "Contacts",
        icon: "user"
    }, {
        text: "Missed",
        icon: "clock",
        badge: 3
    }, {
        text: "Favorites",
        icon: "favorites"
    }
]

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **NavBar** is a widget that navigates the application views.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxNavBar` jQuery plug-in.

        <!--HTML-->
        <div id="navBar"></div>

    <!---->

        <!--JavaScript-->
        var navItems = [
            { text: "Home", icon: "home" },
            { text: "About", icon: "info" },
            { text: "favorites", icon: "favorites", badge: "new" }
        ];
        $("#navBar").dxNavBar({
            dataSource: navItems
        });

- **Knockout**  
 Add a div element and apply the `dxNavBar` binding to this element.

        <!--HTML-->
        <div data-bind="dxNavBar: {
            dataSource: navItems
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-nav-bar` directive to this element.

        <!--HTML-->
        <div dx-nav-bar="{
            dataSource: navItems
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

Since the **NavBar** widget is used to display multiple items, it supports the common Collection Container widget functionality. You can find detailed information on principles of working with the widget in the [dxNavBar section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/1%20List%20of%20Collection%20Container%20Widgets/dxNavBar.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#List_of_Collection_Container_Widgets/dxNavBar') of the [Collection Container Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationnavbarnavbarnavbar/iphone/ios7/default/default" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>