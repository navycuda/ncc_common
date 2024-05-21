

export interface toUIntFrom{
  /** #### Rounded to nearest integer */
  number:(num:number)=>number;
  /** #### Hexadecimal String 
   * without 0x
   */
  hex:(hex:string)=>number;
}

export const toUIntFrom:toUIntFrom = {
  number(num){ return Math.round(num) >>> 0; },
  hex(hex){ return parseInt(hex,16) >>> 0; }
}