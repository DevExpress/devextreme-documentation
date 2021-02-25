The **List** supports the following selection modes: **single**, **multiple**, and **all**. They can be specified in the [selectionMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectionMode) property. End users click or tap **List** items to select them. Selected items become shaded. When the [showSelectionControls](/Documentation/ApiReference/UI_Components/dxList/Configuration/#showSelectionControls) property is set to **true**, users can select items with radio buttons or checkboxes.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $('#list').dxList({
            // ...
            selectionMode: 'single',
         });
    });
    
---
