import { IconButton } from "@spark-ui/icon-button";
import { Container } from "./Container";
import { LogoIcon } from "./Logo";
import { ModeIconButton } from "./ModeIconButton";
import { Icon } from "@spark-ui/icon";
import { FiGithub } from "react-icons/fi";
import { HtmlHTMLAttributes } from "react";
import { cx } from "class-variance-authority";
import Link from "next/link";

export type HeaderProps = HtmlHTMLAttributes<HTMLElement>;

export const Header = ({ className, ...others }: HeaderProps) => {
  return (
    <header
      className={cx(
        className,
        "sticky top-none w-full border-neutral-container border-b-sm backdrop-blur-sm h-sz-64 z-raised"
      )}
      {...others}
    >
      <Container className="flex items-center h-full justify-between">
        <Link href="/">
          <LogoIcon className="w-sz-44 h-sz-44" />
        </Link>

        <div className="flex gap-md">
          <ModeIconButton intent="neutral" design="ghost" />

          <IconButton intent="neutral" design="ghost" aria-label="GitHub">
            <a
              href="https://github.com/adevinta/spark"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <Icon>
                <FiGithub />
              </Icon>
            </a>
          </IconButton>
        </div>
      </Container>
    </header>
  );
};
