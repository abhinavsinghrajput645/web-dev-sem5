function sum(...num){
    const sum=num.reduce((s,i)=>(s+i));
    return sum;
}
const add=(...num)=>{
    let s=0;
    for(let i of num){
        s=s+i;
    }
    return s;
}
export default sum;