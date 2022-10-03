function nappi(arr1)
//lasketaan yhteen luvut taulukoinnilla
{
  var nums = ["1","2","3","4","5","6","7","8","9","10"];
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
   sum += parseInt(nums[i]);
  }
  document.write(sum);
}
