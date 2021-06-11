abstract class Vendedor {
  abstract puedeTrabajarEn(ciudad: Ciudad): boolean
}

export class VendedorFijo extends Vendedor {
  ciudadOrigen: Ciudad;

  constructor(init?: Partial<VendedorFijo>) {
    super()
    Object.assign(this, init);
  }

  puedeTrabajarEn(ciudad: Ciudad) {
    return ciudad == this.ciudadOrigen
  }
}

export class Viajante extends Vendedor {
  provinciasDondeTrabaja: Provincia[]

  constructor(init?: Partial<Viajante>) {
    super()
    Object.assign(this, init);
  }

  puedeTrabajarEn(ciudad: Ciudad) {
    return this.provinciasDondeTrabaja.some(p => p == ciudad.provincia)
  }
}

export class Provincia {
}

export class Ciudad {
  provincia: Provincia

  constructor(init?: Partial<Ciudad>) {
    Object.assign(this, init);
  }
}
