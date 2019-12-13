---
id: dxMenu.Options.showFirstSubmenuMode
acceptValues: 'onClick' | 'onHover'
type: Object | String
default: { name: 'onClick', delay: { show: 50, hide: 300 } }
---
---
##### shortDescription
Specifies options for showing and hiding the first level submenu.

---
If you assign a string that specifies the mode name to this option, the widget will use the default delay value.

    <!--JavaScript-->
    showFirstSubmenuMode: "onHover"

#include common-ref-enum with {
    enum: "`ShowSubmenuMode`",
    values: "`OnHover` and `OnClick`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Menu/Overview/"
}