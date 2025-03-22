const animate = () => {
  requestAnimationFrame(animate);
  if (window.DeviceOrientationEvent) {
    const interval = 1000 / 120; // 120Hz
    setTimeout(render, interval);
  } else {
    render();
  }
}
