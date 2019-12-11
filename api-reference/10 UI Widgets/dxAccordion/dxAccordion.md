---
module: ui/accordion
export: default
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### widgettree
dataSource: [
{
    title: "Personal Data",
    text: "Name: John Smith, Birth Year: 1986",
},
{
    title: "Contacts",
    text: "Phone: (555)555-5555, Email: John.Smith@example.com",
}]

##### lib
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Accordion** widget contains several panels displayed one under another. These panels can be collapsed or expanded by an end user, which makes this widget very useful for presenting information in a limited amount of space.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#accordion").dxAccordion({
            dataSource: [
                { title: "Panel 1 Title", text: "Panel 1 Text Content" },
                { title: "Panel 2 Title", text: "Panel 2 Text Content" }
            ],
            collapsible: true,
            multiple: true
        });
    });

    <!--HTML-->
    <div id="accordion"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-accordion
        [dataSource]="accordionData"
        [collapsible]="true"
        [multiple]="true">
    </dx-accordion>

    <!--TypeScript-->
    import { DxAccordionModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        accordionData = [
            { title: "Panel 1 Title", text: "Panel 1 Text Content" },
            { title: "Panel 2 Title", text: "Panel 2 Text Content" }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxAccordionModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-accordion="{
            dataSource: accordionData,
            collapsible: true,
            multiple: true
        }"></div>
    </div>

    <!--JavaScript-->
    angular.module("DemoApp", ["dx"])
        .controller("DemoController", function DemoController($scope) {
            $scope.accordionData = [
                { title: "Panel 1 Title", text: "Panel 1 Text Content" },
                { title: "Panel 2 Title", text: "Panel 2 Text Content" }
            ];
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxAccordion: {
        dataSource: accordionData,
        collapsible: true,
        multiple: true
    }"></div>

    <!--JavaScript-->var viewModel = {
        accordionData: [
            { title: "Panel 1 Title", text: "Panel 1 Text Content" },
            { title: "Panel 2 Title", text: "Panel 2 Text Content" }
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Accordion()
        .ID("accordion")
        .DataSource(new[] {
            new { title = "Panel 1 Title", text = "Panel 1 Text Content" },
            new { title = "Panel 2 Title", text = "Panel 2 Text Content" }
        })
        .Collapsible(true)
        .Multiple(true)
    )

    <!--Razor VB-->@(Html.DevExtreme().Accordion() _
        .ID("accordion") _
        .DataSource({
            New With { .title = "Panel 1 Title", .text = "Panel 1 Text Content" },
            New With { .title = "Panel 2 Title", .text = "Panel 2 Text Content" }
        }) _
        .Collapsible(True) _
        .Multiple(True)
    )

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationaccordionaccordionaccordion/"
}
<a href="http://www.youtube.com/watch?v=Dd0Nb6AU4B8&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=45" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Accordion - Overview](/concepts/05%20Widgets/Accordion/00%20Overview.md '/Documentation/Guide/Widgets/Accordion/Overview/')