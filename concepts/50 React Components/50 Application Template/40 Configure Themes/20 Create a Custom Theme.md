You can use the [DevExtreme ThemeBuilder](/concepts/60%20Themes%20and%20Styles/08%20ThemeBuilder '/Documentation/Guide/Themes_and_Styles/ThemeBuilder/') to create custom themes based on predefined themes. Follow the steps below:

1. [Import](/concepts/60%20Themes%20and%20Styles/08%20ThemeBuilder/01%20Get%20Started/7%20Import%20an%20Existing%20Theme.md '/Documentation/Guide/Themes_and_Styles/ThemeBuilder/#Get_Started/Import_an_Existing_Theme') `src\themes\metadata.base.json` or `src\themes\metadata.additional.json` to the ThemeBuilder.

1. [Customize the theme](/concepts/60%20Themes%20and%20Styles/08%20ThemeBuilder/10%20Customize%20the%20Theme.md '/Documentation/Guide/Themes_and_Styles/ThemeBuilder/#Customize_the_Theme').

1. Export theme metadata to the initial file (see [Postpone Customization](/concepts/60%20Themes%20and%20Styles/08%20ThemeBuilder/20%20Postpone%20Customization.md '/Documentation/Guide/Themes_and_Styles/ThemeBuilder/#Postpone_Customization')).

Run the following command to rebuild themes:

    npm run build-themes