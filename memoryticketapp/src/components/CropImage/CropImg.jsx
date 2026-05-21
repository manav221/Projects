import React, { useEffect, useRef } from 'react'
import styles from './CropImg.module.css'
const CropImg = ({ recieveData }) => {
  const canvasRef = useRef(null);
  const contain = (canvasElement, img) => {
    const scale = Math.min(
      canvasElement.width / img.width,
      canvasElement.height / img.height
    )
    const drawWidth = img.width * scale;
    const drawHeight = img.height * scale;
    const x = (canvasElement.width - drawWidth) / 2;
    const y = (canvasElement.height - drawHeight) / 2;
    return { x, y, drawWidth, drawHeight };
  }
  useEffect(() => {
    const canvas = canvasRef.current;
    const newImg = new Image();
    const url = URL.createObjectURL(recieveData[0]);
    newImg.src = url;

    newImg.onload = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      const { x, y, drawWidth, drawHeight } = contain(canvas, newImg);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(newImg, x, y, drawWidth, drawHeight);
    }
    return () => {
      URL.revokeObjectURL(url);
    }
  }, [])
  return (
    <div className={styles['crop-area']}>
      <canvas ref={canvasRef}>
      </canvas>
    </div>
  )
}

export default CropImg