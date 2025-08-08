import * as Slot from "@rn-primitives/slot";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { Text as RNText } from "react-native";
import { cn } from "~/lib/utils";

const fontFamilyMap = {
  bold: "K2D-ExtraBold",
  regular: "K2D-Bold",
} as const;

const textVariants = cva("text-foreground web:select-text", {
  variants: {
    variant: {
      regular: "text-base",
      bold: "text-base",
    },
  },
  defaultVariants: { variant: "regular" },
});

const TextClassContext = React.createContext<string | undefined>(undefined);

function Text({
  className,
  variant,
  asChild = false,
  style,
  ...props
}: React.ComponentProps<typeof RNText> & {
  ref?: React.RefObject<RNText>;
  asChild?: boolean;
} & VariantProps<typeof textVariants>) {
  const textClass = React.useContext(TextClassContext);
  const Component = asChild ? Slot.Text : RNText;
  return (
    <Component
      className={cn(textVariants({ variant }), textClass, className)}
      style={[
        {
          fontFamily: variant ? fontFamilyMap[variant] : "K2D-Regular",
        },
        style,
      ]}
      {...props}
    />
  );
}

export { Text, TextClassContext };
