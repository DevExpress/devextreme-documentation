The Map uses `{lat: 0, lng: 0}` if it cannot convert an address to coordinates. Check the following:

- Your application specifies **providerConfig**.[calculateLocation](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#calculateLocation).
- The **calculateLocation** promise resolves with numeric **lat** and **lng** values.
- Your geocoding service finds the address.
