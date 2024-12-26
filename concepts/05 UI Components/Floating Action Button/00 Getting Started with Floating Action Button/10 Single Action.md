A single-action FAB represents the primary action of a screen. According to the [guidelines](https://material.io/design/components/buttons-floating-action-button.html#usage), this action should be constructive, such as, create, share, explore, or edit, as in the following example:

<div class="simulator-desktop-container" style="height:362px" data-view="/Content/Applications/25_1/GettingStartedWith/FloatingActionButton/SingleAction/index.html, /Content/Applications/25_1/GettingStartedWith/FloatingActionButton/SingleAction/index.js, /Content/Applications/25_1/GettingStartedWith/FloatingActionButton/SingleAction/index.css"></div>

To create a single-action FAB, add one [SpeedDialAction](/api-reference/10%20UI%20Components/dxSpeedDialAction '/Documentation/ApiReference/UI_Components/dxSpeedDialAction/') to your page and specify its [onClick](/api-reference/10%20UI%20Components/dxSpeedDialAction/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Components/dxSpeedDialAction/Configuration/#onClick') and [icon](/api-reference/10%20UI%20Components/dxSpeedDialAction/1%20Configuration/icon.md '/Documentation/ApiReference/UI_Components/dxSpeedDialAction/Configuration/#icon') properties. Other properties are optional, but we also specify a [hint](/api-reference/10%20UI%20Components/Widget/1%20Configuration/hint.md '/Documentation/ApiReference/UI_Components/dxSpeedDialAction/Configuration/#hint').

To position the FAB, use the [floatingActionButtonConfig](/api-reference/50%20Common/Object%20Structures/GlobalConfig/floatingActionButtonConfig '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/floatingActionButtonConfig/').[position](/api-reference/50%20Common/Object%20Structures/GlobalConfig/floatingActionButtonConfig/position.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/floatingActionButtonConfig/#position') property in the [GlobalConfig](/api-reference/50%20Common/Object%20Structures/GlobalConfig '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/') object.

Refer to the GitHub repository for the code that configures the example above and illustrates the described techniques.

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/getting-started-with-floating-action-button-single-action/"
}
