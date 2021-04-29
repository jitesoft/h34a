function h34a (word) {
  if (word.indexOf(' ') === -1) {
    word = [word];
  } else {
    word = word.split(' ');
  }
  
  return word.map((w) => {
    if (w.length <= 3) {
      return w;
    }
    
    return `${w[0]}${w.length - 2}${w[w.length-1]}`;
  }).join(' ');
}

export { h34a };
export default h34a; 