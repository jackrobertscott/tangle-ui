export const randomService = {
  /**
   * Generate a random integer between a minimum and maximum value, both inclusive.
   * @param min - The minimum value.
   * @param max - The maximum value.
   * @returns A random integer between min and max.
   */
  integer(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  },

  /**
   * Generate a random floating-point number between a minimum and maximum value.
   * @param min - The minimum value.
   * @param max - The maximum value.
   * @returns A random floating-point number between min and max.
   */
  float(min: number, max: number): number {
    return Math.random() * (max - min) + min
  },

  /**
   * Generate a random boolean value (true or false).
   * @returns A random boolean value.
   */
  bool(): boolean {
    return Math.random() >= 0.5
  },

  /**
   * Generate a random element from an array.
   * @param array - The array from which to pick a random element.
   * @returns A random element from the array, or null if the array is empty.
   */
  element<T>(array: T[]): T | null {
    if (array.length === 0) return null
    return array[this.integer(0, array.length - 1)]
  },

  /**
   * Generate a random string of a given length using a specified character set.
   * @param length - The length of the string.
   * @param characterSet - The character set to use (optional, default is alphanumerics).
   * @returns A random string of the specified length.
   */
  string(
    length: number,
    characterSet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  ): string {
    let result = ""
    for (let i = 0; i < length; i++) {
      result += characterSet[this.integer(0, characterSet.length - 1)]
    }
    return result
  },

  /**
   * Generate an array of random integers of a given length between a minimum and maximum value.
   * @param length - The length of the array.
   * @param min - The minimum value (optional, default is 0).
   * @param max - The maximum value (optional, default is 100).
   * @returns An array of random integers.
   */
  integerArray(length: number, min: number = 0, max: number = 100): number[] {
    const integerArray: number[] = []
    for (let i = 0; i < length; i++) {
      integerArray.push(this.integer(min, max))
    }
    return integerArray
  },

  /**
   * Generate an array of random floating-point numbers of a given length between a minimum and maximum value.
   * @param length - The length of the array.
   * @param min - The minimum value (optional, default is 0).
   * @param max - The maximum value (optional, default is 1).
   * @returns An array of random floating-point numbers.
   */
  floatArray(length: number, min: number = 0, max: number = 1): number[] {
    const floatArray: number[] = []
    for (let i = 0; i < length; i++) {
      floatArray.push(this.float(min, max))
    }
    return floatArray
  },

  /**
   * Shuffle an array randomly using the Fisher-Yates algorithm.
   * @param array - The array to shuffle.
   * @returns A new array containing the shuffled elements.
   */
  shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = this.integer(0, i)
      ;[shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]
    }
    return shuffledArray
  },
}
