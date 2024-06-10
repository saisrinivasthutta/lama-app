export const getInitials = (name) => {
  const words = name.split(" ");
  if (words.length === 1) {
    return name.substring(0, 2);
  }
  const initials = words.map((word) => word.charAt(0));
  return initials.join("").substring(0, 2);
};
