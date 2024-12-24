document.addEventListener('DOMContentLoaded', () => {
    const glossaryData = [
        { term: "Дракон", description: "Глвынй босс игры ." },
        { term: "Биом", description: "Локация мира, саванна, пустыня, холмы, горы" },
        { term: "Крафт", description: "Сочетание предметов для создания целого " },
        { term: "Стив", description: "Главный персонаж игры ." },
        { term: "Деревня", description: "Место обитания NPC жителей." },
        { term: "Ад ", description: "Второй мир с друними монстрами ." },
        { term: "Карта", description: "Карта сокровищь" },
        { term: "Мобы", description: "Сущности которые могут как навредить, так и дать выгоду ." },
        { term: "Инструменты", description: "вспомогательные предметы для добывания руд " },
        { term: "Крепость", description: "Место обитания подводного боса ." }
    ];

    const searchInput = document.getElementById('search-input');
    const glossaryList = document.getElementById('glossary-list');
    const descriptionText = document.getElementById('description-text');

    function displayGlossary(terms) {
        glossaryList.innerHTML = '';
        terms.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.term;
            listItem.addEventListener('click', () => {
                descriptionText.textContent = item.description;
            });
            glossaryList.appendChild(listItem);
        });
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredTerms = glossaryData.filter(item =>
            item.term.toLowerCase().includes(query)
        );
        displayGlossary(filteredTerms);
    });

    displayGlossary(glossaryData);
});
