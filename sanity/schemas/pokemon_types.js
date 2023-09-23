const schema = {
    name: 'pokemonType',
    type: 'document',
    title: 'Pokémon Type',
    fields: [
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
            name: 'descriptionBlock',
            title: 'Description',
            type: 'array',
            of: [
              {
                type: 'block' 
              }
            ]
          }
    ]
}

export default schema;