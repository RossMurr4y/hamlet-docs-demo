---
sidebar_label: our first cmdb
title: Creating Our First CMDB
---
import Admonition from 'react-admonitions';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The CMDB is at the heart of `hamlet` and it is where we will define  all the infrastructure, their policies as well as how they talk to each other (known as links - but we'll get to that later). 

Our CMDB is what drives `hamlet`. Any changes we wish to see performed in our infrastructure are made here and **only** here. By updating our CMDB and then passing it on to `hamlet` to construct (and deploy, if you so wish) our cloud templates, we are free to stay focused on the big picture  - "I need a Web Application with a DataBase, and I need them to talk to eachother!" - and not the specifics of any single provider's dozen ways to implement that.

<Admonition type="tip" title="A note on the CMDB Language">
    Both CMDB's may be written in either JSON or YAML formats. Use the one you are most comfortable with.
</Admonition>

# Creating the CMDB

Each CMDB is made up of two smaller ones - one for Accounts and one for your Product. They will sit next to each other in the directory tree, but you may find benefit in hosting them in seperate code repositories. Larger organisations typically have different people in charge of Accounts as opposed to infrastructure for example.

## Accounts

The Accounts CMDB is where you define your enterprise level information, cloud provider account information, your DNS domains and Environments. 

<Tabs
    defaultValue="json"
    values={[
        {label: 'JSON', value: 'json' },
        {label: 'YAML', value: 'yaml' }
    ]
}>
<TabItem value='json'>

```json
{
    "Account" : {
        "Title" : "Development Account",
        "Id" : "mydeveloperaccount",
        "Seed" : "01234567890",
        "CloudId" : "my-cloud-id"
    }
}
```

</TabItem>
<TabItem value='yaml'>

```yaml
---
Account:
  Title: Development Account
  Id: mydeveloperaccount
  Seed: 01234567890
  CloudId: my-cloud-id
```

</TabItem>
</Tabs>

## Product

Your Product CMDB contains your actual infrastructure and policy definitions.

<Admonition type="note" title="on Product CMDB Names">
    Your Product CMDB will be named after the product you are working on. Whilst we refer to it here as the "Product CMDB", if your CMDB is for the deployment of the Web Application called "TallStories", then your CMDB will similarly be called that.
</Admonition>

<Tabs
    defaultValue="json"
    values={[
        {label: 'JSON', value: 'json' },
        {label: 'YAML', value: 'yaml' }
    ]
}>
<TabItem value='json'>

```json
{
    "Account" : {
        "Title" : "Development Account",
        "Id" : "mydeveloperaccount",
        "Seed" : "01234567890",
        "CloudId" : "my-cloud-id"
    }
}
```

</TabItem>
<TabItem value='yaml'>

```yaml
---
Account:
  Title: Development Account
  Id: mydeveloperaccount
  Seed: 01234567890
  CloudId: my-cloud-id
```

</TabItem>
</Tabs>