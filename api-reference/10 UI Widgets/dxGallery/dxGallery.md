---
module: ui/gallery
export: default
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### widgettree
dataSource: [
    "https://js.devexpress.com/Content/images/doc/17_1/PhoneJS/person1.png",
    "https://js.devexpress.com/Content/images/doc/17_1/PhoneJS/person2.png",
    "https://js.devexpress.com/Content/images/doc/17_1/PhoneJS/person3.png",
    "https://js.devexpress.com/Content/images/doc/17_1/PhoneJS/person4.png"
],
height: 400

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Gallery** is a widget that displays a collection of images in a carousel. The widget is supplied with various navigation controls that allow a user to switch between images.

---
You can create the widget using one of the following approaches.

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#gallery").dxGallery({
            dataSource: [
                "http://path/to/image/1.png",
                "http://path/to/image/2.png",
                "http://path/to/image/3.png"
            ],
            height: 300
        });
    });

    <!--HTML--><div id="gallery"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryData"
        [height]="300">
    </dx-gallery>

    <!--TypeScript-->
    export class AppComponent {
        galleryData = [
            'http://path/to/image/1.png',
            'http://path/to/image/2.png',
            'http://path/to/image/3.png'
        ];
    }

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div dx-gallery="{
        dataSource: [
            'http://path/to/image/1.png',
            'http://path/to/image/2.png',
            'http://path/to/image/3.png'
        ],
        height: 300
    }"></div>

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML--><div data-bind="dxGallery: {
        dataSource: [
            'http://path/to/image/1.png',
            'http://path/to/image/2.png',
            'http://path/to/image/3.png'
        ],
        height: 300
    }"></div>

#####[**ASP.NET MVC Controls**](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget')

    <!--Razor C#-->@(Html.DevExtreme().Gallery()
        .ID("gallery")
        .DataSource(new[] {
            "http://path/to/image/1.png",
            "http://path/to/image/2.png",
            "http://path/to/image/3.png"
        })
        .Height(300)
    )

    <!--Razor VB-->@(Html.DevExtreme().Gallery() _
        .ID("gallery") _
        .DataSource({
            "http://path/to/image/1.png",
            "http://path/to/image/2.png",
            "http://path/to/image/3.png"
        }) _
        .Height(300)
    )

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistsgallerygallerysimplegallery/"
}

#####See Also#####
- [Gallery - Overview](/concepts/05%20Widgets/Gallery/00%20Overview.md '/Documentation/Guide/Widgets/Gallery/Overview/')