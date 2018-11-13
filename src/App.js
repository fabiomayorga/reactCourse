import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import "./App.css";
import LocationList from "./components/WeatherLocation/LocationList";
import { Grid, Col, Row } from "react-flexbox-grid";

const locations = ["Cali", "Bogota", "Lima", "Mexico"];

const handleSelectionLocation = location => {
  console.log("disparado en app", "en app");
};

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>

        <Row>
          <Col xs={12} md={6}>
            <LocationList
              locations={locations}
              onSelectedLocation={handleSelectionLocation}
            />
          </Col>

          <Col xs={12} md={6}>
            <div className="details" />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
