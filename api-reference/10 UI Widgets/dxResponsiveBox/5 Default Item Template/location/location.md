---
type: Object | Array<Object>
---
---
##### shortDescription
Specifies the item location and size against the widget grid.

---
If you need to specify different locations for [different screens](/concepts/05%20Widgets/ResponsiveBox/05%20Size%20Qualifiers.md '/Documentation/Guide/Widgets/ResponsiveBox/Size_Qualifiers/'), pass an array of objects with the same structure to the **location** field.

    <!--HTML--><div data-options="dxItem: { 
        location: [
            { row: 0, col: 0, colspan: 3, screen: 'lg'},
            { row: 0, col: 0, colspan: 2, screen: 'xs sm md'}
        ]
    }"> <p>Header</p> </div>