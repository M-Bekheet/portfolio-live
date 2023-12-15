<p align="center">
  <a href="https://www.web-dev.works">
    <img alt="Avatar" src="https://bekheet.vercel.app/_next/image?url=%2Fimages%2Favatar.png&w=3840&q=75" width="80" />
  </a>
</p>
<h1 align="center">
  Portfolio
</h1>

> Personal Portfolio built-in Next.js/React/TypeScript. <br/>This project was earlier developed in GatsbyJS 2.0 and published [here](https://github.com/M-Bekheet/Portfolio)).

## 🔥 Features
 
  * Blazing fast. Check its performance score on [PageSpeed Insights](https://pagespeed.web.dev/analysis/https-bekheet-vercel-app/nr30jsmr7t?form_factor=desktop).
  * Images caching. 
  * The Blog is integrated with Contentful API.
  * Styles made in Flexbox, made it easier to be styled for different devices' screens.
  * The contact form works with SendGrid service.
 

## 🚀 Quick start

1. **Clone Project.**

    ```shell
    git clone https://github.com/M-Bekheet/portfolio-live.git
    ```
  
1. **Navigate into your new site’s directory.**

    ```shell
    cd Portfolio/
    ``` 

1.  **Start developing.**

    Add your .env.local file to the Portfolio/ directory.
    Add your Contentful & SendGrid API keys to .env.local file.
    
    ```shell
    CONTENTFUL_ACCESS_TOKEN=VALUE_HERE
    CONTENTFUL_SPACE_ID=VALUE_HERE
    SENDGRID_API_KEY=VALUE_HERE
    MY_EMAIL=VALUE_HERE
    MY_SENDGRID_EMAIL=VALUE_HERE
    MY_PUBLIC_EMAIL=VALUE_HERE
    ```
1. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:3000`!


## 🧐 What's inside?

A quick look at the top-level files and directories.

    .
    ├── app
      ├── blog
      ├── contact
      ├── ui
      ├── utils
      ├── error.tsx
      ├── layout.tsx
      ├── not-found.tsx
      ├── page.tsx
      ├── page.module.scss
      ├── robots.ts
      ├── favicon.ico
    ├── .env.local
    ├── tsconfig.json
    ├── .gitignore
    ├── .eslintrc.json
    ├── package-lock.json
    ├── package.json
    ├── node_modules
    └── README.md 

1. **`/app`**: This directory will contain all of the code related to what you will see on the front end of your site (what you see in the browser) such as your site header or a page template.

2. **`app/ui`**: This directory will contain all components whether they're shared ones or used in specific modules.

3. **`app/utils`**: This directory will contain all utilities code helpers such as API calls, Next.js actions, constants, and libraries calls.

4. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

6. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies installed for your project. **(You won’t change this file directly).**

7. **`README.md`**: A text file containing useful reference information about your project.

8. **`node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) that are automatically installed.


## 💫 Deploy
 
As with any Next.js project, it can be simply deployed on Vercel with no hustle required. Just create a project on Vercel, add the project files/repo, and set env variables on the project dashboard  
