All directives that terminate with *-src* have corresponding values referred to as a source list, which are similar across these directives. You can separate multiple source list values by a space, except for the value 'none', which should be the sole value used.

<table border="1"  cellspacing="0" cellpadding="4">
    <tr>
        <th style="width: 20%;">Source Value</th>
        <th>Example</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>*</code></td>
        <td><code>img-src *</code></td>
        <td>Wildcard, allows any URL except data: blob: filesystem: schemes.</td>
    </tr>
    <tr>
        <td><code>'none'</code></td>
        <td><code>object-src 'none'</code></td>
        <td>Prevents a load resources from any source.</td>
    </tr>
    <tr>
        <td><code>'self'</code></td>
        <td><code>script-src 'self'</code></td>
        <td>Allows a web site to load resources from the same origin (same scheme, host and port).</td>
    </tr>
    <tr>
        <td><code>data:</code></td>
        <td><code>img-src 'self' data:</code></td>
        <td>Allows a web site to load resources via the data scheme (eg Base64 encoded images).</td>
    </tr>
    <tr>
        <td><code><em><span class="hidden-xs">domain.</span>example.com</em></code></td>
        <td><code>img-src <span class="hidden-xs">domain.</span>example.com</code></td>
        <td>Allows a web site to load resources from the specified domain name.</td>
    </tr>
    <tr>
        <td><code><em>*.example.com</em></code></td>
        <td><code>img-src *.example.com</code></td>
        <td>Allows a web site to load resources from any subdomain under <code><em>example.com</em></code>.</td>
    </tr>
    <tr>
        <td><code><em>https://cdn.com</em></code></td>
        <td><code>img-src https://cdn.com</code></td>
        <td>Allows a web site to load resources only over HTTPS matching the given domain.</td>
    </tr>
    <tr>
        <td><code>https:</code></td>
        <td><code>img-src https:</code></td>
        <td>Allows a web site to load resources only over HTTPS on any domain.</td>
    </tr>
    <tr>
        <td><code>'unsafe-inline'</code></td>
        <td><code>script-src 'unsafe-inline'</code></td>
        <td>Allows a web site to use of inline source elements such as style attribute, onclick, or script tag bodies (depends on the context of the source it is applied to) and <code>javascript:</code> URIs</td>
    </tr>
    <tr>
        <td><code>'unsafe-eval'</code></td>
        <td><code>script-src 'unsafe-eval'</code></td>
        <td>Allows a web site to perform unsafe dynamic code evaluation such as JavaScript <code>eval()</code></td>
    </tr>
    <tr>
        <td><code>'nonce-'</code></td>
        <td><code>script-src 'nonce-rAnd0m'</code></td>
        <td>Allows an inline script or CSS to execute if the script (eg: <code>&lt;script nonce="rAnd0m"&gt;</code>) tag contains a nonce attribute matching the nonce specifed in the CSP header. The nonce should be a secure random string, and should not be reused. <span>CSP Level 2</span> </td>
    </tr>
    <tr>
        <td><code>'strict-dynamic'</code></td>
        <td><code>script-src 'strict-dynamic'</code></td>
        <td>Enables an allowed script to load additional scripts via non-"parser-inserted" script elements (for example <code>document.createElement('script');</code> is allowed).  <span class="label label-success">CSP Level 3</span> </td>
    </tr>
    <tr>
        <td><code>'unsafe-hashes'</code></td>
        <td><code>script-src 'unsafe-hashes'</code></td>
        <td>Allows you to enable scripts in event handlers (eg <code>onclick</code>). Does not apply to <code>javascript:</code> or inline <code>&lt;script&gt;</code>  <span >CSP Level 3</span> </td>
    </tr>
</table>
