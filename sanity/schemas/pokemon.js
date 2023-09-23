const schema = {
  name: 'pokemon',
  type: 'document',
  title: 'Pokémon',
  fields: [
    {
      name: 'number',
      type: 'string',
      title: 'Number'
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'types',
      type: 'array',
      title: 'Types',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Type',
              type: 'reference',
              to: [{ type: 'pokemonType' }]
            }
          ]
        }
      ]
    },
    {
      name: 'descriptionBlock',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block' 
        }
      ]
    }
  ],
  orderings: [
    {
      title: 'Number', 
      name: 'number',
      by: [
        {field: 'number', direction: 'asc'}
      ]
    }
  ]
}

export default schema;