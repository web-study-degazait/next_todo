import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ProvidersProps } from "./types";

const Providers = ({ children, pageProps }: ProvidersProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        retryOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
};

export default Providers;
