export interface purchaces{
    id:number, //an unique number
    buyerid:number, //the id of the person who purchaced it
    prodid:number,
    purchaceid:number //the purchace id
}
// note: purchace id is formatted like this  [PB TPM N]
// PB = PURCHACED BY
// TPM = TIME PURCHACED IN MILLISECONDS
// N = ARBRITRARY NUMBER