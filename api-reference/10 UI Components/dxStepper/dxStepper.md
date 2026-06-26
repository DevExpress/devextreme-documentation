---
id: dxStepper
module: ui/stepper
export: default
inherits: CollectionWidget
---
---
##### shortDescription
A Stepper is a UI component that displays progress as a user moves through a sequence of steps.

##### widgettree
items: [{
  title: 'Cart',
  icon: 'cart'
}, {
  title: 'Checkout',
  icon: 'packagebox'
}, {
  title: 'Ordered',
  icon: 'checkmarkcircle'
}]

##### lib
dx.web.js, dx.all.js

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Stepper/Overview/"
}
#include common-tutorialbutton with {
    url: "/Documentation/Guide/UI_Components/Stepper/Getting_Started_with_Stepper/"
}