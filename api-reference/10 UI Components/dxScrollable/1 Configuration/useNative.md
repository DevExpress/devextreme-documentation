---
id: dxScrollable.Options.useNative
type: Boolean
default: true, false (desktop except Mac)
---
---
##### shortDescription
Specifies whether the component uses native or simulated scrolling.

---

When this property is set to `true`, ScrollView uses the browser's scrolling logic. When disabled, the component implements custom scrolling logic that does not change across browsers and devices.

[note]

- When **useNative** is enabled and the component contains no focusable elements, [Axe](https://www.deque.com/axe/) reports a [false positive issue for scrollable-region-focusable](https://github.com/dequelabs/axe-core/issues/2822). This does not affect the accessibility levels of your application. To resolve the issue, you can add the `tabindex="0"` attribute to the ScrollView content container.
- When this property is `false`, ScrollView determines whether to accept mouse or touch input on initialization. If input availability changes at runtime (for instance, when using browser device emulation), the component may not react to inputs correctly. Refresh your application after input changes to ensure correct scrolling behavior.

[/note]