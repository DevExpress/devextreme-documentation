You can define a custom accent color as a CSS variable and use this color to calculate `--dxds-primary-*` variables as follows:

    <!-- tab: Custom -->
    /* Set --dx-accent-color to a brand color; load after the theme stylesheet. */
    :root {
        --dx-accent-color-source: var(--dx-accent-color, #0f6cbd);
        --dx-accent-lightness-max: 0.95;
        --dx-accent-lightness-min: 0.15;
        --dx-accent-chroma-min: 0.04;

        --dxds-primary-10: oklch(from var(--dx-accent-color-source) calc(l + 9 * (var(--dx-accent-lightness-max) - min(l, var(--dx-accent-lightness-max))) / 9) calc(c - 9 * (max(c, var(--dx-accent-chroma-min)) - var(--dx-accent-chroma-min)) / 9) h);
        --dxds-primary-20: oklch(from var(--dx-accent-color-source) calc(l + 8 * (var(--dx-accent-lightness-max) - min(l, var(--dx-accent-lightness-max))) / 9) calc(c - 8 * (max(c, var(--dx-accent-chroma-min)) - var(--dx-accent-chroma-min)) / 9) h);
        --dxds-primary-30: oklch(from var(--dx-accent-color-source) calc(l + 7 * (var(--dx-accent-lightness-max) - min(l, var(--dx-accent-lightness-max))) / 9) calc(c - 7 * (max(c, var(--dx-accent-chroma-min)) - var(--dx-accent-chroma-min)) / 9) h);
        --dxds-primary-40: oklch(from var(--dx-accent-color-source) calc(l + 6 * (var(--dx-accent-lightness-max) - min(l, var(--dx-accent-lightness-max))) / 9) calc(c - 6 * (max(c, var(--dx-accent-chroma-min)) - var(--dx-accent-chroma-min)) / 9) h);
        --dxds-primary-50: oklch(from var(--dx-accent-color-source) calc(l + 5 * (var(--dx-accent-lightness-max) - min(l, var(--dx-accent-lightness-max))) / 9) calc(c - 5 * (max(c, var(--dx-accent-chroma-min)) - var(--dx-accent-chroma-min)) / 9) h);
        --dxds-primary-60: oklch(from var(--dx-accent-color-source) calc(l + 4 * (var(--dx-accent-lightness-max) - min(l, var(--dx-accent-lightness-max))) / 9) calc(c - 4 * (max(c, var(--dx-accent-chroma-min)) - var(--dx-accent-chroma-min)) / 9) h);
        --dxds-primary-70: oklch(from var(--dx-accent-color-source) calc(l + 3 * (var(--dx-accent-lightness-max) - min(l, var(--dx-accent-lightness-max))) / 9) calc(c - 3 * (max(c, var(--dx-accent-chroma-min)) - var(--dx-accent-chroma-min)) / 9) h);
        --dxds-primary-80: oklch(from var(--dx-accent-color-source) calc(l + 2 * (var(--dx-accent-lightness-max) - min(l, var(--dx-accent-lightness-max))) / 9) calc(c - 2 * (max(c, var(--dx-accent-chroma-min)) - var(--dx-accent-chroma-min)) / 9) h);
        --dxds-primary-90: oklch(from var(--dx-accent-color-source) calc(l + 1 * (var(--dx-accent-lightness-max) - min(l, var(--dx-accent-lightness-max))) / 9) calc(c - 1 * (max(c, var(--dx-accent-chroma-min)) - var(--dx-accent-chroma-min)) / 9) h);
        --dxds-primary-100: oklch(from var(--dx-accent-color-source) l c h);
        --dxds-primary-110: oklch(from var(--dx-accent-color-source) calc(l - 1 * (max(l, var(--dx-accent-lightness-min)) - var(--dx-accent-lightness-min)) / 8) calc(c - 1 * (max(c, var(--dx-accent-chroma-min)) - var(--dx-accent-chroma-min)) / 8) h);
        --dxds-primary-120: oklch(from var(--dx-accent-color-source) calc(l - 2 * (max(l, var(--dx-accent-lightness-min)) - var(--dx-accent-lightness-min)) / 8) calc(c - 2 * (max(c, var(--dx-accent-chroma-min)) - var(--dx-accent-chroma-min)) / 8) h);
        --dxds-primary-130: oklch(from var(--dx-accent-color-source) calc(l - 3 * (max(l, var(--dx-accent-lightness-min)) - var(--dx-accent-lightness-min)) / 8) calc(c - 3 * (max(c, var(--dx-accent-chroma-min)) - var(--dx-accent-chroma-min)) / 8) h);
        --dxds-primary-140: oklch(from var(--dx-accent-color-source) calc(l - 4 * (max(l, var(--dx-accent-lightness-min)) - var(--dx-accent-lightness-min)) / 8) calc(c - 4 * (max(c, var(--dx-accent-chroma-min)) - var(--dx-accent-chroma-min)) / 8) h);
        --dxds-primary-150: oklch(from var(--dx-accent-color-source) calc(l - 5 * (max(l, var(--dx-accent-lightness-min)) - var(--dx-accent-lightness-min)) / 8) calc(c - 5 * (max(c, var(--dx-accent-chroma-min)) - var(--dx-accent-chroma-min)) / 8) h);
        --dxds-primary-160: oklch(from var(--dx-accent-color-source) calc(l - 6 * (max(l, var(--dx-accent-lightness-min)) - var(--dx-accent-lightness-min)) / 8) calc(c - 6 * (max(c, var(--dx-accent-chroma-min)) - var(--dx-accent-chroma-min)) / 8) h);
        --dxds-primary-170: oklch(from var(--dx-accent-color-source) calc(l - 7 * (max(l, var(--dx-accent-lightness-min)) - var(--dx-accent-lightness-min)) / 8) calc(c - 7 * (max(c, var(--dx-accent-chroma-min)) - var(--dx-accent-chroma-min)) / 8) h);
        --dxds-primary-180: oklch(from var(--dx-accent-color-source) calc(l - 8 * (max(l, var(--dx-accent-lightness-min)) - var(--dx-accent-lightness-min)) / 8) calc(c - 8 * (max(c, var(--dx-accent-chroma-min)) - var(--dx-accent-chroma-min)) / 8) h);
    }
