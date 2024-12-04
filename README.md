This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Local Development Setup

First install the dependencies with:

```bash
npm i --force
```
Why `--force`? Check: https://ui.shadcn.com/docs/react-19

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

### App Folder

It contains the groups of 4 type of pages with each one having a different Layout.

- **Auth group**
```
Contains Sign-in and Sign-Up pages that can be used in future to create custom pages using Clerk components. 
```

- **Landing Group**

```
Contains a landing page for the unauthorized user and contains company and product details along with success stories. 
```

- **Root Group**

```
Contains the protected paths of our app such as User Dashboard and Sales Data. 
```

- **NotFound Group**

```
This contains the 404 page to capture all the invalid routes user try to access.
```

### Components

- **UI Folder**

```
This contains all the shadcn component that we add using their cli command.
```

- **Shared Folder**

```
This contains all the custom components that we created using shadcn components. It is sub divided in to groups based on the similar components like Cards and DataTable. 
```

### Lib

```
It contains the whole app utility functions, constants and dummy data.
```
