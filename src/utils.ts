export const isScrolledTo = (nodeId: string, scrollPosition: number) => {
  const node = document.querySelector('#' + nodeId);
  if (!node) {
    return false
  }
  const topPosition = node.getBoundingClientRect().top;
  const bottomPosition = node.getBoundingClientRect().bottom;

  return scrollPosition >= topPosition && scrollPosition <= bottomPosition;
};
