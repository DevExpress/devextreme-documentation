---
module: ui/accordion
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

- **jQuery**  
 Use the `dxAccordion` jQuery plug-in.

        <!--HTML-->
        <div id="accordion"></div>

    <!---->

        <!--JavaScript-->
        $("#accordion").dxAccordion({
            dataSource: accordionData,
            collapsible: true,
            multiple: true
        });

- **Knockout**  
 Add a div element and apply the `dxAccordion` binding to this element.

        <!--HTML-->
        <div data-bind="dxAccordion: {
            dataSource: accordionData,
            collapsible: true,
            multiple: true
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-accordion` directive to this element.

        <!--HTML-->
        <div dx-accordion="{
            dataSource: accordionData,
            collapsible: true,
            multiple: true
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

Since the **Accordion** widget is used to display multiple items, it supports common Collection Container widget functionality. You can find the detailed information on principles of working with the widget in the [dxAccordion section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/1%20List%20of%20Collection%20Container%20Widgets/dxAccordion.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#List_of_Collection_Container_Widgets/dxAccordion') of the [Collection Container Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationaccordionaccordionaccordion/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="http://www.youtube.com/watch?v=Dd0Nb6AU4B8&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=45" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>