<article>
The [Accordion](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/dxAccordion/') widget displays items one under another and enables an end-user to collapse and expand these items. A displayed item consists of a body and a title. If an item is collapsed, the widget displays only its title. 

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationaccordionaccordionaccordion/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
  
The widget supports common Collection Container widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Specify data source](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/0%20Specify%20Data%20Source.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source')  
- [Handle item events](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/1%20Handle%20Item%20Events.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events')  
- [Customize item appearance](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')  

In addition to common collection container functionality, the widget enables you to perform the following adjustments.

**Specify the appearance of an item title**

Customize item title appearance using one of the following ways.

- Use a default item title template  

 In this case, the item object should contain the **title** field, which specifies the text displayed by the item title.

        <!--JavaScript-->
        var accordionData = [
            {
                title: "Personal Data",
                firstName: "John",
                lastName: "Smith",
                birthYear: 1986
            },
            {
                title: "Contacts",
                phone: "(555)555-5555",
                email: "John.Smith@example.com"
            },
            . . .
        ];
        var accordionOptions = {
            dataSource: accordionData
        }

- Implement a custom template for an item title  

 Assign a function that modifies the title element to the [itemTitleTemplate](/api-reference/10%20UI%20Widgets/dxAccordion/1%20Configuration/itemTitleTemplate.md '/Documentation/ApiReference/UI_Widgets/dxAccordion/Configuration/#itemTitleTemplate') option.

        <!--JavaScript-->
        var accordionOptions = {
            dataSource: accordionData,
            itemTitleTemplate: function(itemData, itemIndex, itemElement){
                var titleContainer = $("<div>").css('text-align','center').append("<h2>" + itemData.title + "</h2>");
                titleContainer.appendTo(itemElement);
            }
        }


 In **MVVM approach**, you can assign a template name, a template DOM node or a jQuery object of the template to the [itemTitleTemplate](/api-reference/10%20UI%20Widgets/dxAccordion/1%20Configuration/itemTitleTemplate.md '/Documentation/ApiReference/UI_Widgets/dxAccordion/Configuration/#itemTitleTemplate') option.
 
 #####AngularJS Approach#####

        <!--HTML-->
        <div dx-accordion = "{ dataSource: accordionData, itemTitleTemplate: 'myTitle' }" dx-item-alias="itemObj">
            <div data-options="dxTemplate: {name: 'myTitle'}">
                <div style="text-align: center;">
                    <h2>{{itemObj.title}}</h2>
                </div>
            </div>
        </div>   
                  

 #####Knockout Approach#####

        <!--HTML-->
        <div data-bind="dxAccordion: { dataSource: accordionData, itemTitleTemplate: 'myTitle' }">
            <div data-options="dxTemplate: {name: 'myTitle'}">
                <div style="text-align: center;">
                    <h2 data-bind="text: title"></h2>
                </div>
            </div>
        </div>

#####See Also#####
- [Customize Item Template](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/') - principles of item title appearance customization are the same as those of widget appearance customization
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/') - principles of item title appearance customization are the same as those of widget appearance customization

**Adjust display modes**

The widget contains the [collapsible](/api-reference/10%20UI%20Widgets/dxAccordion/1%20Configuration/collapsible.md '/Documentation/ApiReference/UI_Widgets/dxAccordion/Configuration/#collapsible') option, which enables you to specify whether all items can be collapsed at the same time or at least one item should be expanded.

    <!--JavaScript-->
    var accordionOptions = {
        collapsible: true
    }

The **Accordion** widget enables you to specify whether it can display several expanded items at once or only a single item. Use the [multiple](/api-reference/10%20UI%20Widgets/dxAccordion/1%20Configuration/multiple.md '/Documentation/ApiReference/UI_Widgets/dxAccordion/Configuration/#multiple') option to adjust this feature.

    <!--JavaScript-->
    var accordionOptions = {
        multiple: true
    }

**Keyboard support**

An end-user can use the following keys to interact with the widget.

- Up/down arrow (page up/down)
 Set focus on the previous/next item.

- Home/End
 Set focus on the first/last element.

- Enter (Space)
 Expand/collapse the current element.

<div class="simulator-desktop-container" data-view="Content/Applications/16_1/UIWidgets/dxAccordion/markup.html, Content/Applications/16_1/UIWidgets/dxAccordion/script.js, Content/Applications/16_1/UIWidgets/dxAccordion/styles.css"></div>
</article>