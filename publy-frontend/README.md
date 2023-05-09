# What and why?

This is an **_experimental_** port of my GraphQL example and training React frontend application "Publy" to [Next.js](https://nextjs.org/).

It uses Next ["Static Exports"](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports) mode and then can be run as a "traditional" client-side rendered Single Page Application (without the need of running a Next.js server).

I created this project because I want to know if and how it would be possible to move an existing "create-react-app"-based application to Next.js with the _least amount of changes neccessary_. This could be helpful if you want to move away from create-react-app/react-scripts. Then - depending on your needs - one possible target could be Next.js.

For this reason, this example still uses the React Router (and not the Next/App Router) and also does not use any Next-specific features (aside from `"use client"` and a Root `page` and `layout` component). 

**In no way I want to say this is the best migration strategy.** Again I only did this to discover potential ways of migrating away from create-react-app.

![Screenshot showing the publy example applcation](../publy-screenshot.png)

# Running the example

Running the example is as easy as `pnpm dev` but you have to start a database and the Java-based backend (GraphQL) services before:

## Running the backend

**Prerequisites:**

- Java 17
- Docker

**Step 1: Clone repository**

- Please clone this repository with your Git client first.

**Step 2: Start database (with Docker)**

In the root directory of the repository:

```
docker-compose up -d
```

**Step 3: Start userservice**

Attention! Port 8081 must be available:

```
./gradlew publy-userservice:bootRun
```

**Step 4: Start GraphQL backend**

Attention! Port 8080 must be available:

```
./gradlew publy-backend:bootRun
```

You can now open the GraphiQL Explorer via http://localhost:8080 and execute queries and mutations.

## Running the experimental (!!) frontend

Inside `publy-frontend`:

```bash
pnpm install
pnpm dev
```

The application should run on http://localhost:3000.

## Exporting the "static" frontend:

```bash
pnpm build
```

The artifacts are generated into the `out/` folder, which is the default setting in Next.js.

## Running the exported backend

After exporting the backend you can run the exported static backend using a webserver: 

```
pnpm webserver
```

The frontend then runs on http://localhost:3030. It uses the simple [serve](https://www.npmjs.com/package/serve) package as a webserver here. You could of course use any other webserver too. (If anyone wants to contribute a Dockerfile for example for nginx I would be very helpful 😊)

# Contact

If you have questions, don't hesitate to contact me or to open PRs/Issues in this repository. You can also follow me on [Twitter](https://twitter.com/nilshartmann) and [Mastodon](https://norden.social/@nilshartmann).

