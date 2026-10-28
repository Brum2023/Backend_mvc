const connection = require("../database/connection")

const FilmeModel = {
    async findAll() {
        return await connection.raw("SELECT * FROM filmes")
    },

    async create(filme, generos) {
        const { titulo, diretorId } = filme

        const insereFilme = await connection("Filmes").insert({
            titulo,
            diretor_Id: diretorId
        })

        
        const [filmeId] = insereFilme

        console.log(insereFilme)

        // inserir um relacionamento para o novo filme para cada genero
        if(generos && generos.length > 0) {
            for( const generoId of generos ) {
              //  await connection("filmes_generos").inser(
                //    "INSERT INTO filmes_generos (filme_id, genero_id) VALUES (?, ?)",
                  //  [filmeId, generoId]
                ///)
                               
                await connection("filmes_generos").insert({
                filme_id:filmeId,
                genero_id:generoId
              })
            
            }
        }

        return filmeId        
    },

    async findById( id ) {
        const filmeResult = await connection.raw(
            "SELECT * FROM filmes WHERE id = ?",
            [ id ]
        )

        const filme = filmeResult[0]

        if( !filme ) return null

        const generos = await connection.raw(`
            SELECT g.id, g.nome FROM generos g
            JOIN filmes_generos fg ON g.id = fg.genero_id
            WHERE fg.filme_id = ?    
            `,
            [ id ]
        )

        return {
            ...filme,
            generos
        }
    }
}

module.exports = FilmeModel