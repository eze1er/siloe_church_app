import { Stack, Box } from "@mui/system";
import { VideoCard } from "./";

function getLastSunday(d) {
  let t = new Date();
  t.setDate(t.getDate() - t.getDay());
  return t;
}

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos?.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId &&
            item.snippet.publishedAt.includes(getLastSunday().getDate()) && 
            item.snippet.publishedAt.includes(getLastSunday().getDay() === 0 ) && 
            item.snippet.publishedAt.includes(getLastSunday().getMonth() ) && 
            (
              <VideoCard video={item} />
            )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
