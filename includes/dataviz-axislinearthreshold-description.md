Setting this option prevents generating an infinite number of small axis values. Set it to an integer value that designates a power of [logarithmBase]({basewidgetpath}/Configuration/${{axis}}/#logarithmBase). The following code sample shows how different **linearThreshold** values affect the linear range when the **logarithmBase** is 10:

    <!--JavaScript-->
    linearThreshold: -1 // [-0.1; 0.1]
    linearThreshold: -2 // [-0.01; 0.01]
    linearThreshold: -3 // [-0.001; 0.001]

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/NegativeNumbersOnLogAxis/"
}
