import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, d as defineStore } from "../server.mjs";
import __nuxt_component_0$1 from "./Icon-Ccv6vRuM.js";
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
import "./index-Cs7iyvZ9.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _sfc_main$2 = {
  data() {
    return {
      newTask: ""
    };
  },
  methods: {
    addTask() {
      this.$emit("addTask", this.newTask);
      this.resetNewTask();
    },
    resetNewTask() {
      this.newTask = "";
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center space-x-2 mt-5" }, _attrs))}><input${ssrRenderAttr("value", $data.newTask)} placeholder="Ingrese una nueva tarea..." class="p-2 border border-gray-300 focus:outline-none focus:border-green-500 rounded-md"><button class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all duration-300 ease-in-out">Agregar</button></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TaskInput.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      isEditing: false,
      idEditable: null
    };
  },
  props: {
    tasks: Array
  },
  computed: {
    incompleteTasks() {
      return this.tasks.filter((task) => !task.completed);
    },
    completedTasks() {
      return this.tasks.filter((task) => task.completed);
    }
  },
  methods: {
    toggleTask(id) {
      this.$emit("toggle-task", id);
    },
    removeTask(id) {
      this.$emit("remove-task", id);
    },
    editTask(id) {
      this.idEditable = id;
      this.isEditing = true;
      this.editedTaskName = this.getTaskById(id).name;
    },
    saveTask(id) {
      this.$emit("save-task", id, this.editedTaskName);
      this.cancelEdit();
    },
    cancelEdit() {
      this.idEditable = null;
      this.isEditing = false;
      this.editedTaskName = "";
    },
    getTaskById(id) {
      return this.tasks.find((task) => task.id === id);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))}><div class="flex-1">`);
  if ($options.incompleteTasks.length > 0) {
    _push(`<h2 class="mt-4 text-2xl font-bold text-indigo-600 mb-4">Lista pendientes:</h2>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.incompleteTasks.length > 0) {
    _push(`<ul class="divide-y"><!--[-->`);
    ssrRenderList($options.incompleteTasks, (task, index2) => {
      _push(`<li class="flex flex-col md:flex-row items-center justify-between p-2 bg-white shadow-md rounded-lg mb-2"><div class="flex items-center mb-2 md:mb-0">`);
      if (task.completed) {
        _push(`<span class="mr-2 text-green-500">`);
        _push(ssrRenderComponent(_component_Icon, { name: "streamline-emojis:sparkles" }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (task.id === $data.idEditable) {
        _push(`<span><input class="border border-gray-400 p-1 focus:outline-none focus:ring focus:border-blue-300 rounded-md"${ssrRenderAttr("value", task.name)}></span>`);
      } else {
        _push(`<span class="${ssrRenderClass({ "line-through": task.completed, "text-gray-700": !task.completed })}">${ssrInterpolate(task.name)}</span>`);
      }
      _push(`</div><div class="flex items-center space-x-2"><button class="ml-2 px-2 py-1 bg-blue-500 text-white rounded">`);
      _push(ssrRenderComponent(_component_Icon, { name: "flat-color-icons:ok" }, null, _parent));
      _push(` ${ssrInterpolate(task.completed ? "Desmarcar" : "Marcar")}</button><button class="px-2 py-1 bg-red-500 text-white rounded focus:outline-none focus:ring focus:border-red-300">`);
      _push(ssrRenderComponent(_component_Icon, { name: "fxemoji:ballottboxwithscriptx" }, null, _parent));
      _push(` Eliminar </button>`);
      if ($data.isEditing) {
        _push(`<button class="px-2 py-1 bg-green-500 text-white rounded focus:outline-none focus:ring focus:border-green-300">`);
        _push(ssrRenderComponent(_component_Icon, { name: "dashicons:cloud-saved" }, null, _parent));
        _push(` Guardar </button>`);
      } else {
        _push(`<!---->`);
      }
      if ($data.isEditing) {
        _push(`<button class="px-2 py-1 bg-red-500 text-white rounded focus:outline-none focus:ring focus:border-red-300">`);
        _push(ssrRenderComponent(_component_Icon, { name: "lets-icons:cancel-fill" }, null, _parent));
        _push(` Cancelar </button>`);
      } else {
        _push(`<button class="px-2 py-1 bg-yellow-500 text-white rounded focus:outline-none focus:ring focus:border-yellow-300">`);
        _push(ssrRenderComponent(_component_Icon, { name: "fxemoji:pencil" }, null, _parent));
        _push(` Editar </button>`);
      }
      _push(`</div></li>`);
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<p class="text-white text-2xl font-bold mt-4">No hay tareas disponibles!.</p>`);
  }
  _push(`</div><div class="ml-4 flex-2">`);
  if ($options.completedTasks.length > 0) {
    _push(`<h2 class="mt-4 text-2xl font-bold text-green-600">Lista completadas:</h2>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.completedTasks.length > 0) {
    _push(`<ul class="mt-4 divide-y"><!--[-->`);
    ssrRenderList($options.completedTasks, (task, index2) => {
      _push(`<li class="flex flex-col md:flex-row items-center justify-between p-2 bg-white shadow-md rounded-lg mb-2"><div class="flex items-center mb-2 md:mb-0"><span class="mr-2 text-green-500">`);
      _push(ssrRenderComponent(_component_Icon, { name: "streamline-emojis:sparkles" }, null, _parent));
      _push(`</span><span class="${ssrRenderClass({ "line-through": task.completed, "text-gray-700": !task.completed })}">${ssrInterpolate(task.name)}</span></div><div class="flex items-center space-x-2"><button class="ml-2 px-2 py-1 bg-blue-500 text-white rounded">`);
      _push(ssrRenderComponent(_component_Icon, { name: "flat-color-icons:ok" }, null, _parent));
      _push(` ${ssrInterpolate(task.completed ? "Desmarcar" : "Marcar")}</button></div></li>`);
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TaskList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const useStateTaskStore = defineStore({
  id: "StateTaskStore",
  state: () => ({
    tasks: []
  }),
  actions: {
    addTask(task) {
      let objectTask = {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: (/* @__PURE__ */ new Date()).getTime(),
        name: task,
        completed: false
      };
      this.tasks.push(objectTask);
    },
    toggleTask(id) {
      const foundIndex = this.tasks.findIndex((task) => task.id === id);
      if (foundIndex !== -1) {
        this.tasks[foundIndex].completed = !this.tasks[foundIndex].completed;
      }
    },
    removeTask(id) {
      const foundIndex = this.tasks.findIndex((task) => task.id === id);
      if (foundIndex !== -1) {
        this.tasks.splice(foundIndex, 1);
      }
    },
    getTasks() {
      return this.tasks;
    },
    editTask(id, task) {
      const foundIndex = this.tasks.findIndex((task2) => task2.id === id);
      if (foundIndex !== -1) {
        this.tasks[foundIndex].name = task.name;
      }
    }
  },
  // Persist the store in localStorage
  persist: true
});
const _sfc_main = {
  data() {
    return {
      newTask: "",
      tasks: []
    };
  },
  mounted() {
    const stateTaskStore = useStateTaskStore();
    this.tasks = stateTaskStore.getTasks();
  },
  methods: {
    addTask(task) {
      try {
        const stateTaskStore = useStateTaskStore();
        if (task.trim() !== "") {
          stateTaskStore.addTask(task.trim());
          this.tasks = stateTaskStore.getTasks();
        }
      } catch (error) {
        console.error("Error adding task:", error);
      }
    },
    removeTask(id) {
      try {
        const stateTaskStore = useStateTaskStore();
        stateTaskStore.removeTask(id);
        this.tasks = stateTaskStore.getTasks();
      } catch (error) {
        console.error("Error removing task:", error);
      }
    },
    toggleTask(id) {
      try {
        const stateTaskStore = useStateTaskStore();
        stateTaskStore.toggleTask(id);
        this.tasks = stateTaskStore.getTasks();
      } catch (error) {
        console.error("Error toggling task:", error);
      }
    },
    editTask(id, name) {
      try {
        const stateTaskStore = useStateTaskStore();
        stateTaskStore.editTask(id, name);
      } catch (error) {
        console.error("Error editing task:", error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TaskInput = __nuxt_component_0;
  const _component_TaskList = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_TaskInput, { onAddTask: $options.addTask }, null, _parent));
  _push(ssrRenderComponent(_component_TaskList, {
    tasks: $data.tasks,
    onRemoveTask: $options.removeTask,
    onToggleTask: $options.toggleTask,
    onEditTask: $options.editTask
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-DaNI9o-3.js.map
