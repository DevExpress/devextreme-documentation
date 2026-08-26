You can define a custom accent color as a CSS variable and use this color to calculate `--dxds-primary-*` variables as follows:

    <!-- tab: Custom -->
    /* Set --my-accent-color to a brand color; load after the theme stylesheet. */
    :root {
        --my-accent-color-source: var(--my-accent-color, #0f6cbd);
        --my-accent-lightness-max: 0.975;
        --my-accent-lightness-min: 0.15;
        --my-accent-chroma-min: 0.01;

        --dxds-primary-10: oklch(from var(--my-accent-color-source) calc(l + var(--my-accent-lightness-max) - min(l, var(--my-accent-lightness-max))) calc(c - (max(c, var(--my-accent-chroma-min)) - var(--my-accent-chroma-min))) h);
        --dxds-primary-20: oklch(from var(--my-accent-color-source) calc(l + 8 * (var(--my-accent-lightness-max) - min(l, var(--my-accent-lightness-max))) / 9) calc(c - 8 * (max(c, var(--my-accent-chroma-min)) - var(--my-accent-chroma-min)) / 9) h);
        --dxds-primary-30: oklch(from var(--my-accent-color-source) calc(l + 7 * (var(--my-accent-lightness-max) - min(l, var(--my-accent-lightness-max))) / 9) calc(c - 7 * (max(c, var(--my-accent-chroma-min)) - var(--my-accent-chroma-min)) / 9) h);
        --dxds-primary-40: oklch(from var(--my-accent-color-source) calc(l + 6 * (var(--my-accent-lightness-max) - min(l, var(--my-accent-lightness-max))) / 9) calc(c - 6 * (max(c, var(--my-accent-chroma-min)) - var(--my-accent-chroma-min)) / 9) h);
        --dxds-primary-50: oklch(from var(--my-accent-color-source) calc(l + 5 * (var(--my-accent-lightness-max) - min(l, var(--my-accent-lightness-max))) / 9) calc(c - 5 * (max(c, var(--my-accent-chroma-min)) - var(--my-accent-chroma-min)) / 9) h);
        --dxds-primary-60: oklch(from var(--my-accent-color-source) calc(l + 4 * (var(--my-accent-lightness-max) - min(l, var(--my-accent-lightness-max))) / 9) calc(c - 4 * (max(c, var(--my-accent-chroma-min)) - var(--my-accent-chroma-min)) / 9) h);
        --dxds-primary-70: oklch(from var(--my-accent-color-source) calc(l + 3 * (var(--my-accent-lightness-max) - min(l, var(--my-accent-lightness-max))) / 9) calc(c - 3 * (max(c, var(--my-accent-chroma-min)) - var(--my-accent-chroma-min)) / 9) h);
        --dxds-primary-80: oklch(from var(--my-accent-color-source) calc(l + 2 * (var(--my-accent-lightness-max) - min(l, var(--my-accent-lightness-max))) / 9) calc(c - 2 * (max(c, var(--my-accent-chroma-min)) - var(--my-accent-chroma-min)) / 9) h);
        --dxds-primary-90: oklch(from var(--my-accent-color-source) calc(l + 1 * (var(--my-accent-lightness-max) - min(l, var(--my-accent-lightness-max))) / 9) calc(c - 1 * (max(c, var(--my-accent-chroma-min)) - var(--my-accent-chroma-min)) / 9) h);
        --dxds-primary-100: var(--my-accent-color-source);
        --dxds-primary-110: oklch(from var(--my-accent-color-source) calc(l - 1 * (max(l, var(--my-accent-lightness-min)) - var(--my-accent-lightness-min)) / 8) calc(c - 1 * (max(c, var(--my-accent-chroma-min)) - var(--my-accent-chroma-min)) / 8) h);
        --dxds-primary-120: oklch(from var(--my-accent-color-source) calc(l - 2 * (max(l, var(--my-accent-lightness-min)) - var(--my-accent-lightness-min)) / 8) calc(c - 2 * (max(c, var(--my-accent-chroma-min)) - var(--my-accent-chroma-min)) / 8) h);
        --dxds-primary-130: oklch(from var(--my-accent-color-source) calc(l - 3 * (max(l, var(--my-accent-lightness-min)) - var(--my-accent-lightness-min)) / 8) calc(c - 3 * (max(c, var(--my-accent-chroma-min)) - var(--my-accent-chroma-min)) / 8) h);
        --dxds-primary-140: oklch(from var(--my-accent-color-source) calc(l - 4 * (max(l, var(--my-accent-lightness-min)) - var(--my-accent-lightness-min)) / 8) calc(c - 4 * (max(c, var(--my-accent-chroma-min)) - var(--my-accent-chroma-min)) / 8) h);
        --dxds-primary-150: oklch(from var(--my-accent-color-source) calc(l - 5 * (max(l, var(--my-accent-lightness-min)) - var(--my-accent-lightness-min)) / 8) calc(c - 5 * (max(c, var(--my-accent-chroma-min)) - var(--my-accent-chroma-min)) / 8) h);
        --dxds-primary-160: oklch(from var(--my-accent-color-source) calc(l - 6 * (max(l, var(--my-accent-lightness-min)) - var(--my-accent-lightness-min)) / 8) calc(c - 6 * (max(c, var(--my-accent-chroma-min)) - var(--my-accent-chroma-min)) / 8) h);
        --dxds-primary-170: oklch(from var(--my-accent-color-source) calc(l - 7 * (max(l, var(--my-accent-lightness-min)) - var(--my-accent-lightness-min)) / 8) calc(c - 7 * (max(c, var(--my-accent-chroma-min)) - var(--my-accent-chroma-min)) / 8) h);
        --dxds-primary-180: oklch(from var(--my-accent-color-source) calc(l - 8 * (max(l, var(--my-accent-lightness-min)) - var(--my-accent-lightness-min)) / 8) calc(c - 8 * (max(c, var(--my-accent-chroma-min)) - var(--my-accent-chroma-min)) / 8) h);
    }

[note]

Older browsers may not support the [oklch()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/oklch) CSS function. To ensure these browsers do not override `--dxds-primary-*` variables with invalid values, wrap color calculations in a feature query (a [@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@supports) CSS at-rule):

    :root {
        --my-accent-color-source: var(--my-accent-color, #0f6cbd);
        /* ... */
    }

    @supports (color: oklch(from red l c h)) {
        :root {
            --dxds-primary-10: oklch(from var(--my-accent-color-source) calc(l + var(--my-accent-lightness-max) - min(l, var(--my-accent-lightness-max))) calc(c - (max(c, var(--my-accent-chroma-min)) - var(--my-accent-chroma-min))) h);
            /* ... */
        }
    }

[/note]
