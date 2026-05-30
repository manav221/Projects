import { MIN_WIDTH, MIN_HEIGHT, MAX_WIDTH, MAX_HEIGHT } from './constants.js'

const clamp = (min, max, actual) => {
    return Math.min(max, Math.max(min, actual));
}

const inRange = (value, min, max) => {
    if (value >= min && value <= max) return true;
    else return false;
}

export const allHandles = [
    {
        handle: "left",
        style: { height: "20%", width: "3%", left: 0, top: "50%", transform: "translateY(-50%)", cursor: "ew-resize" },
    },
    {
        handle: "top",
        style: { height: "3%", width: "20%", left: "50%", top: 0, transform: "translateX(-50%)", cursor: "ns-resize" },
    },
    {
        handle: "tl",
        style: { height: "10px", width: "10px", left: 0, top: 0, transform: "translate(-50%,-50%)", cursor: "nwse-resize" },
    },
    {
        handle: "tr",
        style: { height: "10px", width: "10px", right: 0, top: 0, transform: "translate(50%,-50%)", cursor: "nesw-resize", },
    },
    {
        handle: "right",
        style: { height: "20%", width: "3%", right: 0, top: "50%", transform: "translateY(-50%)", cursor: "ew-resize" },
    },
    {
        handle: "bottom",
        style: { height: "3%", width: "20%", left: "50%", bottom: 0, transform: "translateX(-50%)", cursor: "ns-resize" },
    },
    {
        handle: "bl",
        style: { height: "10px", width: "10px", left: 0, bottom: 0, transform: "translate(-50%,50%)", cursor: "nesw-resize" },
    },
    {
        handle: "br",
        style: { height: "10px", width: "10px", right: 0, bottom: 0, transform: "translate(50%,50%)", cursor: "nwse-resize" },
    },
]

