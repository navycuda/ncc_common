export type ByteSize = 4|3|2|1;

export interface toHexFrom{
  integer:(int:number,bytes:ByteSize)=>string;
}
export const toHexFrom:toHexFrom = {
  integer(int,bytes){
    return int.toString(16).toUpperCase().padStart(bytes * 2, '0');
  }

};