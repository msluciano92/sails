module.exports = {

    friendlyName: 'Create an user',

    description: 'Create an user.',

    inputs: {
        name: {
            type: 'string',
            required: true,
        }
    },

    fn: async function (inputs, exits) {
        const user = await Users.create(inputs).fetch();
        return exits.success(user);
    }
};
