#include tutorials-intro-installationnote

The Floating Action Button (FAB) is the primary action button on a screen that is displayed in front of all screen content. The FAB can perform an action or open a stack of two to five related actions (speed dial)

There should be **only one** FAB on a screen, but its action(s) can be different for different screens. To find more details on the FAB concept and best practices, refer to the [Material Design Guidelines](https://material.io/design/components/buttons-floating-action-button.html).

In DevExtreme, the FAB is implemented as a container that collects and stores [SpeedDialAction](/api-reference/10%20UI%20Widgets/dxSpeedDialAction '/Documentation/ApiReference/UI_Widgets/dxSpeedDialAction/') components.

From this tutorial, you will learn how to create a single- or multi-action FAB and alter action sets during screen transitions.

[note]

Code examples in this tutorial use icons from the [Ionicons](https://ionicons.com) library. If you are going to replicate the examples in your Angular, Vue, or React application, install the `ionicons` npm package:

    npm install ionicons --save

With jQuery, reference the Ionicons stylesheet in the `<head>` of your page:

    <!--HTML-->
    <link rel="stylesheet" href="https://unpkg.com/ionicons@4.6.3/dist/css/ionicons.min.css">

[/note]