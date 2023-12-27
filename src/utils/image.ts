const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red},${green},${blue})`
}

export const generateRandomImage = (
  text: string,
  width: number,
  height: number
): string => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')
  if (!ctx) {
    throw new Error('Canvas 2D context is not supported')
  }

  // Preencher o canvas com uma cor aleatória
  ctx.fillStyle = getRandomColor()
  ctx.fillRect(0, 0, width, height)

  // Configurar o texto no centro
  ctx.fillStyle = 'white'
  ctx.font = '50px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  // Capitalizar a primeira letra da string e colocá-la no centro
  const firstLetter = text.charAt(0).toUpperCase()
  ctx.fillText(firstLetter, width / 2, height / 2)

  // Converter o canvas para um formato de dados URL
  const dataURL = canvas.toDataURL('image/png')
  return dataURL
}

export const validateImageFormat = (file: File): boolean => {
  const allowedFormats = ['image/png', 'image/jpeg']
  return allowedFormats.includes(file.type)
}
