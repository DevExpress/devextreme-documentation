## Keyboard and Focus

The **osm** provider supports keyboard interaction when **focusStateEnabled** is enabled. **disabled** disables map interaction.

- **Tab** navigates to the map and available interactive elements.
- Arrow keys pan a focused map; **+** and **-** change zoom.
- **Enter** or **Space** activates a focused interactive marker.
- A marker with a click handler or tooltip is interactive. A marker without either is not added as a button to the tab sequence.
- Offscreen markers and clipped interactive tooltip elements are excluded from keyboard navigation to avoid scrolling the map's DOM container into empty space.

The provider does not pan the map to an offscreen marker when a user presses Tab. Give users another way to select locations if your workflow requires access to markers outside the view.

The default informational tooltip keeps focus on the marker and uses an accessible description relationship. Keyboard dismissal uses the Popover's Escape handling. There is no default hover trigger or Close button. Do not describe this as an application-wide accessibility certification: test the completed UI, including its map controls, content, and navigation alternatives.

For interactive or extensive content, manage the accessible name, role, focus entry and return, and keyboard behavior in your application. An application-owned dialog or details panel may fit this content better. The [WAI-ARIA tooltip pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) distinguishes nonfocusable tooltip content from interactive dialogs.

The default marker has a localized generic accessible name. Replace it with a meaningful place name through **onMarkerAdded.originalMarker.getElement()** as shown in [Access the OpenLayers API](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/25%20Access%20the%20OpenLayers%20API.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Access_the_OpenLayers_API/').

**rtlEnabled** changes the relevant UI direction; it does not mirror geographic coordinates. Default marker colors use the light palette of the selected theme family in both light and dark themes because the tile background does not change with the DevExtreme theme.

## HTML and Custom Content

Both **markers[].tooltip.text** and tile **attribution** can contain HTML. Treat external values as untrusted. Encode plain text or sanitize allowed markup before assigning it. Do not put untrusted HTML directly into these properties.

For custom tooltip templates, use safe DOM APIs such as **textContent** for text. The Map does not expose a public arbitrary HTML marker property. Use **iconSrc** for a custom marker image.

See [Customize Marker Tooltips](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/20%20Customize%20Marker%20Tooltips.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Customize_Marker_Tooltips/') for public Popover customization examples.

## Network and Content Security Policy

Allow the required tile, image, and service origins in your application's Content Security Policy. Requests made by **calculateLocation** and **calculateRoute** must comply with your **connect-src** policy; image origins must comply with the applicable image policy. Also include the script and stylesheet resources required by DevExtreme and OpenLayers.

Use HTTPS resources on HTTPS pages. Configure CORS on services that receive cross-origin browser requests. Do not embed server-side secrets in client-side tile URLs or callbacks. Use an application backend for credentials that must remain confidential.

These integration requirements do not establish compliance for an arbitrary CSP. Test with the actual policy and deployment resources your application uses.

## Tile and Data Attribution

Display the attribution required by your tile and data providers. The Map does not generate a notice automatically, and hiding navigation controls does not hide attribution.

Review your service's license and usage policy, including caching, request limits, and offline use. For the public OpenStreetMap tile service, follow its [Tile Usage Policy](https://operations.osmfoundation.org/policies/tiles/). Do not assume that using OpenStreetMap data permits unrestricted access to that public tile server.
