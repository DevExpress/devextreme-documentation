Layout widgets arrange elements in the specified direction. The size of each element along the arranged direction is specified by values of the **baseSize** and **ratio** fields of an object associated with an element.

Layout widgets use the following algorithm to count the element size.

For example, there is a widget whose width is 100 pixels. This widget includes items with the **baseSize** and **ratio** values.

    { baseSize: 20, ratio: 0.5 }
    { baseSize: 15, ratio: 1.5 }
    { baseSize: 25, ratio: 2 }

1. Set the element size to the **baseSize** value.

2. Obtain free space, which equals the difference between the widget size and the total base size of all elements.

 In the given example, the free space is *100 - (20 + 15 + 25) = 40*

3. Obtain free space unit size, which equals the free space divided by the total ratio of all elements.

 In the given example, the free space unit is *40 / (0.5 + 1.5 + 2) = 10*

4. Increase the element size by the free space unit multiplied by the ratio value.

 In the given example, the widget elements have the following final size values.

 1. *20 + 10 * 0.5 = 25*

 2. *15 + 10 * 1.5 = 30*

 3. *25 + 10 * 2 = 45*

[note]You can use the **baseIndex** and **ratio** fields together or separately. If you specify an element size using only the **baseSize** field, the element size always equals the specified value. If you use only the **ratio** field, the element size is counted relatively to the free space size and is hidden if the widget does not contain free space.

The [Box](/api-reference/10%20UI%20Widgets/dxBox '/Documentation/ApiReference/UI_Widgets/dxBox/') widget uses this algorithm to count item size along the specified [direction](/api-reference/10%20UI%20Widgets/dxBox/1%20Configuration/direction.md '/Documentation/ApiReference/UI_Widgets/dxBox/Configuration/#direction'). The [ResponsiveBox](/api-reference/10%20UI%20Widgets/dxResponsiveBox '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/') widget uses this algorithm to count height of [rows](/api-reference/10%20UI%20Widgets/dxResponsiveBox/1%20Configuration/rows '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Configuration/#rows') and width of [cols](/api-reference/10%20UI%20Widgets/dxResponsiveBox/1%20Configuration/cols '/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/Configuration/#cols').