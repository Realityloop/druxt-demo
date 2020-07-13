import Vue from 'vue'

import DruxtBlockRegionHeader from './block-regions/DruxtBlockRegionHeader.vue'

import DruxtBlockSearchFormBlock from './blocks/DruxtBlockSearchFormBlock.vue'
import DruxtBlockSystemBrandingBlock from './blocks/DruxtBlockSystemBrandingBlock.vue'
import DruxtBlockSystemMenuBlockAccount from './blocks/DruxtBlockSystemMenuBlockAccount.vue'
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
import DruxtFieldNumberIntegerFieldCookingTime from './fields/DruxtFieldNumberIntegerFieldCookingTime.vue'
import DruxtFieldNumberIntegerFieldNumberOfServings from './fields/DruxtFieldNumberIntegerFieldNumberOfServings.vue'
import DruxtFieldNumberIntegerFieldPreparationTime from './fields/DruxtFieldNumberIntegerFieldPreparationTime.vue'
import DruxtFieldResponsiveImage from './fields/DruxtFieldResponsiveImage.vue'
import DruxtFieldResponsiveImageFieldMediaImage from './fields/DruxtFieldResponsiveImageFieldMediaImage.vue'
import DruxtFieldStringFieldIngredients from './fields/DruxtFieldStringFieldIngredients.vue'
import DruxtFieldTextDefaultFieldRecipeInstruction from './fields/DruxtFieldTextDefaultFieldRecipeInstruction.vue'

import DruxtViewFeaturedArticlesPage1 from './views/DruxtViewFeaturedArticlesPage1.vue'
import DruxtViewFrontpagePage1 from './views/DruxtViewFrontpagePage1.vue'
import DruxtViewPromotedItemsBlock1 from './views/DruxtViewPromotedItemsBlock1.vue'
import DruxtViewRecipeCollectionsBlock from './views/DruxtViewRecipeCollectionsBlock.vue'
import DruxtViewRecipesPage1 from './views/DruxtViewRecipesPage1.vue'

const components = [
  DruxtBlockRegionHeader,

  DruxtBlockSearchFormBlock,
  DruxtBlockSystemBrandingBlock,
  DruxtBlockSystemMenuBlockAccount,
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
  DruxtFieldNumberIntegerFieldCookingTime,
  DruxtFieldNumberIntegerFieldNumberOfServings,
  DruxtFieldNumberIntegerFieldPreparationTime,
  DruxtFieldResponsiveImage,
  DruxtFieldResponsiveImageFieldMediaImage,
  DruxtFieldStringFieldIngredients,
  DruxtFieldTextDefaultFieldRecipeInstruction,

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
