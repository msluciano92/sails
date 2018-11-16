module.exports = {

    friendlyName: 'Get users',

    description: 'Get users.',

    fn: async function (inputs, exits) {
        const users = await sails.getDatastore('readOnlyDB')
            .transaction(async (db)=> {
                return await Users.find().populate('pets')
                    .usingConnection(db);
            });
        return exits.success(users);
    }
};
