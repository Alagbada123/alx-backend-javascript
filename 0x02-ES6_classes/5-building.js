/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

/*
 * some building and construction
 * building some skycrappers
 * and warn people to evacuate the buildings
 * using static methods
*/

export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}




