# GraphQL demo server

This is a local copy of the server used in the GraphQL demos. In case the public server is not running, you can run this version. It requires `node` and `python` to be installed.

1. `npm install`
2. `npm run reset`
3. `npm run start`

Edit the `demoServer` URL in `../src/components/GraphQL-crud.js` to point to your local server, probably `http://localhost:4000/graphql`.

To reset the database to its original contents, run `npm run reset`.

