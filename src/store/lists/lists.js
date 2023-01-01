import Lists from "@/services/lists";

const lists = new Lists();

const listsModule = {
  namespaces: true,
  state: {
    isLoading: false,
    mainCategories: [],
    subCategories: [],
    properties: [],
    optionsChilds: [],
    FormData: [],
  },
  getters: {
    getProperties(state) {
      return state.properties;
    },
    getMainCategories(state) {
      return state.mainCategories;
    },
    getSubCategories(state) {
      return state.subCategories;
    },
    getOptionsChildren(state) {
      return state.optionsChilds;
    },
    getFormData(state) {
      return state.FormData;
    },
  },
  mutations: {
    SET_PROPERTIES(state, list) {
      state.properties = list;
    },
    SET_MAIN_CATEGORIES(state, list) {
      state.mainCategories = list;
    },
    SET_SUB_CATEGORIES(state, list) {
      state.subCategories = list;
    },
    SET_LOADING_STATE(state, status) {
      state.isLoading = status;
    },
    SET_OPTIONS_CHILDRENS(state, list) {
      state.optionsChilds.push(list);
    },
    SET_FORM_DATA(state, payload) {
      var isExist = false;
      state.FormData.map((e) => {
        if (e.key === payload.key) {
          isExist = true;
          e.value = payload.value;
        }
      });
      if (!isExist) {
        state.FormData.push({ key: payload.key, value: payload.value });
      }
    },
  },
  actions: {
    saveFormData({ commit }, payload) {
      commit("SET_FORM_DATA", payload);
    },
    getOptionsChildren({ commit }, id) {
      commit("SET_LOADING_STATE", true);
      lists.get_options_child(id).then((resposne) => {
        commit("SET_OPTIONS_CHILDRENS", resposne.data.data);
        commit("SET_LOADING_STATE", false);
      });
    },
    getProperties({ commit }, id) {
      commit("SET_LOADING_STATE", true);
      lists.get_properties(id).then((resposne) => {
        commit("SET_PROPERTIES", resposne.data.data);
        commit("SET_LOADING_STATE", false);
      });
    },
    getAllCategories({ commit }) {
      commit("SET_LOADING_STATE", true);
      lists.get_all_categories().then((resposne) => {
        commit("SET_MAIN_CATEGORIES", resposne["data"]["data"]["categories"]);
        commit("SET_LOADING_STATE", false);
      });
    },
    getSubCategories({ commit }, payload) {
      commit(
        "SET_SUB_CATEGORIES",
        this.getters["getMainCategories"][payload]["children"]
      );
    },
  },
};
export default listsModule;
