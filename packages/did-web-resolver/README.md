# https://did-web.web.app/api/docs

## Getting Started

```
npm run start
```

### View Swagger API Docs

- [local](http://localhost:5010/did-web/us-central1/main/api/docs/static/index.html)
- [remote](https://did-web.web.app/api/docs/static/index.html)

### Resolve a DID Web

- https://did-web.web.app/api/v1/identifiers/did:web:did.actor:alice

- http://localhost:5010/did-web/us-central1/main/api/v1/identifiers/did:web:did.actor:alice


### Set your Firebase Config

```
npx firebase functions:config:set did_web=$(node -e "console.log(JSON.stringify(require('./.runtimeconfig.json').did_web))")
```

### Get your Firebase Config

```
npx firebase functions:config:get
```
