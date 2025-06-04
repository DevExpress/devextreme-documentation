Stepper displays connector lines between step indicators. As users progress through the component, Stepper transitions step connectors to a highlighted state. You can use CSS styles to customize connectors in the highlighted and default states, and the transition between the two states.

To customize connectors in the highlighted state and the transition between connector states, assign css styles to the `dx-stepper-connector-value` class.

    <!--CSS-->
    .dx-stepper-connector-value {
        background-color: red;
        transition-duration: 1s;
        transition-delay: 0.1s;
        transition-timing-function: steps(10, end);
    }

To customize connectors in the default state, assign css styles to the `dx-stepper-connector-container` class.

    <!--CSS-->
    .dx-stepper-connector-container {
        background-color: black;
    }

You can also change the width/height of connectors. To do so, assign CSS styles to two classes simultaneously.

For Steppers that use the horizontal [orientation](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#orientation), assign the `height` style to the following classes:

- `dx-stepper-connector-container` and `dx-stepper-connector-horizontal`    
    Changes the height of connectors in the default state.
- `dx-stepper-connector-value` and `dx-stepper-connector-horizontal`    
    Changes the height of connectors in the highlighted state.

        <!--CSS-->
        .dx-stepper-connector-horizontal .dx-stepper-connector-container {
            height: 2px;
        }

        .dx-stepper-connector-horizontal .dx-stepper-connector-value {
            height: 5px;
        }

For Steppers that use the vertical orientation, assign the `width` style to the following classes:

- `dx-stepper-connector-container` and `dx-stepper-connector-vertical`    
    Changes the width of connectors in the default state.
- `dx-stepper-connector-value` and `dx-stepper-connector-vertical`    
    Changes the width of connectors in the highlighted state.

        <!--CSS-->
        .dx-stepper-connector-vertical .dx-stepper-connector-container {
            width: 2px;
        }

        .dx-stepper-connector-vertical .dx-stepper-connector-value {
            width: 5px;
        }

[note]

If a vertical Stepper does not display step connectors, modify the component's `height` style.

    <!--CSS-->
    #verticalStepper {
        height: 750px;
    }

[/note]