Theme variables are defined in the following .SCSS files:

- `src\themes\generated\variables.base.scss` 
- `src\themes\generated\variables.additional.scss`
- `src\themes\generated\variables.base.dark.scss` 
- `src\themes\generated\variables.additional.dark.scss`

Apply the variables to custom elements, so that the elements have a uniform appearance with the rest of the application.

The following code applies the `$base-accent` variable as the `background-color` of `my-element`:

    <!-- tab: SCSS -->
    // Your SCSS file
    @import "../../../themes/generated/variables.base.scss";

    #my-element {
        background-color: $base-accent;
    }
