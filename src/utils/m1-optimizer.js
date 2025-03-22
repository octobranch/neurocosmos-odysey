export const enableMetalShaders = () => {
  if (navigator.gpu) {
    const adapter = await navigator.gpu.requestAdapter({
      powerPreference: 'high-performance'
    });
    const device = await adapter.requestDevice();
    THREE.WebGLRenderer.prototype.getContext().getExtension('WEBGL_provoking_vertex');
  }
}
