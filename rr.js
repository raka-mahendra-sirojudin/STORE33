class component {
    constructor(props = {}) {
        this.props = props;
    }
}

class Produk extends component {
    #nama;
    #harga;
    #stok;

    constructor(props) {
        super(props);
        this.#nama = props.nama;
        this.#harga = props.harga;
        this.#stok = props.stok || 0;
    }
getStok() {
    return this.#stok;
} 

setStok(stokBaru) {
    if (stokBaru >= 0) {
        this.#stok = stokBaru;
    }
}
tambahStok(jumlah) {
    if (jumlah > 0) {
        this.#stok += jumlah;
    }else {
        console.log("Jumlah harus lebih dari 0");
    }
}
kurangStok(jumlah) {
    if (jumlah > 0 && jumlah <= this.#stok) {
        this.#stok -= jumlah;
    } else {
        console.log("Jumlah harus lebih dari 0 dan tidak boleh melebihi stok yang tersedia");
    }
}

render() {
    return `${this.#nama} - ${this.#harga} (stok: ${this.#stok})`;
}
}

const p1 = new Produk({ nama: "buku tulis", harga:10000, stok: 15});
p1.tambahStok(5);
console.log(p1.render());
console.log("Stok:", p1.getStok());
const p2 = new Produk({ nama: "pensil", harga:5000, stok: 7});
console.log(p2.render());
console.log("Stok", p2.getStok());
const p3 = new Produk({ nama: "penghapus", harga:2000, stok:20});
console.log(p3.render());
console.log("Stok", p3.getStok());