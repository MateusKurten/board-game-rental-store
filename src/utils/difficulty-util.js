function getDifficultyColor(category) {
  const colors = {
    'Easy': 'success',
    'Medium': 'warning',
    'Hard': 'failure',
  };

  return colors[category];
}

export {getDifficultyColor};