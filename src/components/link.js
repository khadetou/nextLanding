/** @jsxImportSource theme-ui */
import { NavLink as MenuLink, Link as A } from "theme-ui";
import Nexlink from "next/link";

export function Navlink({ path, label, children, ...rest }) {
  return <h1>NavLink</h1>;
}

export function Link({ path, label, children, ...rest }) {
  return (
    <A {...rest} href={path}>
      {children || label}
    </A>
  );
}
