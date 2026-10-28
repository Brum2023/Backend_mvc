const connection = require("../database/connection")
const { search } = require("../routes/filmeRoutes")

const FilmeModel = {
    async findAll() {
       // return await connection.raw("SELECT * FROM filmes")
      return await connection("filmes")   
   
   
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
       const filme = await connection("filmes")
                         .where({id})
                         .first()

        

        if( !filme ) return null

        const generos = await connection("generos")
                      .join("filmes_generos","generos.id","filmes_generos.genero_id")
                      .where("filmes_generos.filme_id",id)
                      .select("generos.id","generos.nome")
                       
        return {
            ...filme,
            generos
        }
    },
    async search(filtros){
        const {titulo,diretor,genero } = filtros
        let query = connection("filmes")
         .leftJoin("filmes_generos","filmes.id","filmes_generos.filme_id")
         .leftJoin("generos","generos.id","filmes_generos.generos_id")
        .select(
            "filmes.id",
            "filmes.titulo",
            "filmes.diretor_id"
        )
       .distinct()
    }
}

module.exports = FilmeModel