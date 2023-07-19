import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";

import { DELETE_PET } from "../api/mutations";
import { GET_PET } from "../api/queries";
import type { Pet } from "../__generated__/graphql";
import { useEffect } from "react";

type Props = {
  setPetToEdit: React.Dispatch<React.SetStateAction<null | Pet>>;
};

const PetDetail: React.FC<Props> = ({ setPetToEdit }) => {
  const { petId } = useParams();
  const petIdString = petId as string;
  const { loading, error, data } = useQuery(GET_PET, {
    variables: { petId: petIdString },
  });

  useEffect(() => {
    if (data && data?.pet) setPetToEdit(data?.pet);
  });

  const [
    deletePet,
    { loading: deleteLoading, error: deleteError, data: deleteData },
  ] = useMutation(DELETE_PET, {
    variables: { deletePetId: petIdString },
  });

  useEffect(() => {
    if (deleteData && deleteData?.deletePet) window.location.href = "/";
  }, [deleteData]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Pet Detail</h2>

        <Link to="/">
          <button>Back to list</button>
        </Link>

        {(loading || deleteLoading) && <p>Loading...</p>}

        {error && <p>Error: {error.message}</p>}
        {deleteError && <p>deleteError: {deleteError.message}</p>}

        {data?.pet && (
          <>
            <p>Pet name: {data?.pet?.name}</p>
            <p>Pet type: {data?.pet?.type}</p>
            <p>Pet age: {data?.pet?.age}</p>
            <p>Pet breed: {data?.pet?.breed}</p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Link to={`/${data?.pet?.id}/edit`}>
                <button style={{ marginRight: 10 }}>Edit pet</button>
              </Link>

              <button
                style={{ marginLeft: 10 }}
                onClick={() => void deletePet()}
              >
                Delete Pet
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PetDetail;
