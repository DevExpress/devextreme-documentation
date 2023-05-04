[Content Security Policy](https://developer.mozilla.org/ru/docs/Web/HTTP/CSP) (CSP) is a security feature that helps detect and mitigate certain types of attacks, such as clickjacking, cross-site scripting (XSS), and other malicious code injection attacks. The results of such attacks may be different: data theft, page spoofing, malware distribution, site defacement, and so on. It is important to ensure that components of the DevExtreme UI library are compatible with CSP.

If you want to apply CSP rules, define a `<meta>` tag and configure a policy in the following way:

    <!--HTML-->
    <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'self'; img-src https://*; child-src 'none';" />
