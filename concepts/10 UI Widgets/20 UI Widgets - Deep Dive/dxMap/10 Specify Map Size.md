The default size of the **Map** widget is 300x300 pixels. To specify custom size, assign the appropriate values to the [width](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/width.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#width') and [height](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/height.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#height') options.

    <!--JavaScript-->
    var mapOptions = {
        width: '100%',
        height: 500
    }

If you need to specify the widget size using a CSS style sheet, set the **width** and **height** options to **null** first. Otherwise, the style rules specified using a CSS style sheet are ignored because of the higher priority of inline style attributes.

    <!--JavaScript-->
    var mapOptions = {
        width: null,
        height: null
    }

<!---->

    <!--CSS-->
    #myMap{
        width: 100%;
        height: 500px;
    }