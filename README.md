
![Logo](./.github/logo.png)


# Easy Financial Control

Easy Financial Control is a modern and practical solution for people looking for an efficient organization of their finances. Developed as an online platform accessible from any device with an internet connection, this application offers a variety of features that make financial control simple and accessible.

One of the main features of the application is the ability to add transactions, which can be classified as inputs or outputs. With this functionality, users can record all financial transactions, from salaries and receipts to expenditures and expenses.


## Tech Stack

**Client:** Typescript, React, TailwindCSS, Next, React Hooks Forms, Zod, Clerk, Phosphor Icons.



## Installation

Install Easy Financial Control with npm or yarn

```bash
  cd easy-financial-control
  npm install easy-financial-control
```

ou 

```bash
  cd easy-financial-control
  yarn install easy-financial-control
```


after, create file ```.env.local``` with:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```
    
## Run

#### Before

```bash
  npm run db
```

ou

```bash
  yarn db
```



#### To run project local


```bash
  npm run dev
```

ou

```bash
  yarn dev
```