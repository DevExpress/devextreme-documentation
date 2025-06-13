Run the following command to add a new view. `--icon` specifies an icon from the [DevExtreme icon library](/concepts/60%20Themes%20and%20Styles/30%20Icons/10%20Built-In%20Icon%20Library.md '/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library').

    npx devextreme add view view-name [--icon=IconName]

You can find the added view in:

- `src\pages` if your project uses Vite.
- `src\app\pages` if your project uses Next.js. 

The `devextreme add view` command also creates a navigation menu item for the added view in `src\app-navigation.js`.