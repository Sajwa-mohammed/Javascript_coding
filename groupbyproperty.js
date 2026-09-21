const array=[
  { name: "A", role: "dev" },
  { name: "B", role: "qa" },
  { name: "C", role: "dev" }
]

const result={};

for (let i = 0; i < array.length; i++) {
    const role=array[i].role
    if(!result[role]){
      result[role] =[]
    }
    
      result[role].push(array[i])
    
}
console.log(result);

