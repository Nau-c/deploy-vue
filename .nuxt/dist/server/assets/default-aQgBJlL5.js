import { ssrRenderSlot } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="app-container" data-v-9fa426cd><h1 class="text-6xl mt-4 text-4xl font-bold text-center mb-8" data-v-9fa426cd><span class="text-white" data-v-9fa426cd>Mi Aplicación ToDo App!</span></h1><div class="flex flex-col min-h-[100dvh] items-center" data-v-9fa426cd>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div><footer class="bg-gray-800 text-white py-4 text-center" data-v-9fa426cd><p data-v-9fa426cd>© 2024 Mi Aplicación ToDo App. Todos los derechos reservados Nauzet López Mendoza.</p></footer><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9fa426cd"]]);
export {
  _default as default
};
//# sourceMappingURL=default-aQgBJlL5.js.map
