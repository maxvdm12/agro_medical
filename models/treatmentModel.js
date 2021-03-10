class Treatment {
    constructor(boucle, administration_datum, medicament_name, quantity, num_lot) {

        this.id_prestation = 1;
        this.id_boucle = boucle;
        this.administration_datum = administration_datum;
        this.medicament_name = medicament_name;
        this.quantity  = quantity;
        this.num_lot = num_lot;

    }
}

module.exports = Treatment;