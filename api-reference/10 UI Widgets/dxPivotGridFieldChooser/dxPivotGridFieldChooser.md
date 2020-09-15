---
id: dxPivotGridFieldChooser
module: ui/pivot_grid_field_chooser
export: default
inherits: Widget
---
---
##### shortDescription
A complementary widget for the [PivotGrid](/api-reference/10%20UI%20Widgets/dxPivotGrid '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/') that allows you to manage data displayed in the **PivotGrid**. The field chooser is already integrated in the **PivotGrid** and can be invoked using the context menu. If you need to continuously display the field chooser near the **PivotGrid** widget, use the **PivotGridFieldChooser** widget.

##### lib
dx.web.js, dx.all.js

---
Both the **PivotGridFieldChooser** and the **PivotGrid** must be bound to one and the same instance of the [PivotGridDataSource](/api-reference/30%20Data%20Layer/PivotGridDataSource '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/'). Create the **PivotGridDataSource** individually and then assign it to both widgets as shown in the code above.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/FieldChooser/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget