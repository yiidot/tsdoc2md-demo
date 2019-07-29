/**
 * Progress
 * @public
 */
export class Progress {
  private _value: number = 0

  /**
   * 构造函数
   * @param val - progress value
   */
  constructor(val: number) {
    this._value = val
  }

  /**
   * set progress value
   * @param val - progress value
   * @returns void
   */
  setValue(val: number) {
    this._value = val
  }

  /**
   * get progress value
   * @returns number
   */
  get value() {
    return this._value
  }
}