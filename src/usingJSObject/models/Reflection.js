import moment from "moment";
import uuid from "uuid";

// create a class Reflection with CRUD methods and instantiate with an empty array of reflections
class Reflection {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.reflections = [];
  }

  /**
   *
   * @returns {object} reflection object
   */
  create(data) {
    const newRelection = {
      id: uuid.v4(),
      success: data.success || "",
      lowPoint: data.lowPoint || "",
      takeAway: data.takeAway || "",
      createdDate: moment.now(),
      modifiedDate: moment.now()
    };
    this.reflections.push(newRelection);
    return newRelection;
  }
  /**
   *
   * @param {uuid} id
   * @returns {object} reflection object
   */
  findOne(id) {
    return this.reflections.find(reflect => reflect.id === id);
  }
  /**
   * @returns {object} returns all reflections
   */

  findAll() {
    return this.reflections;
  }

  /**
   *
   * @param {uuid} id
   * @param {object} data
   */

  update(id, data) {
    const reflection = this.findOne(id);
    const index = this.reflections.indexOf(reflection);

    //if there is a reflection that matches the provided id then update the property with provided data for property or fallback to existing property value
    this.reflections[index].success = data["success"] || reflection.success;
    this.reflections[index].lowPoint = data["lowPoint"] || reflection.lowPoint;
    this.reflections[index].takeAway = data["takeAway"] || reflection.takeAway;
    this.reflections[index].modifiedDate = moment.now();
    // finally return updated reflection
    return this.reflections[index];
  }

  /**
   *
   * @param {uuid} id
   */

  delete(id) {
    const reflection = this.findOne(id);
    const index = this.reflections.indexOf(reflection);
    //find and delete one
    this.reflections.splice(index, 1);
    //return deleted reflection
    return reflection;
  }
}

export default new Reflection();
