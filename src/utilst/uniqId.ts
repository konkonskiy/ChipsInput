const helperId = () => {
  let id: number = 0
  return () => {
    return id++
  }
}

export const uniqId: () => number = helperId()
