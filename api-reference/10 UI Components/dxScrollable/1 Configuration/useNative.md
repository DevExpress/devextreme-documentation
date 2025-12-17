---
id: dxScrollable.Options.useNative
type: Boolean
default: true, false (desktop except Mac)
---
---
##### shortDescription
Specifies whether the component uses native or simulated scrolling.

---

[note] When **useNative** is enabled and the component contains no focusable elements, [Axe](https://www.deque.com/axe/) reports a [false positive issue for scrollable-region-focusable](https://github.com/dequelabs/axe-core/issues/2822). This does not affect the accessibility levels of your application. To eliminate the issue, you can add the `tabindex="0"` attribute to the ScrollView content container.