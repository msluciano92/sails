module.exports = {

    friendlyName: 'Create a pet',

    description: 'Create a pet.',

    inputs: {
        name: {
            type: 'string',
            required: true,
        },
        owner: {
            type: 'number',
        }
    },

    fn: async function (inputs, exits) {
        const pet = await Pets.create(inputs).fetch();
        return exits.success(pet);
    }
};
