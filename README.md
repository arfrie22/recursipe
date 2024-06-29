# recursipe

A recursive recipe hosting tool

## Running the app

1. Clone the repository
2. Run `npm install`
3. Run `npm run serve` (this will run `npm run build` and `npm run start`)
4. Open your browser to `http://localhost:3000`
5. Enjoy!

## Start Commands

- Run `npm run build` to build the app
- Run `npm run start` to start the server
- Run `npm run serve` to build the app and start the server
- Run `npm run watch` to start the development server that will watch for changes

## API Documentation

For all of the endpoints you need to get a session token from the `/auth` endpoint. Going to `/auth/signin` will give you a button to sign in with Google. After you sign in you will have your session token in your cookies.

Read the documentation at `API.md`
