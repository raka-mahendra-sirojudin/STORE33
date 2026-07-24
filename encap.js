class siswa {#
    nilai;#
    nama;
    constructor(nama, nilai) {

        this.#nama = nama;
        this.#nilai = nilai;
    }

    getNama() {
        return this.#nama;
    }

    setNama(nama) {
        this.#nama = nama;
    }

    getNilai() {
        return this.#nilai;
    }

    setNilai(nilaiBaru) {
        if (nilaiBaru >= 0 && nilaiBaru <= 100) {
            this.#nilai = nilaiBaru;
        } else {
            console.log("Nilai harus antara 0 dan 100");
        }
    }

    predikat() {
        if (this.#nilai >= 90) {
            return "A";
        } else {
            return "Tidak A";
        }
    }

    lulus() {
        if (this.#nilai >= 90) {
            return "Lulus";
        } else {
            return "Tidak Lulus";
        }
    }
}

const siswa1 = new siswa("Raka", 85);
console.log(siswa1.getNama());
console.log(siswa1.getNilai());
console.log(siswa1.predikat());
console.log(siswa1.lulus());