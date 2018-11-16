module.exports = {

    friendlyName: 'Get users',

    description: 'Get users.',

    fn: async function (inputs, exits) {
        const pets = await sails.getDatastore('readOnlyDB')
            .transaction(async (db)=> {
                return await Pets.find()
                    .populate('owner')
                    .usingConnection(db);
            });
        return exits.success(pets);
    }
};
