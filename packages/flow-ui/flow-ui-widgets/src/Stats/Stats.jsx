import React from "react";
import { Box, Heading, css } from "theme-ui";
import { FaUserGraduate } from "react-icons/fa";

const styles = {
	wrapper: {
		display: `flex`,
		bg: `omegaLighter`,
		position: `relative`,
		zIndex: 2,
		p: 3,
	},
	icon: {
		display: `flex`,
		alignItems: `center`,
		mb: 0,
		mx: 3,
		svg: {
			color: `omegaDark`,
			fontSize: 7,
		},
	},
	number: {
		textAlign: `center`,
		fontWeight: `bold`,
		color: `alphaDark`,
		mx: 3,
		mb: 0,
	},
	text: {
		color: `omegaDark`,
		mb: 0,
	},
};
const Stats = () => {
	return (
		<Box sx={styles.wrapper}>
			<Heading variant="h3" sx={styles.icon}>
				<FaUserGraduate />
			</Heading>
			<Heading variant="h2" sx={styles.number}>
				60+
				<Heading as="p" variant="h4" sx={styles.text}>
					REACTJS
				</Heading>
			</Heading>
			<Heading variant="h2" sx={styles.number}>
				50+
				<Heading as="p" variant="h4" sx={styles.text}>
					OTHERS
				</Heading>
			</Heading>
			{/* <Heading variant="h2" sx={styles.number}>
				10+
				<Heading as="p" variant="h4" sx={styles.text}>
					NEXTJS
				</Heading>
			</Heading> */}
		</Box>
	);
};

export default Stats;
