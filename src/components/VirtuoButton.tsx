"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

interface VirtuoButtonProps {
  href?: string;
  onClick?: () => void;
  text: string;
  variant?: "default" | "primary" | "secondary";
  iconType?: "arrow" | "download" | "none";
  className?: string;
  download?: boolean | string;
  target?: string;
  type?: "button" | "submit" | "reset";
}

export default function VirtuoButton({
  href,
  onClick,
  text,
  variant = "default",
  iconType = "arrow",
  className = "",
  download,
  target,
  type = "button",
}: VirtuoButtonProps) {
  const isPrimary = variant === "primary";

  const renderIcon = () => {
    if (iconType === "download") {
      return <Download className="w-4 h-4" />;
    }
    if (iconType === "arrow") {
      return <ArrowRight className="w-4 h-4" />;
    }
    return null;
  };

  const content = (
    <div className="icon-reverse-wrapper flex items-center justify-center relative z-10">
      {iconType !== "none" && (
        <span className="btn-icon-left text-current">
          {renderIcon()}
        </span>
      )}
      <span className="btn-text font-heading text-sm font-semibold tracking-wide">
        {text}
      </span>
      {iconType !== "none" && (
        <span className="btn-icon-right text-current">
          {renderIcon()}
        </span>
      )}
    </div>
  );

  const baseClasses = `tmp-btn hover-icon-reverse ${
    isPrimary ? "tmp-btn-primary" : ""
  } ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || download;
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || (download ? "_blank" : undefined)}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          download={download}
          className={baseClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}
