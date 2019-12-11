<article data-show="Content/Applications/16_1/UIWidgets/dxList/DataSource/markup.html,
        Content/Applications/16_1/UIWidgets/dxList/DataSource/script.js,
        Content/Applications/16_1/UIWidgets/dxList/DataSource/styles.css">

The **List** widget displays items stored in a data source specified using the [dataSource](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#dataSource') configuration option. In a simple case, the widget uses the default template to render items. This template represents a list item as a <b>&lt;div&gt;</b> element containing the text associated with the corresponding data item. The [default item template](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance/0%20Use%20a%20Default%20Item%20Template.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance/Use_a_Default_Item_Template') can be used if a data source item is a string value, or an object containing the **text** field, which contains the text associated with this item.

    <!--JavaScript-->
    var listData=[
        { text: "item1" },
        { text: "item2" },
        "item3",
        "item4"
    ];

If data item objects have another structure, you should specify the custom template used to render items.

#####See Also#####
- [Customize Item Template](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/') 
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')

</article>