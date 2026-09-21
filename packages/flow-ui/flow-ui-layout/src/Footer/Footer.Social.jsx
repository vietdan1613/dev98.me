import React from 'react'
import Navigation from '@components/Navigation'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'
import attachSocialIcons from '@helpers/attachSocialIcons'

const styles = {
  social: {
    mb: 0,
    justifyContent: `center`,
    a: {
      display: `inline-flex !important`,
      alignItems: `center`,
      justifyContent: `center`,
      size: 36,
      p: 0,
      lineHeight: 0,
      '+a': {
        ml: 2
      },
      svg: {
        display: `block`,
        size: 18,
        m: 0
      }
    }
  }
}

export const FooterSocial = () => {
  const { social } = useSiteMetadata()

  return (
    <Navigation
      items={attachSocialIcons(social)}
      iconOnly
      wrapperStyle={styles.social}
    />
  )
}
