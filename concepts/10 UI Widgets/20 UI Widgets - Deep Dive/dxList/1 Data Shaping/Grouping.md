<article data-show="Content/Applications/16_1/UIWidgets/dxList/Grouping/markup.html,
        Content/Applications/16_1/UIWidgets/dxList/Grouping/script.js,
        Content/Applications/16_1/UIWidgets/dxList/Grouping/styles.css">

The **List** widget can display data source items as a grouped list. In this case, items of each group are displayed under a group caption. Set the [grouped](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/grouped.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#grouped') option to *true* to display a grouped list.

The default group template supports the following array structure.

    <!--JavaScript-->
    var listData = [
        {
            key: "group1 caption",
            items: [
                { text: "item1" },
                { text: "item2" },
                { text: "item3" }
            ]
        },
        {
            key: "group2 caption",
            items: [
                { text: "item1" },
                { text: "item2" },
                { text: "item3" }
            ]
        },
        {
            key: "group3 caption",
            items: [
                { text: "item1" },
                { text: "item2" },
                { text: "item3" }
            ]
        }
    ];
    
The **key** property value is displayed as a group header. Group items specified by the **items** array are displayed below.

If a group header is specified by a different property, you should specify a custom group template in the same way as a custom item template.

    <!--JavaScript-->
    var listData = [
        {
            groupName: "A",
            items: [
                { text: "Alabama" },
                { text: "Alaska" },
                { text: "Arizona" },
                { text: "Arkanzas" }
            ]
        },
        {
            groupName: "C",
            items: [
                { text: "California" },
                { text: "Colorado" },
                { text: "Connecticut" }
            ]
        },
        . . .
    ];

You can render group elements using a custom rendering function. For this purpose, assign the required function to the [groupTemplate](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/groupTemplate.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#groupTemplate') option. Note that the function should not return a value.

The **List** widget passes the following arguments to the group rendering function.

- **groupData**  
 The group object to be rendered.
- **groupIndex**  
 The index of the group header to be rendered.
- **groupElement**  
 An HTML element of the group header to be rendered.
 
<!--...-->

    <!--JavaScript-->
    $("#listContainer").dxList({
            dataSource: listData,
            groupTemplate: function(groupData, groupIndex, groupElement){
                groupElement.empty();
                groupElement.append("<h1 style="\color:red\">" + groupData.groupName + "</h1>");
            }
        });
    });


To specify a group header structure in **MVVM approach**, do the following.

1. Create an HTML container element within the widget and apply the **data-options** attribute set to [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/').

 #####AngularJS Approach#####

        <!--HTML--><div dx-list="{ dataSource: listData }" dx-item-alias="itemObj">
            <div data-options="dxTemplate:{ name:'item' }">
            </div>
        </div>

 #####Knockout Approach#####

        <!--HTML-->
        <div data-bind="dxList:{ dataSource: listData, grouped: true }">
            <div data-options="dxTemplate:{name:'group'}">
            </div>
        </div>

2. Insert the required structure in the newly added **dxTemplate** element.

 #####AngularJS Approach#####

        <!--HTML--><div dx-list="{ dataSource: listData }" dx-item-alias="itemObj">
            <div data-options="dxTemplate:{ name:'item' }">
                <h1 style="color:red;">{{itemObj.groupName}}...</h1>
            </div>
        </div>

 #####Knockout Approach#####

        <!--HTML-->
        <div data-bind="dxList:{ dataSource: listData, grouped: true }">
            <div data-options="dxTemplate:{ name:'group' }">
                <h1 style="color:red;"><span data-bind="text: groupName"></span>...</h1>
            </div>
        </div>

 The default name of the template element is "group". If you use a different template name, assign it to the [groupTemplate](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/groupTemplate.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#groupTemplate') configuration option of the widget.

 #####AngularJS Approach#####

        <!--HTML--><div dx-list="{ dataSource: listData, groupTemplate:'myGroup' }" dx-item-alias="itemObj">
            <div data-options="dxTemplate:{ name:'myGroup' }">
                ...
            </div>
        </div>

 #####Knockout Approach#####

        <!--HTML--><div data-bind="dxList:{ dataSource: listData, groupTemplate:'myGroup' }">
            <div data-options="dxTemplate:{ name:'myGroup' }">
                ...
            </div>
        </div>

In addition, the widget supports group collapsing. Assign *true* to the [collapsibleGroups](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/collapsibleGroups.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#collapsibleGroups') option to enable the feature. In this case, the down arrow is displayed to the right of a group header. An end-user can collapse or expand a group by clicking the group header.

    <!--JavaScript-->
    var listOptions = {
        dataSource: listData,
        grouped: true,
        collapsibleGroups: true
    }

You can also collapse and expand groups programmatically using the [collapseGroup(groupIndex)](/api-reference/10%20UI%20Widgets/dxList/3%20Methods/collapseGroup(groupIndex).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#collapseGroupgroupIndex') and [expandGroup(groupIndex)](/api-reference/10%20UI%20Widgets/dxList/3%20Methods/expandGroup(groupIndex).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#expandGroupgroupIndex') methods respectively.

    <!--JavaScript-->
    // Get widget instance
    . . .
    collapseListGroup = function(index){
        listInstance.collapseGroup(index);
    }

    expandListGroup = function(index){
        listInstance.expandGroup(index);
    }
</article>