import { ssrRenderSlot } from 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/vue/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/ofetch/dist/node.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/hookable/dist/index.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/unctx/dist/index.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/h3/dist/index.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/unhead/dist/index.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/@unhead/shared/dist/index.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/ufo/dist/index.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/defu/dist/defu.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/klona/dist/index.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/destr/dist/index.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/cookie-es/dist/index.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/ohash/dist/index.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/pinia-plugin-persistedstate/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/scule/dist/index.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/unstorage/dist/index.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/unstorage/drivers/fs.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/unstorage/drivers/memory.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/pathe/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="app-container" data-v-9fa426cd><h1 class="text-6xl mt-4 text-4xl font-bold text-center mb-8" data-v-9fa426cd><span class="text-white" data-v-9fa426cd>Mi Aplicaci\xF3n ToDo App!</span></h1><div class="flex flex-col min-h-[100dvh] items-center" data-v-9fa426cd>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div><footer class="bg-gray-800 text-white py-4 text-center" data-v-9fa426cd><p data-v-9fa426cd>\xA9 2024 Mi Aplicaci\xF3n ToDo App. Todos los derechos reservados Nauzet L\xF3pez Mendoza.</p></footer><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9fa426cd"]]);

export { _default as default };
//# sourceMappingURL=default-aQgBJlL5.mjs.map
