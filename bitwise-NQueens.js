var countNQueens = function(n){
  var all = Math.pow(2,n) -1;
  var solutionCount;

  var findSolutions = function(cols,ld,rd){

    var pos = ~(cols || ld || rd) & all;
    while(pos>0){
      //get the bit
      var bit = -pos & pos;
      //XOR ing the bit, which removes the bit from the position
      pos = pos ^ bit;

      //add the bit to the column, leftDiagnoal and rightDiagonal
      cols = cols | bit;
      ld = ld | bit;
      rd = rd | bit;

    //calling recursively and passing in the new state
    //which would mean shifting the diagonals as we walk over
      findSolutions(cols,ld << 1, rd >> 1);

    }
    if (cols === all) {
      solutionCount++;
    }

  };

  console.log(solutionCount);
  return solutionCount;
};
