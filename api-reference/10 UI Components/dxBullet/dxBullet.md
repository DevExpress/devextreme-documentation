---
id: dxBullet
module: viz/bullet
export: default
inherits: BaseSparkline
---
---
##### shortDescription
The Bullet UI component is useful when you need to compare a single measure to a target value. The UI component comprises a horizontal bar indicating the measure and a vertical line indicating the target value.

##### widgettree
target: 30,
value: 20

##### lib
dx.viz.js, dx.viz-web.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SimpleBullets/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/UI_Components/Bullet/Visual_Elements/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget