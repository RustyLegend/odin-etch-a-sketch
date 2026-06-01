const container = document.querySelector('.container');

function createGrid(numberOfGrids)
{
    for(let i = 0 ; i < numberOfGrids ; i++)
    {
        const row = document.createElement('div');
        row.style.display = 'Flex';
        row.style.flex = "1";
        row.classList.add('rows');

        for(let j = 0 ; j < numberOfGrids ; j++)
        {
            const square = document.createElement('div');
            square.style.flex = "1";
            square.style.outline = "1px solid white";

            square.addEventListener('mouseenter',(e) => {
                e.target.style.backgroundColor = "cyan";
            });


            row.appendChild(square);
        }

        container.appendChild(row);
    }
}

createGrid(16);

const setButton = document.querySelector('.set-button');
let numberOfGrids;

setButton.addEventListener('click', () => {
    numberOfGrids = prompt('Enter the number of grids you want');

    const rows = document.querySelectorAll('.rows');

    rows.forEach((row) => {
        container.removeChild(row);
    })

    createGrid(numberOfGrids);
});

