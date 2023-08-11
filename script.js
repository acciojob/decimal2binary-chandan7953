function decimalToBinary(num) {
  //Write you code here
	let ans = [];
      while(num != 0){
        ans.push(num % 2);
        num = Math.floor(num / 2);
      }

      let s = 0;
      let e = ans.length - 1;
      while(s < e){
        [ans[s] , ans[e]] = [ans[e], ans[s]];
        s++;
        e--;
      }
      return ans.join("");
  
}

window.decimalToBinary = decimalToBinary;
