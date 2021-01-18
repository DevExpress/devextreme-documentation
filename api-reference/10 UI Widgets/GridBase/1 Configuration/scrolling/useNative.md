---
id: GridBase.Options.scrolling.useNative
acceptValues: 'auto'
type: Boolean | String
default: 'auto'
---
---
##### shortDescription
Specifies whether the UI component should use native or simulated scrolling.

---
By default, the UI component employs native scrolling on most platforms, except non-Mac desktops and devices based on Android older than version 4. To employ native scrolling on all platforms without exception, assign **true** to this option. If you assign **false**, the UI component simulates scrolling on all platforms.