---
id: dxTileView.Options.showScrollbar
type: String
default: 'never', 'onScroll' (Mac, Android, iOS)
acceptValues: 'onScroll' | 'onHover' | 'always' | 'never'
---
---
##### shortDescription
Specifies when the UI component shows the scrollbar.

---
MacOS, iOS, and Android devices use native scrolling. 'onHover' and 'always' values do not have an effect in the native scrolling mode, the component applies the 'onScroll' value instead.