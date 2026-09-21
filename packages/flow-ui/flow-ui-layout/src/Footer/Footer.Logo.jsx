import React from 'react'
import { Box } from 'theme-ui'
import { HeaderLogo } from '../Header/Header.Logo'

const styles = {
  logo: {
    lineHeight: 0
  }
}

/** Kept for compatibility; Footer now renders brand inline. */
export const FooterLogo = () => (
  <Box sx={styles.logo}>
    <HeaderLogo />
  </Box>
)
