## Keyboard and Focus

The **osm** provider supports keyboard interaction when **focusStateEnabled** is enabled. **disabled** disables map interaction.

- **Tab** navigates to the map and available interactive elements.
- Arrow keys pan a focused map; **+** and **-** change zoom.

**rtlEnabled** changes the relevant UI direction; it does not mirror geographic coordinates.

## Network and Content Security Policy

Allow the required tile, image, and service origins in your application's Content Security Policy. Requests made by **calculateLocation** and **calculateRoute** must comply with your **connect-src** policy; image origins must comply with the applicable image policy. Also include the script and stylesheet resources required by DevExtreme and OpenLayers.

Use HTTPS resources on HTTPS pages. Configure CORS on services that receive cross-origin browser requests. Do not embed server-side secrets in client-side tile URLs or callbacks. Use an application backend for credentials that must remain confidential.

These integration requirements do not establish compliance for an arbitrary CSP. Test with the actual policy and deployment resources your application uses.

## Tile and Data Attribution

Display the attribution required by your tile and data providers. The Map does not generate a notice automatically, and hiding navigation controls does not hide attribution.

Review your service's license and usage policy, including caching, request limits, and offline use. For the public OpenStreetMap tile service, follow its [Tile Usage Policy](https://operations.osmfoundation.org/policies/tiles/). Do not assume that using OpenStreetMap data permits unrestricted access to that public tile server.
