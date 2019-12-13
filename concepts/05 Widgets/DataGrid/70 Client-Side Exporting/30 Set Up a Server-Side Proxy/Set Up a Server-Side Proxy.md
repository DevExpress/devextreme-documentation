[important]The functionality described in this guide is no longer required since all the modern browsers implement APIs for saving files.

If you need the export function in browsers that do not provide an API for saving files (that is, **Safari on Mac OS** before v10), implement a server-side proxy that streams the resulting file to a user in response to a POST request. The proxy implementation is different for each platform.
