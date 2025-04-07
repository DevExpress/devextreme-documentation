You can import an existing theme from DevExtreme metadata [saved beforehand](/concepts/60%20Themes%20and%20Styles/08%20ThemeBuilder/20%20Postpone%20Customization.md '/Documentation/Guide/Themes_and_Styles/ThemeBuilder/#Postpone_Customization') or from Bootstrap variables. Follow the steps below to do that in the wizard:

1. Click **Import a Theme**.

2. Choose whether to import a theme from DevExtreme metadata or Bootstrap variables.

3. To import DevExtreme metadata, upload a `.json` file with the metadata or paste the metadata in the text area.  

    To import Bootstrap variables, upload a `_variables.scss` file for Bootstrap 5.

    [note] This file should include only a list of variables and their values. 
    
    The ThemeBuilder uses colors from the variables to create a theme that is consistent with the Bootstrap theme. ThemeBuilder imports theme options based on the Bootstrap [default theme](https://github.com/twbs/bootstrap/blob/main/scss/_variables.scss) variables. These colors are transferred to the base theme settings. You can find these settings in the **Basic Settings** section.

    You need to manually apply other variables (like table paddings or hover colors) to individual components. If you cannot use ThemeBuilder to apply some of these variables, specify [CSS classes](/concepts/60%20Themes%20and%20Styles/10%20HTML-Based%20Components%20Customization/40%20Individual%20CSS%20Classes.md '/Documentation/Guide/Themes_and_Styles/HTML-Based_Components_Customization/#Individual_CSS_Classes') for the components.

After you import a theme, the wizard navigates to the main view for [additional theme customization](/concepts/60%20Themes%20and%20Styles/08%20ThemeBuilder/10%20Customize%20the%20Theme.md '/Documentation/Guide/Themes_and_Styles/ThemeBuilder/#Customize_the_Theme').
