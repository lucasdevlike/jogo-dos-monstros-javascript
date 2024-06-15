// let log = new Log(document.querySelector('.log'));

// let char = new Knight('Bonieky');

// let monster = new BigMonster();

// const stage = new Stage(
//     char,
//     monster,
//     document.querySelector('#char'),
//     document.querySelector('#monster'),
//     log
// );

// stage.start();


const char = createKnight('Bonieky');
const monster = createLittleMonster();

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);