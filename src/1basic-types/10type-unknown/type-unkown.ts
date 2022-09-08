let x: unknown; // como se fosse um any "mais seguro"

x = 100;
x = 'João';
x = 900;
x = 10;
const y = 800;

if (typeof x === 'number') console.log(x + y);
