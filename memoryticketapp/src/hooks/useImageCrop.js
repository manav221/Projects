import { useEffect, useRef, useState } from 'react'
import { handlesSetting, cropperDragging } from '../utils/cropUtils';
const useImageCrop = () => {
    const [cropRect, setCropRect] = useState({ cropRectX: 100, cropRectY: 100, height: 90, width: 90 });
    const [activeHandle, setActiveHandle] = useState({
        handle: null,
        mouseStartX: null,
        mouseStartY: null,
        offSetX: null,
        offSetY: null,
        canvasRect: null,
        cropperRectStartX: cropRect.cropRectX,
        cropperRectStartY: cropRect.cropRectY,
        cropperRectStartWidth: cropRect.width,
        cropperRectStartHeight: cropRect.height,
    })
    const cropRectRef = useRef(null);
    const activeHandleRef = useRef(null);
    const isResizing = useRef(false);
    const isDragging = useRef(false);

    cropRectRef.current = cropRect;
    activeHandleRef.current = activeHandle;

    const handleMouseDown = (dets, handleName, canvasRef) => {
        dets.stopPropagation();
        isResizing.current = true;
        let rect = canvasRef.current.getBoundingClientRect();
        setActiveHandle(prev => ({
            ...prev,
            handle: handleName,
            canvasRect: rect,
            mouseStartX: dets.clientX - rect.left,
            mouseStartY: dets.clientY - rect.top,
            cropperRectStartX: cropRectRef.current.cropRectX,
            cropperRectStartY: cropRectRef.current.cropRectY,
            cropperRectStartWidth: cropRectRef.current.width,
            cropperRectStartHeight: cropRectRef.current.height,
        }))
    }
    const handleMouseDownCropper = (dets, canvasRef) => {
        isDragging.current = true;
        let rect = canvasRef.current.getBoundingClientRect();
        let offSetX = (dets.clientX - rect.left) - cropRect.cropRectX;
        let offSetY = (dets.clientY - rect.top) - cropRect.cropRectY;
        setActiveHandle(prev => ({ ...prev,handle:"drag-handle", canvasRect: rect, offSetX: offSetX, offSetY: offSetX }));
    }
    useEffect(() => {
        if (!activeHandle.handle) return;
        let onUp = () => {
            isResizing.current = false;
            isDragging.current = false;
        };
        let onMove = (dets) => {
            let handleDetails = activeHandleRef.current;
            if (isResizing.current) {
                let deltaX = (dets.clientX - handleDetails.canvasRect.left) - handleDetails.mouseStartX;
                let deltaY = (dets.clientY - handleDetails.canvasRect.top) - handleDetails.mouseStartY;
                handlesSetting[activeHandle.handle](dets, handleDetails, { deltaX, deltaY }, setCropRect);
            }
            if (isDragging.current) {
                cropperDragging(dets, handleDetails,setCropRect)
            }
        }
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);

        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
        }
    }, [activeHandle.handle,isDragging.current])

    return { cropRect, handleMouseDown, handleMouseDownCropper }
}

export default useImageCrop