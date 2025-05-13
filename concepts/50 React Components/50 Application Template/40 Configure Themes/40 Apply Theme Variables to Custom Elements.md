Theme variables are defined in `src\variables.scss`. Apply the variables to custom elements, so that element appearance is consistent with the rest of the application.

The following code applies the `var(--base-accent)` variable as the `background-color` of `my-element`:

    <!-- tab: SCSS -->
    // Your SCSS file
    @‌use "../../../variables.scss";

    #my-element {
        background-color: var(--base-accent);
    }
