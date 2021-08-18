export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '611cc8741d1e82cdb330eb79',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-5wc413sn',
                  apiId: '9d676558-314c-4d6e-b2f3-5ce279c3936e'
                },
                {
                  buildHookId: '611cc874485ed7beca351930',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-781wx3x8',
                  apiId: '679be195-c74f-4553-b54b-0c26eaa866f2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jean12345/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-781wx3x8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
