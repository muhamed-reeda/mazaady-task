import axios from "axios";

class Lists {
  get_all_categories() {
    return axios.get("https://staging.mazaady.com/api/v1/get_all_cats");
  }
  get_properties(id) {
    return axios.get("https://staging.mazaady.com/api/v1/properties", {
      params: { cat: id },
    });
  }
  get_options_child(id) {
    return axios.get(
      "https://staging.mazaady.com/api/v1/get-options-child/" + id
    );
  }
}

export { Lists as default };
