function getPIXELData(ctx, x, y){
    var pixelData = ctx.getImageData(x, y, 1, 1).data
    return pixelData[0] + pixelData[1] + pixelData[3]
}


function getData(canvas, width, height, pixilization) {
    ctx = canvas.getContext("2d", {willReadFrequently: true})
    var darkestPixel = [1000, [-1, -1]];
    for(var i = 0; i<width; i+=pixilization){
        for(var j=0; j<height; j+=pixilization){
            pixelData = getPIXELData(ctx, i, j)
            //console.log(pixelData, darkestPixel[0])
            if(pixelData < darkestPixel[0]) {
                darkestPixel = [pixelData, [i, j]]
            }
        }
    }
    return darkestPixel
}
