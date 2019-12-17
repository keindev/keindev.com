import * as React from 'react';
import { PackageData } from 'npm-user-packages';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Progress from '../components/Progress';
import { makeStyles, Typography, CardContent, CardActions, Button } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const ProjectsPage = (): React.ReactElement => {
    const [packages, setPackages] = React.useState<PackageData[] | null>(null);
    const classes = useStyles();

    // const cdn = 'https://cdn.jsdelivr.net/gh/keindev/string-lookup-manager/media/logo.svg';

    React.useEffect(() => {
        async function getPackages(): Promise<void> {
            const res = await fetch('/api/get-packages?name=keindev');
            const packages: PackageData[] = await res.json();

            setPackages(packages.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
        }
        getPackages();
    }, []);

    console.log(packages);

    /*
    <Box key={pkg.name} textAlign="center">
                    {pkg.name}
                </Box>
                */

    return packages ? (
        <Grid item>
            {packages.map(pkg => (
                <Card key={pkg.name} className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://cdn.jsdelivr.net/gh/keindev/string-lookup-manager/media/logo.svg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {pkg.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Grid>
    ) : (
        <Progress />
    );
};

export default ProjectsPage;
