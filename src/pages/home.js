import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Ktra from "../components/Ktra";

function Home() {
  const [ktra, setKtra] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("ktra");
        const json = await response.data;
        setKtra(
          json.map(item => {
            return item;
          })
        );
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  let recentKtraMarkup = ktra ? (
    ktra.map(kt => <Ktra key={kt.ktraId} ktra={kt} />)
  ) : (
    <p>Loading ...</p>
  );
  return (
    <Grid container spacing={10}>
      <Grid item sm={8} xs={12}>
        {recentKtraMarkup}
      </Grid>
      <Grid item sm={4} xs={12}>
        <p>Profile ....</p>
      </Grid>
    </Grid>
  );
}

export default Home;
