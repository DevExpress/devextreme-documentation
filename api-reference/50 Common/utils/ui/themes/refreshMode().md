---
id: ui.themes.refreshMode()
---
---
##### shortDescription
Updates theme modes in open overlays.

---
When a container's [theme mode](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Theme_Modes/Container-Specific_Theme_Modes) changes at runtime, DevExtreme styles in this container update automatically. DevExtreme component overlays such as popups and drop-downs render at the viewport level by default and do not update automatically. To apply updated modes to open overlays, call **refreshMode()**.

If you initialize DevExtreme components that display overlays in a container that uses a custom theme mode, call **refreshMode()** in the following usage scenarios:
- When you change the container's theme mode class
- If the container uses the `dx-theme-mode-inverted` class, when you switch between Fluent Next stylesheets using [current(themeName)](/Documentation/ApiReference/Common/utils/ui/themes/#currentthemeName)

[note]

- **refreshMode()** preserves focus in open overlays.
- Closed overlays apply the current theme mode when they open. **refreshMode()** does nothing if no overlays are open.
- To ensure components update open overlay styles after you switch between Fluent Next stylesheets, call **refreshMode()** in the [ready()](/Documentation/ApiReference/Common/utils/ui/themes/#readycallback) method's **callback** function.

[/note]

#####See Also#####

- [Fluent Next Theme Customization - Container-Specific Theme Modes](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Theme_Modes/Container-Specific_Theme_Modes)
