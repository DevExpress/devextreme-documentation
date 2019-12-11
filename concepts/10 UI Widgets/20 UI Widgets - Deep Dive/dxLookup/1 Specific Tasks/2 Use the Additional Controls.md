<article data-show="Content/Applications/16_1/UIWidgets/dxLookup/AdditionalControls/markup.html,
        Content/Applications/16_1/UIWidgets/dxLookup/AdditionalControls/script.js,
        Content/Applications/16_1/UIWidgets/dxLookup/AdditionalControls/styles.css">

The **Lookup** widget provides an ability to use additional buttons to apply and cancel the current choice and clear widget value. Specify the availability of these buttons using the [showCancelButton](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/showCancelButton.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#showCancelButton') and [showClearButton](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/showClearButton.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#showClearButton') options respectively.

    <!--JavaScript-->
    var lookupOptions = {
        dataSource: lookupData,
        displayExpr: "name",
        searchEnabled: true,
        showCancelButton: true,
        showClearButton: true
    }

You can also use the [cancelButtonText](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/cancelButtonText.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#cancelButtonText') and [clearButtonText](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/clearButtonText.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#clearButtonText') options to specify the text displayed by each button.

</article>