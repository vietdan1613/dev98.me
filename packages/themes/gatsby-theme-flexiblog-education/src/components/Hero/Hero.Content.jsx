import React from "react";
import { Link } from "gatsby";
import { Box, Heading, Button } from "theme-ui";
import Section from "@components/Section";

/**
 * Shadow me to add your own content
 */

const styles = {
	heading: {
		mb: 4,
		span: {
			color: `omegaDark`,
		},
	},
	running: {
		color: `omegaDark`,
		fontWeight: `body`,
		width: `5/6`,
	},
};

const HeroContent = () => {
	return (
		<>
			<Section>
				<Heading variant="h1" sx={styles.heading}>
					Hi, I'm <span>Daniel Nguyen</span>. Frontend Developer
				</Heading>
				<Heading variant="h3" sx={styles.running}>
					Specialized in ReactJS and JavaScript, I create engaging and
					user-friendly web applications.
				</Heading>
			</Section>
			<Box variant="buttons.group" sx={styles.buttons}>
				<Button as={Link} to="/category/react/">
					Start Learning
				</Button>
				<Button
					variant="white"
					as="a"
					href="https://drive.google.com/file/d/16IyXUTxGuNRLI0Cnl5VQ7t4BjSUwBFps/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					Download CV
				</Button>
			</Box>
		</>
	);
};

export default HeroContent;
