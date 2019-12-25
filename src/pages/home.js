import React, { Component, useState } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

export class home extends Component {
//   async componentDidMount() {
//     try {
//       console.log("object");
//       const res = await axios.get("/ktra");
//       console.log(res.data);
//       const [ktra, setKtra] = useState(res.data);
//       console.log(ktra);
//     } catch (error) {
//       console.log(error);
//     }
//   }

  render() {
    // let recentKtraMarkup = { ktra } ? (
    //   { ktra }.map(kt => <p>{kt.body}</p>)
    // ) : (
    //   <p>Loading ...</p>
    // );
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
}

export default home;
