import Vue from 'vue'

import DruxtBlockRegionFooter from './block-regions/DruxtBlockRegionFooter.vue'
import DruxtBlockRegionHeader from './block-regions/DruxtBlockRegionHeader.vue'

import DruxtBlockSearchFormBlock from './blocks/DruxtBlockSearchFormBlock.vue'
import DruxtBlockSystemBrandingBlock from './blocks/DruxtBlockSystemBrandingBlock.vue'
import DruxtBlockSystemMenuBlockAccount from './blocks/DruxtBlockSystemMenuBlockAccount.vue'
import DruxtBlockSystemMenuBlockFooter from './blocks/DruxtBlockSystemMenuBlockFooter.vue'
import DruxtBlockSystemMenuBlockMain from './blocks/DruxtBlockSystemMenuBlockMain.vue'

import DruxtEntityBlockContentBannerBlock from './entities/DruxtEntityBlockContentBannerBlock.vue'
import DruxtEntityBlockContentDisclaimerBlock from './entities/DruxtEntityBlockContentDisclaimerBlock.vue'
import DruxtEntityBlockContentFooterPromoBlock from './entities/DruxtEntityBlockContentFooterPromoBlock.vue'
import DruxtEntityCard from './entities/DruxtEntityCard.vue'
import DruxtEntityCardCommon from './entities/DruxtEntityCardCommon.vue'
import DruxtEntityNodeArticleDefault from './entities/DruxtEntityNodeArticleDefault.vue'
import DruxtEntityNodeRecipeDefault from './entities/DruxtEntityNodeRecipeDefault.vue'
import DruxtEntityTeaser from './entities/DruxtEntityTeaser.vue'

import DruxtFieldEntityReferenceLabel from './fields/DruxtFieldEntityReferenceLabel.vue'
import DruxtFieldLink from './fields/DruxtFieldLink.vue'
import DruxtFieldListDefaultFieldDifficulty from './fields/DruxtFieldListDefaultFieldDifficulty.vue'
import DruxtFieldResponsiveImage from './fields/DruxtFieldResponsiveImage.vue'
import DruxtFieldResponsiveImageFieldMediaImage from './fields/DruxtFieldResponsiveImageFieldMediaImage.vue'
import DruxtFieldStringFieldIngredients from './fields/DruxtFieldStringFieldIngredients.vue'

import DruxtViewFeaturedArticlesPage1 from './views/DruxtViewFeaturedArticlesPage1.vue'
import DruxtViewFrontpagePage1 from './views/DruxtViewFrontpagePage1.vue'
import DruxtViewPromotedItemsBlock1 from './views/DruxtViewPromotedItemsBlock1.vue'
import DruxtViewRecipeCollectionsBlock from './views/DruxtViewRecipeCollectionsBlock.vue'
import DruxtViewRecipesPage1 from './views/DruxtViewRecipesPage1.vue'

const components = [
  DruxtBlockRegionFooter,
  DruxtBlockRegionHeader,

  DruxtBlockSearchFormBlock,
  DruxtBlockSystemBrandingBlock,
  DruxtBlockSystemMenuBlockAccount,
  DruxtBlockSystemMenuBlockFooter,
  DruxtBlockSystemMenuBlockMain,

  DruxtEntityBlockContentBannerBlock,
  DruxtEntityBlockContentDisclaimerBlock,
  DruxtEntityBlockContentFooterPromoBlock,
  DruxtEntityCard,
  DruxtEntityCardCommon,
  DruxtEntityNodeArticleDefault,
  DruxtEntityNodeRecipeDefault,
  DruxtEntityTeaser,

  DruxtFieldEntityReferenceLabel,
  DruxtFieldLink,
  DruxtFieldListDefaultFieldDifficulty,
  DruxtFieldResponsiveImage,
  DruxtFieldResponsiveImageFieldMediaImage,
  DruxtFieldStringFieldIngredients,

  DruxtViewFeaturedArticlesPage1,
  DruxtViewFrontpagePage1,
  DruxtViewPromotedItemsBlock1,
  DruxtViewRecipeCollectionsBlock,
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
