import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default class ClassExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Varun"
    };
  }
  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Class Example
          </Typography>
          My name is: {this.state.name}
          <p>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                this.setState({ name: "Vippy" });
              }}
            >
              Change Name
            </Button>
          </p>
        </CardContent>
      </Card>
    );
  }
}
