import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function YourNameCard() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => setExpanded(!expanded);

  // Hardcoded data for Your Name
  const movie = {
    Title: "Your Name.",
    Year: "2016",
    imdbID: "tt5311514",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjI1ODZkYTgtYTY3Yy00ZTJkLWFkOTgtZDUyYWM4MzQwNjk0XkEyXkFqcGc@._V1_SX300.jpg",
    Plot: "Ibe Riki and Riko Takeo are preparing for a wedding ceremony.",
    Director: "Megumi Shiraishi",
    Actors: "N/A",
    Language: "Japanese",
    Genre: "Short",
    "imdbRating": "8.9",
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardHeader
        title={movie.Title}
        subheader={movie.Year}
      />

      {movie.Poster && movie.Poster !== "N/A" && (
        <CardMedia
          component="img"
          height="300"
          image={movie.Poster}
          alt={movie.Title}
        />
      )}

      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {movie.Plot && (
            <Typography sx={{ marginBottom: 1 }}>
              <strong>Plot:</strong> {movie.Plot}
            </Typography>
          )}
          {movie.Director && (
            <Typography sx={{ marginBottom: 1 }}>
              <strong>Director:</strong> {movie.Director}
            </Typography>
          )}
          {movie.Actors && movie.Actors !== "N/A" && (
            <Typography sx={{ marginBottom: 1 }}>
              <strong>Actors:</strong> {movie.Actors}
            </Typography>
          )}
          {movie.Language && (
            <Typography sx={{ marginBottom: 1 }}>
              <strong>Language:</strong> {movie.Language}
            </Typography>
          )}
          {movie.Genre && (
            <Typography sx={{ marginBottom: 1 }}>
              <strong>Genre:</strong> {movie.Genre}
            </Typography>
          )}
          {movie.imdbID && (
            <Typography sx={{ marginBottom: 1 }}>
              <strong>IMDb ID:</strong> {movie.imdbID}
            </Typography>
          )}
          {movie.Type && (
            <Typography>
              <strong>Type:</strong> {movie.Type}
            </Typography>
          )}
          {movie.imdbRating && (
            <Typography>
              <strong>Imdb Rating:</strong> {movie.imdbRating}
            </Typography>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}
