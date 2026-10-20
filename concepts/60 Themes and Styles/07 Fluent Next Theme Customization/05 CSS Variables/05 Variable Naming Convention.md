The following naming convention applies to CSS variables in Fluent Next themes:

- `--dxds-*`    
Design System CSS variables that serve as public APIs. Use these variables to customize your DevExtreme-powered application.

- `--dx-*`    
Internal CSS variables used by DevExtreme components. Undocumented variables may change between versions. Fluent Next themes also declare legacy `--dx-*` variables from other DevExtreme themes (for instance, `--dx-color-primary` and `--dx-font-size`) and map them to Design System variables. For more information, refer to the following section: [Legacy Variable Migration](/concepts/60%20Themes%20and%20Styles/07%20Fluent%20Next%20Theme%20Customization/05%20CSS%20Variables/25%20Legacy%20Variable%20Migration.md '/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#CSS_Variables/Legacy_Variable_Migration').

- `--dx-viz-*`    
CSS variables used by SVG-based components. For more information, refer to the following section: [SVG-Based Component Colors](/concepts/60%20Themes%20and%20Styles/07%20Fluent%20Next%20Theme%20Customization/05%20CSS%20Variables/20%20SVG-Based%20Component%20Colors.md '/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#CSS_Variables/SVG-Based_Component_Colors').
