#include tutorials-intro-installationnote

The Floating Action Button (FAB) is the primary action button on a screen that is displayed in front of all screen content. The FAB can execute an action or open a stack of two to five related actions (speed dial).

There should be **only one** FAB on a screen, but its action(s) can be different for different screens. For more details on the FAB concept and best practices, refer to the following topic: <a href="https://material.io/design/components/buttons-floating-action-button.html" target="_blank">Material Design Guidelines</a>.

In DevExtreme, the FAB is implemented as a container that collects and stores [SpeedDialAction](/api-reference/10%20UI%20Components/dxSpeedDialAction '/Documentation/ApiReference/UI_Components/dxSpeedDialAction/') components.

From this tutorial, you will learn how to create a single- or multi-action FAB and alter action sets during screen transitions.

[note]

---
##### jQuery

Code examples in this tutorial use icons from the <a href="https://ionicons.com" target="_blank">Ionicons</a> library. If you are going to replicate the examples in your application, reference the Ionicons stylesheet within in the `<head>` section of your page:

    <!--HTML-->
    <link rel="stylesheet" href="https://unpkg.com/ionicons@4.6.3/dist/css/ionicons.min.css">


##### Angular

Code examples in this tutorial use icons from the <a href="https://ionicons.com" target="_blank">Ionicons</a> library. If you are going to replicate the examples in your application, install the `ionicons` npm package:

    npm install ionicons@4 --save

##### Vue

Code examples in this tutorial use icons from the <a href="https://ionicons.com" target="_blank">Ionicons</a> library. If you are going to replicate the examples in your application, install the `ionicons` npm package:

    npm install ionicons@4 --save

##### React

Code examples in this tutorial use icons from the <a href="https://ionicons.com" target="_blank">Ionicons</a> library. If you are going to replicate the examples in your application, install the `ionicons` npm package:

    npm install ionicons@4 --save

---

[/note]

[tags]dxspeeddialaction