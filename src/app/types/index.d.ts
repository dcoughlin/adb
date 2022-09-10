export {};

declare global {
  interface Window {
    __aiq: any; // 👈️ turn off type checking
  }
}