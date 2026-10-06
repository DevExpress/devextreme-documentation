Non-Fluent Next DevExtreme themes use internal `--dx-*` variables instead of Design System variables to define shared CSS values such as colors. To ensure migration compatibility with these themes, Fluent Next themes declare these `--dx-*` variables and map them to Design System variables. This section lists mapped variables and corresponding public `--dxds-*` variables that you should upgrade to.

The following table lists color variables. Fluent Next themes declare these variables in the `:root` scope and on elements that use [container-specific theme modes](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Theme_Modes/Container-Specific_Theme_Modes):

<table class="dx-table">
    <tr>
        <th>Legacy Variable</th>
        <th>Design System Variable</th>
    </tr>
    <tr>
        <td><code>--dx-color-primary</code></td>
        <td><code>--dxds-color-content-primary</code></td>
    </tr>
    <tr>
        <td><code>--dx-color-link</code></td>
        <td><code>--dxds-color-content-primary</code></td>
    </tr>
    <tr>
        <td><code>--dx-color-success</code></td>
        <td><code>--dxds-color-content-success</code></td>
    </tr>
    <tr>
        <td><code>--dx-color-warning</code></td>
        <td><code>--dxds-color-content-warning</code></td>
    </tr>
    <tr>
        <td><code>--dx-color-danger</code></td>
        <td><code>--dxds-color-content-danger</code></td>
    </tr>
    <tr>
        <td><code>--dx-color-text</code></td>
        <td><code>--dxds-color-content</code></td>
    </tr>
    <tr>
        <td><code>--dx-color-icon</code></td>
        <td><code>--dxds-color-content-subtle</code></td>
    </tr>
    <tr>
        <td><code>--dx-color-spin-icon</code></td>
        <td><code>--dxds-color-content-subtle</code></td>
    </tr>
    <tr>
        <td><code>--dx-texteditor-color-label</code></td>
        <td><code>--dxds-color-content-subtle</code></td>
    </tr>
    <tr>
        <td><code>--dx-color-main-bg</code></td>
        <td><code>--dxds-color-bg-canvas</code></td>
    </tr>
    <tr>
        <td><code>--dx-component-color-bg</code></td>
        <td><code>--dxds-color-bg</code></td>
    </tr>
    <tr>
        <td><code>--dx-datagrid-row-alternation-bg</code></td>
        <td><code>--dxds-color-bg-low</code></td>
    </tr>
    <tr>
        <td><code>--dx-color-options-panel-bg</code></td>
        <td><code>--dxds-color-bg-inverted</code> with <code>--dxds-opacity-5</code> opacity</td>
    </tr>
    <tr>
        <td><code>--dx-color-border</code></td>
        <td><code>--dxds-color-border</code></td>
    </tr>
    <tr>
        <td><code>--dx-color-separator</code></td>
        <td><code>--dxds-color-border-subtle</code></td>
    </tr>
</table>

The following table lists size variables for standard and compact sizes. Fluent Next themes declare these variables in the `:root` scope:

