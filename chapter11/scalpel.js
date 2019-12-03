async function locateScalpel (nest) {
  let current = nest.name
  while (true) {
    let next = await anyStorage(nest, current, 'scalpel')
    if (current === next) break
    current = next
  }
  return current
}
locateScalpel(bigOak)

locateScalpel(bigOak).then(console.log)
// → Butcher Shop
