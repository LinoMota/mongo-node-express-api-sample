import customer from '../models/customer.js';

export default {
    findAll: async (req, res) => {
        try {
            const allcustomers = await customer.find();
            res.status(200).json(allcustomers);
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: error.message
            })
        }
    },

    findUsingFilter: (req, res) => {
        res.end("Peguei Dados com filtro");
    },

    insert: async (req, res) => {

        const dados = req.body;

        console.log(`Criando dado :`, dados);

        const obj = new customer({
            name : dados.name,
            age : dados.age,
            birthDate : new Date(dados.birthDate),
            likes : dados.likes
        });

        try {
            await obj.save();
            res.status(201).json({});
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    },

    update: async (req, res) => {
        const dados = req.body;

        console.log(`Atualizando dado de id : ${dados._id}`);

        try {
            const obj = await    customer.findByIdAndUpdate(dados._id,dados);
            res.status(201).json({});
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    },

    deleteOne: async (req, res) => {

        const dados = req.body;

        console.log(`Deletando dado de id : ${dados._id}`);

        try {
            await customer.findByIdAndDelete(dados._id);
            
            res.status(201).json();
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}