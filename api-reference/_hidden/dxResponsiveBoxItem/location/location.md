---
id: dxResponsiveBoxItem.location
type: Object | Array<Object>
---
---
##### shortDescription
Specifies the item location and size against the UI component grid.

---
If you need to specify different locations for [different screens](/concepts/05%20UI%20Components/ResponsiveBox/05%20Size%20Qualifiers.md '/Documentation/Guide/UI_Components/ResponsiveBox/Size_Qualifiers/'), pass an array of objects with the same structure to the **location** field.

    <!--HTML--><div data-options="dxItem: { 
        location: [
            { row: 0, col: 0, colspan: 3, screen: "lg"},
            { row: 0, col: 0, colspan: 2, screen: "xs sm md"}
        ]
    }"> <p>Header</p> </div>

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/ResponsiveBox/Overview/"
}

#####See Also#####
- [Arrange Layout Elements](/concepts/05%20UI%20Components/ResponsiveBox/15%20Arrange%20Layout%20Elements.md '/Documentation/Guide/UI_Components/ResponsiveBox/Arrange_Layout_Elements/')