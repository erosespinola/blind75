function maxArea(height: number[]): number {
  let i = 0;
  let j = height.length - 1;
  let width = height.length - 1;

  let maxArea = 0;
  while (i < j) {
    const area = Math.min(height[i], height[j]) * width;
    if (area > maxArea) {
      maxArea = area;
    }

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }

    width--;
  }

  return maxArea;
}
