// Exercise 3:
// Write a JavaScript function to convert an amount to coins.
// Example input: 46 and possible coins 25, 10, 5, 2, 1
// Output: 25, 10, 10, 1

const countCoins = (money, coins = [25, 10, 5, 2, 1]) => {
  const totalCoins = [];

  for (let i = 0; i < coins.length; i += 1) {
    const thisCoinNum = Math.floor(money / coins[i]);
    console.log('thisCoinNum is', thisCoinNum);
    for (let y = 0; y < thisCoinNum; y += 1) {
      totalCoins.push(coins[i]);
      console.log('totalCoins are', totalCoins);
    }
    console.log('coins[i] * thisCoinNum is', coins[i] * thisCoinNum);
    money -= coins[i] * thisCoinNum;
    console.log('money', money);
  }
  return totalCoins;
};

console.log(countCoins(46));
