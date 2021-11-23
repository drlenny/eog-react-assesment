import React, { useEffect } from "react";
import { Provider, createClient } from "urql";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Chart from './Chart';


const useStyles = makeStyles({
    paper: {
        margin: "5%",
        padding: "30px"
    }
});

const client = createClient({
    url: "https://react.eogresources.com/graphql"
});

export default () => {
    return (
        <Provider value={client}>
            <ChartContainer />
        </Provider>
    );
};

const ChartContainer = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Chart />
        </Paper>
    );
}