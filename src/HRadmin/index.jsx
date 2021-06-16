import React from "react";
import { FirebaseDatabaseNode } from "@react-firebase/database";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Admin = () => {
  const classes = useStyles();
  return (
    <div>
      <FirebaseDatabaseNode path="reports/">
        {(d) => {
          return (
            <div>
              {d.loading || !d.value ? (
                <div> Loading... </div>
              ) : (
                <div>
                  {" "}
                  {Object.keys(d.value).map((key) => (
                    <Card className={classes.root} variant="outlined">
                      <CardContent>
                        <Typography variant="body2" component="p">
                          {" "}
                          {d.value[key].text}{" "}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Give Feedback</Button>
                      </CardActions>
                    </Card>
                  ))}
                </div>
              )}{" "}
              <br />
            </div>
          );
        }}
      </FirebaseDatabaseNode>
    </div>
  );
};

export default Admin;
