---
id: dxToolbar.Options.allowKeyboardNavigation
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether users navigate between Toolbar items using standard keyboard shortcuts.

---
When this property is set to `true`, the Toolbar enables keyboard shortcuts that match [WAI-ARIA Authoring Practices (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) recommendations. Users can move focus between available items with arrow keys and the `Home` and `End` keys. The `Tab` and `Shift+Tab` keys move focus into and out of the Toolbar.

When this property is set to `false`, the Toolbar does not process item-to-item keyboard shortcuts. Each focusable item participates in the page tab order according to its settings.