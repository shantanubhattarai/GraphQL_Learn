import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense, lazy, useState } from "react";

import type { Pet } from "./__generated__/graphql";

const EditPet = lazy(() => import("./pages/EditPet"));
const AddPet = lazy(() => import("./pages/AddPet"));

const PetList = lazy(() => import("./pages/PetList"));
const PetDetail = lazy(() => import("./pages/PetDetail"));
function App() {
  const [petToEdit, setPetToEdit] = useState<Pet | null>(null);
  return (
    <>
      <div>
        <Router>
          <h1>Pet Shelter</h1>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<></>}>
                  <PetList />
                </Suspense>
              }
            />
            <Route
              path="/:petId"
              element={
                <Suspense fallback={<></>}>
                  <PetDetail setPetToEdit={setPetToEdit} />
                </Suspense>
              }
            />
            <Route
              path="/:petId/edit"
              element={
                <Suspense fallback={<></>}>
                  <EditPet petToEdit={petToEdit!} />
                </Suspense>
              }
            />

            <Route
              path="add"
              element={
                <Suspense fallback={<></>}>
                  <AddPet />
                </Suspense>
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
