import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

export default function UsingHooks() {
  const [name, setName] = useState("Varun");
  const [age, setAge] = useState(27);
  const [person, updatePerson] = useState({ name: "Varun", age: 27 });
  const [todos, setTodos] = useState([{ text: "todo 1" }, { text: "todo 2" }]);

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Hook using String & Number
          </Typography>
          Name: {name} <br />
          Age: {age} <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setName("Hardeep");
              setAge(29);
            }}
          >
            Change Name
          </Button>
        </CardContent>
      </Card>
      <Divider />

      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Hook using Object
          </Typography>
          <div>Person state as Object:</div>
          Name: {person.name}
          <br />
          Age: {person.age}
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              updatePerson({ name: "Hardeep", age: 29 });
            }}
          >
            Change Name & Age
          </Button>
        </CardContent>
      </Card>
      <Divider />

      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Hook using Array of Objects
          </Typography>
          Todos state as Array of Objects:
          <ul>
            {todos.map(todo => {
              return <li>{todo.text}</li>;
            })}
          </ul>
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setTodos([...todos, { text: "todo 3" }]);
            }}
          >
            Add Todo
          </Button>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
