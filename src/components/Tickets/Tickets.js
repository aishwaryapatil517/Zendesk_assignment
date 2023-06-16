import { useEffect, useState } from "react";
import axios from "axios";
import { getHeaders, BASE_URL } from "../../utils/util";
import MUITable from "../../common/MUITable";
import { useNavigate } from "react-router-dom";

const Tickets = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BASE_URL}api/v2/tickets`, {
        headers: {
          ...getHeaders(),
        },
      })
      .then((response) => {
        setData(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((error) => {
        navigate("/error");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {isLoading ? (
        <p
          data-testid="loading-message"
          style={{ textAlign: "center", fontSize: "40px" }}
        >
          Loading....
        </p>
      ) : (
        <MUITable data-testid="tickets-table" data={data?.tickets} />
      )}
    </>
  );
};

export default Tickets;
