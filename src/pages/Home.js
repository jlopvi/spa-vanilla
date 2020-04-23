import getData from '../utils/getData'

const Home = async () => {
    const characters = await getData()

    const view = `
        <div class="Characters">
            ${characters.results.map(c => `
                <article class="Character-item">
                    <a href="#/${c.id}/">
                        <img src="${c.image}" alt="${c.name}">
                        <h2>${c.name}</h2>
                    </a>
                </article>
            `).join('')}
        </div>
    `;

    return view;
}

export default Home