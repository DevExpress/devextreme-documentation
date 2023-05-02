There are a set of different directives that you can implement in a CSP, to fit the security needs of your website or application.

To get started, create a list of policies or directives to define which resources your site will allow or restrict. In the table below, we provided a list of common CSP directives and source values for you to mix and match.

<table border="1"  cellspacing="0" cellpadding="4">
    <tbody>
        <tr>
            <th style="width: 20%;"><b>Directive</b></th>
            <th><b>Example</b></th>
            <th><b>Description</b></th>
        </tr>
        <tr>
            <td>default-src</td>
            <td>default-src 'self' cdn.example.com;</td>
            <td>Default policy. Allow everything but only from the same origin.</td>
        </tr>
        <tr>
            <td>script-src</td>
            <td>script-src 'self' js.example.com;</td>
            <td>Only allow scripts from the same origin</td>
        </tr>
        <tr>
            <td>style-src</td>
            <td>style-src 'self' css.example.com;</td>
            <td>Defines authorized sources for stylesheets (CSS)</td>
        </tr>
        <tr>
            <td>object-src</td>
            <td>object-src 'self';</td>
            <td>Defines authorized sources for plugins (ex: &lt;object&gt;, &lt;embed&gt; or &lt;applet&gt;)</td>
        </tr>
        <tr>
            <td>img-src</td>
            <td>img-src 'self' img.example.com;</td>
            <td>Defines authorized sources for images, or link element related to an image type (ex: rel=”icon”)</td>
        </tr>
        <tr>
            <td>frame-src</td>
            <td>frame-src 'self';</td>
            <td>Defines authorized sources for loading frames (iframe or frame)</td>
        </tr>
        <tr>
            <td>form-action</td>
            <td>form-action 'self';</td>
            <td>Defines valid sources that can be used as an HTML &lt;form&gt; action.</td>
        </tr>
    </tbody>
</table>
