// 与えられた配列をランダマイズ
export const arrayShuffle = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    [array[i], array[rand]] = [array[rand], array[i]]
  }
  return array;
}