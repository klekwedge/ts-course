class Venicle {
  public make: string
  private damages: string[]
  private _model: string
  protected run: number
  #price: number

  set model(m: string) {
    this._model = m
    this.#price = 100
  }

  get model() {
    return this._model
  }

  isPriceEqual(v: Venicle) {
    return this.#price === v.#price
  }

  addDamage(damage: string) {
    this.damages.push(damage)
  }

  // private addDamage(damage: string) {
  //   this.damages.push(damage)
  // }
}

class EuroTruck extends Venicle {
  setDamage(damage: number) {
    // this.damage error
    // this.#price error
  }

  setRun(km: number) {
    this.run = km / 0.62
  }
}

new Venicle
new EuroTruck