<table class="dx-table">
    <tr>
        <th>Legacy Variable</th>
        <th>Design System Variable (Standard Size)</th>
        <th>Design System Variable (Compact Size)</th>
    </tr>
    <tr>
        <td><code>--dx-font-size</code></td>
        <td><code>--dxds-font-size-base-md</code></td>
        <td><code>--dxds-font-size-base-sm</code></td>
    </tr>
    <tr>
        <td><code>--dx-font-size-xs</code></td>
        <td><code>--dxds-font-size-120</code></td>
        <td><code>--dxds-font-size-120</code></td>
    </tr>
    <tr>
        <td><code>--dx-font-size-sm</code></td>
        <td><code>--dxds-font-size-180</code></td>
        <td><code>--dxds-font-size-140</code></td>
    </tr>
    <tr>
        <td><code>--dx-font-size-md</code></td>
        <td><code>--dxds-font-size-200</code></td>
        <td><code>--dxds-font-size-160</code></td>
    </tr>
    <tr>
        <td><code>--dx-font-size-lg</code></td>
        <td><code>--dxds-font-size-280</code></td>
        <td><code>--dxds-font-size-200</code></td>
    </tr>
    <tr>
        <td><code>--dx-font-size-xl</code></td>
        <td><code>--dxds-spacing-340</code> (34px; the font size scale does not include this value)</td>
        <td><code>--dxds-font-size-240</code></td>
    </tr>
    <tr>
        <td><code>--dx-font-size-heading-1</code></td>
        <td><code>--dxds-font-size-headline-xl</code></td>
        <td><code>--dxds-font-size-headline-lg</code></td>
    </tr>
    <tr>
        <td><code>--dx-font-size-heading-2</code></td>
        <td><code>--dxds-font-size-headline-lg</code></td>
        <td><code>--dxds-font-size-headline-md</code></td>
    </tr>
    <tr>
        <td><code>--dx-font-size-heading-3</code></td>
        <td><code>--dxds-font-size-headline-md</code></td>
        <td><code>--dxds-font-size-headline-sm</code></td>
    </tr>
    <tr>
        <td><code>--dx-font-size-heading-4</code></td>
        <td><code>--dxds-font-size-headline-sm</code></td>
        <td><code>--dxds-font-size-title-md</code></td>
    </tr>
    <tr>
        <td><code>--dx-font-size-heading-5</code></td>
        <td><code>--dxds-font-size-title-md</code></td>
        <td><code>--dxds-font-size-title-sm</code></td>
    </tr>
    <tr>
        <td><code>--dx-font-size-heading-6</code></td>
        <td><code>--dxds-font-size-title-sm</code></td>
        <td><code>--dxds-font-size-title-xs</code></td>
    </tr>
    <tr>
        <td><code>--dx-font-size-icon</code></td>
        <td><code>--dxds-spacing-200</code></td>
        <td><code>--dxds-spacing-160</code></td>
    </tr>
    <tr>
        <td><code>--dx-component-height</code></td>
        <td><code>--dxds-spacing-320</code></td>
        <td><code>--dxds-spacing-240</code></td>
    </tr>
    <tr>
        <td><code>--dx-toolbar-height</code></td>
        <td><code>--dxds-spacing-480</code></td>
        <td><code>--dxds-spacing-360</code></td>
    </tr>
    <tr>
        <td><code>--dx-list-item-padding-block</code></td>
        <td><code>--dxds-spacing-60</code></td>
        <td><code>--dxds-spacing-40</code></td>
    </tr>
    <tr>
        <td><code>--dx-list-item-padding-inline</code></td>
        <td><code>--dxds-spacing-120</code></td>
        <td><code>--dxds-spacing-80</code></td>
    </tr>
    <tr>
        <td><code>--dx-border-radius</code></td>
        <td><code>--dxds-border-radius-40</code></td>
        <td><code>--dxds-border-radius-40</code></td>
    </tr>
    <tr>
        <td><code>--dx-border-width</code></td>
        <td><code>--dxds-border-width-10</code></td>
        <td><code>--dxds-border-width-10</code></td>
    </tr>
</table>

The following table lists legacy variables that Fluent Next themes do not declare in the `:root` scope. Replace these variables with the corresponding Design System variables:

<table class="dx-table">
    <tr>
        <th>Legacy Variable</th>
        <th>Design System Variable</th>
    </tr>
    <tr>
        <td><code>--dx-color-shadow</code></td>
        <td><code>--dxds-box-shadow-*</code> (these variables define complete <code>box-shadow</code> values instead of only shadow colors)</td>
    </tr>
    <tr>
        <td><code>--dx-texteditor-color-text</code></td>
        <td><code>--dxds-color-content</code></td>
    </tr>
    <tr>
        <td><code>--dx-popup-toolbar-item-padding-inline</code></td>
        <td><code>--dxds-spacing-80</code></td>
    </tr>
    <tr>
        <td><code>--dx-button-padding-inline</code></td>
        <td><code>--dxds-spacing-120</code> (standard size) or <code>--dxds-spacing-80</code> (compact size)</td>
    </tr>
</table>

[note] Fluent Next themes declare `--dx-button-padding-inline` only for elements with the `dx-button` or `dx-dropdowneditor-button` class.
