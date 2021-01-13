let domainGenerator = () => {
    console.log("Generating domains...")
    let pronoun = ["my","the","our","your","their"];
    let adj = ["cool","funny","new","big","frictionless"];
    let subject = ["games","studio","devs","productions","labs"];
    let ext = [".com",".co",".org",".net",".io"];    
    for (x = 0; x < pronoun.length; x++) {
        for (y=0; y < adj.length; y++){
            for (z=0; z < subject.length; z++){
                for (i=0; i < ext.length; i++){
                    console.log("https://www."+pronoun[x]+adj[y]+subject[z]+ext[i]);
                };
            };
        };
    };
    console.log("Domains generated.")
};
domainGenerator();