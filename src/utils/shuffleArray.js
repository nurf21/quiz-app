export default function shuffleArray(array) {
  return array
    .map((item) => ({ sort: Math.random(), value: item }))
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value);
}
