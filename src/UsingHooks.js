import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function UsingHooks() {
  const [name, setName] = useState("Varun");
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5">
          Hook Example
        </Typography>
        My name is: {name}
        <p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setName("Hardeep");
            }}
          >
            Change Name (Hook)
          </Button>
        </p>
      </CardContent>
    </Card>
  );
}
