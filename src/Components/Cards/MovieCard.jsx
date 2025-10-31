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

export default function MovieCard({ movie }) {

  if(!movie) return null;
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => setExpanded(!expanded);

  return (
    console.log(movie),
    <Card sx={{ maxWidth: 200, margin: 2 }}>
      <CardHeader
        title={movie.original_title}
        subheader={movie.release_date}
      />

      {movie.poster_path && movie.poster_path !== "N/A" && (
        <CardMedia
          component="img"
          height="300"
          image={movie.poster_path}
          alt={movie.original_title}
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
          {movie.overview && (
            <Typography sx={{ marginBottom: 1 }}>
              <strong>Plot:</strong> {movie.overview}
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
          {movie.Type && (
            <Typography>
              <strong>Type:</strong> {movie.Type}
            </Typography>
          )}
          {movie.vote_average && (
            <Typography>
              <strong>Vote Average:</strong> {movie.vote_average}
            </Typography>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}
