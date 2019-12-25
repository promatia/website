import canvas from 'canvas'
import convert from 'color-convert'
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'

const __dirname = resolve(dirname(fileURLToPath(import.meta.url)))
const { registerFont, createCanvas } = canvas

registerFont(resolve(__dirname, 'Saira-Bold.ttf'), { family: 'Saira' })

export function generateDisplayPicture (initials) {
    let canvas = createCanvas(100, 100)
    let canvasctx = canvas.getContext('2d')

    canvasctx.arc(50, 50, 50, 0, 2 * Math.PI)
    canvasctx.fillStyle = `#${convert.hsl.hex(Math.round(Math.random() * 360), 80, 35)}`
    canvasctx.fill()

    canvasctx.font = '50px Saira'
    canvasctx.textAlign = 'center'
    canvasctx.textBaseline = 'middle'
    canvasctx.fillStyle = '#fff'
    canvasctx.fillText(initials, 50, 50)
    return canvas.toDataURL()
}
