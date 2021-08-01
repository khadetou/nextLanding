/** @jsxImportSource theme-ui */
import { Image, Box, Heading, Text } from "theme-ui";

export default function FeatureCardColumn({
  src,
  altText = "default alt text",
  title,
  text,
}) {
  const { card, img, wrapper } = styles;
  return (
    <Box sx={card}>
      <Image src={src} altText={altText} sx={img} />
      <Box sx={wrapper}>
        <Heading sx={wrapper.title}>{title}</Heading>
        <Text sx={wrapper.subTitle}>{text}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: ["center", "flex-start"],
    flexDirection: "column",
    mb: -1,
    textAlign: ["center", null, "left"],
    px: [4, null, 0],
  },
  img: {
    mx: ["auto", null, 0],
    ml: ["auto", null, "-13px"],
    mb: -2,
    width: ["80px", null, null, "90px", null, "auto"],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: "1.9",
    },
  },
};