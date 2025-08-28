function shuffleArray(array) {
  return array
    .map((item) => ({ sort: Math.random(), value: item }))
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value);
}

export default function shuffleQuestionsAndOptions(questions) {
  return shuffleArray(questions).map((q) => {
    const optionObjects = q.options.map((opt, idx) => ({
      text: opt,
      isCorrect: idx === q.correctIndex,
    }));

    const shuffledOptions = shuffleArray(optionObjects);

    return {
      ...q,
      options: shuffledOptions.map((o) => o.text),
      correctIndex: shuffledOptions.findIndex((o) => o.isCorrect),
    };
  });
}
