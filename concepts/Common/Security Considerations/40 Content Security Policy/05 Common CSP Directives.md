You can specify a set of CSP rules to define resources that your site allows or restricts. See the list of common CSP directives and source values in the tables below:

<table class="dx-table">
    <tbody>
        <tr>
            <th><b>Directive</b></th>
            <th><b>Example</b></th>
            <th><b>Description</b></th>
        </tr>
        <tr>
            <td><code>default-src</code></td>
            <td><code>default-src 'self' cdn.example.com;</code></td>
            <td>Default policy. Allow everything but only from the same origin.</td>
        </tr>
        <tr>
            <td><code>script-src</code></td>
            <td><code>script-src 'self' js.example.com;</code></td>
            <td>Only allow scripts from the same origin</td>
        </tr>
        <tr>
            <td><code>style-src</code></td>
            <td><code>style-src 'self' css.example.com;</code></td>
            <td>Defines authorized sources for stylesheets (CSS)</td>
        </tr>
        <tr>
            <td><code>object-src</code></td>
            <td><code>object-src 'self';</code></td>
            <td>Defines authorized sources for plugins (for example, &lt;object&gt;, &lt;embed&gt; or &lt;applet&gt;)</td>
        </tr>
        <tr>
            <td><code>img-src</code></td>
            <td><code>img-src 'self' img.example.com;</code></td>
            <td>Defines authorized sources for images, or link element related to an image type (for example, rel="icon")</td>
        </tr>
        <tr>
            <td><code>frame-src</code></td>
            <td><code>frame-src 'self';</code></td>
            <td>Defines authorized sources for loading frames (iframe or frame)</td>
        </tr>
        <tr>
            <td><code>form-action</code></td>
            <td><code>form-action 'self';</code></td>
            <td>Defines valid sources that can be used as an HTML &lt;form&gt; action.</td>
        </tr>
    </tbody>
</table>
