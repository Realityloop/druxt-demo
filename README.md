# DruxtJS demo

This is a DruxtJS demonstration.

The following is a script to be used when presenting this demonstration.

```
git clone --single-branch --branch feature/20-presentation git@github.com:Realityloop/druxt-demo.git
```

---

## Prerequisites

- Composer
- NPM
- Tokaido*


### Composer memory limit issue

Setup the terminal so we don't hit with memory limit issues.

```
export COMPOSER_MEMORY_LIMIT=-1
clear
```

_*Tokaido is only required for this demonstration/script._

---

## Drupal

### 1. Download Drupal and required modules.

Installs a Drupal 9 site with the Umami demo profile using Tokaido.

Notes:
- DruxtJS works with Drupal 8 and existing codebases as well.
- **This step should be done prior to demo to avoid live demo fail anxiety.**
  - In the case you don't pre-prepare, this step should only take about 5 minutes.

> path: `/`

```
tok new drupal -t drupal9-no-install
cd drupal
composer require drupal/druxt drupal/jsonapi_views
```

### 2. Install Umami Demo.

```
ssh drupal.tok -C "drush si demo_umami -y"
tok open --admin
```

### 3. Tour Drupal.

1. Demo frontpage content.

2. Take a tour of Drupals core functionality*:
   - Content types
   - Display modes
   - Blocks
   - Menus
   - etc

_*This step is likely only required for Vue.js and NuxtJS audiences._


### 4. Enable and configure DruxtJS

1. Enable modules: `Extend` or `/en/admin/modules`
   - Filter: `json`
   - Enable:
     - `Druxt.js`
     - `JSON:API Views`

2. Configure permission:
   - Search: `Druxt`
   - Add to `anonymous` role.

Notes:
  - Permission can be applied to any role.
  - Authenticated roles will need to configure OAuth2 in DruxtJS.
    - This demo does not cover this topic.


### 5. Done

1. Go back to homepage for later comparison.

---

## NuxtJS

### 1. Install NuxtJS and required modules.

Installs NuxtJS with minimal requirements.

Notes:
- DruxtJS can be installed into an existing NuxtJS codebase.
- Pages directory is a requirement of NuxtJS, but can be left empty.
- **This step should be done prior to demo to avoid live demo fail anxiety.**
  - In the case you don't pre-prepare, this step should only take about 1-2 minutes.

> path: `/`

```
mkdir nuxt
cd nuxt
npm init -y
npm i nuxt druxt @nuxtjs/proxy
mkdir pages && touch nuxt.config.js
```

### 2. Configure NuxtJS.

> file: `/nuxt/nuxt.config.js`:

```
// Drupal backend base URL.
const baseUrl = ''

export default {
  modules: [
    '@nuxtjs/proxy',
    'druxt'
  ],
  druxt: { baseUrl },
  proxy: [ baseUrl + 'sites/default/files' ]
}
```

---

## DruxtJS demo

### 1. Run!

Starts the NuxtJS project and DruxtJS does it's thing.

> path: `/nuxt`

```
npx nuxt
```

> http://localhost:3000


### 2. Compare content

Show a comparison of the Drupal Umami frontpage and the DruxtJS demo frontpage.

### 3. Walkthrough Vue Developer tools

- Layout
- Nuxt
- DruxtRouter: https://router.druxtjs.org
- DruxtView: https://views.druxtjs.org
- DruxtEntity: https://entity.druxtjs.org
- DruxtField
- etc...

> Turtles all the way down
