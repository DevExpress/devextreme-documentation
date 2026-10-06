---
id: ui.themes.refreshMode()
---
---
##### shortDescription
Updates theme modes in open overlays.

---
When a container's [theme mode](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Theme_Modes/Container-Specific_Theme_Modes) changes at runtime, DevExtreme styles in this container update automatically. DevExtreme component overlays (for instance, popups and drop-down lists) render at the viewport level by default and do not update automatically. To apply updated modes to open overlays, call **refreshMode()**.

If a theme mode container includes DevExtreme components that display overlays, call **refreshMode()** in the following scenarios:

- When you change the container's theme mode class
- When you call [current(themeName)](/Documentation/ApiReference/Common/utils/ui/themes/#currentthemeName) to switch between Fluent Next stylesheets (if the container uses the `dx-theme-mode-inverted` class)

[note]

- **refreshMode()** preserves focus in open overlays.
- Closed overlays apply the current theme mode when they open. **refreshMode()** does nothing if no overlays are open.
- To update open overlays after you switch between Fluent Next stylesheets, call **refreshMode()** in a [ready(callback)](/Documentation/ApiReference/Common/utils/ui/themes/#readycallback) callback function. Callback functions passed to **ready(callback)** run only once, so register a callback before each **current(themeName)** call.

[/note]

#####See Also#####

- [Fluent Next Theme Customization - Container-Specific Theme Modes](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Theme_Modes/Container-Specific_Theme_Modes)
