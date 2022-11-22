const typewriter = (sentence) => {
  const chars = sentence.split("");
  chars.map((char, index) => {
    setTimeout(() => {
      process.stdout.write(char);
    }, index * 50);
  })
}
