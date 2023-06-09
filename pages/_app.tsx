import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../layouts/MainLayout";
import "react-image-gallery/styles/css/image-gallery.css";

import "antd/dist/antd.css";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </QueryClientProvider>
  );
}

export default MyApp;
