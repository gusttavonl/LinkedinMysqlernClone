const Publicacao = require('../models/Publicacao');

module.exports = {
    async index(req, res) {
        const publicacoes = await Publicacao.findAll();

        return res.json(publicacoes);
    },

    async findById(req, res) {

        const { id } = req.param;
        const publicacoes = await Publicacao.findAll({
            where: {
                id: id
            }
        });

        return res.json(publicacoes);
    },

    async store(req, res) {
        const {
            titulo,
            imagem,
            usuario,
            descricaoUsuario
        } = req.body;

        const publicacoes = await Publicacao.create({
            titulo,
            imagem,
            usuario,
            descricaoUsuario
        }
        );

        return res.json(publicacoes);
    },

    async delete(req, res) {
        const { id } = req.param;
        const publicacoes = await Publicacao.destroy({
            where: {
                id: id
            }
        });

        return res.json("Excluido com sucesso");
    },

    async update(req, res) {
        const {
            id,
            titulo,
            imagem,
            usuario,
            descricaoUsuario
        } = req.body;
        const publicacoes = await Publicacao.destroy({
            titulo,
            imagem,
            usuario,
            descricaoUsuario
        }, {
            where: {
                id: id
            }
        });

        return res.json(publicacoes);
    },
};