// vite.config.js
import { defineConfig } from "file:///data/Salman/Code/Webdev/Softec'23%20Competition/Softec-Web-Weavers/client/node_modules/vite/dist/node/index.js";
import react from "file:///data/Salman/Code/Webdev/Softec'23%20Competition/Softec-Web-Weavers/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    },
    host: "0.0.0.0",
    // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 3e3
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvZGF0YS9TYWxtYW4vQ29kZS9XZWJkZXYvU29mdGVjJzIzIENvbXBldGl0aW9uL1NvZnRlYy1XZWItV2VhdmVycy9jbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9kYXRhL1NhbG1hbi9Db2RlL1dlYmRldi9Tb2Z0ZWMnMjMgQ29tcGV0aXRpb24vU29mdGVjLVdlYi1XZWF2ZXJzL2NsaWVudC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vZGF0YS9TYWxtYW4vQ29kZS9XZWJkZXYvU29mdGVjJzIzJTIwQ29tcGV0aXRpb24vU29mdGVjLVdlYi1XZWF2ZXJzL2NsaWVudC92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgc2VydmVyOiB7XG4gICAgd2F0Y2g6IHtcbiAgICAgIHVzZVBvbGxpbmc6IHRydWUsXG4gICAgfSxcbiAgICBob3N0OiAnMC4wLjAuMCcsIC8vIG5lZWRlZCBmb3IgdGhlIERvY2tlciBDb250YWluZXIgcG9ydCBtYXBwaW5nIHRvIHdvcmtcbiAgICBzdHJpY3RQb3J0OiB0cnVlLFxuICAgIHBvcnQ6IDMwMDAsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFksU0FBUyxvQkFBb0I7QUFDemEsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0EsTUFBTTtBQUFBO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
