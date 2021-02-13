// let domainGenerator = () => {
//     console.log("Generating domains...")
//     let pronoun = ["my","the","our","your","their"];
//     let adj = ["cool","funny","new","big","frictionless"];
//     let subject = ["games","studio","devs","productions","labs"];
//     let ext = [".com",".co",".org",".net",".io"];    
//     for (x = 0; x < pronoun.length; x++) {
//         for (y=0; y < adj.length; y++){
//             for (z=0; z < subject.length; z++){
//                 for (i=0; i < ext.length; i++){
//                     console.log("https://www."+pronoun[x]+adj[y]+subject[z]+ext[i]);
//                 };
//             };
//         };
//     };
//     console.log("Domains generated.")
// };
// domainGenerator();

let pron = ["my","the","our","your","their"];
let adj = ["cool","funny","new","big","small"];
let subj = ["games","studio","devs","productions","fishingnet","lastofus"];
let ext = ["com","co","org","net","io","us"];    
let result = [];

let checkExtension = () => {
    for(i of ext){
        let extLength=i.length;
        for(z of subj){
            let subjLength=z.length;
            let subSubj = z.substr((subjLength-extLength),(subjLength-1))
            if(subSubj==i){
                
            }
        }
    }
}

let domainGenerator = () => {
    console.log("Generating domains...")
    for (x of pron) {
        for (y of adj){
            for (z of subj){
                for (i of ext){
                    
                    let domain = `https://www.${x}${y}${z}.${i}`
                    let subStr = z.substr((z.length-i.length),(z.length-1))
                    if(subStr==i){
                        domain = domain.replace(subStr,"");
                    }

                    console.log(domain);
                };
            };
        };
    };
    console.log("Domains generated.");
};
domainGenerator();
// checkExtension();