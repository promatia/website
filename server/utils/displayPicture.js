
import convert from 'color-convert'
//import canvasImp from 'canvas'

export default function generateDisplayPicture (initials) {
    let canvas = canvasImp.createCanvas(100, 100)
    let canvasctx = canvas.getContext('2d')

    canvasctx.arc(50, 50, 50, 0, 2 * Math.PI)
    canvasctx.fillStyle = `#${convert.hsv.hex(Math.random() * 360, 90, 70)}`
    canvasctx.fill()

    canvasctx.font = '50px Saria'
    canvasctx.textAlign = 'center'
    canvasctx.textBaseline = 'middle'
    canvasctx.fillStyle = '#fff'
    canvasctx.fillText(initials, 50, 50)
    return canvas.toDataURL()
}
