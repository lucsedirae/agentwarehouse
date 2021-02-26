//* Dependencies
import React from "react";
import background from "../../img/Subtle-Prism2.svg";

//* Material UI components, hooks, and icons
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";

//* Exported component
const SplashPanelC = () => {
  //* Returns JSX to DOM
  return (
    <Container disableGutters>
      <Box pt={12}>
        <Paper
          style={{
            padding: "30px",
            border: "1px solid #008B8B",
            background: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Typography
            align="center"
            variant="h4"
            style={{
              color: "#008B8B",
              fontFamily: "Big Shoulders Display",
              fontWeight: "800",
              paddingTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Want to contribute?{" "}
            <span
              style={{
                fontSize: "43px",
                fontWeight: "900",
                textShadow:
                  "-1px 0 #FCE181, 0 2px #FCE181, 2px 0 #FCE181, 0 -1px #FCE181",
              }}
            >
              open
              <LocationOnIcon fontSize="small" />
              house
            </span>{" "}
            is <span style={{ fontStyle: "italic" }}>open source.</span>
          </Typography>
          <Grid container spacing={3}>
            <Grid item sm={12} md={5} lg={6} style={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                style={{
                  marginTop: "1rem",
                  fontFamily: "Big Shoulders Display",
                  color: "#008B8B",
                  fontWeight: "600",
                }}
              >
                Dev Updates
              </Typography>
              <Typography>
                <List>
                  <ListItem>2/10/2021 - Deployed beta version</ListItem>
                  <ListItem>1/31/2021 - Transactions module is active</ListItem>
                  <ListItem>
                    1/17/2021 - User authentication added to demo
                  </ListItem>
                  <ListItem>1/5/2021 - Material-UI implementation</ListItem>
                  <ListItem>
                    12/26/2020 - Node/Mongo back-end and React implementation
                  </ListItem>
                </List>
              </Typography>
            </Grid>

            <Grid item sm={12} md={5} lg={6} style={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                align="center"
                style={{
                  marginTop: "1rem",
                  fontFamily: "Big Shoulders Display",
                  color: "#008B8B",
                  fontWeight: "600",
                }}
              >
                Future Development
              </Typography>
              <Typography>
                <List>
                  <ListItem>
                    Add calendar module with plugin support for popular calendar
                    applications (i.e. Google, Outlook, Calendly, etc.)
                  </ListItem>
                  <ListItem>
                    Add ability to design and track marketing campaigns
                  </ListItem>
                  <ListItem>
                    Port to React Native for deployment on mobile application
                    stores
                  </ListItem>

                  <ListItem>
                    Add user roles to dashboard to allow in-app administrative
                    functionality and the ability to support teams
                  </ListItem>
                  <ListItem>
                    Convert application to a package and distribute through NPM
                    to allow developers access to design custom platforms based
                    on OHCRM
                  </ListItem>
                  <ListItem>
                    Add offline access by converting to a progressive web app
                    and caching locally
                  </ListItem>
                  <ListItem>
                    Expand transaction module to include more accounting
                    functions
                  </ListItem>
                </List>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default SplashPanelC;
