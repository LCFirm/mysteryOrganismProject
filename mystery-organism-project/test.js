// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (number, array) => {
      return {
        specimenNum: number,
        dna: array,
        mutate() {
        const randIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase();
        while (this.dna[randIndex] === newBase) {
          newBase = returnRandBase();
        }
        this.dna[randIndex] = newBase;
        return this.dna;
       },
  
       compareDNA(diffOrg) {
          let identicalBases = 0;
          let percentage = 0;
           for (let i = 0; i < this.dna.length; i++) {
             if (this.dna[i] === diffOrg.dna[i]) {
                 identicalBases +=1 ;
              } percentage = Math.floor((100 / 15) * identicalBases);
            } console.log(identicalBases);
          
          return `Specimen #${this.specimenNum} and Specimen #${diffOrg.specimenNum} have ${percentage}% DNA in common`; 
          },
  
        willLikelySurvive() {
            const basesCG = this.dna.filter(element => element === 'C' || element === 'G');
            const percentCheck = basesCG.length/this.dna.length >= 0.6;
            return percentCheck;
        },   
        
        
        }
  };
  
  const specimenPool = () => {
       const poolOf30 = [];
       let counter = 0;
  
       while (poolOf30.length < 30) {
         let newOrganism = pAequorFactory(counter, mockUpStrand());
      
             if (newOrganism.willLikelySurvive()) {
                  poolOf30.push(newOrganism);
             } counter++;
       } return poolOf30;
  }

  
  
  let pAequor1 = pAequorFactory(31,mockUpStrand());
  let pAequor2 = pAequorFactory(32,mockUpStrand());
  console.log(pAequor1.dna);
  console.log(pAequor2.dna);
  console.log(pAequor1.mutate());
  console.log(pAequor1.compareDNA(pAequor2));
  console.log(pAequor1.willLikelySurvive());
  let samplepool1 = specimenPool();
  console.log(samplepool1.length);
  
  