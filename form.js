let cleave = new Cleave('.formElement', {
    blocks: [4, 4, 4, 4],
    uppercase: true
});

    let cleave1 = new Cleave('.input-element', {
        date: true,
        // delimiter: '-',
        datePattern: ['m']
    });

    let cleave2 = new Cleave('.input-element1', {
        date: true,
        // delimiter: '-',
        datePattern: ['Y']
    });

   let cleave3 = new Cleave('.input-element2', {
        // delimiters: ['*', '*', '*',],
        blocks: [3],
        uppercase: true,
        // datePattern: ['*']
    });