The following code shows the [onValueChanged](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#onValueChanged') event handler's implementation that limits the number of tags a user can select in the **TagBox**:

    <!--JavaScript-->
    $(function(){
        var products = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
            "SuperLED 50",
            // ...
        ],
        maxItems = 2;

        $("#tagBoxContainer").dxTagBox({
            dataSource: products,
            onValueChanged: function(e) {
                if (e.value.length > maxItems) {
                    var newValue = e.value.slice(0, maxItems); 
                    e.component.option("value", newValue);
                    tooltip.show();
                }
            }
        });

        var tooltip = $("#tooltipContainer").dxTooltip({
            target: "#tagBoxContainer",
            position:"bottom", 
            hideEvent: {
                name: "mouseout",
                delay: 2000
            }  
        }).dxTooltip("instance");
    });

    <!--HTML-->
    <div id="tagBoxContainer"></div>
    <div id="tooltipContainer">Limit reached</div>

