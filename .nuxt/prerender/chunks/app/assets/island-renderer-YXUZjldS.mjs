import { defineComponent, onErrorCaptured, createVNode } from 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/vue/index.mjs';
import { c as createError } from '../server.mjs';
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
import 'file://E:/Nauzet/LemonCodeEntregas/deploy-vue/node_modules/vue/server-renderer/index.mjs';
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

const islandComponents = {};
const islandRenderer = defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${props.context.name}`
      });
    }
    onErrorCaptured((e) => {
      console.log(e);
    });
    return () => createVNode(component || "span", { ...props.context.props, "data-island-uid": "" });
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-YXUZjldS.mjs.map
