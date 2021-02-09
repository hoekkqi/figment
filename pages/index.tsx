import { Button } from "@geist-ui/react";
import { GoZap } from "react-icons/go";
import styles from '../styles/index.module.sass'
const Index = (props) => {
	// @ts-ignore
	let theme = props.theme
	return (
		// prettier-ignore
		<>
			<section className={`${styles.section}-${theme}`}>

				<GoZap style={{
					fontSize: "5vw"
				}} className={`${styles.middle}`} />
			</section>
		</>
	)
};
export default Index;
