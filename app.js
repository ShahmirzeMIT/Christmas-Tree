const container = document.querySelector('.container');
        const x = ["YENIIL"];  

        const width = screen.width;
        const height = screen.height;
        console.log(width, height);

        for (let i = 0; i < width / 20; i++) { 
            for (let j = 0; j < height / 20; j++) { 
                for (let char of x[0]) { 
                    const cell = document.createElement('div');
                    cell.classList.add('cell');
                    cell.textContent = char;
                    container.appendChild(cell);
                }
            }
        }