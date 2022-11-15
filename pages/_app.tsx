import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
//0xb4ac6b713b359bce6e2bd9492fa7a014cb66c8c6

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
