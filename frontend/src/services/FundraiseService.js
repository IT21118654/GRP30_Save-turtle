import axios from "axios";

const URL = "http://localhost:5000/fundraise";
class FundraiseService {
  createItem(item) {
    return axios.post(URL, item);
  }
  getAllItem() {
    return axios.get(URL);
  }
  deleteItem(id) {
    return axios.delete(`http://localhost:5000/fundraise/${id}`);
  }
  updateItem(id, item) {
    // return axios.put(URL + "/" + noticeId);
  }
  getItemById(_id) {
    return axios.get(URL + "/" + _id);
  }
}
export default new FundraiseService();