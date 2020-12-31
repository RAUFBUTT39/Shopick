import React from "react";
import { Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Alert severity="success">Welcome to SHOEPICK check it out!</Alert>

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Addidas
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <br /> Adidas AG is a German multinational corporation,
                  founded and headquartered in Herzogenaurach, Germany, that
                  designs and manufactures shoes, clothing and accessories. It
                  is the largest sportswear manufacturer in Europe, and the
                  second largest in the world, after Nike
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
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  PUMA
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <br /> Puma SE, branded as Puma, is a German multinational
                  corporation that designs and manufactures athletic and casual
                  footwear, apparel and accessories, which is headquartered in
                  Herzogenaurach, Bavaria, Germany. Puma is the third largest
                  sportswear manufacturer in the world.
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
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  NIKE
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <br /> Nike, Inc. is an American multinational corporation
                  that is engaged in the design, development, manufacturing, and
                  worldwide marketing and sales of footwear, apparel, equipment,
                  accessories, and services. The company is headquartered near
                  Beaverton, Oregon, in the Portland metropolitan area
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
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  New Balance
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <br /> New Balance is an American sports footwear and apparel
                  brand that was established in 1906. The brand was originally
                  associated with the New Balance Arch Support Company.
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
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Fila
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <br /> Fila Holdings Corp. is a sportswear manufacturer that
                  designs shoes and apparel founded by Ettore and Giansevero
                  Fila in 1911 in Biella, Piedmont, Italy. In 2003, it was sold
                  to United States-based Sports Brand International. And
                  subsequently in 2007, it was sold to Fila Korea, its South
                  Korean division
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
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  SKECHERS
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <br /> Skechers USA, Inc. is a North American lifestyle and
                  performance footwear company. Headquartered in Manhattan
                  Beach, California, the brand was founded in 1992 and is now
                  the third largest athletic footwear brand in the United
                  States.
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
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Asics
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <br /> Asics is a Japanese multinational corporation which
                  produces sports equipment designed for a wide range of sports.
                  The name is an acronym for the Latin phrase anima sana in
                  corpore sano, which translates as "Healthy soul in a healthy
                  body".
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
        </Grid>
      </Grid>
      <h1>Copyright @Shoepick</h1>
    </div>
  );
};

export default LandingPage;
