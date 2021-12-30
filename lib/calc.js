const calc = (vp, tx, pz) => {
    let i = tx /100.00;
    let j = (i + 1) ** pz;
    let total = vp * j;
    return total.toFixed(2)
}

const juros = (valor, vp) => {
    return (valor - vp).toFixed(2);
}

module.exports = {
    calc,
    juros
}