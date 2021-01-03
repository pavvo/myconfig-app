import React, { useState, useEffect } from "react";

import ConfigItem from "components/ConfigPage/ConfigItem";
import LoadingSpinner from "components/LoadingSpinner";
import { configService } from "services/configService";
import { authService } from "services/authService";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  configList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "& > *": {
      margin: theme.spacing(2),
      width: "400px",
      borderRadius: "5px",
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
      "&::before": {
        display: "none",
      },
      "& > h1": {
        fontSize: "32px",
        color: "#3f51b5",
        fontWeight: "600",
      },
    },
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

const Dashboard = () => {
  const [configs, setConfigs] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("currentUser"));
    configService.fetchConfigs(token).then((res) => setConfigs(res));
  }, []);

  return (
    <div className={classes.configList}>
      <div className={classes.navbar}>
        <h1>List of configs</h1>
        <Button onClick={() => authService.signUserOut()}>Logout</Button>
      </div>
      {configs.length > 0 ? (
        configs.map((config, index) => (
          <ConfigItem config={config} index={index} key={index} />
        ))
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default Dashboard;
