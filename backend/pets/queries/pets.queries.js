import { getItem, listItems } from "../models/pets.models.js";

export const getPet = (id) => {
  try {
    const response = getItem(id);
    return response;
  } catch (err) {
    return err;
  }
};

export const listPets = () => {
  try {
    const response = listItems();
    return response;
  } catch (err) {
    return err;
  }
};
