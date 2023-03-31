import { useContext, useEffect, useState } from "react";
import {
  Button,
  Grid,
  Typography,
  Modal,
  Paper,
  makeStyles,
  TextField,
  MenuItem,
} from "@material-ui/core";
import axios from "axios";
import ChipInput from "material-ui-chip-input";

import { SetPopupContext } from "../../App";

import apiList from "../../lib/apiList";
import AdminContext from "../../context/AdminContext";


const RecruiterTile = ({ id, name, contact, bio }) => {
    const context = useContext(AdminContext)
    const { recruiters, setRecruiters } = context;
    const handleClick = (id) => {
        const remove_recruiter = (recruiter) => {
            return recruiter['id'] != id;
        }
        setRecruiters(recruiters.filter(
            remove_recruiter
        ))
    }
  return (
    <>
      <Paper className={'recruiter-info'} elevation={3} style={{padding: 20, margin: 30}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Grid container style={{width: '80vw'}} item xs={9} spacing={1} direction="column">
                <Grid item>
                <Typography variant="h6">Name: {name}</Typography>
                </Grid>
                <Grid item>
                <Typography variant="h6">Bio: {bio}</Typography>
                </Grid>
                <Grid item>
                <Typography variant="h6">Contact no: {contact}</Typography>
                </Grid>
          </Grid>
            <div>
              <Button
                variant="contained"
                color="secondary"
                className={'delete'}
                onClick={() => handleClick(id)}
                style={{maxWidth: 200, maxHeight: 70}}
                >
                Remove recruiter
              </Button>
            </div>
        </div>
      </Paper>
    </>
  );
};

const AllRecruiter = () => {
  const context = useContext(AdminContext);
  const { recruiters, setRecruiters } = context;

  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      style={{ padding: "30px", minHeight: "93vh", width: "100%" }}
    >
      <Grid item>
        <Typography variant="h2">Recruiters</Typography>
        {recruiters.map((recruiter) => {
          return (
            <RecruiterTile
              id={recruiter['id']}
              name={recruiter["name"]}
              contact={recruiter["contact"]}
              bio={recruiter["bio"]}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default AllRecruiter;
