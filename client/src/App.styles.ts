import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
    (theme) => ({
        container: {
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gridGap: 20,
        },
        navItem: {
            listStyle: "none",
        },
    }),
    {
        classNamePrefix: "App",
    }
);
