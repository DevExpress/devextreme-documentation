---
id: ui.themes.refreshMode()
---
---
##### shortDescription
Updates theme modes in open overlays.

---
When a container's [theme mode](/concepts/60%20Themes%20and%20Styles/07%20Fluent%20Next%20Theme%20Customization/15%20Theme%20Modes/05%20Container-Specific%20Theme%20Modes.md '/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Theme_Modes/Container-Specific_Theme_Modes') changes at runtime, DevExtreme styles in this container update automatically. DevExtreme component overlays (for instance, popups and drop-down lists) render at the viewport level by default and do not update automatically.

If a theme mode container includes DevExtreme components that display overlays, call **refreshMode()** in the following scenarios:

- When you change the container's theme mode class
- When you call [current(themeName)](/api-reference/50%20Common/utils/ui/themes/current(themeName).md '/Documentation/ApiReference/Common/utils/ui/themes/#currentthemeName') to switch between Fluent Next stylesheets (if the container uses the `dx-theme-mode-inverted` class)

[note]

- **refreshMode()** preserves focus in open overlays.
- Closed overlays apply the current theme mode when they open. **refreshMode()** does nothing if no overlays are open.
- Call **refreshMode()** in a callback function passed to [ready(callback)](/api-reference/50%20Common/utils/ui/themes/ready(callback).md '/Documentation/ApiReference/Common/utils/ui/themes/#readycallback') to update open overlays after you switch between Fluent Next stylesheets. Callback functions passed to **ready(callback)** run only once, so call **ready(callback)** before each **current(themeName)** call.

[/note]

#####See Also#####

- [Fluent Next Theme Customization - Container-Specific Theme Modes](/concepts/60%20Themes%20and%20Styles/07%20Fluent%20Next%20Theme%20Customization/15%20Theme%20Modes/05%20Container-Specific%20Theme%20Modes.md '/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Theme_Modes/Container-Specific_Theme_Modes')
