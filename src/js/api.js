export default {
  async getEventsDataBase() {
    const response = await fetch("http://localhost:8000/data");
    const data = await response.json();
    return data;
  },
};
