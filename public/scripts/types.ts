enum Brand {
    GVA = "GVA",
    HBVL = "HBVL",
    NB = "NB",
    DS = "DS"
}

export interface Embedcode {
    title: String;
    code: String;
    date: Date;
    brand: Brand;
}