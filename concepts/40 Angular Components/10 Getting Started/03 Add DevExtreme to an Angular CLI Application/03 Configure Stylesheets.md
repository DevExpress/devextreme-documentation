Open the `angular.json` file and reference `dx.common.css` and a [predefined theme stylesheet](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') (`dx.light.css` in the code below).

    <!-- tab: angular.json -->
    {
      "projects": {
        "ProjectName": {
          "architect": {
            "build": {
              "options": {
                "styles": [
                  "node_modules/devextreme/dist/css/dx.common.css",
                  "node_modules/devextreme/dist/css/dx.light.css",
                  "src/styles.css"
                ],
                ...
              },
              ...
            },
            ...
          }
        },
        ...
      },
      ...
    }

**For Angular CLI before 6**, modify the `angular-cli.json` file instead:

    <!-- tab: angular-cli.json -->
    {
      "apps": [{
        "styles": [
          ...
          "../node_modules/devextreme/dist/css/dx.common.css",
          "../node_modules/devextreme/dist/css/dx.light.css",
          "styles.css"
        ],
        ...
      }],
      ...
    }

[note] [SVG-based widgets](/concepts/60%20Themes%20and%20Styles/00%20HTML-%20and%20SVG-Based%20Widgets.md '/Documentation/Guide/Themes_and_Styles/HTML-_and_SVG-Based_Widgets/') do not require theme stylesheets. If you do reference the stylesheets, the widgets apply an appearance that matches them.

[tags] theme
