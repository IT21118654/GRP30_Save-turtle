import axios from "axios";

const URL = "http://localhost:5000/advocacy";
class AdvocacyService {
  createItem(item) {
    return axios.post(URL, item);
  }
  getAllItem() {
    return axios.get(URL);
  }
  deleteItem(id) {
    return axios.delete(`http://localhost:5000/advocacy/${id}`);
  }
  updateItem(id, item) {
    // return axios.put(URL + "/" + noticeId);
  }
  getItemById(_id) {
    return axios.get(URL + "/" + _id);
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new AdvocacyService();