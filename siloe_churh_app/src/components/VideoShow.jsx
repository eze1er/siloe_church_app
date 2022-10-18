import { Stack, Box } from "@mui/system"
import VideoCard from "./VideoCard"
import ChannelCard from "./ChannelCard"
const VideoShow = ({ items }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {items?.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default VideoShow