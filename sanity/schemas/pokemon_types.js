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
            name: 'primary',
            type: 'string',
            title: 'Primary Color'
        },
        {
            name: 'secondary',
            type: 'string',
            title: 'Secondary Color'
        },
    ]
}

export default schema;