function nappi() {
  // number array
  const numberArr = [23, 300, 1, 99, 4, 44];

  // get highest number
  const highest = Math.max(...numberArr);

  // get lowest number
  const lowest = Math.min(...numberArr);

  document.write("Korkein numero on: " + highest + "<br>" + "<br>");  // Korkein numero on: 122

  document.write("Alhaisin numero on: " + lowest); // Alhaisin numero on: 1

}
