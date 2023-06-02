---
id: dxSpeedDialAction
module: ui/speed_dial_action
export: default
inherits: Widget
---
---
##### shortDescription
The SpeedDialAction is a button that performs a custom action. It can be represented by a Floating Action Button (FAB) or a button in a speed dial menu opened with the FAB.

##### widgettree
icon: "tel",
onClick: function() {
    DevExpress.ui.notify({
        message: 'Calling...',
        width: 350
    });
}

---
When there is only one SpeedDialAction on a page, it is represented by a Floating Action Button (FAB).

When there are multiple SpeedDialActions, they are collected in a speed dial menu that can contain multiple actions. In this case, the FAB opens the menu. You can use the [floatingActionButtonConfig](/api-reference/50%20Common/Object%20Structures/GlobalConfig/floatingActionButtonConfig '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/floatingActionButtonConfig/') object to change the [maximum number of actions](/api-reference/50%20Common/Object%20Structures/GlobalConfig/floatingActionButtonConfig/maxSpeedDialActionCount.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/floatingActionButtonConfig/#maxSpeedDialActionCount'), the FAB's [position](/api-reference/50%20Common/Object%20Structures/GlobalConfig/floatingActionButtonConfig/position.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/floatingActionButtonConfig/#position'), and icons in the [open](/api-reference/50%20Common/Object%20Structures/GlobalConfig/floatingActionButtonConfig/closeIcon.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/floatingActionButtonConfig/#closeIcon') and [closed](/api-reference/50%20Common/Object%20Structures/GlobalConfig/floatingActionButtonConfig/icon.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/floatingActionButtonConfig/#icon') states.

#include common-tutorialbutton with {
    url: "/Documentation/Guide/UI_Components/Floating_Action_Button/Getting_Started_with_Floating_Action_Button/" 
}

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FloatingActionButton/Overview/jQuery/MaterialBlueLight/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget