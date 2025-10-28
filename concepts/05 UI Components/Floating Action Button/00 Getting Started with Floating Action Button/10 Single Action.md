A single-action FAB triggers the main screen action:

<div class="simulator-desktop-container" style="height:362px" data-view="/Content/Applications/25_1/GettingStartedWith/FloatingActionButton/SingleAction/index.html, /Content/Applications/25_1/GettingStartedWith/FloatingActionButton/SingleAction/index.js, /Content/Applications/25_1/GettingStartedWith/FloatingActionButton/SingleAction/index.css"></div>

Add one [SpeedDialAction](/api-reference/10%20UI%20Components/dxSpeedDialAction '/Documentation/ApiReference/UI_Components/dxSpeedDialAction/') to the page and specify its [onClick](/api-reference/10%20UI%20Components/dxSpeedDialAction/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Components/dxSpeedDialAction/Configuration/#onClick') and [icon](/api-reference/10%20UI%20Components/dxSpeedDialAction/1%20Configuration/icon.md '/Documentation/ApiReference/UI_Components/dxSpeedDialAction/Configuration/#icon') properties. Optionally, define a [hint](/api-reference/10%20UI%20Components/Widget/1%20Configuration/hint.md '/Documentation/ApiReference/UI_Components/dxSpeedDialAction/Configuration/#hint').

Define the [position](/api-reference/50%20Common/Object%20Structures/GlobalConfig/floatingActionButtonConfig/position.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/floatingActionButtonConfig/#position') property in [GlobalConfig](/api-reference/50%20Common/Object%20Structures/GlobalConfig '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/') to specify the FAB's position.

See the code example in the following GitHub repository:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/getting-started-with-floating-action-button-single-action/"
}
