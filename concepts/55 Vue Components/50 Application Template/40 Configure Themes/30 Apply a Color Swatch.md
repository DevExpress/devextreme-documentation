[Color swatches](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/55%20Color%20Swatches.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Color_Swatches') are secondary color schemes used alongside a primary color scheme.

In the DevExtreme Vue Template,  color swatch is applied to the navigation menu. You can configure it in the `src\themes\metadata.additional.json` and `src\themes\metadata.additional.dark.json` files. To use this color swatch on an element, add the `dx-swatch-additional` class (or `dx-swatch-additional-dark` for a dark theme) to the element:

    <!-- tab: HTML -->
    <div :class="swatchClassName">
        <!-- Your content here -->
    </div>

    <!-- tab: TypeScript -->
    watch(
        () => themeService.isDark,
        () => {
            swatchClassName.value = themeService.isDark.value ? 'dx-swatch-additional-dark' : 'dx-swatch-additional';
        },
        { immediate: true }
    );