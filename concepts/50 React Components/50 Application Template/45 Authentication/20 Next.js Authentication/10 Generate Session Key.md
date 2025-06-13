To implement authentication functions in the Next.js template, define a session key first. This key is used to encrypt session cookies. You can find it in `application\.env`:    

    <!-- tab: .env -->
    SESSION_SECRET=<your_secret_key_goes_here>

You can generate a secret key with the `openssl` command in the terminal:

    openssl rand -base64 32

[important] To ensure the security of your application, define a unique session key.