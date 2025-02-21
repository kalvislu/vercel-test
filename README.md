# Onboarding

## Project setup

### Install modules
```
yarn
```

### Setup DEV environment

1. Add the following line to your `hosts` file (Guide for [MacOS](https://setapp.com/how-to/edit-mac-hosts-file) / [Ubuntu](https://websiteforstudents.com/how-to-edit-the-local-hosts-file-on-ubuntu-18-04-16-04/)):
```
127.0.0.1 local.ekool.dev
```
2. Create `.env.development.local` file, copy variables from `.env.example` file and fill them with required secrets.
3. Login here [https://login.ekool.dev/](https://login.ekool.dev/)
4. You need to get a `cookie` for the application.
5. Compiles and hot-reloads for development:
```
yarn run serve
```
6. Development links:
- [https://local.ekool.dev:8080/#/](https://local.ekool.dev:8080/#/)

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

### Useful links

- [Vuetify](https://vuetifyjs.com/)
- [@k12tech/ekool-vue-framework](https://gitlab.factory.digital/k12tech/vue-component-library)
- [@k12tech/ekool-vue-framework (Storybook)](https://storybook.ekool.eu/)

---
## Project info

### Vue 2.7
This project is based on [Vue 2.7 LTS](https://v2.vuejs.org/v2/guide/migration-vue-2-7.html) with [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html). It will allow us to migrate to [Vue 3](https://vuejs.org/) easier. 

### Store
We use [pinia](https://pinia.vuejs.org/getting-started.html) store library to share a state across components, but if it's possible not to use store, then it's better not to use it :)

### Env
To add new variable we should add it to `.env.development.local` in this format:
```dotenv
VUE_APP_FRONTEND_VARIABLE_NAME=
```
then we should add it to `.env` file in this format:
```dotenv
VUE_APP_FRONTEND_VARIABLE_NAME=\${VUE_APP_FRONTEND_VARIABLE_NAME}
```
and finally we should add it to `window.globalJSConfig` in `index.html` file:
```js
window.globalJSConfig = {
  VUE_APP_FRONTEND_VARIABLE_NAME: "<%= VUE_APP_FRONTEND_VARIABLE_NAME %>",
}
```
To use it inside app we should call `getEnv` function and provide variable's name
```js
import { getEnv } from '@env'

getEnv('VUE_APP_FRONTEND_VARIABLE_NAME')
```

### Language
For work with language we should use [BabelEdit](https://www.codeandweb.com/babeledit) editor.

To open translations file click `Open project` button and go to `project-name/i18n/translations.babel`, open it.

To add new translation click `Add ID` button. To add new language click `Languages` > `Add language` > select language from the list > press `Ok` button. After this you should select path to translations file for this language. Click on button with folder icon, click on `Set new file...`, select `locales` folder and language code in ISO 639-1 format as a name for the file. Don't forget to add this code to `VUE_APP_FRONTEND_VALID_LOCALES` variable.


### Analytics
We use [vue-gtag](https://matteo-gabriele.gitbook.io/vue-gtag/) library for analytics. You can use [google-analytics-debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) to see logs in console.


### Date handling
Do not use `momentjs`, use [date-fns](https://date-fns.org/) library instead.
