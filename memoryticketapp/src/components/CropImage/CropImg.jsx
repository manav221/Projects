import React, { useEffect, useRef } from 'react'
import styles from './CropImg.module.css'
import useImageCrop from '../../hooks/useImageCrop'
import { allHandles, getCropImage } from '../../utils/cropUtils'
import BackBtn from '../Buttons/BackBtn'
const CropImg = ({ recieveData, setStatus, sendCropImageData, setCurrentStep }) => {
  const canvasRef = useRef(null);
  const overlayCanvasRef = useRef(null);
  const { cropRect, handleMouseDown, handleMouseDownCropper } = useImageCrop();

  useEffect(() => {
    const newImg = new Image();
    const canvas = canvasRef.current;
    const overlayCanvas = overlayCanvasRef.current
    const url = URL.createObjectURL(recieveData);
    newImg.src = url;

    newImg.onload = () => {
      canvas.width = newImg.width;
      canvas.height = newImg.height;
      requestAnimationFrame(() => {
        const rect = canvas.getBoundingClientRect();
        overlayCanvas.width = rect.width;
        overlayCanvas.height = rect.height;
      })
      const ctx = canvas.getContext("2d");
      ctx.drawImage(newImg, 0, 0);
    }
    return () => {
      URL.revokeObjectURL(url);
    }
  }, [recieveData]);

  useEffect(() => {
    const overlayCanvas = overlayCanvasRef.current;
    const ctx = overlayCanvas.getContext("2d");

    ctx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height)
    ctx.fillStyle = "rgba(0, 0, 0, 0.41)"
    ctx.fillRect(0, 0, overlayCanvas.width, overlayCanvas.height);
    ctx.clearRect(cropRect.cropRectX, cropRect.cropRectY, cropRect.width, cropRect.height);
  }, [cropRect]);

  return (
    <div className={styles['select']}>
      <div className={styles['crop-area']}>
        <canvas className={styles["overlay-canvas"]} ref={overlayCanvasRef}>
        </canvas>
        <canvas className={styles["img-canvas"]} ref={canvasRef}>
        </canvas>
        <div className={styles["cropper"]} onPointerDown={(dets) => { handleMouseDownCropper(dets, canvasRef) }}
          style={{
            width: `${cropRect.width}px`, height: `${cropRect.height}px`, userSelect: "none",
            left: `${cropRect.cropRectX}px`, top: `${cropRect.cropRectY}px`
          }}>
          {allHandles.map((handle) => {
            return (
              <div
                key={handle.handle}
                className={`${styles['handle']}`}
                style={handle.style}
                onPointerDown={(dets) => {
                  handleMouseDown(dets, handle.handle, canvasRef)
                }}
              ></div>
            )
          })}
        </div>
      </div >
      <div className={styles["bottom-actions"]}>
        <BackBtn name={"Continue"} customStyle={{width:"100%",padding:"var(--space-md)"}} onClick={() => {
          sendCropImageData(getCropImage(cropRect, canvasRef));
          setStatus(prev => ({ ...prev, details: true }))
          setCurrentStep(2)
        }} />
      </div>
    </div>
  )
} 

export default CropImg