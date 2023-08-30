import { useClipboard } from "@/hooks/useClipboard";
import { Icon } from "@spark-ui/icon";
import { IconButton, IconButtonProps } from "@spark-ui/icon-button";
import { FiCheck, FiCopy } from "react-icons/fi";

export interface CodeCopyButtonProps
  extends Omit<IconButtonProps, "aria-label"> {
  code: string;
}

export const CodeCopyButton = ({ code, ...others }) => {
  const { onCopy, hasCopied } = useClipboard(code);

  return (
    <IconButton
      size="sm"
      aria-label={hasCopied ? "Copied to clipboard" : "Copy"}
      onClick={onCopy}
      {...others}
    >
      <Icon className="fill-none">{hasCopied ? <FiCheck /> : <FiCopy />}</Icon>
    </IconButton>
  );
};
