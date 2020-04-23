import getData from '../utils/getData'
import getHash from '../utils/getHash'

const Charater = async () => {
    const id =  getHash()
    const character = await getData(id)
    console.log(character)
    const view = `
    <div class="Character-inner">
        <article class="Character-card">
            <img src="${character.image}" alt="name">
            <h2>${character.name}</h2>
        </article>
        <article class="Character-card">
            <h3>Episodio: ${character.episode.length}</h3>
            <h3>Estatus: ${character.status}</h3>
            <h3>Specie: ${character.species}</h3>
            <h3>Gender: ${character.gender}</h3>
            <h3>Origin: ${character.origin.name}</h3>
            <h3>Las location: ${character.location.name}</h3>
        </article>
    </div>
`
    return view
}

export default Charater