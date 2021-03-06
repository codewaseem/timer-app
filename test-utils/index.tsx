import React, { ReactElement, ComponentProps, FunctionComponent } from "react";

import { ThemeProvider } from "emotion-theming";
import { render } from "@testing-library/react";
import { IntlProvider } from "react-intl";

import * as messages from "~/locales/en-us.json";
import theme from "../src/theme";

const AllTheProviders: React.FC = ({ children }) => {
  return (
    <IntlProvider locale="en-us" messages={messages}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </IntlProvider>
  );
};

const customRender = (
  ui: ReactElement<ComponentProps<FunctionComponent>>,
  options?: object
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
