export class Singleton {
  // # is a new Javascript feature that denotes private
  static #instance
  static #value

  constructor(...args) {
    if (!Singleton.#instance) {
      Singleton.#instance = this
    }
    Singleton.#value = [...args]
    return Singleton.#instance
  }

  get() {
    return Singleton.#value
  }
}