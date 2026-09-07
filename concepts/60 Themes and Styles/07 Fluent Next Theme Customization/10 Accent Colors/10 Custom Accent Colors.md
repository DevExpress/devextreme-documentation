Fluent Next stylesheets ship with a CSS rule that calculates [primary shades](https://docs.devexpress.com/DesignSystem/405638/colors/theme-palettes/fluent-theme-palettes#fluent-primary) from the `--dx-accent-color` variable. Assign a color to this variable to use Fluent Next themes with a custom accent color:

    <!-- tab: CSS -->
    :root {
        --dx-accent-color: SlateBlue;
    }

To ensure your app is accessible to users with vision impairments, we recommend that you specify a bright color as your custom accent. Use a color that has high contrast ratios with background and content colors in your chosen theme mode (light or dark). Avoid light or pastel colors, as well as grayscale colors such as white or black. Refer to the following help topic for more information about color contrast: [Color Contrast - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast).

[note]

- Fluent Next stylesheets use the [oklch()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/oklch) CSS function to calculate primary color shades. Older browsers may not support this function and may revert to predefined accents.
- Certain calculated primary shades may not have sufficient color contrast with corresponding background or content colors. You can override these shades individually as follows:

        <!-- tab: CSS -->
        :root {
            --dx-accent-color-90: SlateBlue;
        }
    
    To ensure shade overrides are applied, load the stylesheet where you define these overrides immediately after your Fluent Next stylesheet.

[/note]
