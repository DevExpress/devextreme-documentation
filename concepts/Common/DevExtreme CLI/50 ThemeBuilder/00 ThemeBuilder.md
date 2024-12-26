The [ThemeBuilder UI](/concepts/60%20Themes%20and%20Styles/08%20ThemeBuilder '/Documentation/Guide/Themes_and_Styles/ThemeBuilder/') is a tool that allows you to create custom themes in the browser; its CLI counterpart allows you to do the same with commands.

[important]

If your application uses npm v7 or later, open `package.json` and ensure the following: 

- The `devextreme` package is listed in `dependencies`.
- The `devextreme-themebuilder` package is listed in `devDependencies`.
- Both packages have the same version.

If these conditions are not met, run the following commands to install the packages:

    npm i devextreme@25.1 --save --save-exact
    npm i devextreme-themebuilder@25.1 --save-dev --save-exact

[/important]
