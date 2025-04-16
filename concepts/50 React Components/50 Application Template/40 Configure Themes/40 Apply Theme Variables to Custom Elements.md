Theme variables are defined in the `src\variables.scss` file. Apply the variables to custom elements, so that the elements have a uniform appearance with the rest of the application.

The following code applies the `var(--base-accent)` variable as the `background-color` of `my-element`:

    <!-- tab: SCSS -->
    // Your SCSS file
    @‌use "../../../variables.scss";

    #my-element {
        background-color: var(--base-accent);
    }
