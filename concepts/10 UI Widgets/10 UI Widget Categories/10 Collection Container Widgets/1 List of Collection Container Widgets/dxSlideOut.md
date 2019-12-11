<article data-show="Content/Applications/16_1/UIWidgets/dxSlideOut/markup.html,
        Content/Applications/16_1/UIWidgets/dxSlideOut/script.js,
        Content/Applications/16_1/UIWidgets/dxSlideOut/styles.css">

The [SlideOut](/api-reference/10%20UI%20Widgets/dxSlideOut '/Documentation/ApiReference/UI_Widgets/dxSlideOut/') widget consists of the main view and the menu revealed when the main view slides out. The main view displays the currently selected item.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationslideoutslideoutgroupingmenuitems/iphone/ios7/default/default" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Collection Container widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Specify data source](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/0%20Specify%20Data%20Source.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source')  
- [Handle item events](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/1%20Handle%20Item%20Events.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events')  
- [Customize item appearance](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')  

In addition to common collection container functionality, the widget enables you to perform the following adjustments.

**Adjust an item and menu item appearance**

[note]The [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#itemTemplate') option is used to specify the appearance of a selected item. Menu item appearance is specified in the same manner, but use the [menuItemTemplate](/api-reference/10%20UI%20Widgets/dxSlideOut/1%20Configuration/menuItemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#menuItemTemplate') option to specify the menu item template.

    <!--JavaScript-->
    var contacts = [
        { name: "Barbara J. Coggins", phone: "512-964-2757", email: "BarbaraJCoggins@rhyta.com", category: "Family" },
        { name: "Carol M. Das", phone: "360-684-1334", email: "CarolMDas@jourrapide.com", category: "Friends" },
        { name: "Janet R. Skinner", phone: "520-573-7903", email: "JanetRSkinner@jourrapide.com", category: "Work" },
        . . .
    ];
    $("#mySlideOut").dxSlideOut({
        dataSource: contacts,
        itemTemplate: function(itemData, itemIndex, itemElement){
            itemElement.append("<h1>" + itemData.category + "</h1>");
            itemElement.append("<p><b>Name:</b> " + itemData.name + "</p>");
            itemElement.append("<p><b>Phone:</b> " + itemData.phone + "</p>");
            itemElement.append("<p><b>e-mail:</b> " + itemData.email + "</p>");
        },
        menuItemTemplate: function(itemData, itemIndex, itemElement){
            itemElement.append("<b>" + itemData.name + "</b>");
        }
    });

<!---->

    <!--HTML-->
    <div id="mySlideOut"></div>
    
#####AngularJS Approach#####

    <!--JavaScript-->
    var contacts = [
        { name: "Barbara J. Coggins", phone: "512-964-2757", email: "BarbaraJCoggins@rhyta.com", category: "Family" },
        { name: "Carol M. Das", phone: "360-684-1334", email: "CarolMDas@jourrapide.com", category: "Friends" },
        { name: "Janet R. Skinner", phone: "520-573-7903", email: "JanetRSkinner@jourrapide.com", category: "Work" },
        . . .
    ];
    var slideOutOptions = {
        dataSource: contacts,
        itemTemplate: 'item',
        menuItemTemlate: 'menuItem'
    }
    
<!---->

    <!--HTML-->
    <div dx-slide-out="slideOutOptions" dx-item-alias="itemObj">
        <div data-options="dxTemplate: { name: 'item' }">
            <h1>{{itemObj.category}}</h1>
            <p><b>Name:</b> {{itemObj.name}}</p>
            <p><b>Phone:</b> {{itemObj.phone}}</p>
            <p><b>e-mail:</b> {{itemObj.email}}</p>
        </div>
        <div data-options="dxTemplate: { name: 'menuItem' }">
            <b>{{itemObj.name}}</b>
        </div>
    </div>

#####Knockout Approach#####

    <!--JavaScript-->
    var contacts = [
        { name: "Barbara J. Coggins", phone: "512-964-2757", email: "BarbaraJCoggins@rhyta.com", category: "Family" },
        { name: "Carol M. Das", phone: "360-684-1334", email: "CarolMDas@jourrapide.com", category: "Friends" },
        { name: "Janet R. Skinner", phone: "520-573-7903", email: "JanetRSkinner@jourrapide.com", category: "Work" },
        . . .
    ];
    var slideOutOptions = {
        dataSource: contacts,
        itemTemplate: 'item',
        menuItemTemlate: 'menuItem'
    }
    
<!---->
    
    <!--HTML-->
    <div data-bind="dxSlideOut: slideOutOptions">
        <div data-options="dxTemplate: { name: 'item' }">
            <h1 data-bind="text: category"></h1>
            <p><b>Name:</b> <span data-bind="text: name"></span></p>
            <p><b>Phone:</b> <span data-bind="text: phone"></span></p>
            <p><b>e-mail:</b> <span data-bind="text: email"></span></p>
        </div>
        <div data-options="dxTemplate: { name: 'menuItem' }">
            <b data-bind="text: name"></b>
        </div>
    </div>

**Display grouped menu**

The widget enables you to display menu items in groups. Set the [menuGrouped](/api-reference/10%20UI%20Widgets/dxSlideOut/1%20Configuration/menuGrouped.md '/Documentation/ApiReference/UI_Widgets/dxSlideOut/Configuration/#menuGrouped') option to *true* to enable the feature. In this case, the data source should contain a grouped array. A grouped array item should contain a property that specifies the group name and the items property containing items belonging to the group. If you use a default template, the group name should be specified by the **key** property.

    <!--JavaScript-->
    var groupedData = [
        {
            key: 'group 1',
            items: [ 'item11', 'item12', 'item13', 'item14']
        },
        {
            key: 'group 2',
            items: [ 'item21', 'item22', 'item23', 'item24']
        },
        {
            key: 'group 3',
            items: [ 'item31', 'item32', 'item33', 'item34']
        }
    ]
    var slideOutOptions = {
        dataSource: groupedData,
        menuGrouped: true
    }
</article>