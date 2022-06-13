const isEven = (number) => number % 2 === 0

const isPrime = (number) => {
  if (number < 2) return false
  if (number === 2) return true

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false
  }

  return true
}

const createArray = (n) => {
  const arr = []

  for (let i = 0; i < n; i += 1) {
    arr.push(i)
  }

  return arr
}

export { isEven, isPrime, createArray }
