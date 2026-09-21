require('dotenv').config()

const siteUrl = process.env.URL || process.env.VERCEL_URL || 'https://www.dev98.me'

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        chunkSize: 10000,
        queries: require('@elegantstack/gatsby-blog-algolia/src/queries')
      }
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-education',
      options: {
        siteUrl,
        services: {
          algolia: true
        }
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/',
        excludes: ['/dev-404-page', '/404', '/404.html'],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => siteUrl,
        serialize: ({ path }) => ({
          url: path,
          changefreq: path === '/' ? 'daily' : 'weekly',
          priority: path === '/' ? 1.0 : 0.7
        })
      }
    }
  ],
  siteMetadata: {
    title: 'Dev98',
    name: 'Dev98',
    siteUrl,
    description:
      'Frontend developer blog by Daniel Nguyen — practical guides on React, Next.js, JavaScript, Python, and modern web development.',
    address: 'Vietnam',
    email: 'danielnguyen5070@gmail.com',
    phone: '',

    social: [
      {
        name: 'Github',
        url: 'https://github.com/danielnguyen5070'
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/daniel-nguyen-1998y/'
      },
      {
        name: 'Youtube',
        url: 'https://www.youtube.com/@Dev98-n2w'
      }
    ],

    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      }
    ],

    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'About Us',
            slug: '/about'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Learn',
        items: [
          {
            name: 'React',
            slug: '/category/react/'
          },
          {
            name: 'Next.js',
            slug: '/category/next-js/'
          },
          {
            name: 'Python',
            slug: '/category/python/'
          }
        ]
      }
    ]
  }
}
