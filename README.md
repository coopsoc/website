# Co-op Soc Website

This repository houses the source code for UNSW Co-op Society's website, hosted
at [https://coopsoc.com.au](https://coopsoc.com.au) and written in
[Next.js](https://nextjs.org). Visit our website and explore around!

## Running the website locally

Before running the website, please ensure that the following is installed:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

To run the website on your local machine, do the following:

1. Clone the repository through `git clone https://github.com/coopsoc/coopsoc.com.au`.
2. Go into the repository and run `yarn install` to install all required packages.
3. Run `yarn dev` to launch the website. After executing this command, the website
   should be available at `http://localhost:3000`, where any edits made to the
   website's source code should be immediately reflected on the webpage.

## Maintaining

### Enabling/disabling nominations

Change `const showNominations` to `true` or `false` in `pages/nominations.tsx` to enable or disable nominations.

### Enabling/disabling merch

Change `export const isMerchActive = (): boolean => false;` to `true` in `scripts/merch.ts` to enable merch.

## Contributors

The first version of the website was written by the 2020 Co-op Soc IT director,
Vincent Chen.

The React rewrite of the website was done by the 2021 IT subcom:

- Noa Challis
- Hanyuan Li
- Rohan Agarwal

This was then ported over to Next.js and improved on by the 2022 IT subcom:

- Hanyuan Li
- Stephen Lincon
- Meghna Sunil

## Acknowledgements

This website was originally built using CreativeTim's
[Argon Design System for React](https://github.com/creativetimofficial/argon-design-system-react),
and heavily modified to work with Next.js.
