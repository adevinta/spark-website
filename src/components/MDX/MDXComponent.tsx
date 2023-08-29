import { useMDXComponent } from "next-contentlayer/hooks";
import { CodeEditor } from "@/components/CodeEditor";

import { H1 } from "./H1";
import { H2 } from "./H2";
import { H3 } from "./H3";
import { Code } from "./Code";
import { P } from "./P";

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  code: Code,
  inlineCode: H3,
  CodeEditor,
};

export type MDXComponentProps = {
  code: string;
  globals?: Record<string, unknown> | undefined;
};

export const MDXComponent = ({ code, globals }: MDXComponentProps) => {
  const Component = useMDXComponent(code, globals);

  return <Component components={components} />;
};