export const handlesSetting = {
    "left": (dets, handleDetails, { deltaX }, setCropRect) => {
        let newWidth = handleDetails.cropperRectStartWidth - deltaX;
        let newX = handleDetails.cropperRectStartX + deltaX;
        if (newWidth < MIN_WIDTH || newWidth > MAX_WIDTH || newX < 0) return;
        setCropRect(prev => ({
            ...prev,
            cropRectX: newX,
            width: newWidth
        }))
    },
    "top": (dets, handleDetails, { deltaY }, setCropRect) => {
        let newHeight = handleDetails.cropperRectStartHeight - deltaY;
        let newY = handleDetails.cropperRectStartY + deltaY;
        if (newHeight < MIN_HEIGHT || newHeight > MAX_HEIGHT || newY < 0) return;
        setCropRect(prev => ({
            ...prev,
            cropRectY: newY,
            height: newHeight
        }))
    },
    "tl": (dets, handleDetails, { deltaX, deltaY }, setCropRect) => {
        let newWidth = handleDetails.cropperRectStartWidth - deltaX;
        let newHeight = handleDetails.cropperRectStartHeight - deltaY;
        let newX = handleDetails.cropperRectStartX + deltaX;
        let newY = handleDetails.cropperRectStartY + deltaY;
        if (!inRange(newWidth, MIN_WIDTH, MAX_WIDTH) || !inRange(newHeight, MIN_HEIGHT, MAX_HEIGHT)) return
        if (newX < 0 || newY < 0) return
        setCropRect(prev => ({
            ...prev,
            cropRectX: newX,
            cropRectY: newY,
            width: newWidth,
            height: newHeight
        }))
    },
    "tr": (dets, handleDetails, { deltaX, deltaY }, setCropRect) => {
        let newWidth = handleDetails.cropperRectStartWidth + deltaX;
        let newHeight = handleDetails.cropperRectStartHeight - deltaY;
        let newX = dets.clientX - handleDetails.canvasRect.left
        let newY = handleDetails.cropperRectStartY + deltaY;
        if (!inRange(newWidth, MIN_WIDTH, MAX_WIDTH) ||
            !inRange(newHeight, MIN_HEIGHT, MAX_HEIGHT) || newX > handleDetails.canvasRect.width || newY < 0) return;
        setCropRect(prev => ({
            ...prev,
            cropRectY: newY,
            width: newWidth,
            height: newHeight
        }))
    },
    "right": (dets, handleDetails, { deltaX }, setCropRect) => {
        let newWidth = handleDetails.cropperRectStartWidth + deltaX;
        if (dets.clientX - handleDetails.canvasRect.left > handleDetails.canvasRect.width) return;
        setCropRect(prev => ({
            ...prev,
            width: clamp(MIN_WIDTH, MAX_WIDTH, newWidth)
        }))
    },
    "bottom": (dets, handleDetails, { deltaY }, setCropRect) => {
        let newHeight = handleDetails.cropperRectStartHeight + deltaY;
        if (dets.clientY - handleDetails.canvasRect.top > handleDetails.canvasRect.height) return;
        setCropRect(prev => ({
            ...prev,
            height: clamp(MIN_HEIGHT, MAX_HEIGHT, newHeight)
        }))
    },
    "bl": (dets, handleDetails, { deltaX, deltaY }, setCropRect) => {
        let newWidth = handleDetails.cropperRectStartWidth - deltaX;
        let newHeight = handleDetails.cropperRectStartHeight + deltaY;
        let newX = handleDetails.cropperRectStartX + deltaX;
        let newY = dets.clientY - handleDetails.canvasRect.top;
        if (!inRange(newWidth, MIN_WIDTH, MAX_WIDTH) ||
            !inRange(newHeight, MIN_HEIGHT, MAX_HEIGHT) || newX < 0 || newY > handleDetails.canvasRect.height) return
        setCropRect(prev => ({
            ...prev,
            cropRectX: newX,
            width: newWidth,
            height: newHeight,
        }))
    },
    "br": (dets, handleDetails, { deltaX, deltaY }, setCropRect) => {
        let newWidth = handleDetails.cropperRectStartWidth + deltaX;
        let newHeight = handleDetails.cropperRectStartHeight + deltaY;
        if (dets.clientX - handleDetails.canvasRect.left > handleDetails.canvasRect.width ||
            dets.clientY - handleDetails.canvasRect.top > handleDetails.canvasRect.height
        ) return
        setCropRect(prev => ({
            ...prev,
            width: clamp(MIN_WIDTH, MAX_WIDTH, newWidth),
            height: clamp(MIN_HEIGHT, MAX_HEIGHT, newHeight),
        }))
    }
}

export const cropperDragging = (dets, details, setCropRect) => {
    let newX = (dets.clientX - details.canvasRect.left) - details.offSetX
    let newY = (dets.clientY - details.canvasRect.top) - details.offSetY;
    setCropRect(prev => (
        {
            ...prev,
            cropRectX: clamp(0, details.canvasRect.width - prev.width, newX),
            cropRectY: clamp(0, details.canvasRect.height - prev.height, newY)
        }
    ));
}

export const getCropImage = (data, canvasRef) => {
    const canvas = canvasRef.current;
    const displayWidth = canvas.getBoundingClientRect().width;
    const displayHeight = canvas.getBoundingClientRect().height;
    const scaleX = canvas.width/displayWidth;
    const scaleY = canvas.height/displayHeight;

    const tempCanvas = document.createElement("canvas");
    const tempCanvasCtx = tempCanvas.getContext("2d");
    tempCanvas.width = data.width;
    tempCanvas.height = data.height;

    tempCanvasCtx.drawImage(canvas, 
        data.cropRectX * scaleX, 
        data.cropRectY * scaleY, 
        data.width * scaleX, 
        data.height * scaleY,
        0, 0, MAX_WIDTH, MAX_HEIGHT);

    return tempCanvas.toDataURL("image/png");
}