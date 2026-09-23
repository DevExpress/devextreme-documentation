The **osm** provider displays marker tooltips with the [Popover](/api-reference/10%20UI%20Components/dxPopover '/Documentation/ApiReference/UI_Components/dxPopover/') component. Specify a string or an object with **text** and **isShown**:

    <!--JavaScript-->
    const markers = [{
        location: { lat: 40.7484, lng: -73.9857 },
        tooltip: 'Empire State Building'
    }, {
        location: { lat: 40.7681, lng: -73.9819 },
        tooltip: {
            text: 'Columbus Circle',
            isShown: true
        }
    }];

A marker click opens a hidden tooltip or closes a visible one. Keyboard activation also toggles it. The default tooltip has no title or Close button and does not close on outside clicks. It follows its marker, flips near the map boundary, and is clipped by the map when it moves outside the view.

Tooltip text can contain HTML. Use trusted or sanitized markup; encode untrusted text. For substantial interactive content, consider an application-owned Popup or details panel and manage its accessibility and focus behavior.

## Access the Popover Instance

For OSM markers, [markers[].onClick](/Documentation/ApiReference/UI_Components/dxMap/Configuration/markers/#onClick) receives a [MarkerClickEvent](/api-reference/10%20UI%20Components/dxMap/9%20Types/MarkerClickEvent '/Documentation/ApiReference/UI_Components/dxMap/Types/MarkerClickEvent/') argument:

- **location** contains the marker's geographic coordinates.
- **tooltip** contains its Popover instance, or **undefined** if the marker has no tooltip.
- **component** and **element** refer to the Map component.

The callback runs before the built-in visibility toggle. Leave **isShown** disabled to configure the first display in this callback. An initially shown tooltip appears before the first click. Do not rely on **onClick** for customization before that initial display.

The following handlers are alternatives. Assign one to a marker's **onClick** property; they are not Map-level **onClick** handlers.

### Show a Title and Close Button

    <!--TypeScript-->
    import type { MarkerClickEvent } from 'devextreme/ui/map';

    function onMarkerClick({ tooltip }: MarkerClickEvent): void {
        tooltip?.option({
            title: 'Empire State Building',
            showTitle: true,
            showCloseButton: true
        });
    }

Use public framework type imports when this handler is inside a framework application:

---
##### Angular

    <!--TypeScript-->
    import type { DxMapTypes } from 'devextreme-angular/ui/map';

    function onMarkerClick(e: DxMapTypes.MarkerClickEvent): void {
        e.tooltip?.option({ title: 'Details', showTitle: true, showCloseButton: true });
    }

##### Vue

    <!--TypeScript-->
    import type { DxMapTypes } from 'devextreme-vue/map';

    function onMarkerClick(e: DxMapTypes.MarkerClickEvent): void {
        e.tooltip?.option({ title: 'Details', showTitle: true, showCloseButton: true });
    }

##### React

    <!--TypeScript-->
    import type { MapTypes } from 'devextreme-react/map';

    function onMarkerClick(e: MapTypes.MarkerClickEvent): void {
        e.tooltip?.option({ title: 'Details', showTitle: true, showCloseButton: true });
    }

---

Assign the handler in the marker configuration:

    <!--JavaScript-->
    const markers = [{
        location: { lat: 40.7484, lng: -73.9857 },
        tooltip: { text: 'Empire State Building', isShown: false },
        onClick: onMarkerClick
    }];

The callback has no **originalMarker** or event-level **cancel** field. Obtain the native marker from **onMarkerAdded** if you need it.

### Cancel the Tooltip and Show a Details Panel

Cancel Popover's public **onShowing** event to replace the built-in tooltip. This example uses the marker coordinates in a panel outside the map.

    <!--HTML-->
    <aside id="markerDetails" hidden aria-label="Marker details">
        <p id="markerCoordinates"></p>
    </aside>

    <!--JavaScript-->
    function onMarkerClick({ location, tooltip }) {
        if (!tooltip) {
            return;
        }
        tooltip.option('onShowing', (e) => {
            e.cancel = true;
        });

        document.getElementById('markerCoordinates').textContent =
            'Latitude: ' + location.lat + ', longitude: ' + location.lng;
        document.getElementById('markerDetails').hidden = false;
    }

Keep a tooltip configured on the marker to receive its instance. Use ordinary application state instead of direct DOM updates in Angular, React, and Vue.

### Add a Close Button to the Content

Use **contentTemplate** and the Popover's public **hide()** method:

    <!--JavaScript-->
    const configuredTooltips = new WeakSet();

    function onMarkerClick({ tooltip }) {
        if (!tooltip || configuredTooltips.has(tooltip)) {
            return;
        }
        configuredTooltips.add(tooltip);
        tooltip.option('contentTemplate', () => {
            const content = document.createElement('div');
            const text = document.createElement('p');
            text.textContent = 'Empire State Building';
            const close = document.createElement('button');
            close.type = 'button';
            close.textContent = 'Close details';
            close.addEventListener('click', () => tooltip.hide());
            content.append(text, close);
            return content;
        });
    }

This is interactive content, not a plain informational tooltip. Review the accessible role, name, keyboard navigation, and focus return for your application. A built-in title and Close button, or an application-owned Popup, can be more appropriate than adding controls to a tooltip.

### Close Only the Active Tooltip on Outside Click

This jQuery example tracks the last clicked or focused tooltip. Popover's public **hideOnOutsideClick** predicate allows only that instance to close. Other open tooltips stay visible.

    <!--JavaScript-->
    let activeTooltip;
    const configuredTooltips = new WeakSet();

    function onMarkerClick({ tooltip }) {
        if (!tooltip) {
            return;
        }
        activeTooltip = tooltip;
        if (configuredTooltips.has(tooltip)) {
            return;
        }
        configuredTooltips.add(tooltip);

        tooltip.option('hideOnOutsideClick', () => activeTooltip === tooltip);
        $(tooltip.content()).on('focusin pointerdown', () => {
            activeTooltip = tooltip;
        });
        const clearActive = () => {
            if (activeTooltip === tooltip) {
                activeTooltip = undefined;
            }
        };
        tooltip.on('hidden', clearActive);
        tooltip.on('disposing', clearActive);
    }

## Customize Appearance

The marker Popover has the **dx-map-marker-popover** class. Scope your CSS to the application or map container to avoid changing unrelated Popovers:

    <!--CSS-->
    #map .dx-map-marker-popover .dx-popup-content {
        padding: 8px 12px;
    }

Prefer public Popover options for dimensions and content. Do not call private methods or replace the Map's internal tooltip adapter.

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-map-openstreetmap"
}
