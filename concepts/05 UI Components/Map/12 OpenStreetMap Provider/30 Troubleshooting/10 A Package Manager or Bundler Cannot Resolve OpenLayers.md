The `devextreme/ui/map/openlayers` module imports the `ol` package, but `devextreme` does not declare `ol` as a dependency. Yarn Plug'n'Play does not allow packages to import undeclared dependencies. Declare `ol` in your application dependencies and add a [packageExtensions](https://yarnpkg.com/configuration/yarnrc#packageExtensions) entry to `.yarnrc.yml`:

    <!-- tab: .yarnrc.yml -->
    packageExtensions:
      "devextreme@*":
        dependencies:
          ol: "10.10.0"

Specify the `ol` version that your application uses.
