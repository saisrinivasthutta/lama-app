export const generateRandomColor = () => {
  const colors = [
    "var(--avatar-purple)",
    "var(--avatar-yellow)",
    "var(--avatar-blue)",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  const backgroundColor = colors[randomIndex];
  return backgroundColor;
};
