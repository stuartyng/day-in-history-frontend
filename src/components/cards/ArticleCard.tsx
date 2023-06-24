import { useState, useEffect } from "react";
import { Typography, Card, CardHeader, CardContent, CardActions, IconButton, CardMedia } from "@mui/material";
import { IArticle } from "../../types/interfaces";
import dayjs from "dayjs";
import {
  Share as ShareIcon,
  Visibility as VisibilityIcon,
  Favorite as FavoriteIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { MoreOptionMenu } from "../menus";
import { Facebook as IconFacebook, Google as IconGoogle, Twitter as IconTwitter } from "@mui/icons-material";

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
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <CardHeader
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={article.title || "Untitled Article"}
        subheader={dayjs(article.datecreated).format("MMM DD, YYYY")}
        onClick={() => {
          navigate(`/article/${article._id}`);
        }}
      />
      {article?.image && (
        <CardMedia
          component="img"
          width="100%"
          image={article.image}
          alt="Paella dish"
          onClick={() => {
            navigate(`/article/${article._id}`);
          }}
        />
      )}
      <CardContent sx={{ maxHeight: 200, overflow: "hidden" }}>
        <Typography variant="body2" color="text.secondary">
          {article.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          aria-label="add to favorites"
          size="small"
          onClick={(e: any) => {
            setAnchorEl(e.currentTarget);
          }}
        >
          <ShareIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            navigate(`/article/${article._id}`);
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
      <MoreOptionMenu
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        isLeft={true}
        menus={[
          {
            icon: <IconGoogle></IconGoogle>,
            title: "Mail",
            onClick: () => {
              handleMenuClose();
              window.location.assign("mailto:business.todayinhistory@gmail.com");
            },
          },
          {
            icon: <IconFacebook></IconFacebook>,
            title: "Facebook",
            onClick: () => {
              handleMenuClose();
              window.location.assign("https://www.facebook.com/groups/655176086647110");
            },
          },
          {
            icon: <IconTwitter></IconTwitter>,
            title: "Twitter",
            onClick: () => {
              handleMenuClose();
              window.location.assign("https://twitter.com/todayin2history");
            },
          },
        ]}
      ></MoreOptionMenu>
    </Card>
  );
}
