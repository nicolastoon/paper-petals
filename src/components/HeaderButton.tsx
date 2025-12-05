import type { MouseEventHandler } from "react";
import { hover, unhover } from "../scripts/hover.ts";

type HeaderButtonProp = {
  page: string;
  onClick: MouseEventHandler;
};

export default function HeaderButton({ page, onClick }: HeaderButtonProp) {
  return (
    <div
      onClick={onClick}
      onPointerEnter={() => hover(page)}
      onPointerLeave={() => unhover(page)}
      className="tenor-sans header-btn button"
      id={`${page}-btn`}
    >
      <div className="button">
        <span className="btn-text" id={`${page}-link-head`}>
          {page.startsWith("mobile-") ? page.substring(7) : page}
        </span>
        <span className="btn-text" id={`${page}-link-tail`}>
          {page}
        </span>
      </div>
    </div>
  );
}
