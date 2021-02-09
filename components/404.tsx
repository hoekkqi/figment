import styles from "../styles/404.module.css";
import Link from "next/link";
import { Text, Display, Note } from '@geist-ui/react'
// let { palette: { errorLight } } = useTheme()
export default function Error() {
  return (
    <Display style={{ justifyContent: "center" }} shadow color="" caption="Can't Find this page">
      <Note style={{ fontSize: "50px" }} label={false} type="default">404</Note>
    </Display>
  );
}
