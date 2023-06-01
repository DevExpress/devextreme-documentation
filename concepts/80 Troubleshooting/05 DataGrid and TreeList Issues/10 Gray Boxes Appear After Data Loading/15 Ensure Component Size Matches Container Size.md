The component displays the placeholders based on its [height](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#height) property and the number of loaded rows. If the **height** property is not equal to the component's container size, the component does not load enough rows to fit the space. The remaining space is filled with gray boxes.

If none of the component's parent elements have a fixed height, the component cannot calculate its size correctly. If the height of DataGrid or TreeList's parent is relative, make sure that the parent's ancestor has a fixed height. If there are multiple ancestors with relative heights, at least one should have a fixed height.

If you wish to fill the entire vertical space and therefore do not use fixed heights, set all parents (including `<html>`) heights to `100%`.

If you use the component inside [ScrollView](/Documentation/ApiReference/UI_Components/dxScrollView/), set the height of DataGrid or TreeList to a fixed value.

The DataGrid or TreeList component does not track its container size. If the container size changes, call the [repaint()](/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#repaint) or [updateDimensions()](/ApiReference/UI_Components/dxDataGrid/Methods/#updateDimensions) method. The following guide describes this issue in greater detail: [Components are Rendered Incorrectly if a Container State is Changed](/Documentation/Guide/Troubleshooting/Components_are_Rendered_Incorrectly_if_a_Container_State_is_Changed/).