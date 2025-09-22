for(let i = 2; i < 5; i++) {
    document.write(`${i}단<br>`);
    for(let j = 1; j < 10; j++) {
        document.write(`${i} X ${j} = ${i * j}<br>`);
    }
}