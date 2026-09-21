import React from 'react'
import { Container, Box, Flex, Text } from 'theme-ui'
import { HeaderLogo } from '../Header/Header.Logo'
import { FooterSocial } from './Footer.Social'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'

const styles = {
  wrapper: {
    position: `relative`,
    bg: `footerBg`,
    mt: [5, 6],
    borderTop: `1px solid`,
    borderColor: `omegaLight`
  },
  container: {
    py: `20px`
  },
  row: {
    flexDirection: [`column`, `row`],
    alignItems: `center`,
    justifyContent: `space-between`,
    gap: 3
  },
  brand: {
    display: `flex`,
    alignItems: `center`,
    gap: 3
  },
  brandText: {
    display: `flex`,
    flexDirection: `column`,
    gap: 1
  },
  name: {
    m: 0,
    fontWeight: `bold`,
    fontSize: 2,
    color: `heading`
  },
  tagline: {
    m: 0,
    fontSize: 0,
    color: `omegaDark`
  },
  meta: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    width: [`100%`, `auto`]
  }
}

export const Footer = () => {
  const { name, description } = useSiteMetadata()

  return (
    <Box as='footer' sx={styles.wrapper}>
      <Container variant='compact' sx={styles.container}>
        <Flex sx={styles.row}>
          <Box sx={styles.brand}>
            <HeaderLogo />
            <Box sx={styles.brandText}>
              <Text as='p' sx={styles.name}>
                {name || 'Dev98'}
              </Text>
              <Text as='p' sx={styles.tagline}>
                {description
                  ? 'React · Next.js · Web development'
                  : 'Frontend developer blog'}
              </Text>
            </Box>
          </Box>

          <Box sx={styles.meta}>
            <FooterSocial />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
