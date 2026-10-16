The following naming convention applies to CSS variables in Fluent Next themes:

- `--dxds-*`    
Design System CSS variables that serve as public APIs. Use these variables to customize your DevExtreme-powered application.

- `--dx-*`    
Internal CSS variables used by DevExtreme components. Undocumented variables may change between versions. Fluent Next themes also declare legacy `--dx-*` variables from other DevExtreme themes (for instance, `--dx-color-primary` and `--dx-font-size`) and map them to Design System variables. For more information, refer to the following section: [Legacy Variable Migration](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#CSS_Variables/Legacy_Variable_Migration).

- `--dx-viz-*`    
CSS variables used by SVG-based components. For more information, refer to the following section: [SVG-Based Component Colors](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#CSS_Variables/SVG-Based_Component_Colors).
