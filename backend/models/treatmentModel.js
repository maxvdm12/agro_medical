class Treatment {
    constructor(id_animal, administration_datum, medicament_name, quantity, num_lot, reason) {
        this.id_animal = id_animal;
        this.administration_datum = administration_datum;
        this.medicament_name = medicament_name;
        this.quantity  = quantity;
        this.num_lot = num_lot;
        this.reason = reason;

    }
}

module.exports = Treatment;