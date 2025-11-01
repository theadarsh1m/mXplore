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
import genreId from "../../assets/Codes";
import { languageId } from "../../assets/Codes";

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
  if (!movie) return null;
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => setExpanded(!expanded);

  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: 2,
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <CardHeader
        title={movie.original_title}
        subheader={movie.release_date}
        sx={{
          "& .MuiCardHeader-title": {
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#1a237e",
          },
          "& .MuiCardHeader-subheader": {
            color: "#666",
          },
        }}
      />

      {movie.poster_path && movie.poster_path !== "N/A" && (
        <CardMedia
          component="img"
          height="400"
          image={movie.poster_path}
          alt={movie.original_title}
          sx={{
            objectFit: "cover",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
      )}

      <CardActions
        disableSpacing
        sx={{
          backgroundColor: "#f5f5f5",
          borderTop: "1px solid #eee",
        }}
      >
        <Typography
          variant="button"
          sx={{
            color: "#424242",
            fontWeight: 500,
          }}
        >
          <p
            className="cursor-pointer hover:text-gray-900 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-gray-900"
            onClick={handleExpandClick}
          >
            Show More
          </p>
        </Typography>
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
        <CardContent sx={{ backgroundColor: "#fafafa" }}>
          {movie.overview && (
            <Typography sx={{ marginBottom: 2, lineHeight: 1.6 }}>
              <strong>Plot:</strong> {movie.overview}
            </Typography>
          )}
          {movie.original_language && (
            <Typography sx={{ marginBottom: 1.5, color: "#424242" }}>
              <strong>Language:</strong>{" "}
              {languageId[movie.original_language]?.name ||
                movie.original_language}
            </Typography>
          )}
          {movie.genre_ids && (
            <Typography sx={{ marginBottom: 1.5, color: "#424242" }}>
              <strong>Genre:</strong>{" "}
              {movie.genre_ids
                .map((genre) => (genre = genreId[Number(genre)]))
                .join(", ")}
            </Typography>
          )}
          {movie.media_type && (
            <Typography sx={{ marginBottom: 1.5, color: "#424242" }}>
              <strong>Type:</strong> {movie.media_type}
            </Typography>
          )}
          <Typography sx={{ color: "#424242" }}>
            <strong>Vote Average:</strong> {movie.vote_average || "N/A"}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
