import simple from './simple'

export default {
  ...simple,
  display: `inline-flex`,
  alignItems: `center`,
  justifyContent: `center`,
  borderRadius: `full`,
  bg: `omegaLighter`,
  p: 0,
  lineHeight: 0,
  svg: {
    display: `block`,
    size: 18,
    m: 0
  }
}
