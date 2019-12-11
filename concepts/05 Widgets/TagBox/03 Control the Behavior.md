By default, the **TagBox** closes the drop-down list _immediately_ after a user selects an item from it. Therefore, the user has to open the list again if he/she wants to select another item. To enable the user to select multiple items without reopening the list, set the [applyValueMode](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/applyValueMode.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#applyValueMode') option to *"useButtons"*. In this case, the list is not closed until the user clicks the **OK** button. To make multiple selection even easier for the user, add selection controls to the **TagBox** using the [showSelectionControls](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/showSelectionControls.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showSelectionControls') option.

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // . . .
            ],
            applyValueMode: 'useButtons',
            showSelectionControls: true
        });
    });

When selected items overflow the input field, they are arranged in several lines. To disable this behavior, set the [multiline](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/multiline.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#multiline') option to **false**.

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // . . .
            ],
            multiline: false
        });
    });

By default, selected items stay in the drop-down list. If they should be hidden after being selected, set the [hideSelectedItems](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/hideSelectedItems.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#hideSelectedItems') option to **true**.

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // . . .
            ],
            hideSelectedItems: true
        });
    });

The **TagBox** allows a user to clear selection in one click on the **Clear** button. To show this button, assign **true** to the [showClearButton](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/showClearButton.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showClearButton') option.

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // . . .
            ],
            showClearButton: true
        });
    });

#####See Also#####
- [TagBox - Handle the Value Change Event](/concepts/05%20Widgets/TagBox/04%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/TagBox/Handle_the_Value_Change_Event/')
- [TagBox - Create a User-Defined Item](/concepts/05%20Widgets/TagBox/15%20Create%20a%20User-Defined%20Item.md '/Documentation/Guide/Widgets/TagBox/Create_a_User-Defined_Item/')
- [TagBox - Enable Searching](/concepts/05%20Widgets/TagBox/10%20Enable%20Searching.md '/Documentation/Guide/Widgets/TagBox/Enable_Searching/')
- [TagBox API Reference](/api-reference/10%20UI%20Widgets/dxTagBox '/Documentation/ApiReference/UI_Widgets/dxTagBox/')
- [TagBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-tag_box-overview)

[tags]tagBox, tag box, editor, apply value mode, select all, selection controls, hide selected items, clear selection, clear button