---
id: ui.themes.mode(element)
---
---
##### shortDescription
Gets the theme mode applied to an element.

##### return: String
The element's theme mode (*"light"* or *"dark"*).

##### param(element): Element | jQuery
The element for which to retrieve the theme mode.

---
Call **mode(element)** to check an element's theme mode. This method returns a calculated theme mode, not the mode class assigned to the passed element. The calculated theme mode for a `.dx-theme-mode-inverted` container depends on the container's nearest enclosing theme mode. Refer to the following help topic for more information: [Container-Specific Theme Modes](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Theme_Modes/Container-Specific_Theme_Modes).

You can call this method under any DevExtreme theme and for any element, including elements outside theme mode containers. If no container specifies a mode for the element, **mode(element)** returns the active theme's mode (*"light"* or *"dark"*).

If you change theme mode classes at runtime, **mode(element)** returns the updated value immediately.
