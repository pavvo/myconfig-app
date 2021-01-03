import { useState, useEffect } from "react";
import { configService } from "services/configService";

import EditConfig from "./EditConfig";
import DisplayConfig from "./DisplayConfig";
import LoadingSpinner from "../LoadingSpinner";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  accordionDetails: {
    display: "flex",
    flexDirection: "column",
  },
  loadingSpinner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "25px",
  },
  button: {
    width: "100%",
    height: "35px",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "15px",
  },
});

const ConfigItem = ({ config, index }) => {
  const [details, setDetails] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);

  const classes = useStyles();

  const handleChange = (e) => {
    setDetails(JSON.parse(e.target.value));
  };

  useEffect(() => {
    configService
      .fetchConfigDetails(config.config_name, config.config_version)
      .then((res) => setDetails(res));
  }, []);

  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Configuration #{index}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          {details !== undefined ? (
            isEditing ? (
              <EditConfig
                details={details}
                handleChange={handleChange}
                classes={classes}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
              />
            ) : (
              <DisplayConfig
                details={details}
                classes={classes}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                copied={copied}
                setCopied={setCopied}
              />
            )
          ) : (
            <LoadingSpinner />
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ConfigItem;
