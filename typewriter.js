const typewriter = (sentence) => {
  let delay = 1000;
  const chars = sentence.split("");
  chars.map((char, index) => {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay = delay+50;
  });
  setTimeout(()=>
  {
    process.stdout.write("\n");
  },delay);  
}
typewriter("This is the sentence.");
