# Secure-Passport-WebApp
Secure Passport Web App
This example app shows how to build a secure webApp to protect PII Data with Angular and Node.

**Prerequisites:** [Node.js](https://nodejs.org/).

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone  https://github.com/abharath309/Secure-Passport-WebApp.git
cd Secure-Passport-WebApp
```

This will get a copy of the project installed locally. To install all of its dependencies and start each app, follow the instructions below.

To run the server, run the below:
 
```bash
npm i
npm start
```

To run the client, cd into the `client` directory and run:
 
```bash
npm install 
ng serve
```

## Installation

To use the latest published version, click the following button to import the SparkPost API as a collection:

[![Run in Postman](https://s3.amazonaws.com/postman-static/run-button.png)](https://www.getpostman.com/collections/795e64bfc59a049adb96)

You can also download the collection file from this repo, then import directly into Postman.

## Links

This example uses the following open source libraries from Okta:

* [Okta JWT Verifier for Node.js](https://github.com/okta/okta-oidc-js/tree/master/packages/jwt-verifier)
* [Okta Angular SDK](https://github.com/okta/okta-oidc-js/tree/master/packages/okta-angular)

## Help

Please post any questions as comments on the [blog post](https://developer.okta.com/blog/2018/10/30/basic-crud-angular-and-node), or visit our [Okta Developer Forums](https://devforum.okta.com/). You can also email developers@okta.com if would like to create a support ticket.

## License

Apache 2.0, see [LICENSE](LICENSE).