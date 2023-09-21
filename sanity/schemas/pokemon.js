const schema = {
  name: 'pokemon',
  type: 'document',
  title: 'Pokémon',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'number',
      type: 'string',
      title: 'Number'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'types',
      type: 'array',
      of: [
        {
          type: 'pokemonType',
          title: 'Type'
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