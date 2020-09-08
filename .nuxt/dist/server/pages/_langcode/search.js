exports.ids = [2];
exports.modules = {

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_langcode/search.vue?vue&type=template&id=5ffda246&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-row',[_c('b-container',[_c('b-row',[_c('b-col',[_c('b-input-group',[_c('b-input',{attrs:{"size":"lg"},model:{value:(_vm.query),callback:function ($$v) {_vm.query=$$v},expression:"query"}}),_vm._v(" "),_c('b-input-group-append',[_c('b-button',{attrs:{"size":"lg"}},[_vm._v("Search")])],1)],1)],1)],1),_vm._v(" "),(_vm.query && _vm.results.length)?_c('b-row',{staticClass:"mt-3 mt-md-5"},_vm._l((_vm.results),function(result,key){return _c('druxt-entity',{key:key,staticClass:"pb-3",attrs:{"type":result.type,"uuid":result.id,"mode":"teaser","wrapper":{
          component: 'b-col',
          props: {
            class: 'd-flex',
            cols: '12',
            md: '6',
          },
        }}})}),1):_c('b-row',{staticClass:"mt-3 mt-md-5"},[_c('b-col',[_c('h4',[_vm._v("Sorry, no results were found.")])])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_langcode/search.vue?vue&type=template&id=5ffda246&

// EXTERNAL MODULE: external "druxt-search"
var external_druxt_search_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_langcode/search.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var searchvue_type_script_lang_js_ = ({
  name: 'DruxtDemoSearch',
  layout: 'search',
  mixins: [external_druxt_search_["DruxtSearchMixin"]],

  created() {
    if (typeof this.$route.query.query === 'undefined') {
      return;
    }

    this.query = this.$route.query.query;
  }

});
// CONCATENATED MODULE: ./pages/_langcode/search.vue?vue&type=script&lang=js&
 /* harmony default export */ var _langcode_searchvue_type_script_lang_js_ = (searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/_langcode/search.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _langcode_searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1e88acf3"
  
)

/* harmony default export */ var search = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=search.js.map