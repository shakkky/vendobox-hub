# vendobox-hub

## URLs

- Dev - https://dev-hub.vendobox.com.au
- Production - https://hub.vendobox.com.au

## Run locally

This project has been created using `create-react-app` and has almost stock configuration.

To run the dashboard locally:

```shell
# install module if not done
yarn

# start the webserver
yarn start
```

## Running locally

To run locally, we usually use `yarn dev`, this should open backyard by default on PORT 3001

## TypeScript

```shell
# generate GraphQL schema types from dev
yarn generate-apollo-types
```

## Components

We are using MUI components for all forms related components or layout & bootstrap for any other UI component. We can override the MUI theme & bootstrap theme in the `src/styles`. Every (reusable) component is build using Storybook so it's in an isolated environment.

## Resources

- [Material UI v1](https://material-ui.com/api/app-bar/) - This is the API doc for MUI v1
- [MUI DateTimePicker](https://material-ui-pickers.firebaseapp.com/demo/datetimepicker) - We use this picker instead of the native one that is buggy
- [Material UI v1 (Icons)](https://material-ui.com/style/icons/) - Icons module to render SVGs icons
- [Google MUI Icons](https://material.io/tools/icons/?style=baseline) - List of SVG icons that can be used
- [styled-components](https://github.com/styled-components/styled-components) - Styled Component Docs
- [React Router](https://reacttraining.com/react-router/web/guides/philosophy) - React Router for Web documentation
- [Adding SASS pre-processor to CRA](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc) - Documentation on how to setup CRA without ejecting
