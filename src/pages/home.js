import React, {  useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Ktra from "../components/Ktra";
import Profile from "../components/Profile";
import { getKtras } from "../redux/actions/DataActions";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  let dispatch = useDispatch();
  const {
    data: { ktras, loading }
  } = useSelector(state => ({
    data: state.data
  }));
  useEffect(() => {
    dispatch(getKtras());
  }, []);

  let recentKtraMarkup = !loading ? (
    ktras.map(kt => <Ktra key={kt.ktraId} ktra={kt} />)
  ) : (
    <p>Loading ...</p>
  );
  return (
    <Grid container spacing={10}>
      <Grid item sm={8} xs={12}>
        {recentKtraMarkup}
      </Grid>
      <Grid item sm={4} xs={12}>
        <Profile />
      </Grid>
    </Grid>
  );
}

export default Home;
