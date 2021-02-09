import styles from "../styles/nav.module.sass";
import Link from "next/link";
import { Text, Breadcrumbs, Code } from '@geist-ui/react'
import { VscLibrary } from "react-icons/vsc";
export default function Error() {
    return (
        <div style={{ float: "right" }} className={styles.nav}>
            <Breadcrumbs separator='_-_-'>

                <Link href='#'>
                    <Breadcrumbs.Item nextLink>

                        <VscLibrary />    ABOUT

                    </Breadcrumbs.Item>
                </Link>

            </Breadcrumbs>
        </div>
    );
}