The following code snippet hides all tooltips when a user clicks outside markers and tooltips:

    <!--JavaScript-->
    const tooltips = new Set();

    function hideTooltips() {
        tooltips.forEach((tooltip) => tooltip.hide());
    }

    function handleMarkerClick(e) {
        const { tooltip } = e;
        if (tooltip && !tooltips.has(tooltip)) {
            tooltips.add(tooltip);
            // Hides tooltips when a user clicks outside the Map component
            tooltip.option('hideOnOutsideClick', () => {
                hideTooltips();
                return true;
            });
            tooltip.on('disposing', () => tooltips.delete(tooltip));
        }
    }

    // Hides tooltips when a user clicks the map
    function handleMapClick() {
        hideTooltips();
    }

This code does not hide tooltips that appear at marker creation ([isShown](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/markers/tooltip/isShown.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/markers/tooltip/#isShown') is `true`) until users click corresponding markers.
