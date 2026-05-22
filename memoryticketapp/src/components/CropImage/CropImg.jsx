import React, { useEffect, useRef, useState } from 'react'
import styles from './CropImg.module.css'
const CropImg = ({ recieveData }) => {
  const canvasRef = useRef(null);
  const [cropRect, setCropRect] = useState({ x: 0, y: 0, height: 100, width: 100 });
  const [activeHandle, setActiveHandle] = useState({
    handle: null,
    startWidth: null,
    startHeight: null,
    startX: null,
    startY: null,
  })
  const cropRectRef = useRef(cropRect);
  const activeHandleRef = useRef(activeHandle);

  cropRectRef.current = cropRect;
  activeHandleRef.current = activeHandle;

  const allHandlesRef = useRef([
    {
      handleName: "br",
      style: { right: 0, bottom: 0, transform: "translate(50%,50%)" },
    }
  ])

  const handleMouseDown = ({ handleName, offsetx, offsety, dets }) => {
    setActiveHandle(
      {
        handle: handleName,
        startX: dets.clientX - offsetx,
        startY: dets.clientY - offsety,
        startWidth: cropRect.width,
        startHeight: cropRect.height
      }
    );
  }
  const handleMouseMove = (dets, offsetx, offsety) => {
    let deltaX = (dets.clientX - offsetx) - activeHandleRef.current.startX;
    let deltaY = (dets.clientY - offsety) - activeHandleRef.current.startY;
    setCropRect(prev => ({
      ...prev,
      width: activeHandleRef.current.startWidth + deltaX,
      height: activeHandleRef.current.startHeight + deltaY
    }))
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const newImg = new Image();
    const url = URL.createObjectURL(recieveData[0]);
    newImg.src = url;

    newImg.onload = () => {
      canvas.width = newImg.width;
      canvas.height = newImg.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(newImg, 0, 0);
    }
    return () => {
      URL.revokeObjectURL(url);
    }
  }, []);

  useEffect(() => {
    if (!activeHandle.handle) return;
    let rect = canvasRef.current.getBoundingClientRect();
    const onMove = (dets) => {
      handleMouseMove(dets, rect.left, rect.top)
    }
    const onUp = () => {
      setActiveHandle(prev => ({ ...prev, handle: null }))
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    }
  }, [activeHandle.handle])


  return (
    <div className={styles['crop-area']}>
      <canvas ref={canvasRef}>
      </canvas>
      <div className={styles["cropper"]}
        style={{ width: `${cropRect.width}px`, height: `${cropRect.height}px` }}>

        {allHandlesRef.current.map((handle) => {
          return (
            <div
              key={handle.handleName}
              className={`${styles['handle']}`}
              style={handle.style}
              onMouseDown={(dets) => {
                let rect = canvasRef.current.getBoundingClientRect();
                let details = {
                  handleName: handle.handleName,
                  offsetx: rect.left,
                  offsety: rect.top,
                  dets: dets
                }
                handleMouseDown(details);
              }}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default CropImg