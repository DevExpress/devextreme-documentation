The **Slider** can display labels for the [min](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/min.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#min') and [max](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#max') values. To configure the labels, use the [label](/api-reference/10%20UI%20Widgets/dxSliderBase/1%20Configuration/label '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/label/') object.

    <!--JavaScript-->
    $(function(){
        $("#sliderContainer").dxSlider({
            // . . .
            label: {
                visible: true,
                position: "bottom", // or "top"
                format: function(value) {
                    return value + " units";
                }
            }
        });
    });

The **Slider** can also display a tooltip for the slider handle. To configure it, use the [tooltip](/api-reference/10%20UI%20Widgets/dxSliderBase/1%20Configuration/tooltip '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/tooltip/') object.

    <!--JavaScript-->
    $(function(){
        $("#sliderContainer").dxSlider({
            // . . .
            tooltip: {
                enabled: true,
                position: "bottom", // or "top"
                showMode: "always", // or "onHover"
                format: function(value) {
                    return value + " units";
                }
            }
        });
    });

To specify whether or not the part of the scale from the beginning to the slider handle should be highlighted, use the **showRange** option.

    <!--JavaScript-->
    $(function(){
        $("#sliderContainer").dxSlider({
            // . . .
            showRange: false
        });
    });

#####See Also#####
- [Slider - Handle the Value Change Event](/concepts/05%20Widgets/Slider/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/Slider/Handle_the_Value_Change_Event')
- [Slider Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Slider/Overview)
- [Slider API Reference](/api-reference/10%20UI%20Widgets/dxSlider '/Documentation/ApiReference/UI_Widgets/dxSlider/')

[tags]slider, editor, label, tooltip, showRange