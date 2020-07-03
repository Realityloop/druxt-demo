import Vue from 'vue'

import DruxtBlockRegionHeader from './block-regions/DruxtBlockRegionHeader.vue'

import DruxtBlockSystemBrandingBlock from './blocks/DruxtBlockSystemBrandingBlock.vue'
import DruxtBlockSystemMenuBlockMain from './blocks/DruxtBlockSystemMenuBlockMain.vue'

import DruxtEntityBlockContentDisclaimerBlock from './entities/DruxtEntityBlockContentDisclaimerBlock.vue'
import DruxtEntityBlockContentFooterPromoBlock from './entities/DruxtEntityBlockContentFooterPromoBlock.vue'
import DruxtEntityCard from './entities/DruxtEntityCard.vue'
import DruxtEntityCardCommon from './entities/DruxtEntityCardCommon.vue'
import DruxtEntityNodeRecipeDefault from './entities/DruxtEntityNodeRecipeDefault.vue'

import DruxtFieldEntityReferenceLabel from './fields/DruxtFieldEntityReferenceLabel.vue'
import DruxtFieldListDefaultFieldDifficulty from './fields/DruxtFieldListDefaultFieldDifficulty.vue'
import DruxtFieldResponsiveImage from './fields/DruxtFieldResponsiveImage.vue'
import DruxtFieldResponsiveImageFieldMediaImage from './fields/DruxtFieldResponsiveImageFieldMediaImage.vue'
import DruxtFieldStringFieldIngredients from './fields/DruxtFieldStringFieldIngredients.vue'

import DruxtViewFeaturedArticlesPage1 from './views/DruxtViewFeaturedArticlesPage1.vue'
import DruxtViewFrontpagePage1 from './views/DruxtViewFrontpagePage1.vue'
import DruxtViewRecipesPage1 from './views/DruxtViewRecipesPage1.vue'

const components = [
  DruxtBlockRegionHeader,

  DruxtBlockSystemBrandingBlock,
  DruxtBlockSystemMenuBlockMain,

  DruxtEntityBlockContentDisclaimerBlock,
  DruxtEntityBlockContentFooterPromoBlock,
  DruxtEntityCard,
  DruxtEntityCardCommon,
  DruxtEntityNodeRecipeDefault,

  DruxtFieldEntityReferenceLabel,
  DruxtFieldListDefaultFieldDifficulty,
  DruxtFieldResponsiveImage,
  DruxtFieldResponsiveImageFieldMediaImage,
  DruxtFieldStringFieldIngredients,

  DruxtViewFeaturedArticlesPage1,
  DruxtViewFrontpagePage1,
  DruxtViewRecipesPage1,
]

// Component registration
Vue.use({
  install: function (Vue) {
    // Ensure we only register components once.
    if (Vue.__components_installed) {
      return
    }
    Vue.__components_installed = true

    // Register components
    for (const component of components) {
      Vue.component(component.name, component)
    }
  },
})
