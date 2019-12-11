---
default: ''
type: string | object
---
---
##### shortDescription
A key used to authenticate the application within the required map provider.

---
This option can hold a string representing an authentication key of a certain provider. In addition, this option can hold an object with specified keys for every used provider: { bing: BING_API_KEY, google: GOOGLE_API_KEY, googleStatic: GOOGLE_STATIC_API_KEY}.

For more information on authentication keys, see the required map provider documentation.

[note]The value of this option cannot be changed dynamically.