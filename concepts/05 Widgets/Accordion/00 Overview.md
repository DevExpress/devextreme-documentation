The **Accordion** widget contains several panels displayed one under another. These panels can be collapsed or expanded by an end user, which makes this widget very useful for presenting information in a limited amount of space.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-accordion-overview" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=Dd0Nb6AU4B8&index=41&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

The following code adds a simple **Accordion** to your page. Note that each data source object contains the **title** field, whose value goes to the title of the panel. 

    <!--HTML--><div id="accordionContainer"></div>

<!---->

    <!--JavaScript-->var accordionData = [{
        title: "Personal Data",
        firstName: "John",
        lastName: "Smith",
        birthYear: 1986
    }, {
        title: "Contacts",
        phone: "(555)555-5555",
        email: "John.Smith@example.com"
    }, {
        title: "Address",
        state: "CA",
        city: "San Francisco",
        street: "Stanford Ave"
    }];

    $(function () {
        $("#accordionContainer").dxAccordion({
            dataSource: accordionData,
            itemTemplate: function (itemData, itemIndex, itemElement) {
                for (var field in itemData) {
                    itemElement.append("<p>" + field + ": " + itemData[field] + "</p>");
                }
            }
        });
    });

#####See Also#####
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/')
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/')
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [Accordion - Customize Item Appearance](/concepts/05%20Widgets/Accordion/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Accordion/Customize_Item_Appearance/')
- [Accordion - Control the Behavior](/concepts/05%20Widgets/Accordion/10%20Control%20the%20Behavior.md '/Documentation/Guide/Widgets/Accordion/Control_the_Behavior')
- [Accordion API Reference](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/dxAccordion/')

[tags]accordion, collection container, collection widget, overview