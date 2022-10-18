import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants"
import { height } from "@mui/system"
const VideoCard = ({ video: { id: { videoId }, snippet }}) => {
  return (
    <Card sx={{ width: { md: '320px', xs: '100%'},
    boxShadow: 'none', borderRadius: 0 }}>
      <CardMedia 
      image={snippet?.thumbnails?.high?.url}
      alt={snippet?.title}
      sx={{ width:358, height:180 }}/>
      
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '50px'}}>
        <Typography>
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default VideoCard