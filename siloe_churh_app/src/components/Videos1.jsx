import { Stack, Box } from "@mui/system";
import { VideoCard } from ".";

function getLastSunday(d) {
  let t = new Date();
  t.setDate(t.getDate() - t.getDay());
  return t;
}

const Videos = ({ videos }) => {
  console.log(videos)
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos?.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId &&
            item.snippet.channelTitle === "Ezekiel Windows TV" &&
            item.snippet.publishedAt.includes("2022-10-17") &&
            // item.snippet.publishedAt.includes(
            //   getLastSunday().getDate() - 1
            // ) && (
            //   // item.snippet.publishedAt.includes(getLastSunday().getDay() == 0 ) &&
            //   item.snippet.publishedAt.includes(getLastSunday().getMonth() ) &&

              <VideoCard video={item} />
            }
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
