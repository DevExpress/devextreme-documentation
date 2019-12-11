<article>
If you need to add an empty space between neighboring items, use an [Empty](/api-reference/10%20UI%20Widgets/dxForm/8%20Empty%20Item '/Documentation/ApiReference/UI_Widgets/dxForm/Empty_Item/') form item. To create an empty item, assign "empty" to the [itemType](/api-reference/10%20UI%20Widgets/dxForm/8%20Empty%20Item/itemType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Empty_Item/#itemType') option of an item.

    <!--JavaScript-->
    var formOptions: {
        formData: employeeData,
        items: [
            'FirstName',
            'LastName',
            { 
                itemType: 'empty',
                colSpan: 2
            },
            'Position',
            {
                itemType: 'empty'
            },
            'BirthDate',
            'HireDate',
            'City',
            {
                itemType: 'empty'
            },
            'Phone',
            'Email'
        ]
    }

<div class="simulator-desktop-container" data-view="Content/Applications/16_1/UIWidgets/dxForm/EmptyItem/markup.html, Content/Applications/16_1/UIWidgets/dxForm/EmptyItem/script.js, Content/Applications/16_1/UIWidgets/dxForm/common-styles.css"></div>
</article>