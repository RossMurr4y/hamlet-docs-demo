
module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'index',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/overview',
        'getting-started/installation',
        'getting-started/hello-hamlet',
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/overview',
        {
          type: 'category',
          label: 'AWS',
          items: [
            'guides/aws/guide-1-1',
            'guides/aws/guide-1-2',
            'guides/aws/guide-2-1',
            'guides/aws/guide-2-2',
          ]
        },
        {
          type: 'category',
          label: 'Azure',
          items: [
            'guides/azure/guide-1-1',
            'guides/azure/guide-1-2',
            'guides/azure/guide-2-1',
            'guides/azure/guide-2-2',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/index',
        'architecture/engine',
      ]
    },
    {
      type: 'category',
      label: 'Automation',
      items: [
        'automation/index',
        'automation/automationServerSetup',
        'automation/environmentvariables',
        'automation/properties',
        'automation/release-management',
        {
          type: 'category',
          label: 'Jenkins Setup',
          items: [
            'automation/jenkins-setup/index',
            'automation/jenkins-setup/local-env-setup',
            'automation/jenkins-setup/cmdb-setup',
            'automation/jenkins-setup/deploy-basic-components',
            'automation/jenkins-setup/encrypt-secrets',
            'automation/jenkins-setup/deploy-product-components',
            'automation/jenkins-setup/accessing-jenkins',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/index',
        'advanced/creating-a-release',
        'advanced/creating-references',
        'advanced/versioning',
      ]
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuration/overview',
        'configuration/cmdb-folder-structure',
        'configuration/code-folder-structure',
      ]
    },
    {
      type: 'category',
      label: 'Developer Guides',
      items: [
        'developer-guides/index',
        'developer-guides/aws-data-pipeline',
      ]
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/cmdb-reference',
        'reference/component-reference',
      ]
    },
  ]
}