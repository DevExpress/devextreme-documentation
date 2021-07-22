* `--base-theme`    
Specifies a base theme's name (default: `generic.light`).

* `--input-file`    
Specifies the name of the file that contains input data (a `.json` file with metadata or a `.less` or `.scss` file with Bootstrap variables).

* `--output-file`   
Specifies the output file name.

* `--output-format`     
Specifies the format of the output variables: `less` or `scss` (default: `less` or the extension extracted from the `--output-file` value (if it contains any)).

* `--output-color-scheme`   
Specifies the custom color scheme name (default: `custom-scheme`).

* `--make-swatch`       
When present, creates a [color swatch](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/70%20Color%20Swatches.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Color_Swatches'), i.e., adds a CSS scope to each CSS rule (`.dx-swatch-xxx`, where `xxx` is the value from the `--output-color-scheme` parameter).

* `--base`      
Exports only base variables used to produce derived variables.

* `--version`     
Specifies the target DevExtreme version or a tag that points to it (the default value is `latest`).

* `--widgets`       
Specifies a comma-separated list of UI components whose styles should be included in the resulting CSS file. If this argument is not specified, styles of all UI components are included. Syntax example:

        --widgets=datagrid,treelist,selectbox

- `--assetsBasePath`            
Specifies a path to the folder that contains the DevExtreme `icons` and `fonts` folders. Use this argument if the icons and fonts are not in the same folder as your custom theme.

- `--remove-external-resources`     
When present, removes links to external resources, such as fonts. The theme will use local fallbacks instead.

- `--bootstrap-version`     
Specifies Bootstrap version 4 or 5 if `--input-file` is a `.scss` file (default: `4`).
