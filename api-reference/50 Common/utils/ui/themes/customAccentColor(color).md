---
id: ui.themes.customAccentColor(color)
---
---
##### shortDescription
Applies a custom accent color to the active Fluent Next stylesheet.

##### param(color): String | null
A CSS color value. Pass `null` or an empty string to remove the custom accent color.

---
This method defines the `--dx-accent-color` CSS variable in the `:root` scope. Fluent Next stylesheets calculate primary color shades from this variable, and DevExtreme components update their colors immediately. If you define a `--dx-accent-color` value in your stylesheets **customAccentColor(color)** overrides this value.

**customAccentColor(color)** accepts all valid CSS color values:

- Color names (such as *"SlateBlue"*)
- Hexadecimal values
- `rgb()`, `hsl()`, and `oklch()` color functions
- References to CSS variables (for instance *"var(--my-brand-color)"*).

The accent color does not change if you pass an invalid value to this method.

Pass `null` or an empty string to remove a custom accent color specified using this method. Components then use the `--dx-accent-color` value from your stylesheets. If you do not define this value, components use the predefined accent color.

[note] **customAccentColor(color)** does nothing if the active theme is not a Fluent Next theme.

#####See Also#####

- [Fluent Next Theme Customization - Custom Accent Colors](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Accent_Colors/Custom_Accent_Colors)
