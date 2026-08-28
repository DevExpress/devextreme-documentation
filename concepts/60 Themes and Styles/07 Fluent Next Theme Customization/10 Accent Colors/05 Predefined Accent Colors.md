The DevExpress Design System defines 11 [primary color palettes](https://docs.devexpress.com/DesignSystem/405638/colors/theme-palettes/fluent-theme-palettes) for Fluent themes. These color palettes ship as stylesheets in the DevExtreme NPM package. Import one of these accent stylesheets after a Fluent Next theme to apply an accent color:

    <!-- tab: Modular Application -->
    import 'devextreme/dist/css/dx.fluent-next.blue.light.css';
    import 'devextreme/dist/css/accents/rose.css';

    <!-- tab: Non-Modular Application -->
    <link rel="stylesheet" href="node_modules/devextreme/dist/css/dx.fluent-next.blue.light.css">
    <link rel="stylesheet" href="node_modules/devextreme/dist/css/accents/rose.css">

The following accent stylesheets are available:

<table class="dx-table">
    <tr>
        <th>Accent Color</th>
        <th>Stylesheet</th>
    </tr>
    <tr>
        <td>Blue</td>
        <td><code>accents/blue.css</code></td>
    </tr>
    <tr>
        <td>Cool Blue</td>
        <td><code>accents/cool-blue.css</code></td>
    </tr>
    <tr>
        <td>Desert</td>
        <td><code>accents/desert.css</code></td>
    </tr>
    <tr>
        <td>Mint</td>
        <td><code>accents/mint.css</code></td>
    </tr>
    <tr>
        <td>Moss</td>
        <td><code>accents/moss.css</code></td>
    </tr>
    <tr>
        <td>Orchid</td>
        <td><code>accents/orchid.css</code></td>
    </tr>
    <tr>
        <td>Purple</td>
        <td><code>accents/purple.css</code></td>
    </tr>
    <tr>
        <td>Rose</td>
        <td><code>accents/rose.css</code></td>
    </tr>
    <tr>
        <td>Rust</td>
        <td><code>accents/rust.css</code></td>
    </tr>
    <tr>
        <td>Steel</td>
        <td><code>accents/steel.css</code></td>
    </tr>
    <tr>
        <td>Storm</td>
        <td><code>accents/storm.css</code></td>
    </tr>
</table>

[note]

- Blue is the default accent color in Fluent Next themes. You do not need to import the blue accent stylesheet to apply this accent color.
- Theme and accent stylesheets define colors on the same selector (`:root`). To ensure accent colors are applied, load your app's accent stylesheet immediately after the theme stylesheet.
- Accent stylesheets apply to all variations of Fluent Next (light and dark modes, standard and compact sizes). To switch theme modes or sizes, swap the theme stylesheet only.

[/note]

You can also add accent color styles to an existing stylesheet in your application. Load this stylesheet immediately after the Fluent Next theme to ensure accent color styles are applied correctly:

    <!-- tab: Blue -->
    :root {
        --dxds-primary-10: #f4f8fc;
        --dxds-primary-20: #e7eff9;
        --dxds-primary-30: #cce1f8;
        --dxds-primary-40: #b4d2f4;
        --dxds-primary-50: #9cc3f0;
        --dxds-primary-60: #82b4ea;
        --dxds-primary-70: #67a2e1;
        --dxds-primary-80: #4b90d9;
        --dxds-primary-90: #2b7ecf;
        --dxds-primary-100: #0f6cbd;
        --dxds-primary-110: #015fab;
        --dxds-primary-120: #005397;
        --dxds-primary-130: #004884;
        --dxds-primary-140: #003c70;
        --dxds-primary-150: #002e58;
        --dxds-primary-160: #002244;
        --dxds-primary-170: #00162f;
        --dxds-primary-180: #010b1c;
    }

    <!-- tab: Cool Blue -->
    :root {
        --dxds-primary-10: #f5f8f9;
        --dxds-primary-20: #e9f0f3;
        --dxds-primary-30: #cfe2ea;
        --dxds-primary-40: #b9d4e0;
        --dxds-primary-50: #a2c6d6;
        --dxds-primary-60: #8ab7cb;
        --dxds-primary-70: #72a9bf;
        --dxds-primary-80: #5a9ab4;
        --dxds-primary-90: #408ca9;
        --dxds-primary-100: #2d7d9a;
        --dxds-primary-110: #226e89;
        --dxds-primary-120: #195f77;
        --dxds-primary-130: #125066;
        --dxds-primary-140: #0a4255;
        --dxds-primary-150: #073342;
        --dxds-primary-160: #042632;
        --dxds-primary-170: #031922;
        --dxds-primary-180: #020d13;
    }

    <!-- tab: Desert -->
    :root {
        --dxds-primary-10: #f8f7f5;
        --dxds-primary-20: #f0eee9;
        --dxds-primary-30: #e2ded1;
        --dxds-primary-40: #d5cfbc;
        --dxds-primary-50: #c7bfa7;
        --dxds-primary-60: #b9af91;
        --dxds-primary-70: #aca07c;
        --dxds-primary-80: #9f9268;
        --dxds-primary-90: #928354;
        --dxds-primary-100: #847545;
        --dxds-primary-110: #746639;
        --dxds-primary-120: #64572f;
        --dxds-primary-130: #544925;
        --dxds-primary-140: #453b1c;
        --dxds-primary-150: #352d14;
        --dxds-primary-160: #27210d;
        --dxds-primary-170: #1a1607;
        --dxds-primary-180: #0e0b03;
    }

    <!-- tab: Mint -->
    :root {
        --dxds-primary-10: #f2f9f7;
        --dxds-primary-20: #e2f3ef;
        --dxds-primary-30: #bce9df;
        --dxds-primary-40: #99dfd0;
        --dxds-primary-50: #73d4c1;
        --dxds-primary-60: #40c8b2;
        --dxds-primary-70: #00b9a2;
        --dxds-primary-80: #00a792;
        --dxds-primary-90: #009683;
        --dxds-primary-100: #018574;
        --dxds-primary-110: #007566;
        --dxds-primary-120: #006558;
        --dxds-primary-130: #00564a;
        --dxds-primary-140: #00473d;
        --dxds-primary-150: #00362e;
        --dxds-primary-160: #002922;
        --dxds-primary-170: #001b17;
        --dxds-primary-180: #000f0b;
    }

    <!-- tab: Moss -->
    :root {
        --dxds-primary-10: #f6f8f7;
        --dxds-primary-20: #ecefee;
        --dxds-primary-30: #d7e0de;
        --dxds-primary-40: #c5d2cf;
        --dxds-primary-50: #b3c4bf;
        --dxds-primary-60: #a0b5af;
        --dxds-primary-70: #88a19a;
        --dxds-primary-80: #718e86;
        --dxds-primary-90: #5b7b73;
        --dxds-primary-100: #486860;
        --dxds-primary-110: #405e57;
        --dxds-primary-120: #39544d;
        --dxds-primary-130: #324a44;
        --dxds-primary-140: #2c413c;
        --dxds-primary-150: #21322d;
        --dxds-primary-160: #182522;
        --dxds-primary-170: #0f1816;
        --dxds-primary-180: #070d0b;
    }

    <!-- tab: Orchid -->
    :root {
        --dxds-primary-10: #fbf5fa;
        --dxds-primary-20: #f8e9f5;
        --dxds-primary-30: #f6d1ee;
        --dxds-primary-40: #f1bbe7;
        --dxds-primary-50: #eaa5de;
        --dxds-primary-60: #e28dd5;
        --dxds-primary-70: #dc78ce;
        --dxds-primary-80: #d662c7;
        --dxds-primary-90: #cf4abf;
        --dxds-primary-100: #c239b3;
        --dxds-primary-110: #ab2a9e;
        --dxds-primary-120: #941d88;
        --dxds-primary-130: #7c1272;
        --dxds-primary-140: #66055d;
        --dxds-primary-150: #4f0449;
        --dxds-primary-160: #3d0337;
        --dxds-primary-170: #2a0226;
        --dxds-primary-180: #180116;
    }

    <!-- tab: Purple -->
    :root {
        --dxds-primary-10: #f6f7fc;
        --dxds-primary-20: #eceef9;
        --dxds-primary-30: #d7dcfa;
        --dxds-primary-40: #c5ccf7;
        --dxds-primary-50: #b3bbf4;
        --dxds-primary-60: #a0a9ee;
        --dxds-primary-70: #8d96e7;
        --dxds-primary-80: #7b83e0;
        --dxds-primary-90: #6a70d7;
        --dxds-primary-100: #5b5fc7;
        --dxds-primary-110: #5053b3;
        --dxds-primary-120: #45479f;
        --dxds-primary-130: #3a3c89;
        --dxds-primary-140: #303275;
        --dxds-primary-150: #24265b;
        --dxds-primary-160: #1a1b46;
        --dxds-primary-170: #101131;
        --dxds-primary-180: #08081d;
    }

    <!-- tab: Rose -->
    :root {
        --dxds-primary-10: #fef5f6;
        --dxds-primary-20: #fee8eb;
        --dxds-primary-30: #ffd0d6;
        --dxds-primary-40: #ffb9c3;
        --dxds-primary-50: #ffa0ae;
        --dxds-primary-60: #ff8399;
        --dxds-primary-70: #fd6b89;
        --dxds-primary-80: #fb4f79;
        --dxds-primary-90: #f72a6a;
        --dxds-primary-100: #ea005e;
        --dxds-primary-110: #cb0050;
        --dxds-primary-120: #ad0043;
        --dxds-primary-130: #8f0036;
        --dxds-primary-140: #73002a;
        --dxds-primary-150: #5a001f;
        --dxds-primary-160: #450016;
        --dxds-primary-170: #31000d;
        --dxds-primary-180: #1e0006;
    }

    <!-- tab: Rust -->
    :root {
        --dxds-primary-10: #fdf5f3;
        --dxds-primary-20: #fceae5;
        --dxds-primary-30: #ffd3c7;
        --dxds-primary-40: #fdbeac;
        --dxds-primary-50: #faa892;
        --dxds-primary-60: #f59176;
        --dxds-primary-70: #f17c5d;
        --dxds-primary-80: #ed6542;
        --dxds-primary-90: #e74d21;
        --dxds-primary-100: #da3b01;
        --dxds-primary-110: #be3200;
        --dxds-primary-120: #a22900;
        --dxds-primary-130: #882100;
        --dxds-primary-140: #6e1900;
        --dxds-primary-150: #561100;
        --dxds-primary-160: #420b00;
        --dxds-primary-170: #2f0500;
        --dxds-primary-180: #1c0200;
    }

    <!-- tab: Steel -->
    :root {
        --dxds-primary-10: #f7f7f8;
        --dxds-primary-20: #edeef1;
        --dxds-primary-30: #dadee4;
        --dxds-primary-40: #cad0d8;
        --dxds-primary-50: #b8c0cb;
        --dxds-primary-60: #a7b0be;
        --dxds-primary-70: #96a1b1;
        --dxds-primary-80: #8693a5;
        --dxds-primary-90: #768498;
        --dxds-primary-100: #68768a;
        --dxds-primary-110: #5a677a;
        --dxds-primary-120: #4d5869;
        --dxds-primary-130: #404a59;
        --dxds-primary-140: #343c49;
        --dxds-primary-150: #272e38;
        --dxds-primary-160: #1c222a;
        --dxds-primary-170: #12161c;
        --dxds-primary-180: #090b0f;
    }

    <!-- tab: Storm -->
    :root {
        --dxds-primary-10: #f7f7f7;
        --dxds-primary-20: #efeeee;
        --dxds-primary-30: #dfdedd;
        --dxds-primary-40: #d0cfce;
        --dxds-primary-50: #c1bfbe;
        --dxds-primary-60: #b1afad;
        --dxds-primary-70: #9f9d9b;
        --dxds-primary-80: #8e8c8a;
        --dxds-primary-90: #7e7b79;
        --dxds-primary-100: #6d6a68;
        --dxds-primary-110: #615e5c;
        --dxds-primary-120: #555250;
        --dxds-primary-130: #494745;
        --dxds-primary-140: #3d3b3a;
        --dxds-primary-150: #2f2d2c;
        --dxds-primary-160: #232121;
        --dxds-primary-170: #171615;
        --dxds-primary-180: #0c0b0b;
    }
