Generate a new `custom` [color swatch](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/70%20Color%20Swatches.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Color_Swatches') that uses Generic Dark as a base theme:

    npx -p devextreme-cli devextreme build-theme --base-theme="generic.dark" --make-swatch --output-color-scheme="custom"

Generate a new `pink` color scheme based on the Material Blue Light theme, use constants from the `pink.json` file:

    npx -p devextreme-cli devextreme build-theme --base-theme="material.blue.light" --input-file="pink.json" --output-color-scheme="pink"

Export base variables for the Generic Carmine theme in LESS format:

    npx -p devextreme-cli devextreme export-theme-vars --base-theme="generic.carmine" --output-format="less" --base