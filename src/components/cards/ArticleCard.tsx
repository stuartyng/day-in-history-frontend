import { Typography, Card, CardHeader, CardContent, CardActions, IconButton } from "@mui/material";
import { IArticle } from "../../types/interfaces";
import dayjs from "dayjs";
import { Visibility as VisibilityIcon, Favorite as FavoriteIcon, MoreVert as MoreVertIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

interface ArticleCardProps {
  article: IArticle;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const navigate = useNavigate();
  // const [expanded, setExpanded] = useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={article.title || "Untitled Article"}
        subheader={dayjs(article.datecreated).format("MMM DD, YYYY")}
      />
      {/* <CardMedia component="img" height="194" image="/static/images/cards/paella.jpg" alt="Paella dish" /> */}
      <CardContent sx={{ maxHeight: 200, overflow: "hidden" }}>
        <Typography variant="body2" color="text.secondary">
          {article.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton aria-label="add to favorites" size="small">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            navigate(`/article?title=${article.title}`);
          }}
        >
          <VisibilityIcon></VisibilityIcon>
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        {/* <ExpandMore
          size="small"
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent></CardContent>
      </Collapse> */}
    </Card>
  );
}
