/** @jsxImportSource theme-ui */
import { Image } from "theme-ui";
import { Link } from "components/link";
export default function Logo({ src, ...rest }) {
  const res = { ...rest };
  console.log(res);
  return (
    <Link
      path="/"
      sx={{ variant: "links.logo", display: "flex", cursor: "pointer", mr: 15 }}
      {...rest}
    >
      <Image src={src} alt="nextjs landing" />
    </Link>
  );
}
