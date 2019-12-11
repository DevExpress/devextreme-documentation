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
You can create the **Accordion** widget using one of the following approaches.

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#accordion").dxAccordion({
            dataSource: accordionData,
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

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div dx-accordion="{
        dataSource: accordionData,
        collapsible: true,
        multiple: true
    }"></div>

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxAccordion: {
        dataSource: accordionData,
        collapsible: true,
        multiple: true
    }"></div>

#####[**ASP.NET MVC Controls**](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget')

    <!--Razor C#-->@(Html.DevExtreme().Accordion()
        .ID("accordion")
        .DataSource(AccordionData)
        .Collapsible(true)
        .Multiple(true)
    )

    <!--Razor VB-->@(Html.DevExtreme().Accordion() _
        .ID("accordion") _
        .DataSource(AccordionData) _
        .Collapsible(True) _
        .Multiple(True)
    )

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationaccordionaccordionaccordion/"
}
<a href="http://www.youtube.com/watch?v=Dd0Nb6AU4B8&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=45" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Accordion - Overview](/concepts/05%20Widgets/Accordion/00%20Overview.md '/Documentation/Guide/Widgets/Accordion/Overview/')