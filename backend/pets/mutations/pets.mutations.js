import { addItem, deleteItem, editItem } from "../models/pets.models.js";

export const addPet = (petToAdd) => {
  try {
    const response = addItem(petToAdd);
    return response;
  } catch (err) {
    return err;
  }
};

export const editPet = (petToEdit) => {
  try {
    const response = editItem(petToEdit);
    return response;
  } catch (err) {
    return err;
  }
};

export const deletePet = (id) => {
  try {
    const response = deleteItem(id);
    return response;
  } catch (err) {
    return err;
  }
};
