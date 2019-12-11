---
module: ui/nav_bar
export: default
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
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->
    $(function () {
        $("#navBar").dxNavBar({
            items: [
                { text: "Home", icon: "home" },
                { text: "About", icon: "info" },
                { text: "Favorites", icon: "favorites", badge: "new" }
            ]
        });
    });

    <!--HTML-->
    <div id="navBar"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-nav-bar>
        <dxi-item text="Home" icon="home"></dxi-item>
        <dxi-item text="About" icon="info"></dxi-item>
        <dxi-item text="Favorites" icon="favorites" badge="new"></dxi-item>
    </dx-nav-bar>

    <!--TypeScript-->
    import { DxNavBarModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxNavBarModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div dx-nav-bar="{
        items: [
            { text: 'Home', icon: 'home' },
            { text: 'About', icon: 'info' },
            { text: 'Favorites', icon: 'favorites', badge: 'new' }
        ]
    }"></div>

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxNavBar: {
        items: [
            { text: 'Home', icon: 'home' },
            { text: 'About', icon: 'info' },
            { text: 'Favorites', icon: 'favorites', badge: 'new' }
        ]
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().NavBar()
        .ID("navBar")
        .Items(items => {
            items.Add().Text("Home").Icon("home");
            items.Add().Text("About").Icon("info");
            items.Add().Text("Favorites").Icon("favorites").Badge("new");
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().NavBar() _
        .ID("navBar") _
        .Items(Sub(items)
            items.Add().Text("Home").Icon("home")
            items.Add().Text("About").Icon("info")
            items.Add().Text("Favorites").Icon("favorites").Badge("new")
        End Sub)
    )

---

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationnavbarnavbarnavbar/iphone/ios7/default/default"
}

#####See Also#####
- [NavBar - Overview](/concepts/05%20Widgets/NavBar/00%20Overview.md '/Documentation/Guide/Widgets/NavBar/Overview/')