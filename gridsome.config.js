// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'hypno — link',
  siteDescription: 'hypno — link',
  siteUrl: 'hypno.link',
  titleTemplate: `%s | h — l`,
  icon: 'src/favicon.png',

  // What is it?
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        ['gridsome-plugin-remark-shiki', {
          theme: 'min-light'
        }]
      ]
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
          author: {
            typeName: 'Author',
            create: true,
          },
        },
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'G-ET0V4N6EYQ',
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      },
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'hypno.link',
          feed_url: 'https://hypno.link/feed.xml',
          site_url: 'https://hypno.link',
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://hypno.link' + node.path,
          author: node.author,
          date: node.date,
        }),
        output: {
          dir: './static',
          name: 'feed.xml',
        },
      },
    },

  ],

  templates: {
    Post: '/:title',
    Tag: '/tag/:id',
    Author: '/author/:id',
  },


}
