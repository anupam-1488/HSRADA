import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0', // This makes it accessible from any device on your network
    // OR, if you know your specific local IP:
    // host: '192.168.1.100', // Example: Replace with your actual IP
    port: 5173 // If you want to specify the port (optional, but good practice)
  },
});
