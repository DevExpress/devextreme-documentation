<article>
If you need to organize items into a groups, use [Group](/api-reference/10%20UI%20Widgets/dxForm/6%20Group%20Item '/Documentation/ApiReference/UI_Widgets/dxForm/Group_Item/') form items. To create a Group item, assign "group" to the [itemType](/api-reference/10%20UI%20Widgets/dxForm/6%20Group%20Item/itemType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Group_Item/#itemType') option.

A group item has its own layout, which does not depend on the form layout. Thus, even if a group item spans three columns, its inner layout may consist of any number of columns. For example, two or five. The number of columns in a group layout is defined by the [colCount](/api-reference/10%20UI%20Widgets/dxForm/6%20Group%20Item/colCount.md '/Documentation/ApiReference/UI_Widgets/dxForm/Group_Item/#colCount') option. A group caption is specified using the [caption](/api-reference/10%20UI%20Widgets/dxForm/6%20Group%20Item/caption.md '/Documentation/ApiReference/UI_Widgets/dxForm/Group_Item/#caption') option.

A group can contain items of any type including group and tabbed items, which may also contain nested groups or tabbed pages. The child items of a group item are specified using the [items](/api-reference/10%20UI%20Widgets/dxForm/6%20Group%20Item/items.md '/Documentation/ApiReference/UI_Widgets/dxForm/Group_Item/#items') option.

    <!--JavaScript-->
    var formOptions: {
        formData: employeeData,
        colCount: 3,
        labelLocation: 'top',
        items: [
            {
                itemType: 'group',
                caption: 'Personal Data',
                colCount: 3,
                items: [
                    'FirstName',
                    'LastName',
                    'Position',
                    'BirthDate',
                    'HireDate',
                    'City'
                ]
            },
            {
                itemType: 'group',
                caption: 'Contacts',
                colCount: 2,
                items: [
                    'Phone',
                    'Email'
                ]
            }
        ]
    }

<div class="simulator-desktop-container" data-view="Content/Applications/16_1/UIWidgets/dxForm/GroupItem/markup.html, Content/Applications/16_1/UIWidgets/dxForm/GroupItem/script.js, Content/Applications/16_1/UIWidgets/dxForm/common-styles.css"></div>

As well as a simple item, a group item enables you to customize its appearance using a template. Pass a template name, template element, or a function rendering a template to the [template](/api-reference/10%20UI%20Widgets/dxForm/6%20Group%20Item/template.md '/Documentation/ApiReference/UI_Widgets/dxForm/Group_Item/#template') option of the item. For more information on using templates, refer to the [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/') article.

#####See Also#####
- [Customize Widget Element Appearance](/concepts/10%20UI%20Widgets/80%20Common/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/') 
- [Customize Widget Element Appearance - MVVM Approach](/concepts/10%20UI%20Widgets/80%20Common/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/')


For the complete list of group item configuration options, refer to the [Group Item](/api-reference/10%20UI%20Widgets/dxForm/6%20Group%20Item '/Documentation/ApiReference/UI_Widgets/dxForm/Group_Item/') API reference.
</article>