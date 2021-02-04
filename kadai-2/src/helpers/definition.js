function genereate() {
  const nengoes = []
  for (let y = 2021; y > 1920; y--) {
    if (y > 2018) {
      nengoes.push({ year: y, label: `${y} (令和${y - 2018}年)` })
    } else if (y > 1988) {
      nengoes.push({ year: y, label: `${y} (平成${y - 1988}年)` })
    } else if (y > 1925) {
      nengoes.push({ year: y, label: `${y} (昭和${y - 1925}年)` })
    } else if (y > 1911) {
      nengoes.push({ year: y, label: `${y} (大正${y - 1911}年)` })
    }
  }
  return nengoes
}

export default { genereate }
