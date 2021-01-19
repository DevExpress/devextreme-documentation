---
id: dxSpeedDialAction
module: ui/speed_dial_action
export: default
inherits: Widget
---
---
##### shortDescription
The **SpeedDialAction** is a button that performs a custom action. It can be represented by a Floating Action Button (FAB) or a button in a speed dial menu opened with the FAB.

##### widgettree
icon: "tel",
onClick: function() {
    DevExpress.ui.notify({
        message: 'Calling...',
        width: 350
    });
}

---
When there is only one **SpeedDialAction** on a page, it is represented by a Floating Action Button (FAB).

When there are multiple **SpeedDialAction**s, they are collected in a speed dial menu that can contain up to five actions. In this case, the FAB opens the menu. You can use the [floatingActionButtonConfig](/api-reference/50%20Common/Object%20Structures/globalConfig/floatingActionButtonConfig '/Documentation/ApiReference/Common/Object_Structures/globalConfig/floatingActionButtonConfig/') object to change the maximum number of actions, and the FAB's position and icons in the opened and closed states.

#include common-tutorialbutton with {
    url: "/Documentation/Guide/Widgets/Floating_Action_Button/Getting_Started_with_Floating_Action_Button/" 
}
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FloatingActionButton/Overview/jQuery/MaterialBlueLight/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget